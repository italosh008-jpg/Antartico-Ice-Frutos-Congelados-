import type { SVGProps } from "react";

/**
 * Isotipo de Antártico Ice (el ave/pingüino del logo), recreado como SVG
 * y adaptado a la paleta azul hielo de la marca.
 */
export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <defs>
        <linearGradient id="antartico-ice-grad" x1="15" y1="8" x2="85" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#216285" />
          <stop offset="1" stopColor="#5bb3d7" />
        </linearGradient>
      </defs>

      <circle cx="38" cy="30" r="19" fill="url(#antartico-ice-grad)" />
      <circle cx="53" cy="66" r="31" fill="url(#antartico-ice-grad)" />

      <ellipse cx="58" cy="72" rx="16" ry="22" fill="#f2f9fc" opacity="0.92" />

      <path d="M19 30 L31 23 L31 37 Z" fill="#0a1c2c" />

      <circle cx="32" cy="24" r="5" fill="#ffffff" />
      <circle cx="33.4" cy="24" r="2.3" fill="#0a1c2c" />

      <path d="M44 94 L36 100 L50 100 Z" fill="#0a1c2c" />
      <path d="M64 94 L58 100 L72 100 Z" fill="#0a1c2c" />
    </svg>
  );
}
