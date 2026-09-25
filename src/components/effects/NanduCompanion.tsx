"use client";

import { useEffect, useRef } from "react";

/** Tamaño del ñandú en pantalla (la imagen recortada mide 343 × 419). */
const W = 64;
const H = Math.round((W * 419) / 343);
/** Punta del pico dentro de la imagen, mirando a la derecha. */
const BEAK = { x: 0.98 * W, y: 0.077 * H };
/** Tiempo sin mover el mouse antes de que intente comérselo. */
const IDLE_MS = 5000;

/**
 * Mascota: el ñandú sigue al cursor por toda la página. Si el mouse queda quieto
 * 5 segundos, se acerca despacio y lo picotea. Solo en escritorio (mouse) y sin
 * "movimiento reducido". Se mueve con transform directo en el DOM, sin re-renders.
 */
export function NanduCompanion() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const birdRef = useRef<HTMLDivElement>(null);
  const nomRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wrap = wrapRef.current;
    const bird = birdRef.current;
    const nom = nomRef.current;
    if (!finePointer || reduced || !wrap || !bird || !nom) return;

    const mouse = { x: 0, y: 0 };
    const pos = { x: -W * 2, y: 0 }; // esquina superior izquierda del ñandú
    let facing = 1; // 1 = mira a la derecha, -1 = a la izquierda
    let lastMove = 0;
    let visible = false;
    let pecking = false;
    let walkPhase = 0;
    let raf = 0;

    const beakX = () => (facing === 1 ? BEAK.x : W - BEAK.x);

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      lastMove = performance.now();
      if (!visible) {
        visible = true;
        wrap.style.opacity = "1";
        // Entra caminando desde el borde izquierdo
        if (pos.x < -W) {
          pos.x = -W;
          pos.y = Math.min(window.innerHeight - H, mouse.y);
        }
      }
    };

    const onLeave = () => {
      visible = false;
      wrap.style.opacity = "0";
    };

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;

      const idle = now - lastMove > IDLE_MS;

      // Hacia dónde mira (con margen para que no tiemble)
      const centerX = pos.x + W / 2;
      if (mouse.x > centerX + 30) facing = 1;
      else if (mouse.x < centerX - 30) facing = -1;

      // Siguiendo: camina un poco detrás y debajo del cursor.
      // Quieto 5 s: acerca el pico justo al lado del cursor para picotearlo.
      const beakTarget = idle
        ? { x: mouse.x - facing * 12, y: mouse.y - 10 }
        : { x: mouse.x - facing * 80, y: mouse.y + 30 };
      const tx = beakTarget.x - beakX();
      const ty = beakTarget.y - BEAK.y;

      const dx = tx - pos.x;
      const dy = ty - pos.y;
      const dist = Math.hypot(dx, dy);
      const maxStep = idle ? 2.5 : 9; // al acecho se mueve despacio
      const step = Math.min(dist * 0.12, maxStep);
      if (dist > 0.5) {
        pos.x += (dx / dist) * step;
        pos.y += (dy / dist) * step;
      }

      // Balanceo al caminar
      const moving = step > 0.6;
      if (moving) walkPhase += step * 0.22;
      const bob = moving ? -Math.abs(Math.sin(walkPhase)) * 4 : 0;

      const shouldPeck = idle && dist < 2;
      if (shouldPeck !== pecking) {
        pecking = shouldPeck;
        bird.classList.toggle("nandu-peck", pecking);
        if (pecking) {
          nom.style.left = `${mouse.x + 10}px`;
          nom.style.top = `${mouse.y - 28}px`;
        }
        nom.classList.toggle("nandu-nom-on", pecking);
      }

      wrap.style.transform = `translate3d(${pos.x}px, ${pos.y + bob}px, 0)`;
      bird.style.setProperty("--f", String(facing));
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={wrapRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[45] opacity-0 transition-opacity duration-300"
        style={{ width: W, height: H }}
      >
        <div ref={birdRef} className="nandu-bird h-full w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/nandu-mark.png" alt="" width={W} height={H} draggable={false} className="h-full w-full select-none" />
        </div>
      </div>
      <span ref={nomRef} aria-hidden className="nandu-nom pointer-events-none fixed z-[46] text-sm font-bold text-cyan-glow">
        ¡ñam!
      </span>
    </>
  );
}
