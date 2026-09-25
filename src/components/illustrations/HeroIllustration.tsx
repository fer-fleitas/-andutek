import { Check, Cloud, Database, Lock } from "lucide-react";

type Tok = [string, string];
const C = {
  kw: "#c792ea",
  fn: "#5a9bff",
  str: "#7fdbca",
  prop: "#9fb0c8",
  pun: "#6d7f99",
  num: "#f78c6c",
  txt: "#e6edf7",
};

const codeLines: Tok[][] = [
  [[C.kw, "import"], [C.txt, " { Solution } "], [C.kw, "from"], [C.str, " '@nandutek/core'"]],
  [],
  [[C.kw, "const"], [C.txt, " project "], [C.pun, "= "], [C.kw, "new"], [C.fn, " Solution"], [C.pun, "({"]],
  [[C.prop, "  client"], [C.pun, ": "], [C.str, "'tu-empresa'"], [C.pun, ","]],
  [[C.prop, "  stack"], [C.pun, ": ["], [C.str, "'PHP'"], [C.pun, ", "], [C.str, "'Python'"], [C.pun, ", "], [C.str, "'C#'"], [C.pun, "],"]],
  [[C.prop, "  uptime"], [C.pun, ": "], [C.num, "99.9"], [C.pun, ","]],
  [[C.prop, "  scalable"], [C.pun, ": "], [C.kw, "true"], [C.pun, ","]],
  [[C.pun, "})"]],
  [],
  [[C.kw, "export async function"], [C.fn, " launch"], [C.pun, "() {"]],
  [[C.kw, "  await"], [C.txt, " project."], [C.fn, "build"], [C.pun, "()"]],
  [[C.kw, "  return"], [C.txt, " project."], [C.fn, "deploy"], [C.pun, "()"]],
  [[C.pun, "}"]],
];

function Laptop() {
  const lineH = 14.5;
  return (
    <svg viewBox="0 0 560 380" className="relative w-full" role="img" aria-labelledby="hero-illus-title">
      <title id="hero-illus-title">
        Computadora portátil con un editor de código abierto, rodeada de interfaces digitales flotantes
      </title>
      <defs>
        <linearGradient id="h-screen-edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5a9bff" stopOpacity="0.9" />
          <stop offset="0.5" stopColor="#2878ff" stopOpacity="0.25" />
          <stop offset="1" stopColor="#38c6ff" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="h-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#24406b" />
          <stop offset="1" stopColor="#0d1b30" />
        </linearGradient>
        <radialGradient id="h-floor" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#2878ff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#2878ff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="h-reflect" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.06" />
          <stop offset="0.4" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      <ellipse cx="280" cy="352" rx="250" ry="26" fill="url(#h-floor)" />

      {/* Pantalla */}
      <rect x="70" y="20" width="420" height="276" rx="14" fill="#0a1628" stroke="url(#h-screen-edge)" strokeWidth="1.5" />
      <rect x="82" y="32" width="396" height="252" rx="6" fill="#060e1c" />

      {/* Barra de ventana */}
      <rect x="82" y="32" width="396" height="22" rx="6" fill="#0d1b30" />
      <circle cx="96" cy="43" r="3.5" fill="#ff5f57" />
      <circle cx="108" cy="43" r="3.5" fill="#febc2e" />
      <circle cx="120" cy="43" r="3.5" fill="#28c840" />
      <rect x="180" y="37" width="78" height="12" rx="3" fill="#13243f" />
      <text x="188" y="46" fontSize="7.5" fill="#9fb0c8" fontFamily="ui-monospace, monospace">project.ts</text>
      <text x="270" y="46" fontSize="7.5" fill="#6d7f99" fontFamily="ui-monospace, monospace">api.ts</text>

      {/* Explorador de archivos */}
      <rect x="82" y="54" width="86" height="230" fill="#08132a" />
      {[
        ["▾ src", 68, "#9fb0c8"],
        ["  app", 82, "#6d7f99"],
        ["  core", 96, "#6d7f99"],
        ["  project.ts", 110, "#5a9bff"],
        ["  api.ts", 124, "#6d7f99"],
        ["  db.sql", 138, "#6d7f99"],
        ["▸ tests", 152, "#6d7f99"],
      ].map(([t, y, c]) => (
        <text key={String(y)} x="90" y={Number(y)} fontSize="7.5" fill={String(c)} fontFamily="ui-monospace, monospace" xmlSpace="preserve">
          {t}
        </text>
      ))}
      <rect x="82" y="103" width="86" height="10" fill="#2878ff" opacity="0.12" />

      {/* Código */}
      <g fontFamily="ui-monospace, monospace" fontSize="9.2">
        {codeLines.map((tokens, i) => (
          <g key={i}>
            <text x="180" y={74 + i * lineH} fill="#34496b" fontSize="8">
              {i + 1}
            </text>
            <text x="198" y={74 + i * lineH} xmlSpace="preserve">
              {tokens.map(([color, t], j) => (
                <tspan key={j} fill={color}>
                  {t}
                </tspan>
              ))}
            </text>
          </g>
        ))}
        <rect x="324" y={74 + 11 * lineH - 8} width="5" height="10" fill="#5a9bff" className="animate-blink" />
      </g>
      <rect x="176" y={74 + 3 * lineH - 10} width="302" height="13" fill="#2878ff" opacity="0.07" />

      {/* Terminal inferior */}
      <rect x="168" y="262" width="310" height="22" fill="#0a1628" />
      <text x="178" y="276" fontSize="7.5" fontFamily="ui-monospace, monospace" fill="#28c840">
        ✓ build completed
        <tspan fill="#6d7f99"> · deploy en producción · 1.2s</tspan>
      </text>

      <rect x="70" y="20" width="420" height="276" rx="14" fill="url(#h-reflect)" />

      {/* Base */}
      <path d="M20 298 H540 L520 322 Q515 328 503 328 H57 Q45 328 40 322 Z" fill="url(#h-base)" stroke="#2878ff" strokeOpacity="0.35" />
      <rect x="238" y="298" width="84" height="7" rx="3.5" fill="#081426" />
      <rect x="20" y="297" width="520" height="2" fill="#5a9bff" opacity="0.6" />
    </svg>
  );
}

