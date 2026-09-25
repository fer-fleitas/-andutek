import { Sparkle } from "lucide-react";

/** Cinta con desplazamiento infinito. Se pausa al pasar el mouse. */
export function Marquee({ items }: { items: string[] }) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-10 text-lg font-semibold whitespace-nowrap text-white/80 sm:text-xl">
          {item}
          <Sparkle size={16} className="text-electric" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="group relative flex overflow-hidden border-y border-line bg-navy-950/60 py-5 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
