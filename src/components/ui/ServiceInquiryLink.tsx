"use client";

import { ArrowUpRight } from "lucide-react";
import { selectService } from "@/lib/serviceSelection";

export function ServiceInquiryLink({ service }: { service: string }) {
  return (
    <a
      href="#contacto"
      onClick={() => selectService(service)}
      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-light transition-colors hover:text-white"
      aria-label={`Solicitar información sobre ${service}`}
    >
      Solicitar información
      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
