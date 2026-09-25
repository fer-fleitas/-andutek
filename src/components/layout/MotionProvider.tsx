"use client";

import { MotionConfig } from "motion/react";

/** Aplica la preferencia del sistema de movimiento reducido a todas las animaciones de Motion. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
