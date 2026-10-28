import type { SVGProps } from "react";

type Tone = "onLight" | "onDark";

const palettes: Record<Tone, { body: string; cap: string; pupil: string }> = {
  onLight: { body: "#267aa3", cap: "#20506d", pupil: "#0a1c2c" },
  onDark: { body: "#5bb3d7", cap: "#c4e5f3", pupil: "#0a1c2c" },
};

interface LogoMarkProps extends SVGProps<SVGSVGElement> {
  /** Usar "onDark" cuando el logo va sobre un fondo oscuro (hero, footer). */
  tone?: Tone;
}

/**
 * Isotipo de Antártico Ice: el pingüino con gorra y moñito del logo original,
 * redibujado como SVG y adaptado a la paleta azul hielo de la marca.
 *
 * Si en algún momento conseguís el archivo original del logo (SVG o PNG de
 * alta resolución), reemplazá este componente por esa imagen en lugar de
 * seguir ajustando el dibujo.
 */
export function LogoMark({ tone = "onLight", ...props }: LogoMarkProps) {
  const { body, cap, pupil } = palettes[tone];

  return (
    <svg viewBox="0 0 100 100" {...props}>
      {/* aleta */}
      <path
        d="M35 58 C28 65, 27 77, 32 86"
        fill="none"
        stroke={body}
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      {/* cuerpo */}
      <path
        d="M57 40 C71 40, 81 57, 81 73 C81 89, 70 98, 57 98 C44 98, 33 89, 33 73 C33 57, 43 40, 57 40 Z"
        fill={body}
      />
      {/* cabeza */}
      <circle cx="45" cy="28" r="15" fill={body} />
      {/* gorra */}
      <path d="M30 27 A15 15 0 0 1 60 27 Z" fill={cap} />
      <path d="M31 27 C23 26, 16 29, 15 32 C21 32, 27 30, 32 29.5 Z" fill={cap} />
      {/* ojo */}
      <circle cx="41" cy="30" r="4.4" fill="#ffffff" />
      <circle cx="40.6" cy="30" r="2.1" fill={pupil} />
      {/* moñito */}
      <path d="M41 43 L34 39 L34 48 Z M41 43 L48 39 L48 48 Z" fill={cap} />
      <circle cx="41" cy="43.5" r="2.2" fill={cap} />
    </svg>
  );
}
