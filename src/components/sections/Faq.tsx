"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" aria-labelledby="faq-title" className="relative bg-navy-800/40 py-24 lg:py-32">
      <div className="glow-line absolute inset-x-0 top-0 h-px opacity-40" aria-hidden />
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="faq-title"
            align="left"
            eyebrow="Preguntas frecuentes"
            title={
              <>
                Resolvemos <span className="text-gradient">tus dudas</span>
              </>
            }
            description="Si no encontrás la respuesta que buscás, escribinos y te respondemos a la brevedad."
          />
        </div>

        <Reveal delay={0.1}>
          <ul className="space-y-3">
            {faqs.map(({ question, answer }, i) => {
              const isOpen = open === i;
              const btnId = `${baseId}-q${i}`;
              const panelId = `${baseId}-a${i}`;
              return (
                <li
                  key={question}
                  className={`rounded-xl border transition-colors duration-300 ${
                    isOpen ? "border-line-strong bg-navy-800 shadow-[0_0_40px_-16px_rgb(40_120_255/0.6)]" : "border-line bg-navy-900/60 hover:border-line-strong"
                  }`}
                >
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-white sm:px-6"
                    >
                      {question}
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen ? "rotate-45 border-electric bg-electric text-white" : "border-line-strong text-electric-light"
                        }`}
                      >
                        <Plus size={16} />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed sm:px-6">{answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
