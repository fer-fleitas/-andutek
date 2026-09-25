# Ñandutek — Sitio web

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Motion · Lucide React

## Puesta en marcha

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # producción
```

## Personalización

| Qué | Dónde |
|---|---|
| Nombre, contacto, WhatsApp, redes sociales, URL | `src/config/site.ts` |
| Textos de servicios, proceso, ventajas, proyectos, FAQ | `src/data/content.ts` |
| Colores y tipografía | `src/app/globals.css` (bloque `@theme`) |
| Logo / isotipo | `src/components/layout/Logo.tsx` y `src/app/icon.svg` |

Para ocultar una red social, dejá su URL vacía en `site.ts`.

## Formulario de contacto

Copiá `.env.example` a `.env.local` y completá:

```
RESEND_API_KEY=...
CONTACT_TO_EMAIL=tu-correo@dominio.com
CONTACT_FROM_EMAIL="Ñandutek Web <no-reply@tu-dominio.com>"
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

Sin estas variables, el formulario **no simula envíos**: avisa que el correo no está
configurado y ofrece WhatsApp. Para otro proveedor, reemplazá `sendEmail` en
`src/app/api/contact/route.ts`.

## Estructura

```
src/
  app/            layout (metadatos, SEO, JSON-LD), page, sitemap, robots, OG image, API de contacto
  components/
    layout/       Header, Footer, Logo, MotionProvider
    sections/     Hero, About, Services, Process, WhyUs, Portfolio, Technologies, Faq, Contact
    illustrations/ Ilustraciones SVG (hero, workspace, por qué elegirnos, mockups de proyectos)
    ui/           Button, Reveal, SectionHeading, BrandIcon, ServiceInquiryLink
  config/site.ts
  data/content.ts
  lib/            validación de contacto, sección activa, selección de servicio
```
