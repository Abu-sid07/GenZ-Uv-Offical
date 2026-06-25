import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "center",
  light,
}: {
  eyebrow?: string;
  title: ReactNode;
  desc?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
}) {
  const isCenter = align === "center";
  return (
    <div className={`${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"}`}>
      {eyebrow && (
        <div className={`reveal flex items-center gap-2 ${isCenter ? "justify-center" : ""}`}>
          <span className="h-px w-6 bg-gradient-to-r from-transparent to-emerald-glow/70" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-glow">
            {eyebrow}
          </span>
          <span className="h-px w-6 bg-gradient-to-l from-transparent to-emerald-glow/70" />
        </div>
      )}
      <h2
        className={`reveal mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.7rem] ${
          light ? "text-white" : "text-white"
        }`}
        data-delay="60"
      >
        {title}
      </h2>
      {desc && (
        <p className="reveal mt-4 text-base leading-relaxed text-emerald-50/60" data-delay="120">
          {desc}
        </p>
      )}
    </div>
  );
}
