import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getProductById } from "../../data/products";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Escena de entrada: los frutos caen dentro del bowl a medida que el usuario
 * baja. El scroll es el que manda — no hay reproducción automática — así que
 * la caída avanza, se frena o se devuelve exactamente al ritmo de la persona.
 *
 * La escena queda fija (sticky) mientras dura la caída y se va sola cuando
 * los frutos ya están en el bowl, justo al llegar a "Por qué elegirnos".
 */

/**
 * Cada fruto entra desde un lado, en su momento, y descansa en el bowl.
 * `rest` es la altura final dentro del bowl (más negativo = más al fondo) y
 * `z` ordena el montón: los de adelante tapan a los del fondo.
 */
const FALLERS = [
  { id: "frutilla", fromX: -0.62, toX: -0.28, scale: 1, at: 0.0, spin: -26, rest: -4, z: 6 },
  { id: "arandanos", fromX: 0.5, toX: 0.24, scale: 0.86, at: 0.06, spin: 20, rest: -16, z: 4 },
  { id: "frambuesa", fromX: -0.2, toX: -0.06, scale: 0.94, at: 0.12, spin: 28, rest: -30, z: 2 },
  { id: "mango", fromX: 0.7, toX: 0.46, scale: 0.9, at: 0.18, spin: -18, rest: 2, z: 7 },
  { id: "anana", fromX: -0.46, toX: -0.46, scale: 0.84, at: 0.24, spin: 24, rest: 4, z: 8 },
  { id: "durazno", fromX: 0.14, toX: 0.12, scale: 0.88, at: 0.3, spin: -22, rest: -34, z: 1 },
  { id: "mix-patagonico", fromX: -0.74, toX: 0.04, scale: 0.96, at: 0.37, spin: 16, rest: 6, z: 9 },
  { id: "mix-rojo-premium", fromX: 0.34, toX: -0.2, scale: 0.82, at: 0.44, spin: -14, rest: -22, z: 3 },
] as const;

