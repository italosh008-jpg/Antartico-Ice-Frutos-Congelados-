import type { SVGProps } from "react";

/**
 * Frutas dibujadas a mano en SVG, con la forma real de cada una.
 *
 * Son vectores planos a propósito: sin degradados ni ids internos, así se
 * pueden repetir decenas de veces en la misma página sin duplicar
 * definiciones ni pesar nada, y se leen bien a 30 px.
 */

type ShapeProps = SVGProps<SVGSVGElement>;

const base = { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" };

export function Frutilla(props: ShapeProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M50 97 C29 83, 15 63, 15 46 C15 29, 31 19, 50 19 C69 19, 85 29, 85 46 C85 63, 71 83, 50 97 Z"
        fill="#e23b45"
      />
      <path
        d="M50 97 C40 90, 31 80, 25 69 C33 76, 42 84, 50 97 Z"
        fill="#c22733"
      />
      <g fill="#ffd977">
        <ellipse cx="38" cy="40" rx="2.6" ry="3.6" transform="rotate(-18 38 40)" />
        <ellipse cx="54" cy="36" rx="2.6" ry="3.6" transform="rotate(12 54 36)" />
        <ellipse cx="68" cy="46" rx="2.6" ry="3.6" transform="rotate(22 68 46)" />
        <ellipse cx="30" cy="55" rx="2.6" ry="3.6" transform="rotate(-24 30 55)" />
        <ellipse cx="46" cy="54" rx="2.6" ry="3.6" />
        <ellipse cx="61" cy="62" rx="2.6" ry="3.6" transform="rotate(16 61 62)" />
        <ellipse cx="39" cy="71" rx="2.4" ry="3.3" transform="rotate(-10 39 71)" />
        <ellipse cx="53" cy="79" rx="2.2" ry="3" />
      </g>
      <path
        d="M50 26 L34 12 L45 20 L38 5 L51 17 L59 3 L57 19 L72 10 L60 24 Z"
        fill="#3fa05a"
      />
      <circle cx="50" cy="20" r="4" fill="#348c4c" />
    </svg>
  );
}

export function Arandano(props: ShapeProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="50" cy="55" r="35" fill="#3b4a8c" />
      <path
        d="M50 90 C31 90, 15 75, 15 55 C15 72, 31 84, 50 84 C69 84, 85 72, 85 55 C85 75, 69 90, 50 90 Z"
        fill="#2c3a72"
      />
      <ellipse
        cx="37"
        cy="42"
        rx="10"
        ry="6.5"
        fill="#8c9bd4"
        opacity="0.5"
        transform="rotate(-28 37 42)"
      />
      <path
        d="M50 14 L55 24 L66 22 L58 30 L68 36 L56 37 L58 48 L50 40 L42 48 L44 37 L32 36 L42 30 L34 22 L45 24 Z"
        fill="#243061"
      />
    </svg>
  );
}

export function Frambuesa(props: ShapeProps) {
  return (
    <svg {...base} {...props}>
      <g fill="#d9365e">
        <circle cx="50" cy="29" r="12" />
        <circle cx="33" cy="41" r="12" />
        <circle cx="67" cy="41" r="12" />
        <circle cx="42" cy="55" r="12" />
        <circle cx="58" cy="55" r="12" />
        <circle cx="27" cy="58" r="10" />
        <circle cx="73" cy="58" r="10" />
        <circle cx="50" cy="71" r="11" />
        <circle cx="35" cy="73" r="9" />
        <circle cx="65" cy="73" r="9" />
      </g>
      <g fill="#f1719a" opacity="0.55">
        <circle cx="46" cy="25" r="3.4" />
        <circle cx="29" cy="37" r="3.2" />
        <circle cx="38" cy="51" r="3.2" />
        <circle cx="63" cy="37" r="3.2" />
      </g>
      <path d="M50 19 L40 10 L49 14 L50 4 L55 14 L64 9 Z" fill="#3fa05a" />
    </svg>
  );
}

export function MangoTrozo(props: ShapeProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M27 72 C21 48, 37 20, 62 20 C79 20, 87 33, 84 50 C80 73, 57 87, 40 87 C32 87, 28 80, 27 72 Z"
        fill="#f5a31f"
      />
      <path
        d="M40 87 C32 87, 28 80, 27 72 C24 56, 30 38, 42 28 C34 42, 32 62, 40 87 Z"
        fill="#dd8512"
      />
      <path
        d="M58 29 C68 29, 74 36, 73 45"
        stroke="#ffd27d"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
}

export function AnanaTrozo(props: ShapeProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M31 20 L73 15 C80 14, 85 19, 84 26 L77 75 C76 82, 70 86, 63 85 L26 77 C19 76, 15 70, 17 63 L24 27 C25 23, 28 20, 31 20 Z"
        fill="#f6c431"
      />
      <path
        d="M26 77 C19 76, 15 70, 17 63 L24 27 C25 23, 28 20, 31 20 L40 19 L33 80 Z"
        fill="#e0a916"
      />
      <g stroke="#d99f12" strokeWidth="3" opacity="0.6" strokeLinecap="round">
        <path d="M44 28 L40 72" />
        <path d="M60 25 L56 70" />
        <path d="M72 24 L68 66" />
      </g>
    </svg>
  );
}

export function Durazno(props: ShapeProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="50" cy="55" r="35" fill="#f58d4e" />
      <path
        d="M50 90 C31 90, 15 74, 15 55 C15 73, 30 83, 48 83 C66 83, 82 71, 84 50 C86 72, 69 90, 50 90 Z"
        fill="#dd6f33"
      />
      <path
        d="M50 21 C43 38, 42 70, 49 89"
        stroke="#d9612a"
        strokeWidth="3.5"
        fill="none"
        opacity="0.65"
      />
      <ellipse
        cx="37"
        cy="41"
        rx="11"
        ry="7"
        fill="#ffc79a"
        opacity="0.55"
        transform="rotate(-28 37 41)"
      />
      <path d="M52 22 C58 12, 70 9, 76 12 C72 21, 62 25, 52 22 Z" fill="#3fa05a" />
    </svg>
  );
}

export function LimaRodaja(props: ShapeProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="50" cy="50" r="38" fill="#7cc23c" />
      <circle cx="50" cy="50" r="33" fill="#eaf6cf" />
      <circle cx="50" cy="50" r="29" fill="#a9d95c" />
      <g stroke="#eaf6cf" strokeWidth="3.4" strokeLinecap="round">
        <path d="M50 50 L50 23" />
        <path d="M50 50 L69 31" />
        <path d="M50 50 L77 50" />
        <path d="M50 50 L69 69" />
        <path d="M50 50 L50 77" />
        <path d="M50 50 L31 69" />
        <path d="M50 50 L23 50" />
        <path d="M50 50 L31 31" />
      </g>
      <circle cx="50" cy="50" r="4" fill="#eaf6cf" />
    </svg>
  );
}

export const FRUIT_SHAPES = {
  frutilla: Frutilla,
  arandano: Arandano,
  frambuesa: Frambuesa,
  mango: MangoTrozo,
  anana: AnanaTrozo,
  durazno: Durazno,
  lima: LimaRodaja,
} as const;

export type FruitShapeName = keyof typeof FRUIT_SHAPES;
