import { Leaf, X } from "lucide-react";
import { useEffect } from "react";
import { useProductDetail } from "../../context/ProductDetailContext";
import { useProductSelection } from "../../hooks/useProductSelection";
import { categoryLabels } from "../../types/product";
import { ProductActions } from "./ProductActions";

function ProductDetailBody({
  product,
}: {
  product: NonNullable<ReturnType<typeof useProductDetail>["product"]>;
}) {
  const selection = useProductSelection(product);

  return (
    <div className="grid md:grid-cols-2">
      <div className="relative aspect-4/3 md:aspect-auto md:h-full">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover md:rounded-l-3xl"
        />
      </div>

      <div className="flex flex-col gap-5 p-6 sm:p-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-ice-500">
            {categoryLabels[product.category]}
          </span>
          <h2 className="mt-1.5 text-2xl font-bold text-ice-950 sm:text-3xl">
            {product.name}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ice-800/70 sm:text-base">
            {product.description}
          </p>
        </div>

        {product.benefits && product.benefits.length > 0 && (
          <div className="rounded-2xl bg-frost-50 p-5">
            <h3 className="text-sm font-bold text-ice-950">
              Beneficios de esta fruta
            </h3>
            <ul className="mt-3 flex flex-col gap-3">
              {product.benefits.map((benefit) => (
                <li key={benefit.title} className="flex gap-2.5">
                  <Leaf
                    className="mt-0.5 h-4 w-4 shrink-0 text-ice-500"
                    strokeWidth={2}
                  />
                  <div>
                    <p className="text-sm font-semibold text-ice-900">
                      {benefit.title}
                    </p>
                    <p className="text-sm leading-relaxed text-ice-800/70">
                      {benefit.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[11px] leading-relaxed text-ice-700/50">
              Información nutricional general de la fruta, no reemplaza el
              consejo de un profesional de la salud.
            </p>
          </div>
        )}

        <div className="mt-auto border-t border-ice-100 pt-5">
          <ProductActions product={product} selection={selection} />
        </div>
      </div>
    </div>
  );
}

export function ProductDetailModal() {
  const { product, isOpen, closeProduct } = useProductDetail();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeProduct();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeProduct]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
        isOpen ? "" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <div
        onClick={closeProduct}
        className={`absolute inset-0 bg-ice-950/50 backdrop-blur-sm transition-opacity duration-200 ease-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {product && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={product.name}
          className={`relative max-h-[90vh] w-full max-w-4xl overflow-y-auto scrollbar-thin rounded-3xl bg-white shadow-2xl transition-[transform,opacity] duration-[220ms] ease-[var(--ease-out-strong)] motion-reduce:scale-100 motion-reduce:transition-opacity ${
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={closeProduct}
            aria-label="Cerrar ficha de producto"
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ice-700 shadow-md backdrop-blur-sm transition-colors hover:bg-white hover:text-ice-900"
          >
            <X className="h-5 w-5" />
          </button>

          <ProductDetailBody product={product} />
        </div>
      )}
    </div>
  );
}
