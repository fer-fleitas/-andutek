const bars = [
  [0, 60, "#c792ea"], [64, 90, "#5a9bff"],
  [16, 120, "#7fdbca"],
  [16, 70, "#9fb0c8"], [90, 60, "#f78c6c"],
  [32, 140, "#5a9bff"],
  [32, 50, "#9fb0c8"], [86, 80, "#7fdbca"],
  [16, 40, "#c792ea"],
  [0, 30, "#6d7f99"],
  [0, 100, "#5a9bff"], [104, 60, "#7fdbca"],
  [16, 150, "#9fb0c8"],
  [16, 90, "#c792ea"], [110, 50, "#5a9bff"],
] as const;

/** Espacio de trabajo tecnológico: monitor con código, laptop, teclado y detalles de escritorio. */
export function WorkspaceIllustration() {
  // Agrupa segmentos por línea: cada entrada [indent, width, color]; varias por línea cuando comparten fila
  const rows: [number, number, string][][] = [];
  const rowBreaks = [2, 1, 2, 1, 2, 1, 1, 2, 1, 2];
  let k = 0;
  for (const n of rowBreaks) {
    rows.push(bars.slice(k, k + n).map((b) => [b[0], b[1], b[2]]));
    k += n;
  }

  return (
    <svg viewBox="0 0 520 380" className="h-full w-full" role="img" aria-labelledby="ws-title">
      <title id="ws-title">Espacio de trabajo con monitor mostrando código, laptop y teclado</title>
      <defs>
        <linearGradient id="ws-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0f2240" />
          <stop offset="1" stopColor="#081426" />
        </linearGradient>
        <radialGradient id="ws-glow" cx="0.5" cy="0.4" r="0.6">
          <stop offset="0" stopColor="#2878ff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#2878ff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ws-desk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1b3053" />
          <stop offset="1" stopColor="#0d1b30" />
        </linearGradient>
      </defs>

      <rect width="520" height="380" fill="url(#ws-bg)" />
      <g stroke="#2878ff" strokeOpacity="0.07">
        {Array.from({ length: 13 }, (_, i) => (
          <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="270" />
        ))}
        {Array.from({ length: 7 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 40} x2="520" y2={i * 40} />
        ))}
      </g>
      <rect width="520" height="380" fill="url(#ws-glow)" />

      {/* Lámpara colgante */}
      <line x1="430" y1="0" x2="430" y2="46" stroke="#34496b" strokeWidth="2" />
      <path d="M410 46 H450 L442 62 H418 Z" fill="#1b3053" />
      <ellipse cx="430" cy="64" rx="14" ry="3" fill="#38c6ff" opacity="0.8" />
      <path d="M416 64 L380 200 H480 L444 64 Z" fill="#38c6ff" opacity="0.05" />

      {/* Monitor */}
      <rect x="120" y="40" width="280" height="176" rx="10" fill="#0a1628" stroke="#2878ff" strokeOpacity="0.5" />
      <rect x="130" y="50" width="260" height="156" rx="4" fill="#060e1c" />
      <rect x="130" y="50" width="260" height="14" rx="4" fill="#0d1b30" />
      <circle cx="139" cy="57" r="2.5" fill="#ff5f57" />
      <circle cx="148" cy="57" r="2.5" fill="#febc2e" />
      <circle cx="157" cy="57" r="2.5" fill="#28c840" />
      {rows.map((segs, r) => {
        let x = 150;
        return segs.map(([indent, w, color], s) => {
          const start = s === 0 ? 150 + indent : x + 6;
          x = start + w * 0.72;
          return <rect key={`${r}-${s}`} x={start} y={74 + r * 12.5} width={w * 0.72} height="5" rx="2.5" fill={color} opacity="0.85" />;
        });
      })}
      {Array.from({ length: 10 }, (_, i) => (
        <rect key={i} x="136" y={74 + i * 12.5} width="6" height="5" rx="1" fill="#34496b" />
      ))}
      <path d="M240 216 H280 L288 246 H232 Z" fill="#13243f" />
      <rect x="208" y="244" width="104" height="8" rx="4" fill="#1b3053" />

      {/* Escritorio */}
      <rect x="0" y="252" width="520" height="128" fill="url(#ws-desk)" />
      <rect x="0" y="252" width="520" height="2" fill="#5a9bff" opacity="0.5" />

      {/* Teclado */}
      <rect x="170" y="290" width="180" height="40" rx="6" fill="#13243f" stroke="#2878ff" strokeOpacity="0.3" />
      {Array.from({ length: 3 }, (_, r) =>
        Array.from({ length: 12 }, (_, c) => (
          <rect key={`${r}-${c}`} x={178 + c * 14} y={296 + r * 10} width="11" height="7" rx="1.5" fill="#1b3053" />
        )),
      )}
      <rect x="370" y="298" width="22" height="32" rx="11" fill="#13243f" stroke="#2878ff" strokeOpacity="0.3" />

      {/* Laptop lateral */}
      <path d="M22 196 L96 188 L100 254 L26 262 Z" fill="#0a1628" stroke="#2878ff" strokeOpacity="0.5" />
      <path d="M30 202 L90 196 L93 246 L33 252 Z" fill="#081a36" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={38} y={210 + i * 8} width={20 + ((i * 17) % 30)} height="3" rx="1.5" fill="#5a9bff" opacity="0.6" transform={`skewY(-6)`} />
      ))}
      <path d="M10 266 L100 256 L130 268 L40 280 Z" fill="#1b3053" />

      {/* Taza y planta */}
      <rect x="430" y="270" width="30" height="36" rx="5" fill="#1b3053" stroke="#2878ff" strokeOpacity="0.4" />
      <path d="M460 278 q12 0 12 10 q0 10 -12 10" stroke="#2878ff" strokeOpacity="0.4" fill="none" strokeWidth="3" />
      <path d="M440 262 q-4 -8 2 -14 M450 262 q4 -8 -2 -14" stroke="#9fb0c8" strokeOpacity="0.35" fill="none" strokeWidth="1.5" />
      <rect x="470" y="220" width="30" height="34" rx="4" fill="#13243f" />
      <path d="M485 222 C470 200 462 190 470 170 C480 185 486 200 485 222 Z" fill="#1f6f5c" />
      <path d="M485 222 C496 198 506 190 510 176 C502 200 496 210 485 222 Z" fill="#2a8f76" />
    </svg>
  );
}
