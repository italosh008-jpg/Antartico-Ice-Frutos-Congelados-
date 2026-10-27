import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProductById } from "../data/products";
import type { Product } from "../types/product";

interface ProductDetailContextValue {
  product: Product | null;
  isOpen: boolean;
  openProduct: (id: string) => void;
  closeProduct: () => void;
}

const ProductDetailContext = createContext<ProductDetailContextValue | undefined>(
  undefined,
);

export function ProductDetailProvider({ children }: { children: ReactNode }) {
  const [productId, setProductId] = useState<string | null>(null);

  const openProduct = useCallback((id: string) => setProductId(id), []);
  const closeProduct = useCallback(() => setProductId(null), []);

  const product = useMemo(
    () => (productId ? getProductById(productId) ?? null : null),
    [productId],
  );

  const value: ProductDetailContextValue = {
    product,
    isOpen: product !== null,
    openProduct,
    closeProduct,
  };

  return (
    <ProductDetailContext.Provider value={value}>
      {children}
    </ProductDetailContext.Provider>
  );
}

export function useProductDetail(): ProductDetailContextValue {
  const ctx = useContext(ProductDetailContext);
  if (!ctx)
    throw new Error(
      "useProductDetail debe usarse dentro de <ProductDetailProvider>",
    );
  return ctx;
}
