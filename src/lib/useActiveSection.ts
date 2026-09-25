"use client";

import { useEffect, useState } from "react";

/** Devuelve el id de la sección visible más cercana a la parte superior del viewport. */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top);
          else visible.delete(entry.target.id);
        }
        if (visible.size > 0) {
          // La primera sección en orden de documento que está visible en la franja superior
          const first = ids.find((id) => visible.has(id));
          if (first) setActive(first);
        }
      },
      { rootMargin: "-35% 0px -60% 0px", threshold: 0 },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
