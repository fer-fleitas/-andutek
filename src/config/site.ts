/**
 * URL pública del sitio. Usa NEXT_PUBLIC_SITE_URL si está definida; si no, la URL de
 * producción que Vercel asigna automáticamente; y como último recurso un valor por defecto.
 * Tolera valores vacíos o sin "https://".
 */
function resolveSiteUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    "www.nandutek.com";
  const withProtocol = raw.startsWith("http://") || raw.startsWith("https://") ? raw : `https://${raw}`;
  try {
    return new URL(withProtocol).origin;
  } catch {
    return "https://www.nandutek.com";
  }
}

/**
 * Configuración central del sitio. Editá estos valores para personalizar
 * datos de contacto, redes sociales y metadatos sin tocar los componentes.
 */
export const siteConfig = {
  name: "Ñandutek",
  shortName: "Ñandutek",
  slogan: "Tecnología que impulsa tu futuro.",
  description:
    "Desarrollo web, software a medida, automatización de procesos, integración de sistemas y consultoría tecnológica para empresas que quieren innovar y crecer.",
  url: resolveSiteUrl(),
  locale: "es_PY",
  keywords: [
    "desarrollo web",
    "software a medida",
    "soluciones informáticas",
    "automatización de procesos",
    "integración de sistemas",
    "consultoría tecnológica",
    "Ñandutek",
  ],
  contact: {
    email: "contacto@nandutek.com",
    phone: "+595 985 542 379",
    // Número en formato internacional sin "+", espacios ni guiones.
    whatsapp: "595985542379",
    whatsappMessage: "Hola Ñandutek, quiero consultar por un proyecto.",
    location: "Paraguay",
    hours: "Lun a Vie · 9:00 a 18:00",
  },
  // Dejá una URL vacía ("") para ocultar la red correspondiente.
  social: {
    linkedin: "https://www.linkedin.com/company/nandutek",
    github: "https://github.com/nandutek",
    instagram: "https://www.instagram.com/nandutek",
    x: "",
    facebook: "",
  },
} as const;

export const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "nosotros", label: "Nosotros" },
  { id: "servicios", label: "Servicios" },
  { id: "proyectos", label: "Proyectos" },
  { id: "proceso", label: "Proceso" },
  { id: "contacto", label: "Contacto" },
] as const;

export function whatsappUrl(message: string = siteConfig.contact.whatsappMessage) {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
