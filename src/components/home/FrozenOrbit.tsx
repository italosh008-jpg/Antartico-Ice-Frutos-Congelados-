import { useEffect, useRef, useState } from "react";
import { useProductDetail } from "../../context/ProductDetailContext";
import { products } from "../../data/products";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { Container } from "../ui/Container";

const ORBIT_DURATION = "44s";

/**
 * Momento focal del sitio: los frutos quedan suspendidos girando en 3D real
 * alrededor del núcleo frío. Los de adelante tapan el núcleo y los de atrás
 * pasan por detrás, así que la profundidad es de verdad, no simulada.
 *
 * Cada fruto es un acceso directo a su ficha de producto.
 */
export function FrozenOrbit() {
  const { openProduct } = useProductDetail();
  const reducedMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(true);

  // La órbita es un bucle decorativo: solo corre mientras se la está viendo.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPaused(!entry.isIntersecting),
      { rootMargin: "80px" },
    );
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-ice-950 py-20 text-white sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ice-600/20 blur-3xl"
      />

      <Container className="relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Suspendidos en el frío
          </h2>
          <p className="text-balance text-base leading-relaxed text-ice-100/80">
            Cada fruta queda detenida en su mejor momento, con su color y su
            sabor intactos. Tocá cualquiera para ver su ficha.
          </p>
        </div>

        {reducedMotion ? (
          <StaticGrid onSelect={openProduct} />
        ) : (
          <div
            ref={stageRef}
            data-paused={paused}
            className="orbit-stage mt-10 sm:mt-14"
          >
            <div className="orbit-ring relative mx-auto h-[230px] w-full sm:h-[330px] lg:h-[390px]">
              <IceCore />

              {products.map((product, index) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => openProduct(product.id)}
                  title={product.name}
                  aria-label={`Ver ficha de ${product.name}`}
                  style={
                    {
                      "--i": index,
                      "--n": products.length,
                      "--orbit-duration": ORBIT_DURATION,
                    } as React.CSSProperties
                  }
                  className="orbit-item absolute left-1/2 top-1/2 -ml-7 -mt-7 h-14 w-14 rounded-full ring-2 ring-white/20 transition-shadow duration-300 hover:ring-white/70 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ice-300 sm:-ml-10 sm:-mt-10 sm:h-20 sm:w-20 lg:-ml-11 lg:-mt-11 lg:h-22 lg:w-22"
                >
                  <img
                    src={product.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full rounded-full object-cover shadow-xl shadow-ice-950/50"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

function IceCore() {
  return (
    <div className="orbit-core absolute left-1/2 top-1/2 flex h-24 w-24 flex-col items-center justify-center rounded-full border border-white/15 bg-white/5 text-center backdrop-blur-md sm:h-36 sm:w-36 lg:h-40 lg:w-40">
      <span className="font-display text-lg font-extrabold text-white sm:text-2xl lg:text-3xl">
        −18 °C
      </span>
      <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-ice-200 sm:mt-1 sm:text-[10px]">
        Conservación
      </span>
    </div>
  );
}

/** Alternativa quieta para quien pidió menos movimiento. */
function StaticGrid({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <div className="mt-12 grid grid-cols-3 justify-items-center gap-6 sm:grid-cols-5">
      {products.map((product) => (
        <button
          key={product.id}
          type="button"
          onClick={() => onSelect(product.id)}
          aria-label={`Ver ficha de ${product.name}`}
          className="group flex flex-col items-center gap-2 focus-visible:outline-none"
        >
          <img
            src={product.image}
            alt=""
            loading="lazy"
            className="h-20 w-20 rounded-full object-cover ring-2 ring-white/20 transition-colors group-hover:ring-white/60 sm:h-24 sm:w-24"
          />
          <span className="text-xs font-semibold text-ice-100">
            {product.name}
          </span>
        </button>
      ))}
    </div>
  );
}
