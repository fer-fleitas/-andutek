"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CircleAlert, CircleCheck, Clock, LoaderCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { siWhatsapp } from "simple-icons";
import { siteConfig, whatsappUrl } from "@/config/site";
import { services } from "@/data/content";
import { validateContact, LIMITS, type ContactErrors, type ContactPayload } from "@/lib/contact";
import { SELECT_SERVICE_EVENT } from "@/lib/serviceSelection";
import { Reveal } from "@/components/ui/Reveal";
import { buttonClasses } from "@/components/ui/Button";
import { BrandIcon } from "@/components/ui/BrandIcon";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success" }
  | { kind: "error"; message: string }
  | { kind: "unavailable" };

const empty: ContactPayload = { name: "", company: "", email: "", phone: "", service: "", message: "", website: "" };

const inputCls =
  "peer w-full rounded-lg border bg-navy-900/70 px-4 py-3 text-sm text-white placeholder:text-mist-dim/70 transition-colors outline-none focus:border-electric focus:bg-navy-900 focus:shadow-[0_0_0_3px_rgb(40_120_255/0.18)]";

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold tracking-wide text-white/90">
        {label}
        {required && <span className="ml-0.5 text-electric-light" aria-hidden>*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1 text-xs text-rose-400">
          <CircleAlert size={12} /> {error}
        </p>
      )}
    </div>
  );
}

