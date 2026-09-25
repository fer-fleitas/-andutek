"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Code2 } from "lucide-react";
import { siCplusplus, siCss, siHtml5, siJavascript, siPhp, siPython, type SimpleIcon } from "simple-icons";
import { BrandIcon } from "@/components/ui/BrandIcon";

// C# no está disponible en simple-icons (retirado por la marca); se dibuja un glifo propio.
function CSharpGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 1.5 21.1 6.75v10.5L12 22.5 2.9 17.25V6.75Z" fill="currentColor" />
      <text x="12" y="15.6" textAnchor="middle" fontSize="9" fontWeight="800" fontFamily="sans-serif" fill="#081426">
        C#
      </text>
    </svg>
  );
}

type Tech = { name: string; color: string; icon?: SimpleIcon };

const languages: Tech[] = [
  { name: "C++", icon: siCplusplus, color: "#6aa6e8" },
  { name: "C#", color: "#a179dc" },
  { name: "PHP", icon: siPhp, color: "#8993be" },
  { name: "Python", icon: siPython, color: "#4b8bbe" },
  { name: "JavaScript", icon: siJavascript, color: "#f7df1e" },
  { name: "HTML", icon: siHtml5, color: "#e34f26" },
  { name: "CSS", icon: siCss, color: "#639bff" },
];

/** Sección discreta y plegada: solo la despliega quien busca el detalle técnico. */
export function Technologies() {
  const [open, setOpen] = useState(false);

  return (
    <section id="tecnologias" aria-label="Lenguajes de programación" className="py-10">
      <div className="container-x">
        <div className="mx-auto max-w-4xl rounded-2xl border border-line bg-navy-800/30">
          <button
            type="button"
            aria-expanded={open}
            aria-controls="tech-panel"
            onClick={() => setOpen((v) => !v)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
          >
            <span className="flex items-center gap-3">
              <Code2 size={18} className="text-electric-light" />
              <span>
                <span className="block text-sm font-semibold text-white">Información técnica</span>
                <span className="block text-xs text-mist-dim">Lenguajes de programación que utilizamos</span>
              </span>
            </span>
            <ChevronDown
              size={18}
              className={`shrink-0 text-mist transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id="tech-panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                className="overflow-hidden"
              >
                <ul className="grid grid-cols-2 gap-3 border-t border-line px-5 py-5 sm:grid-cols-4 sm:px-6 lg:grid-cols-7">
                  {languages.map(({ name, icon, color }) => (
                    <li
                      key={name}
                      className="card card-hover group flex flex-col items-center gap-2 px-3 py-4 text-center"
                      style={{ "--brand": color } as React.CSSProperties}
                    >
                      {icon ? (
                        <BrandIcon icon={icon} className="h-8 w-8 text-mist transition-colors duration-300 group-hover:text-(--brand)" />
                      ) : (
                        <CSharpGlyph className="h-8 w-8 text-mist transition-colors duration-300 group-hover:text-(--brand)" />
                      )}
                      <span className="text-xs font-semibold text-white">{name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
