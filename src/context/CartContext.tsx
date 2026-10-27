import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProductById } from "../data/products";
import type { Product, ProductPresentation } from "../types/product";

export interface CartLine {
  productId: string;
  presentationLabel: string;
  quantity: number;
}

export interface CartLineDetails extends CartLine {
  product: Product;
  presentation: ProductPresentation;
  lineTotal: number | null;
}

interface CartContextValue {
  lines: CartLine[];
  lineDetails: CartLineDetails[];
  totalItems: number;
  totalPrice: number;
  hasUnpricedItems: boolean;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (
    productId: string,
    presentationLabel: string,
    quantity?: number,
  ) => void;
  updateQuantity: (
    productId: string,
    presentationLabel: string,
    quantity: number,
  ) => void;
  removeItem: (productId: string, presentationLabel: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

function sameLine(a: CartLine, productId: string, presentationLabel: string) {
  return a.productId === productId && a.presentationLabel === presentationLabel;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback(
    (productId: string, presentationLabel: string, quantity = 1) => {
      setLines((prev) => {
        const existing = prev.find((l) =>
          sameLine(l, productId, presentationLabel),
        );
        if (existing) {
          return prev.map((l) =>
            sameLine(l, productId, presentationLabel)
              ? { ...l, quantity: l.quantity + quantity }
              : l,
          );
        }
        return [...prev, { productId, presentationLabel, quantity }];
      });
      setIsOpen(true);
    },
    [],
  );

  const updateQuantity = useCallback(
    (productId: string, presentationLabel: string, quantity: number) => {
      setLines((prev) => {
        if (quantity <= 0) {
          return prev.filter((l) => !sameLine(l, productId, presentationLabel));
        }
        return prev.map((l) =>
          sameLine(l, productId, presentationLabel) ? { ...l, quantity } : l,
        );
      });
    },
    [],
  );

  const removeItem = useCallback(
    (productId: string, presentationLabel: string) => {
      setLines((prev) =>
        prev.filter((l) => !sameLine(l, productId, presentationLabel)),
      );
    },
    [],
  );

  const clearCart = useCallback(() => setLines([]), []);

  const lineDetails = useMemo<CartLineDetails[]>(() => {
    return lines
      .map((line) => {
        const product = getProductById(line.productId);
        if (!product) return null;
        const presentation = product.presentations.find(
          (p) => p.label === line.presentationLabel,
        );
        if (!presentation) return null;
        const lineTotal =
          presentation.price !== null ? presentation.price * line.quantity : null;
        return { ...line, product, presentation, lineTotal };
      })
      .filter((l): l is CartLineDetails => l !== null);
  }, [lines]);

  const totalItems = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines],
  );

  const totalPrice = useMemo(
    () =>
      lineDetails.reduce(
        (sum, l) => sum + (l.lineTotal !== null ? l.lineTotal : 0),
        0,
      ),
    [lineDetails],
  );

  const hasUnpricedItems = useMemo(
    () => lineDetails.some((l) => l.lineTotal === null),
    [lineDetails],
  );

  const value: CartContextValue = {
    lines,
    lineDetails,
    totalItems,
    totalPrice,
    hasUnpricedItems,
    isOpen,
    openCart,
    closeCart,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
