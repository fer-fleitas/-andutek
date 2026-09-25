import { Mail, MapPin, Phone } from "lucide-react";
import { siFacebook, siGithub, siInstagram, siX, type SimpleIcon } from "simple-icons";
import { navItems, siteConfig, whatsappUrl } from "@/config/site";
import { services } from "@/data/content";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { Logo } from "./Logo";

// LinkedIn no está incluido en simple-icons por motivos de marca; usamos un glifo propio.
const linkedinIcon: SimpleIcon = {
  title: "LinkedIn",
  slug: "linkedin",
  hex: "0A66C2",
  source: "",
  svg: "",
  path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
};

const socialIcons: Record<keyof typeof siteConfig.social, SimpleIcon> = {
  linkedin: linkedinIcon,
  github: siGithub,
  instagram: siInstagram,
  x: siX,
  facebook: siFacebook,
};

export function Footer() {
  const socials = (Object.keys(siteConfig.social) as (keyof typeof siteConfig.social)[]).filter(
    (k) => siteConfig.social[k],
  );

  return (
    <footer className="relative border-t border-line bg-navy-950">
      <div className="glow-line absolute inset-x-0 top-0 h-px" aria-hidden />
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.3fr]">
        <div>
          <a href="#inicio" aria-label="Ñandutek — volver al inicio" className="inline-block">
            <Logo />
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            {siteConfig.slogan} Desarrollo web, software a medida y soluciones tecnológicas para empresas que buscan crecer.
          </p>
          {socials.length > 0 && (
            <ul className="mt-6 flex gap-2.5" aria-label="Redes sociales">
              {socials.map((k) => (
                <li key={k}>
                  <a
                    href={siteConfig.social[k]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialIcons[k].title}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-mist transition-all hover:-translate-y-0.5 hover:border-electric hover:bg-electric/10 hover:text-white"
                  >
                    <BrandIcon icon={socialIcons[k]} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-label="Enlaces rápidos">
          <h2 className="text-sm font-semibold tracking-wider uppercase">Enlaces rápidos</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navItems.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="transition-colors hover:text-electric-light">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Servicios">
          <h2 className="text-sm font-semibold tracking-wider uppercase">Servicios</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.id}>
                <a href="#servicios" className="transition-colors hover:text-electric-light">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold tracking-wider uppercase">Contacto</h2>
          <address className="mt-5 space-y-3.5 text-sm not-italic">
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 hover:text-electric-light">
              <Mail size={16} className="text-electric" /> {siteConfig.contact.email}
            </a>
            <a href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`} className="flex items-center gap-3 hover:text-electric-light">
              <Phone size={16} className="text-electric" /> {siteConfig.contact.phone}
            </a>
            <p className="flex items-center gap-3">
              <MapPin size={16} className="text-electric" /> {siteConfig.contact.location}
            </p>
          </address>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-line-strong px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-electric hover:bg-electric/10"
          >
            Escribinos por WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-mist-dim sm:flex-row">
          <p>© {new Date().getFullYear()} Ñandutek. Todos los derechos reservados.</p>
          <p>{siteConfig.slogan}</p>
        </div>
      </div>
    </footer>
  );
}
