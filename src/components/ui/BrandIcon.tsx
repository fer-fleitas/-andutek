import type { SimpleIcon } from "simple-icons";

type Props = {
  icon: SimpleIcon;
  className?: string;
  /** Si es true usa el color oficial de la marca; si no, currentColor. */
  brandColor?: boolean;
  title?: string;
};

/** Renderiza un icono de marca de simple-icons (licencia CC0) como SVG inline. */
export function BrandIcon({ icon, className, brandColor, title }: Props) {
  return (
    <svg
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      viewBox="0 0 24 24"
      className={className}
      fill={brandColor ? `#${icon.hex}` : "currentColor"}
    >
      {title && <title>{title}</title>}
      <path d={icon.path} />
    </svg>
  );
}
