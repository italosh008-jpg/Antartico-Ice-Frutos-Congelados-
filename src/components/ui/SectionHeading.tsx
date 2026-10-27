import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignClasses}`}>
      {eyebrow && (
        <span
          className={`text-xs font-bold uppercase tracking-[0.2em] ${
            light ? "text-ice-200" : "text-ice-500"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-balance text-3xl sm:text-4xl font-bold tracking-tight ${
          light ? "text-white" : "text-ice-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-balance text-base sm:text-lg leading-relaxed ${
            light ? "text-ice-100" : "text-ice-800/70"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
