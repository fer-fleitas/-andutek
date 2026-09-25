import Image from "next/image";
import mark from "../../../public/brand/nandu-mark.png";

/** Isotipo Ñandutek: el ñandú. */
export function LogoMark({ className = "h-12 w-auto", priority = false }: { className?: string; priority?: boolean }) {
  return <Image src={mark} alt="" aria-hidden className={className} priority={priority} sizes="120px" />;
}

/** Logotipo completo: ñandú + "Ñandu" en azul eléctrico y "tek" en gris azulado. */
export function Logo({ priority = false }: { priority?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <LogoMark priority={priority} />
      <span className="font-logo text-[1.7rem] leading-none font-semibold tracking-[0.01em]">
        <span className="text-electric">Ñandu</span>
        <span className="text-[#5d7295]">tek</span>
      </span>
    </span>
  );
}
