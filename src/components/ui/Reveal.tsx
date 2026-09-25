"use client";

import { motion, type HTMLMotionProps } from "motion/react";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  /** Elemento a renderizar; usá "li" dentro de listas para mantener HTML válido. */
  as?: "div" | "li";
};

/** Aparición progresiva al entrar en el viewport. Respeta prefers-reduced-motion vía MotionConfig. */
export function Reveal({ delay = 0, y = 24, as = "div", children, ...rest }: RevealProps) {
  const Component = (as === "li" ? motion.li : motion.div) as typeof motion.div;
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}
