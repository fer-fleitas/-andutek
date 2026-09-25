"use client";

import { motion } from "motion/react";
import { ArrowRight, ChevronRight, MessageSquare } from "lucide-react";
import { heroServices } from "@/data/content";
import { LinkButton } from "@/components/ui/Button";
import { HeroIllustration } from "@/components/illustrations/HeroIllustration";
import { ParticleField } from "@/components/effects/ParticleField";
import { BlurText } from "@/components/effects/BlurText";
import { RotatingText } from "@/components/effects/RotatingText";
import { Tilt } from "@/components/effects/Tilt";

const ease = [0.2, 0.8, 0.2, 1] as const;

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <ParticleField className="opacity-80" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-electric/10 blur-[120px]" aria-hidden />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.1fr_1.2fr_0.62fr] lg:gap-8 xl:gap-10">
        {/* Texto */}
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line-strong bg-electric/10 px-3.5 py-1.5 text-xs font-medium text-electric-light"
          >
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-cyan-glow" />
            Desarrollamos
            <RotatingText
              words={["sitios web", "sistemas a medida", "automatizaciones", "integraciones"]}
              className="font-semibold text-white"
            />
          </motion.p>

          <h1
            id="hero-title"
            className="text-[2.1rem] leading-[1.08] font-extrabold tracking-tight sm:text-5xl lg:text-[2.35rem] xl:text-[2.8rem]"
          >
            <BlurText text="TRANSFORMAMOS IDEAS" delay={0.1} className="block" />
            <BlurText text="EN SOLUCIONES DIGITALES" delay={0.35} className="mt-1 block" wordClassName="text-shine" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed lg:mx-0 lg:text-[1.02rem]"
          >
            En <strong className="font-semibold text-white">Ñandutek</strong> desarrollamos experiencias
            digitales, software a medida y soluciones tecnológicas que ayudan a las empresas a innovar, crecer y
            optimizar sus procesos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-8 flex flex-col flex-wrap justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <LinkButton href="#servicios">
              Explorar nuestros servicios
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </LinkButton>
            <LinkButton href="#contacto" variant="outline">
              <MessageSquare size={17} />
              Hablemos de tu proyecto
            </LinkButton>
          </motion.div>
        </div>

        {/* Ilustración */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
        >
          <Tilt max={7}>
            <HeroIllustration />
          </Tilt>
        </motion.div>

        {/* Lista de servicios */}
        <motion.nav
          aria-label="Servicios destacados"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
        >
          <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
            {heroServices.map(({ icon: Icon, label }, i) => (
              <motion.li
                key={label}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.45 + i * 0.07, ease }}
              >
                <a
                  href="#servicios"
                  className="group flex items-center gap-3 rounded-xl border border-line bg-navy-800/60 px-3.5 py-3 backdrop-blur transition-all duration-300 hover:-translate-x-1 hover:border-line-strong hover:bg-navy-800 hover:shadow-[0_0_24px_-6px_rgb(40_120_255/0.5)]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-electric/12 text-electric-light transition-colors group-hover:bg-electric group-hover:text-white">
                    <Icon size={18} />
                  </span>
                  <span className="flex-1 text-sm font-medium text-white">{label}</span>
                  <ChevronRight size={16} className="text-mist-dim transition-transform group-hover:translate-x-0.5 group-hover:text-electric-light" />
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </section>
  );
}
