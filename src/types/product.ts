export type ProductCategory =
  | "berries"
  | "tropicales"
  | "mixes"
  | "pulpas"
  | "otras";

export interface ProductPresentation {
  /** Ej: "1 kg", "500 g", "250 g" */
  label: string;
  /** Precio en ARS sin IVA. Dejar en null para mostrar "Consultar precio". */
  price: number | null;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
  presentations: ProductPresentation[];
  /** Producto destacado en la home */
  featured?: boolean;
}

export const categoryLabels: Record<ProductCategory, string> = {
  berries: "Frutos rojos",
  tropicales: "Tropicales",
  mixes: "Mixes",
  pulpas: "Pulpas",
  otras: "Otras frutas",
};
