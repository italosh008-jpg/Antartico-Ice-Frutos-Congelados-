import { useId, type SVGProps } from "react";

type Tone = "onLight" | "onDark";

const palettes: Record<Tone, { from: string; to: string; eye: string }> = {
  onLight: { from: "#3597c1", to: "#216285", eye: "#ffffff" },
  onDark: { from: "#93d0e8", to: "#3597c1", eye: "#0a1c2c" },
};

interface LogoMarkProps extends SVGProps<SVGSVGElement> {
  /** Usar "onDark" cuando el logo va sobre un fondo oscuro (hero, footer). */
  tone?: Tone;
}

/**
 * Isotipo de Antártico Ice: el pingüino con gorra, moñito y aleta del logo
 * original, redibujado en SVG con la paleta azul hielo de la marca.
 *
 * Si conseguís el archivo vectorial original, reemplazá este componente por
 * ese asset en lugar de seguir ajustando las curvas a mano.
 */
export function LogoMark({ tone = "onLight", ...props }: LogoMarkProps) {
  const gradientId = useId();
  const { from, to, eye } = palettes[tone];

  return (
    <svg viewBox="0 0 84 106" {...props}>
      <defs>
        <linearGradient
          id={gradientId}
          x1="8"
          y1="4"
          x2="78"
          y2="104"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>

      {/* aleta */}
      <path
        d="M14 56 C4 68, 5 88, 18 102"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* cuerpo */}
      <path
        d="M54 46 C67 46, 78 60, 78 75 C78 92, 67 104, 54 104 C41 104, 30 92, 30 75 C30 60, 41 46, 54 46 Z"
        fill={`url(#${gradientId})`}
      />
      {/* cabeza */}
      <path
        d="M18 46 L18 32 A24 24 0 0 1 66 32 L66 46 Z"
        fill={`url(#${gradientId})`}
      />
      {/* pico */}
      <path d="M18 33 L7 38 L18 43 Z" fill={`url(#${gradientId})`} />
      {/* moñito */}
      <path
        d="M27 53 L17 46 L17 60 Z M27 53 L37 46 L37 60 Z"
        fill={`url(#${gradientId})`}
      />
      <circle cx="27" cy="53" r="2" fill={`url(#${gradientId})`} />
      {/* ojo */}
      <circle cx="42" cy="23" r="4.6" fill={eye} />
    </svg>
  );
}
