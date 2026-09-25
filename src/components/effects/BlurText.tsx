"use client";

import { motion } from "motion/react";

type Props = {
  text: string;
  className?: string;
  /** Clases aplicadas a cada palabra (por ejemplo, un degradado de texto). */
  wordClassName?: string;
  delay?: number;
  /** Segundos entre palabra y palabra. */
  stagger?: number;
};

/** Revela un texto palabra por palabra, pasando de desenfocado a nítido. */
export function BlurText({ text, className, wordClassName = "", delay = 0, stagger = 0.08 }: Props) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className={`inline-block will-change-[filter,transform] ${wordClassName}`}
          initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: delay + i * stagger, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {word}
          {i < words.length - 1 && " "}
        </motion.span>
      ))}
    </span>
  );
}
