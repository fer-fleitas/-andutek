import { Activity, GitBranch, ShieldCheck, Users } from "lucide-react";
import { LogoMark } from "@/components/layout/Logo";

/** Composición con paneles de código, interfaces flotantes y el isotipo de Ñandutek al centro. */
export function WhyIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" role="img" aria-label="Paneles de código e interfaces flotantes alrededor del isotipo de Ñandutek">
      <div className="absolute inset-[15%] rounded-full bg-electric/20 blur-[80px] animate-pulse-glow" aria-hidden />

      {/* Órbitas */}
      <svg viewBox="0 0 520 520" className="absolute inset-0 h-full w-full" aria-hidden>
        <circle cx="260" cy="260" r="120" fill="none" stroke="#2878ff" strokeOpacity="0.35" />
        <circle cx="260" cy="260" r="190" fill="none" stroke="#2878ff" strokeOpacity="0.15" strokeDasharray="3 7" />
        <g className="animate-[spin_40s_linear_infinite]" style={{ transformOrigin: "260px 260px" }}>
          <circle cx="380" cy="260" r="5" fill="#38c6ff" />
          <circle cx="140" cy="260" r="3" fill="#2878ff" />
        </g>
        <g className="animate-[spin_70s_linear_infinite_reverse]" style={{ transformOrigin: "260px 260px" }}>
          <circle cx="260" cy="70" r="4" fill="#5a9bff" />
        </g>
        <path d="M260 260 L120 120 M260 260 L410 150 M260 260 L400 400 M260 260 L110 390" stroke="#2878ff" strokeOpacity="0.25" strokeDasharray="4 6" />
      </svg>

      {/* Isotipo central */}
      <div className="absolute top-1/2 left-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-line-strong bg-gradient-to-br from-navy-700 to-navy-900 shadow-[0_0_60px_-10px_#2878ff,inset_0_1px_0_rgb(255_255_255/0.08)]">
        <LogoMark className="h-24 w-auto" />
      </div>

      {/* Panel de código */}
      <div className="absolute top-[4%] left-[0%] w-[46%] animate-float rounded-xl border border-line-strong bg-navy-900/90 p-3 font-mono text-[9px] leading-[1.7] shadow-2xl backdrop-blur sm:text-[11px]">
        <div className="mb-2 flex gap-1">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        </div>
        <p><span className="text-[#c792ea]">const</span> <span className="text-white">app</span> = <span className="text-electric-light">scale</span>({"{"}</p>
        <p className="pl-3"><span className="text-mist">users</span>: <span className="text-[#f78c6c]">10_000</span>,</p>
        <p className="pl-3"><span className="text-mist">secure</span>: <span className="text-[#c792ea]">true</span>,</p>
        <p>{"})"}</p>
      </div>

      {/* Panel de actividad */}
      <div className="absolute top-[14%] right-[0%] w-[38%] animate-float-slow rounded-xl border border-line-strong bg-navy-900/90 p-3 backdrop-blur [animation-delay:-2s]">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-white sm:text-xs">
          <Activity size={13} className="text-electric-light" /> Rendimiento
        </div>
        <svg viewBox="0 0 120 40" className="mt-2 w-full" aria-hidden>
          <path d="M0 32 L15 28 L30 30 L45 18 L60 22 L75 10 L90 14 L105 4 L120 6" fill="none" stroke="#2878ff" strokeWidth="2" />
          <path d="M0 32 L15 28 L30 30 L45 18 L60 22 L75 10 L90 14 L105 4 L120 6 V40 H0 Z" fill="#2878ff" opacity="0.15" />
        </svg>
      </div>

      {/* Git */}
      <div className="absolute bottom-[14%] left-[2%] flex animate-float-slow items-center gap-2 rounded-xl border border-line-strong bg-navy-900/90 px-3 py-2 backdrop-blur [animation-delay:-4s]">
        <GitBranch size={15} className="text-electric-light" />
        <span className="font-mono text-[10px] text-mist sm:text-xs">main · v2.4.0</span>
      </div>

      {/* Usuarios */}
      <div className="absolute right-[4%] bottom-[6%] w-[40%] animate-float rounded-xl border border-line-strong bg-navy-900/90 p-3 backdrop-blur [animation-delay:-1s]">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-white sm:text-xs">
          <Users size={13} className="text-electric-light" /> Experiencia de usuario
        </div>
        <div className="mt-2 space-y-1.5">
          {[92, 78, 64].map((w) => (
            <div key={w} className="h-1.5 rounded-full bg-navy-700">
              <div className="h-full rounded-full bg-gradient-to-r from-electric to-cyan-glow" style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-[52%] right-[-2%] hidden items-center gap-1.5 rounded-lg border border-line bg-navy-900/90 px-2 py-1.5 text-[10px] text-mist sm:flex">
        <ShieldCheck size={12} className="text-emerald-400" /> Seguro
      </div>
    </div>
  );
}
