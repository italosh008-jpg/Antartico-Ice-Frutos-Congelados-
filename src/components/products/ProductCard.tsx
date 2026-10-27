import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import type { Product } from "../../types/product";
import { formatPrice } from "../../utils/format";
import { singleProductWhatsAppUrl } from "../../utils/whatsapp";
import { Button } from "../ui/Button";

export function ProductCard({ product }: { product: Product }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const presentation = product.presentations[selectedIndex];

  function handleAdd() {
    addItem(product.id, presentation.label, quantity);
    setQuantity(1);
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-ice-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-ice-900/10">
      <div className="relative aspect-4/3 overflow-hidden bg-ice-50">
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
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-lg font-bold text-ice-950">{product.name}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-ice-800/70">
            {product.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {product.presentations.map((p, index) => (
            <button
              key={p.label}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                index === selectedIndex
                  ? "border-ice-600 bg-ice-600 text-white"
                  : "border-ice-200 text-ice-700 hover:border-ice-400"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-3">
          <div className="flex items-baseline justify-between">
            <span className="text-xl font-extrabold text-ice-950">
              {formatPrice(presentation.price)}
            </span>
            {presentation.price !== null && (
              <span className="text-xs text-ice-700/60">+ IVA</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full border border-ice-200 p-1">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Restar cantidad"
                className="flex h-7 w-7 items-center justify-center rounded-full text-ice-700 transition-colors hover:bg-ice-50"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-6 text-center text-sm font-semibold text-ice-950">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                aria-label="Sumar cantidad"
                className="flex h-7 w-7 items-center justify-center rounded-full text-ice-700 transition-colors hover:bg-ice-50"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>

            <Button
              type="button"
              onClick={handleAdd}
              variant="primary"
              size="md"
              className="flex-1"
            >
              <ShoppingCart className="h-4 w-4" />
              Agregar
            </Button>
          </div>

          <a
            href={singleProductWhatsAppUrl({
              productName: product.name,
              presentationLabel: presentation.label,
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-xs font-semibold text-ice-600 transition-colors hover:text-ice-800"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
