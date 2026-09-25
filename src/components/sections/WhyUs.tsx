import { advantages } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhyIllustration } from "@/components/illustrations/WhyIllustration";

export function WhyUs() {
  return (
    <section id="por-que-elegirnos" aria-labelledby="why-title" className="relative overflow-hidden py-24 lg:py-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionHeading
            id="why-title"
            align="left"
            eyebrow="Por qué elegirnos"
            title={
              <>
                Un socio tecnológico <span className="text-gradient">comprometido con tu crecimiento</span>
              </>
            }
            description="Combinamos experiencia técnica, cercanía y una visión de negocio para construir soluciones que realmente funcionan."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {advantages.map(({ icon: Icon, title, description }, i) => (
              <Reveal as="li" key={title} delay={i * 0.06} className="card card-hover group flex gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-electric/12 text-electric-light transition-colors group-hover:bg-electric group-hover:text-white">
                  <Icon size={21} />
                </span>
                <div>
                  <h3 className="text-[0.95rem] leading-snug font-semibold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed">{description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal delay={0.15}>
          <WhyIllustration />
        </Reveal>
      </div>
    </section>
  );
}
