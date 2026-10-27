import { useState } from "react";
import type { Product } from "../types/product";

/**
 * Estado compartido de "presentación + cantidad elegidas" para un producto,
 * usado tanto en la tarjeta del catálogo como en la ficha de detalle.
 */
export function useProductSelection(product: Product) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const presentation = product.presentations[selectedIndex] ?? product.presentations[0];

  function selectPresentation(index: number) {
    setSelectedIndex(index);
  }

  function increment() {
    setQuantity((q) => Math.min(99, q + 1));
  }

  function decrement() {
    setQuantity((q) => Math.max(1, q - 1));
  }

  function reset() {
    setQuantity(1);
  }

  return {
    selectedIndex,
    selectPresentation,
    presentation,
    quantity,
    increment,
    decrement,
    reset,
  };
}
