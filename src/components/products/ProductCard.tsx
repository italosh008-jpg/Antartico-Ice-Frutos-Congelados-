import { useProductDetail } from "../../context/ProductDetailContext";
import { useProductSelection } from "../../hooks/useProductSelection";
import { useTilt } from "../../hooks/useTilt";
import type { Product } from "../../types/product";
import { ProductActions } from "./ProductActions";

export function ProductCard({ product }: { product: Product }) {
  const selection = useProductSelection(product);
  const { openProduct } = useProductDetail();
  const { ref, enabled: tiltEnabled, tiltProps } = useTilt<HTMLElement>();

  return (
    <div className="[perspective:1000px]">
      <article
        ref={ref}
        {...tiltProps}
        className={`group flex h-full flex-col rounded-3xl border border-ice-100 bg-white shadow-sm shadow-ice-900/5 transition-shadow duration-300 hover:shadow-2xl hover:shadow-ice-900/15 ${
          tiltEnabled ? "[transform-style:preserve-3d]" : ""
        }`}
      >
        <button
          type="button"
          onClick={() => openProduct(product.id)}
          aria-label={`Ver detalle de ${product.name}`}
          className="relative aspect-4/3 overflow-hidden rounded-t-3xl bg-ice-50 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ice-400 focus-visible:ring-offset-2"
          style={tiltEnabled ? { transform: "translateZ(26px)" } : undefined}
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {product.featured && (
            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ice-700 backdrop-blur-sm">
              Destacado
            </span>
          )}
        </button>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <button
            type="button"
            onClick={() => openProduct(product.id)}
            className="text-left focus-visible:outline-none"
          >
            <h3 className="text-lg font-bold text-ice-950 transition-colors group-hover:text-ice-700">
              {product.name}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ice-800/70">
              {product.description}
            </p>
          </button>

          <div className="mt-auto">
            <ProductActions product={product} selection={selection} />
          </div>
        </div>
      </article>
    </div>
  );
}
