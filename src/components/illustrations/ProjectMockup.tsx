import type { ProjectKind } from "@/data/content";

function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-line-strong bg-[#060e1c] shadow-[0_20px_50px_-20px_rgb(40_120_255/0.6)]">
      <div className="flex items-center gap-1.5 border-b border-line bg-navy-800 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-3 flex-1 truncate rounded bg-navy-900 px-2 py-0.5 font-mono text-[9px] text-mist-dim">{url}</span>
      </div>
      <div className="flex-1 p-3">{children}</div>
    </div>
  );
}

const Bar = ({ w, className = "" }: { w: string; className?: string }) => (
  <div className={`h-1.5 rounded-full bg-navy-600 ${className}`} style={{ width: w }} />
);

function Shop() {
  return (
    <BrowserFrame url="demo-tienda.nandutek.dev">
      <div className="mb-3 flex items-center justify-between">
        <Bar w="30%" className="bg-white/70" />
        <span className="rounded bg-electric px-1.5 py-0.5 text-[8px] font-bold text-white">🛒 3</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["from-electric/60 to-cyan-glow/30", "from-violet-500/50 to-electric/30", "from-cyan-glow/50 to-emerald-400/30"].map((g, i) => (
          <div key={i} className="rounded-md border border-line bg-navy-800 p-1.5">
            <div className={`mb-1.5 aspect-square rounded bg-gradient-to-br ${g}`} />
            <Bar w="80%" />
            <div className="mt-1.5 flex items-center justify-between">
              <span className="text-[8px] font-bold text-white">${(i + 2) * 12}.990</span>
              <span className="h-3 w-3 rounded-sm bg-electric" />
            </div>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

function Erp() {
  return (
    <BrowserFrame url="demo-gestion.nandutek.dev">
      <div className="flex h-full gap-2">
        <div className="w-1/5 space-y-1.5 rounded bg-navy-800 p-1.5">
          <div className="h-1.5 rounded bg-electric" />
          {[0, 1, 2, 3].map((i) => (
            <Bar key={i} w="100%" />
          ))}
        </div>
        <div className="flex-1 space-y-2">
          <div className="grid grid-cols-3 gap-1.5">
            {["Clientes", "Stock", "Ventas"].map((l) => (
              <div key={l} className="rounded border border-line bg-navy-800 p-1.5">
                <p className="text-[7px] text-mist-dim">{l}</p>
                <p className="text-[10px] font-bold text-white">{l.length * 137}</p>
              </div>
            ))}
          </div>
          <div className="space-y-1 rounded border border-line bg-navy-800 p-1.5">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className={`h-1.5 w-1.5 rounded-full ${i % 2 ? "bg-emerald-400" : "bg-electric"}`} />
                <Bar w={`${60 - i * 8}%`} />
                <span className="ml-auto h-1.5 w-6 rounded bg-navy-600" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function Corporate() {
  return (
    <BrowserFrame url="demo-corporativo.nandutek.dev">
      <div className="mb-2 flex items-center justify-between">
        <span className="h-2 w-8 rounded bg-electric" />
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <Bar key={i} w="14px" />
          ))}
        </div>
      </div>
      <div className="rounded-md bg-gradient-to-br from-electric/40 via-navy-800 to-navy-900 p-3">
        <div className="h-2 w-2/3 rounded bg-white/85" />
        <div className="mt-1.5 h-2 w-1/2 rounded bg-white/60" />
        <div className="mt-2 h-1 w-3/4 rounded bg-white/25" />
        <span className="mt-2.5 inline-block h-3 w-12 rounded bg-electric" />
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded border border-line bg-navy-800 p-1.5">
            <span className="mb-1 block h-2.5 w-2.5 rounded bg-electric/60" />
            <Bar w="90%" />
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

function Dashboard() {
  return (
    <BrowserFrame url="demo-dashboard.nandutek.dev">
      <div className="grid h-full grid-cols-3 gap-2">
        <div className="col-span-2 rounded border border-line bg-navy-800 p-2">
          <p className="text-[7px] text-mist-dim">Ingresos mensuales</p>
          <svg viewBox="0 0 120 50" className="mt-1 w-full" aria-hidden>
            <path d="M0 42 C15 38 20 30 35 32 S55 18 70 20 S95 8 120 6" fill="none" stroke="#38c6ff" strokeWidth="2" />
            <path d="M0 42 C15 38 20 30 35 32 S55 18 70 20 S95 8 120 6 V50 H0 Z" fill="#2878ff" opacity="0.2" />
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center rounded border border-line bg-navy-800 p-1.5">
          <svg viewBox="0 0 36 36" className="w-3/4" aria-hidden>
            <circle cx="18" cy="18" r="14" fill="none" stroke="#1b3053" strokeWidth="5" />
            <circle cx="18" cy="18" r="14" fill="none" stroke="#2878ff" strokeWidth="5" strokeDasharray="62 88" transform="rotate(-90 18 18)" />
          </svg>
          <span className="mt-1 text-[9px] font-bold text-white">72%</span>
        </div>
        <div className="col-span-3 flex h-10 items-end gap-1 rounded border border-line bg-navy-800 p-1.5">
          {[30, 50, 40, 70, 55, 80, 65, 90, 75, 95, 60, 85].map((h, i) => (
            <span key={i} className="flex-1 rounded-sm bg-electric/80" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

const mockups: Record<ProjectKind, () => React.JSX.Element> = {
  shop: Shop,
  erp: Erp,
  corporate: Corporate,
  dashboard: Dashboard,
};

export function ProjectMockup({ kind }: { kind: ProjectKind }) {
  const Mock = mockups[kind];
  return <Mock />;
}
