/** Tipos y validación compartidos entre el formulario de contacto y la API. */
export type ContactPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  /** Honeypot anti-spam: debe llegar vacío. */
  website?: string;
};

export type ContactErrors = Partial<Record<keyof ContactPayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const LIMITS = { name: 100, company: 120, email: 160, phone: 40, service: 80, message: 3000 } as const;

export function validateContact(data: ContactPayload): ContactErrors {
  const errors: ContactErrors = {};
  if (data.name.trim().length < 2) errors.name = "Ingresá tu nombre.";
  if (!EMAIL_RE.test(data.email.trim())) errors.email = "Ingresá un correo electrónico válido.";
  if (data.phone && !/^[+\d\s()-]{6,}$/.test(data.phone.trim())) errors.phone = "Ingresá un teléfono válido.";
  if (data.message.trim().length < 10) errors.message = "Contanos un poco más sobre tu proyecto (mínimo 10 caracteres).";
  for (const [key, max] of Object.entries(LIMITS) as [keyof typeof LIMITS, number][]) {
    if ((data[key] ?? "").length > max) errors[key] = `Máximo ${max} caracteres.`;
  }
  return errors;
}
