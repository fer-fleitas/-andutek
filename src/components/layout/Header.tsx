"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/config/site";
import { useActiveSection } from "@/lib/useActiveSection";
import { LinkButton } from "@/components/ui/Button";
import { Logo } from "./Logo";

const sectionIds = navItems.map((n) => n.id);

export function Header() {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        scrolled || open ? "border-line bg-navy-900/80" : "border-transparent bg-navy-900/40"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between gap-6">
        <a href="#inicio" aria-label="Ñandutek — Inicio" className="shrink-0">
          <Logo priority />
        </a>

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative block px-3.5 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-white" : "text-mist hover:text-white"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-electric shadow-[0_0_12px_#2878ff]"
                        transition={{ type: "spring", stiffness: 400, damping: 34 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <LinkButton href="#contacto" size="sm" className="hidden sm:inline-flex">
            Solicitar presupuesto
          </LinkButton>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-white lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Navegación móvil"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 4.5rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden border-t border-line bg-navy-900 lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-6">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-lg px-4 py-3.5 text-lg font-medium ${
                      active === item.id ? "bg-electric/10 text-white" : "text-mist"
                    }`}
                  >
                    {item.label}
                    {active === item.id && <span className="h-2 w-2 rounded-full bg-electric" />}
                  </a>
                </motion.li>
              ))}
              <li className="mt-4 px-1">
                <LinkButton href="#contacto" className="w-full" onClick={() => setOpen(false)}>
                  Solicitar presupuesto
                </LinkButton>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
