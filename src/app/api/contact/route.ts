import { NextResponse } from "next/server";
import { validateContact, type ContactPayload } from "@/lib/contact";
import { siteConfig } from "@/config/site";

/**
 * Endpoint del formulario de contacto.
 * Envía el correo mediante la API HTTP de Resend (https://resend.com) cuando existen
 * RESEND_API_KEY y CONTACT_TO_EMAIL. Si no están configuradas responde 503 y el
 * formulario lo informa al usuario en lugar de simular un envío exitoso.
 * Para usar otro proveedor, reemplazá la función `sendEmail`.
 */

export const dynamic = "force-dynamic";

function isConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL);
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

async function sendEmail(data: ContactPayload) {
  const rows: [string, string][] = [
    ["Nombre", data.name],
    ["Empresa", data.company || "—"],
    ["Correo", data.email],
    ["Teléfono", data.phone || "—"],
    ["Servicio", data.service || "—"],
  ];
  const html = `
    <h2>Nueva consulta desde ${escapeHtml(siteConfig.name)}</h2>
    <table cellpadding="6">${rows
      .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
      .join("")}</table>
    <p><strong>Proyecto:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Ñandutek Web <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL!.split(",").map((s) => s.trim()),
      reply_to: data.email,
      subject: `Nueva consulta: ${data.service || "Proyecto"} — ${data.name}`,
      html,
    }),
  });
  if (!res.ok) throw new Error(`Resend respondió ${res.status}: ${await res.text()}`);
}

// Límite simple en memoria por IP (suficiente para una instancia; usar Redis/KV en producción distribuida).
const hits = new Map<string, { count: number; reset: number }>();
function rateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.reset < now) {
    hits.set(ip, { count: 1, reset: now + 10 * 60_000 });
    return false;
  }
  entry.count += 1;
  return entry.count > 5;
}

export async function GET() {
  return NextResponse.json({ enabled: isConfigured() });
}

export async function POST(request: Request) {
  if (!isConfigured()) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const data: ContactPayload = {
    name: String(body.name ?? ""),
    company: String(body.company ?? ""),
    email: String(body.email ?? ""),
    phone: String(body.phone ?? ""),
    service: String(body.service ?? ""),
    message: String(body.message ?? ""),
    website: String(body.website ?? ""),
  };

  // Honeypot completado: respondemos 400 sin enviar.
  if (data.website) return NextResponse.json({ ok: false, error: "rejected" }, { status: 400 });

  const errors = validateContact(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "validation", errors }, { status: 422 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  try {
    await sendEmail(data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Error al enviar el correo:", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
