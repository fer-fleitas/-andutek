import { ArrowRight, CheckCircle2 } from "lucide-react";
import { values } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { WorkspaceIllustration } from "@/components/illustrations/WorkspaceIllustration";

const highlights = [
  "Equipo multidisciplinario de desarrollo, diseño e infraestructura",
  "Metodología ágil con entregas parciales y visibilidad total",
  "Código limpio, documentado y preparado para crecer",
];

export function About() {
  return (
    <section id="nosotros" aria-labelledby="about-title" className="relative overflow-hidden bg-navy-800/40 py-24 lg:py-32">
      <div className="glow-line absolute inset-x-0 top-0 h-px opacity-40" aria-hidden />
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-electric-light uppercase">
            <span className="h-px w-6 bg-electric" aria-hidden />
            Sobre nosotros
          </p>
          <h2 id="about-title" className="text-3xl leading-tight font-bold sm:text-4xl">
            Tecnología hecha a la medida <span className="text-gradient">de tu negocio.</span>
          </h2>
          <p className="mt-6 leading-relaxed">
            <strong className="font-semibold text-white">Ñandutek</strong> es una empresa de tecnología
            dedicada a diseñar, desarrollar e implementar soluciones digitales para organizaciones que buscan dar el
            siguiente paso. Combinamos visión estratégica, diseño y desarrollo de software para convertir procesos
            complejos en herramientas simples, eficientes y escalables.
          </p>
          <p className="mt-4 leading-relaxed">
            Trabajamos cerca de cada cliente, entendiendo su operación antes de escribir una sola línea de código. Así
            construimos productos que resuelven problemas reales y generan valor medible desde el primer día.
          </p>
          <ul className="mt-8 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm text-white/90">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-electric" />
                {h}
              </li>
            ))}
          </ul>
          <LinkButton href="#proceso" variant="outline" className="mt-10">
            Conocé más sobre nosotros
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </LinkButton>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-electric/10 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-2xl border border-line-strong shadow-[0_30px_80px_-30px_rgb(40_120_255/0.5)]">
            <div className="aspect-[520/380]">
              <WorkspaceIllustration />
            </div>
          </div>

          <ul className="relative -mt-10 grid grid-cols-2 gap-3 px-3 sm:grid-cols-3 lg:px-5 xl:grid-cols-5">
            {values.map(({ icon: Icon, label }, i) => (
              <li
                key={label}
                className={`card card-hover flex flex-col items-center gap-2 px-2 py-4 text-center backdrop-blur-md ${
                  i === values.length - 1 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric/12 text-electric-light shadow-[0_0_20px_-4px_rgb(40_120_255/0.5)]">
                  <Icon size={19} />
                </span>
                <span className="text-xs leading-tight font-semibold text-white">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
