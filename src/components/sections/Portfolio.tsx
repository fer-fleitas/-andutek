import { Info } from "lucide-react";
import { projects } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectMockup } from "@/components/illustrations/ProjectMockup";

export function Portfolio() {
  return (
    <section id="proyectos" aria-labelledby="projects-title" className="relative bg-navy-800/40 py-24 lg:py-32">
      <div className="glow-line absolute inset-x-0 top-0 h-px opacity-40" aria-hidden />
      <div className="container-x">
        <SectionHeading
          id="projects-title"
          eyebrow="Proyectos"
          title={
            <>
              Lo que podemos <span className="text-gradient">construir para vos</span>
            </>
          }
          description="Ejemplos de las soluciones que desarrollamos. Cada proyecto se diseña y adapta a las necesidades específicas de cada empresa."
        />

        <Reveal className="mx-auto mt-8 flex max-w-2xl items-start justify-center gap-2.5 rounded-xl border border-line bg-navy-900/60 px-4 py-3 text-sm">
          <Info size={17} className="mt-0.5 shrink-0 text-electric-light" />
          <p>
            Los siguientes proyectos son <strong className="text-white">demostraciones conceptuales</strong> creadas
            para ilustrar nuestras capacidades. No corresponden a trabajos realizados para clientes.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map(({ kind, title, description, tags, icon: Icon }, i) => (
            <Reveal as="li" key={kind} delay={(i % 2) * 0.1} className="card card-hover group overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 p-6 sm:p-8">
                <div className="grid-bg absolute inset-0 opacity-60" aria-hidden />
                <div className="absolute -bottom-20 left-1/2 h-40 w-3/4 -translate-x-1/2 rounded-full bg-electric/25 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-60" aria-hidden />
                <div className="relative mx-auto h-full max-w-[400px] transition-transform duration-500 group-hover:scale-[1.03]">
                  <ProjectMockup kind={kind} />
                </div>
                <span className="absolute top-4 left-4 rounded-full border border-line-strong bg-navy-900/90 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-electric-light uppercase backdrop-blur">
                  Demo conceptual
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-electric/12 text-electric-light">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed">{description}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologías">
                  {tags.map((t) => (
                    <li key={t} className="rounded-md border border-line bg-navy-900 px-2.5 py-1 text-xs font-medium text-mist">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
