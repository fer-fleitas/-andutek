import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  id?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "center", id }: Props) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <p
        className={`mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-electric-light uppercase`}
      >
        <span className="h-px w-6 bg-electric" aria-hidden />
        {eyebrow}
        {centered && <span className="h-px w-6 bg-electric" aria-hidden />}
      </p>
      <h2 id={id} className="text-3xl leading-tight font-bold sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed sm:text-lg">{description}</p>}
    </Reveal>
  );
}