function Phone() {
  return (
    <div className="w-[88px] rounded-[18px] border border-line-strong bg-navy-900 p-1.5 shadow-[0_20px_50px_-10px_rgb(40_120_255/0.5)] sm:w-[104px]">
      <div className="overflow-hidden rounded-[13px] bg-[#060e1c] p-2">
        <div className="mx-auto mb-2 h-1 w-7 rounded-full bg-navy-600" />
        <div className="mb-2 flex items-center gap-1.5">
          <span className="h-4 w-4 rounded-md bg-electric" />
          <span className="h-1.5 w-10 rounded bg-navy-600" />
        </div>
        <div className="mb-2 rounded-md bg-gradient-to-br from-electric/60 to-cyan-glow/30 p-1.5">
          <div className="mb-1 h-1.5 w-8 rounded bg-white/80" />
          <div className="h-1 w-12 rounded bg-white/40" />
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-7 rounded-md border border-line bg-navy-800" />
          ))}
        </div>
        <div className="mt-2 h-4 rounded-md bg-electric" />
      </div>
    </div>
  );
}

export function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-[560/440] w-full max-w-[640px]">
      {/* Resplandor y anillos */}
      <div className="pointer-events-none absolute inset-[8%] rounded-full bg-electric/25 blur-[70px] animate-pulse-glow" aria-hidden />
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 560 440" aria-hidden>
        <g className="origin-center animate-[spin_60s_linear_infinite]" style={{ transformBox: "fill-box" }}>
          <circle cx="280" cy="200" r="205" fill="none" stroke="#2878ff" strokeOpacity="0.18" strokeDasharray="2 8" />
        </g>
        <circle cx="280" cy="200" r="165" fill="none" stroke="#2878ff" strokeOpacity="0.12" />
        <path d="M40 110 H110 L130 90" stroke="#2878ff" strokeOpacity="0.4" fill="none" />
        <path d="M520 300 H460 L440 320" stroke="#2878ff" strokeOpacity="0.4" fill="none" />
        <circle cx="40" cy="110" r="3" fill="#2878ff" />
        <circle cx="520" cy="300" r="3" fill="#38c6ff" />
      </svg>

      <div className="absolute inset-x-0 top-[10%]">
        <Laptop />
      </div>

      {/* Tarjeta de métricas */}
      <div className="absolute top-[2%] left-[0%] w-[34%] min-w-[120px] animate-float rounded-xl border border-line-strong bg-navy-800/85 p-3 shadow-[0_18px_40px_-12px_rgb(0_0_0/0.6)] backdrop-blur-md">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-medium text-mist">Rendimiento</span>
          <span className="text-[10px] font-bold text-emerald-400">▲ 98</span>
        </div>
        <div className="mt-2 flex h-10 items-end gap-1">
          {[40, 55, 35, 70, 60, 85, 95].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-electric-dark to-electric-light"
              style={{ height: `${h}%`, opacity: 0.45 + i * 0.08 }}
            />
          ))}
        </div>
      </div>

      {/* Nodo API / nube */}
      <div className="absolute top-[4%] right-[4%] flex animate-float-slow items-center gap-2 rounded-xl border border-line-strong bg-navy-800/85 px-3 py-2 backdrop-blur-md">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-electric/15 text-electric-light">
          <Cloud size={15} />
        </span>
        <span className="hidden flex-col sm:flex">
          <span className="text-[10px] font-semibold text-white">API REST</span>
          <span className="text-[9px] text-emerald-400">● online</span>
        </span>
      </div>

      {/* Smartphone */}
      <div className="absolute right-[0%] bottom-[8%] animate-float-slow [animation-delay:-3s]">
        <Phone />
      </div>

      {/* Estado de despliegue */}
      <div className="absolute bottom-[6%] left-[2%] flex animate-float items-center gap-2 rounded-xl border border-line-strong bg-navy-800/85 px-3 py-2 backdrop-blur-md [animation-delay:-2s]">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
          <Check size={14} strokeWidth={3} />
        </span>
        <span className="text-[10px] font-semibold text-white sm:text-xs">Deploy exitoso</span>
      </div>

      {/* Chips técnicos */}
      <div className="absolute top-[40%] -left-[2%] hidden animate-float-slow items-center gap-1.5 rounded-lg border border-line bg-navy-900/85 px-2 py-1.5 text-[10px] text-mist backdrop-blur sm:flex [animation-delay:-4s]">
        <Database size={12} className="text-electric-light" /> SQL
      </div>
      <div className="absolute top-[34%] -right-[1%] hidden animate-float items-center gap-1.5 rounded-lg border border-line bg-navy-900/85 px-2 py-1.5 text-[10px] text-mist backdrop-blur sm:flex [animation-delay:-1s]">
        <Lock size={12} className="text-electric-light" /> SSL
      </div>
      <div className="absolute top-[0%] left-[44%] hidden animate-float-slow rounded-lg border border-line-strong bg-electric/15 px-2.5 py-1 font-mono text-xs font-bold text-electric-light sm:block [animation-delay:-5s]">
        {"</>"}
      </div>
    </div>
  );
}
