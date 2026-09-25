"use client";

import { useEffect } from "react";

/**
 * Un único listener para toda la página: actualiza la posición del cursor dentro de la
 * tarjeta `.card` bajo el puntero, que el CSS usa para dibujar el halo de luz.
 */
export function SpotlightTracker() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    const onMove = (e: PointerEvent) => {
      const target = e.target as Element | null;
      const card = target?.closest?.(".card") as HTMLElement | null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
  return null;
}
