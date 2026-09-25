import { services } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceInquiryLink } from "@/components/ui/ServiceInquiryLink";

export function Services() {
  return (
    <section id="servicios" aria-labelledby="services-title" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute top-1/3 left-0 h-96 w-96 rounded-full bg-electric/8 blur-[120px]" aria-hidden />
      <div className="container-x relative">
        <SectionHeading
          id="services-title"
          eyebrow="Nuestros servicios"
          title={
            <>
              Soluciones digitales <span className="text-gradient">de punta a punta</span>
            </>
          }
          description="Acompañamos a tu empresa en cada etapa de su transformación digital, desde la idea inicial hasta la operación diaria."
        />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, icon: Icon, title, description }, i) => (
            <Reveal
              as="li"
              key={id}
              delay={(i % 3) * 0.08}
              className="card card-hover group flex h-full flex-col overflow-hidden p-7"
            >
              <div
                className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-electric/0 blur-2xl transition-colors duration-500 group-hover:bg-electric/20"
                aria-hidden
              />
              <span className="absolute top-6 right-7 font-mono text-sm text-mist-dim/60" aria-hidden>
                0{i + 1}
              </span>
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-line-strong bg-gradient-to-br from-electric/25 to-electric/5 text-electric-light transition-all duration-300 group-hover:scale-105 group-hover:text-white group-hover:shadow-[0_0_30px_-4px_#2878ff]">
                <Icon size={26} strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed">{description}</p>
              <ServiceInquiryLink service={title} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
