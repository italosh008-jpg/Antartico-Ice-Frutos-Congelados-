import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import type { useProductSelection } from "../../hooks/useProductSelection";
import type { Product } from "../../types/product";
import { formatPrice } from "../../utils/format";
import { singleProductWhatsAppUrl } from "../../utils/whatsapp";
import { Button } from "../ui/Button";

interface ProductActionsProps {
  product: Product;
  selection: ReturnType<typeof useProductSelection>;
}

/**
 * Selector de presentación + cantidad + agregar al carrito + consultar por
 * WhatsApp. Se usa tanto en la tarjeta del catálogo como en la ficha de
 * detalle, para no duplicar la lógica de compra en dos lugares.
 */
export function ProductActions({ product, selection }: ProductActionsProps) {
  const { addItem } = useCart();
  const {
    selectedIndex,
    selectPresentation,
    presentation,
    quantity,
    increment,
    decrement,
    reset,
  } = selection;

  function handleAdd() {
    addItem(product.id, presentation.label, quantity);
    reset();
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        {product.presentations.map((p, index) => (
          <button
            key={p.label}
            type="button"
            onClick={() => selectPresentation(index)}
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
            onClick={decrement}
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
            onClick={increment}
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
  );
}
