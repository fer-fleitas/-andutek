import { processSteps } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section id="proceso" aria-labelledby="process-title" className="relative bg-navy-800/40 py-24 lg:py-32">
      <div className="glow-line absolute inset-x-0 top-0 h-px opacity-40" aria-hidden />
      <div className="container-x">
        <SectionHeading
          id="process-title"
          eyebrow="Nuestro proceso"
          title={
            <>
              Un camino claro <span className="text-gradient">de la idea al resultado</span>
            </>
          }
          description="Trabajamos con una metodología ordenada y transparente para que sepas en todo momento en qué etapa está tu proyecto."
        />

        <div className="relative mt-20">
          {/* Línea conectora horizontal (escritorio) */}
          <div
            className="pointer-events-none absolute top-9 right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-electric/20 via-electric to-electric/20 lg:block"
            aria-hidden
          >
            <div className="absolute inset-0 animate-pulse-glow bg-electric blur-[3px]" />
          </div>
          {/* Línea conectora vertical (móvil) */}
          <div className="pointer-events-none absolute top-9 bottom-9 left-9 w-px bg-gradient-to-b from-electric via-electric/50 to-electric/10 lg:hidden" aria-hidden />

          <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
          {processSteps.map(({ icon: Icon, title, description }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 0.1}
              className="relative flex gap-6 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
            >
              <div className="relative z-10 shrink-0">
                <span className="flex h-18 w-18 items-center justify-center rounded-full border border-line-strong bg-navy-900 text-electric-light shadow-[0_0_0_6px_var(--color-navy-900),0_0_30px_-4px_rgb(40_120_255/0.6)] transition-colors duration-300 hover:bg-electric hover:text-white">
                  <Icon size={26} strokeWidth={1.75} />
                </span>
                <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-electric text-[11px] font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="pt-2 lg:mt-6 lg:pt-0">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{description}</p>
              </div>
            </Reveal>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
