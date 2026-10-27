import { useProductDetail } from "../../context/ProductDetailContext";
import { useProductSelection } from "../../hooks/useProductSelection";
import type { Product } from "../../types/product";
import { ProductActions } from "./ProductActions";

export function ProductCard({ product }: { product: Product }) {
  const selection = useProductSelection(product);
  const { openProduct } = useProductDetail();

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-ice-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-ice-900/10">
      <button
        type="button"
        onClick={() => openProduct(product.id)}
        aria-label={`Ver detalle de ${product.name}`}
        className="relative aspect-4/3 overflow-hidden bg-ice-50 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ice-400 focus-visible:ring-offset-2"
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
  );
}
