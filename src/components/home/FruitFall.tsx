import { useEffect, useRef, useState } from "react";
import { Container } from "../ui/Container";
import { FRUIT_SHAPES, type FruitShapeName } from "./FruitShapes";

/**
 * Escena de entrada: una lluvia de frutas que cae dentro del bowl.
 *
 * La caída se dispara sola cuando la sección entra en pantalla (una vez) y
 * de ahí en más el bowl queda servido. No sigue al scroll: pasás por ahí y
 * ocurre.
 *
 * Todo el movimiento es una animación CSS — corre fuera del hilo principal —
 * y la posición de reposo de cada fruta es su posición de maquetado, así que
 * con `prefers-reduced-motion` el bowl simplemente aparece lleno, sin lógica
 * extra.
 */

/** PRNG con semilla fija: el montón es siempre el mismo, pero no parece hecho a mano. */
function mulberry32(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const SHAPE_POOL: FruitShapeName[] = [
  "frutilla",
  "arandano",
  "frambuesa",
  "frutilla",
  "arandano",
  "frambuesa",
  "mango",
  "anana",
  "durazno",
  "arandano",
  "frambuesa",
  "lima",
];

interface Piece {
  shape: FruitShapeName;
  /** Posición de reposo, en % de la caja del bowl. */
  x: number;
  y: number;
  size: number;
  rotation: number;
  startRotation: number;
  driftX: number;
  delay: number;
  duration: number;
  z: number;
}

/** Arma el montón: tres hileras, más alto en el centro, como fruta apilada. */
function buildHeap(): Piece[] {
  const random = mulberry32(28102026);
  const rows = [
    { count: 12, y: 16, size: 9, spread: 72 },
    { count: 12, y: 28, size: 11, spread: 66 },
    { count: 9, y: 40, size: 12.5, spread: 56 },
  ];

  const pieces: Piece[] = [];
  let index = 0;

  rows.forEach((row, rowIndex) => {
    for (let i = 0; i < row.count; i += 1) {
      const t = row.count === 1 ? 0.5 : i / (row.count - 1);
      const x = 50 + (t - 0.5) * row.spread + (random() - 0.5) * 5;
      // El montón es más alto en el centro.
      const mound = 1 - Math.min(1, Math.abs(x - 50) / (row.spread / 2));
      const y = row.y - mound * 5 + (random() - 0.5) * 3;

      pieces.push({
        shape: SHAPE_POOL[index % SHAPE_POOL.length],
        x,
        y,
        size: row.size * (0.85 + random() * 0.35),
        rotation: (random() - 0.5) * 54,
        startRotation: (random() - 0.5) * 420,
        driftX: (random() - 0.5) * 90,
        // Retardo repartido al azar: lluvia continua, no tandas.
        delay: random() * 0.85,
        duration: 0.95 + random() * 0.3,
        z: rowIndex * 10 + i,
      });
      index += 1;
    }
  });

  return pieces;
}

const PIECES = buildHeap();

export function FruitFall() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setPlaying(true);
        observer.disconnect(); // ocurre una sola vez
      },
      { threshold: 0.3 },
    );
    observer.observe(scene);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ice-200/40 blur-3xl"
      />

      <Container className="relative">
        {/* El título va por delante: la fruta le pasa por detrás. */}
        <div className="relative z-20 mx-auto max-w-xl text-center">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ice-950 sm:text-4xl">
            Cosechados en su punto justo
          </h2>
          <p className="mx-auto mt-3 max-w-md text-balance text-sm leading-relaxed text-ice-800/70 sm:text-base">
            Y congelados ahí mismo, para que lleguen a tu casa tal como
            salieron de la planta.
          </p>
        </div>

        <div
          ref={sceneRef}
          data-playing={playing}
          className="fruit-scene relative isolate z-0 mx-auto mt-10 w-full max-w-[460px]"
        >
          {/* Caja del bowl: todo se posiciona en % de este rectángulo 2:1. */}
          <div className="relative aspect-2/1 w-full">
            <BowlBack />

            {PIECES.map((piece, index) => {
              const Shape = FRUIT_SHAPES[piece.shape];
              return (
                <div
                  key={index}
                  className="fruit-piece absolute"
                  style={
                    {
                      left: `calc(${piece.x}% - ${piece.size / 2}%)`,
                      top: `calc(${piece.y}% - ${piece.size}%)`,
                      width: `${piece.size}%`,
                      zIndex: piece.z,
                      "--r0": `${piece.startRotation}deg`,
                      "--r1": `${piece.rotation}deg`,
                      "--dx": `${piece.driftX}px`,
                      "--delay": `${piece.delay}s`,
                      "--dur": `${piece.duration}s`,
                    } as React.CSSProperties
                  }
                >
                  <Shape className="h-auto w-full drop-shadow-sm" />
                </div>
              );
            })}

            <BowlFront />
          </div>
        </div>
      </Container>
    </section>
  );
}

function BowlBack() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 200"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <linearGradient id="bowl-inside" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c4e5f3" />
          <stop offset="1" stopColor="#eaf7fb" />
        </linearGradient>
      </defs>
      <ellipse cx="200" cy="48" rx="196" ry="46" fill="url(#bowl-inside)" />
    </svg>
  );
}

function BowlFront() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 200"
      className="pointer-events-none absolute inset-0 z-50 h-full w-full"
    >
      <defs>
        <linearGradient id="bowl-body" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#93d0e8" />
          <stop offset="0.55" stopColor="#5bb3d7" />
          <stop offset="1" stopColor="#267aa3" />
        </linearGradient>
      </defs>

      <path
        d="M4 48 C4 128, 92 186, 200 186 C308 186, 396 128, 396 48 C396 74, 308 94, 200 94 C92 94, 4 74, 4 48 Z"
        fill="url(#bowl-body)"
      />
      <ellipse
        cx="200"
        cy="48"
        rx="196"
        ry="46"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.75"
        strokeWidth="4"
      />
      <path
        d="M52 92 C72 134, 118 162, 170 172"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.4"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}