/** Tramo de la caída de cada fruto dentro del recorrido total. */
const FALL_SPAN = 0.45;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export function FruitFall() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const fruitRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const observer = new ResizeObserver(([entry]) => {
      setSize({
        w: entry.contentRect.width,
        h: entry.contentRect.height,
      });
    });
    observer.observe(scene);
    return () => observer.disconnect();
  }, []);

  const geometry = useMemo(() => {
    const bowlWidth = Math.min(430, size.w * 0.74);
    return {
      bowlWidth,
      bowlCenterX: size.w / 2,
      // Altura de la boca del bowl: los frutos descansan justo debajo.
      rimY: size.h * 0.62,
      fruitBase: Math.max(40, bowlWidth * 0.19),
      spread: size.w * 0.5,
    };
  }, [size]);

  /** Escribe la posición de cada fruto para un avance `p` de 0 a 1. */
  const applyProgress = useCallback(
    (p: number) => {
      const { bowlCenterX, rimY, fruitBase, spread, bowlWidth } = geometry;
      if (!bowlWidth) return;

      FALLERS.forEach((faller, index) => {
        const node = fruitRefs.current[index];
        if (!node) return;

        const local = clamp((p - faller.at) / FALL_SPAN, 0, 1);
        // La caída acelera, como cualquier cosa que cae de verdad.
        const fall = local * local;

        const startX = bowlCenterX + faller.fromX * spread;
        const endX = bowlCenterX + faller.toX * (bowlWidth * 0.42);
        // Apenas por encima del borde: si arrancan muy alto, el primer tramo
        // del scroll no muestra nada.
        const startY = -fruitBase - 24 - index * 18;
        // Quedan hundidos en la boca del bowl, no apoyados sobre el borde:
        // la pared delantera arranca cerca de rimY + 0.6 · tamaño del fruto.
        const endY = rimY + fruitBase * 0.6 + faller.rest * (fruitBase / 70);

        const x = startX + (endX - startX) * fall;
        const y = startY + (endY - startY) * fall;
        const rotation = faller.spin * (1 - fall);

        // Pequeño achatamiento al tocar el fondo.
        const settle = clamp((local - 0.86) / 0.14, 0, 1);
        const squash = 1 + 0.07 * Math.sin(settle * Math.PI);

        node.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg) scaleY(${
          2 - squash
        }) scaleX(${squash})`;
      });
    },
    [geometry],
  );

  useEffect(() => {
    if (!geometry.bowlWidth) return;

    // Sin movimiento: los frutos ya están servidos en el bowl.
    if (reducedMotion) {
      applyProgress(1);
      return;
    }

    let raf = 0;
    const update = () => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      applyProgress(distance <= 0 ? 1 : clamp(-rect.top / distance, 0, 1));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [applyProgress, geometry.bowlWidth, reducedMotion]);

  return (
    <section
      ref={trackRef}
      aria-label="Frutos cayendo en el bowl"
      className={
        reducedMotion ? "relative bg-white py-10" : "relative h-[170vh] bg-white"
      }
    >
      {/* Sin movimiento no hay nada que recorrer: el bowl ya está servido y la
          sección ocupa lo que necesita, no 170vh de scroll vacío. */}
      <div
        ref={sceneRef}
        className={
          reducedMotion
            ? "relative h-[75vh] overflow-hidden"
            : "sticky top-0 h-screen overflow-hidden"
        }
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[58%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ice-200/40 blur-3xl"
        />

        {/* El título va por delante: los frutos le pasan por detrás y el
            texto nunca queda tapado. */}
        <div className="relative z-20 px-5 pt-28 text-center sm:pt-[10%]">
          <h2 className="text-balance font-display text-2xl font-bold tracking-tight text-ice-950 sm:text-4xl">
            Cosechados en su punto justo
          </h2>
          <p className="mx-auto mt-3 max-w-md text-balance text-sm leading-relaxed text-ice-800/70 sm:text-base">
            Y congelados ahí mismo, para que lleguen a tu casa tal como
            salieron de la planta.
          </p>
        </div>

        {/* Interior del bowl: los frutos se apoyan sobre esta cara. */}
        <BowlBack geometry={geometry} />

        {FALLERS.map((faller, index) => {
          const product = getProductById(faller.id);
          if (!product) return null;
          const diameter = geometry.fruitBase * faller.scale;

          return (
            <div
              key={faller.id}
              ref={(node) => {
                fruitRefs.current[index] = node;
              }}
              className="pointer-events-none absolute left-0 top-0 -ml-[var(--r)] -mt-[var(--r)] rounded-full ring-1 ring-ice-900/10"
              style={
                {
                  width: diameter,
                  height: diameter,
                  "--r": `${diameter / 2}px`,
                  zIndex: faller.z,
                  willChange: "transform",
                } as React.CSSProperties
              }
            >
              <img
                src={product.image}
                alt=""
                loading="lazy"
                className="h-full w-full rounded-full object-cover shadow-lg shadow-ice-900/20"
              />
            </div>
          );
        })}

        {/* Pared delantera: tapa la parte baja de los frutos, así quedan
            realmente adentro del bowl y no apoyados encima. */}
        <BowlFront geometry={geometry} />
      </div>
    </section>
  );
}

type Geometry = {
  bowlWidth: number;
  bowlCenterX: number;
  rimY: number;
  fruitBase: number;
  spread: number;
};

function BowlBack({ geometry }: { geometry: Geometry }) {
  const { bowlWidth, rimY } = geometry;
  if (!bowlWidth) return null;

  return (
    <svg
      aria-hidden
      viewBox="0 0 400 200"
      width={bowlWidth}
      height={bowlWidth * 0.5}
      className="absolute left-1/2 -translate-x-1/2"
      style={{ top: rimY - bowlWidth * 0.5 * 0.12 }}
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

function BowlFront({ geometry }: { geometry: Geometry }) {
  const { bowlWidth, rimY } = geometry;
  if (!bowlWidth) return null;

  return (
    <svg
      aria-hidden
      viewBox="0 0 400 200"
      width={bowlWidth}
      height={bowlWidth * 0.5}
      className="pointer-events-none absolute left-1/2 z-10 -translate-x-1/2"
      style={{ top: rimY - bowlWidth * 0.5 * 0.12 }}
    >
      <defs>
        <linearGradient id="bowl-body" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#93d0e8" />
          <stop offset="0.55" stopColor="#5bb3d7" />
          <stop offset="1" stopColor="#267aa3" />
        </linearGradient>
      </defs>

      {/* cuerpo del bowl, desde la boca hacia abajo */}
      <path
        d="M4 48 C4 128, 92 186, 200 186 C308 186, 396 128, 396 48 C396 74, 308 94, 200 94 C92 94, 4 74, 4 48 Z"
        fill="url(#bowl-body)"
      />
      {/* borde de la boca */}
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
      {/* brillo */}
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
