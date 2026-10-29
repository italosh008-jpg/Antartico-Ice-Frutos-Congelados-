import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../utils/format";
import { cartWhatsAppUrl } from "../../utils/whatsapp";
import { ButtonLink } from "../ui/Button";

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    lineDetails,
    totalPrice,
    hasUnpricedItems,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-ice-950/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-label="Carrito de compras"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-ice-100 px-6 py-5">
          <h2 className="flex items-center gap-2 text-lg font-bold text-ice-950">
            <ShoppingBag className="h-5 w-5 text-ice-600" />
            Tu pedido
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Cerrar carrito"
            className="tap flex h-9 w-9 items-center justify-center rounded-full text-ice-600 hover:bg-ice-50"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {lineDetails.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ice-50">
              <ShoppingBag className="h-7 w-7 text-ice-300" />
            </div>
            <p className="font-semibold text-ice-900">Tu carrito está vacío</p>
            <p className="text-sm text-ice-700/70">
              Agregá productos desde el catálogo para armar tu pedido y enviarlo por
              WhatsApp.
            </p>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto scrollbar-thin px-6 py-4">
              {lineDetails.map((item) => (
                <li
                  key={`${item.productId}-${item.presentationLabel}`}
                  className="flex gap-3 border-b border-ice-50 py-4 last:border-none"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    loading="lazy"
                    className="h-16 w-16 shrink-0 rounded-xl object-cover"
                  />
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-semibold text-ice-950">
                        {item.product.name}
                      </p>
                      <button
                        type="button"
                        onClick={() =>
                          removeItem(item.productId, item.presentationLabel)
                        }
                        aria-label={`Quitar ${item.product.name}`}
                        className="tap shrink-0 text-ice-300 hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-xs font-medium text-ice-600">
                      {item.presentation.label}
                    </p>

                    <div className="mt-1 flex items-center justify-between">
                      <div className="flex items-center gap-1 rounded-full border border-ice-100 p-1">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              item.presentationLabel,
                              item.quantity - 1,
                            )
                          }
                          aria-label="Restar cantidad"
                          className="tap flex h-6 w-6 items-center justify-center rounded-full text-ice-700 hover:bg-ice-50"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm font-semibold text-ice-950">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              item.presentationLabel,
                              item.quantity + 1,
                            )
                          }
                          aria-label="Sumar cantidad"
                          className="tap flex h-6 w-6 items-center justify-center rounded-full text-ice-700 hover:bg-ice-50"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-bold text-ice-900">
                        {item.lineTotal !== null
                          ? formatPrice(item.lineTotal)
                          : "A consultar"}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-ice-100 px-6 py-5">
              <div className="mb-1 flex items-center justify-between text-sm text-ice-700">
                <span>Subtotal</span>
                <span className="font-semibold text-ice-950">
                  {formatPrice(totalPrice)}
                </span>
              </div>
              {hasUnpricedItems && (
                <p className="mb-3 text-xs text-ice-600">
                  Hay productos a consultar: el precio final se confirma por
                  WhatsApp.
                </p>
              )}
              <p className="mb-4 text-xs text-ice-700/60">
                Los precios no incluyen IVA. El total final se confirma por
                WhatsApp.
              </p>

              <ButtonLink
                href={cartWhatsAppUrl(lineDetails)}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Enviar pedido por WhatsApp
              </ButtonLink>
              <button
                type="button"
                onClick={clearCart}
                className="tap-soft mt-2 w-full rounded-full py-2 text-xs font-semibold text-ice-500 hover:text-red-500"
              >
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