export function Contact() {
  const [data, setData] = useState<ContactPayload>(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [emailEnabled, setEmailEnabled] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/api/contact")
      .then((r) => r.json())
      .then((j: { enabled: boolean }) => setEmailEnabled(j.enabled))
      .catch(() => setEmailEnabled(false));

    const onSelect = (e: Event) => {
      const service = (e as CustomEvent<string>).detail;
      setData((d) => ({ ...d, service }));
    };
    window.addEventListener(SELECT_SERVICE_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_SERVICE_EVENT, onSelect);
  }, []);

  const update =
    (key: keyof ContactPayload) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setData((d) => ({ ...d, [key]: e.target.value }));
      if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = validateContact(data);
    setErrors(v);
    if (Object.keys(v).length > 0) {
      document.getElementById(`contact-${Object.keys(v)[0]}`)?.focus();
      return;
    }
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus({ kind: "success" });
        setData(empty);
      } else if (res.status === 503) {
        setStatus({ kind: "unavailable" });
      } else if (res.status === 422 && json.errors) {
        setErrors(json.errors);
        setStatus({ kind: "idle" });
      } else if (res.status === 429) {
        setStatus({ kind: "error", message: "Recibimos demasiadas consultas desde tu conexión. Probá nuevamente en unos minutos." });
      } else {
        setStatus({ kind: "error", message: "No pudimos enviar tu consulta. Probá nuevamente o escribinos por WhatsApp." });
      }
    } catch {
      setStatus({ kind: "error", message: "Error de conexión. Verificá tu internet e intentá de nuevo." });
    }
  };

  const waMessage = [
    `Hola Ñandutek, soy ${data.name || "…"}${data.company ? ` de ${data.company}` : ""}.`,
    data.service && `Me interesa: ${data.service}.`,
    data.message,
  ]
    .filter(Boolean)
    .join(" ");

  const aria = (key: keyof ContactPayload) => ({
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `contact-${key}-error` : undefined,
  });

  const border = (key: keyof ContactPayload) => (errors[key] ? "border-rose-400/70" : "border-line");

  const contactItems = [
    { icon: Mail, label: "Correo", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
    { icon: Phone, label: "Teléfono", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}` },
    { icon: MapPin, label: "Ubicación", value: siteConfig.contact.location },
    { icon: Clock, label: "Horario", value: siteConfig.contact.hours },
  ];

  return (
    <section id="contacto" aria-labelledby="contact-title" className="relative overflow-hidden py-24 lg:py-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <div className="pointer-events-none absolute top-1/2 left-1/4 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-electric/12 blur-[140px]" aria-hidden />

      <div className="container-x relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-electric-light uppercase">
            <span className="h-px w-6 bg-electric" aria-hidden />
            Contacto
          </p>
          <h2 id="contact-title" className="text-3xl leading-tight font-extrabold sm:text-4xl lg:text-5xl">
            ¿TENÉS UN PROYECTO <span className="text-gradient">EN MENTE?</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed">
            Conversemos sobre tus ideas y encontremos juntos la solución tecnológica que tu empresa necesita.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-electric/10 text-electric-light">
                  <Icon size={19} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-mist-dim">{label}</span>
                  {href ? (
                    <a href={href} className="block truncate text-sm font-medium text-white hover:text-electric-light">
                      {value}
                    </a>
                  ) : (
                    <span className="block text-sm font-medium text-white">{value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            noValidate
            aria-label="Formulario de contacto"
            className="card relative p-6 shadow-[0_30px_80px_-30px_rgb(40_120_255/0.45)] sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="contact-name" label="Nombre" error={errors.name} required>
                <input id="contact-name" name="name" autoComplete="name" maxLength={LIMITS.name} value={data.name} onChange={update("name")} placeholder="Tu nombre" className={`${inputCls} ${border("name")}`} {...aria("name")} />
              </Field>
              <Field id="contact-company" label="Empresa" error={errors.company}>
                <input id="contact-company" name="company" autoComplete="organization" maxLength={LIMITS.company} value={data.company} onChange={update("company")} placeholder="Nombre de tu empresa" className={`${inputCls} ${border("company")}`} {...aria("company")} />
              </Field>
              <Field id="contact-email" label="Correo electrónico" error={errors.email} required>
                <input id="contact-email" name="email" type="email" autoComplete="email" maxLength={LIMITS.email} value={data.email} onChange={update("email")} placeholder="nombre@empresa.com" className={`${inputCls} ${border("email")}`} {...aria("email")} />
              </Field>
              <Field id="contact-phone" label="Teléfono" error={errors.phone}>
                <input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={LIMITS.phone} value={data.phone} onChange={update("phone")} placeholder="+595 9xx xxx xxx" className={`${inputCls} ${border("phone")}`} {...aria("phone")} />
              </Field>
              <div className="sm:col-span-2">
                <Field id="contact-service" label="Servicio de interés" error={errors.service}>
                  <select id="contact-service" name="service" value={data.service} onChange={update("service")} className={`${inputCls} ${border("service")} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%235a9bff%22 stroke-width=%222.5%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[position:right_1rem_center] bg-no-repeat pr-10`} {...aria("service")}>
                    <option value="">Seleccioná un servicio</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Otro">Otro</option>
                  </select>
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field id="contact-message" label="Descripción del proyecto" error={errors.message} required>
                  <textarea id="contact-message" name="message" rows={5} maxLength={LIMITS.message} value={data.message} onChange={update("message")} placeholder="Contanos brevemente qué necesitás, objetivos y plazos estimados." className={`${inputCls} ${border("message")} resize-y`} {...aria("message")} />
                </Field>
              </div>
              {/* Honeypot anti-spam, oculto para personas */}
              <div className="absolute -left-[9999px]" aria-hidden>
                <label htmlFor="contact-website">No completar</label>
                <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" value={data.website} onChange={update("website")} />
              </div>
            </div>

            {emailEnabled === false && status.kind === "idle" && (
              <p className="mt-5 flex items-start gap-2 rounded-lg border border-amber-400/30 bg-amber-400/5 px-3 py-2.5 text-xs text-amber-200/90">
                <CircleAlert size={14} className="mt-0.5 shrink-0" />
                El envío por formulario todavía no está habilitado. Mientras tanto, contactanos por WhatsApp o escribinos a {siteConfig.contact.email}.
              </p>
            )}

            <AnimatePresence mode="wait">
              {status.kind === "success" && (
                <motion.p key="ok" role="status" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-5 flex items-start gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-3 py-2.5 text-sm text-emerald-300">
                  <CircleCheck size={16} className="mt-0.5 shrink-0" />
                  ¡Gracias! Recibimos tu consulta y te responderemos a la brevedad.
                </motion.p>
              )}
              {status.kind === "error" && (
                <motion.p key="err" role="alert" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-5 flex items-start gap-2 rounded-lg border border-rose-400/30 bg-rose-400/10 px-3 py-2.5 text-sm text-rose-300">
                  <CircleAlert size={16} className="mt-0.5 shrink-0" />
                  {status.message}
                </motion.p>
              )}
              {status.kind === "unavailable" && (
                <motion.p key="na" role="alert" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-5 flex items-start gap-2 rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-2.5 text-sm text-amber-200">
                  <CircleAlert size={16} className="mt-0.5 shrink-0" />
                  Tu consulta no fue enviada: el servicio de correo aún no está configurado. Usá el botón de WhatsApp (se completa con tus datos) o escribinos a {siteConfig.contact.email}.
                </motion.p>
              )}
            </AnimatePresence>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button type="submit" disabled={status.kind === "sending"} className={buttonClasses("primary", "md", "flex-1")}>
                {status.kind === "sending" ? (
                  <>
                    <LoaderCircle size={17} className="animate-spin" /> Enviando…
                  </>
                ) : (
                  <>
                    <Send size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> Enviar consulta
                  </>
                )}
              </button>
              <a
                href={whatsappUrl(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses("outline", "md", "flex-1 hover:border-[#25D366] hover:bg-[#25D366]/10")}
              >
                <BrandIcon icon={siWhatsapp} className="h-4.5 w-4.5 text-[#25D366]" />
                Contactar por WhatsApp
              </a>
            </div>
            <p className="mt-4 text-center text-[11px] text-mist-dim">
              Los campos marcados con <span className="text-electric-light">*</span> son obligatorios. Usamos tus datos solo para responder tu consulta.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
