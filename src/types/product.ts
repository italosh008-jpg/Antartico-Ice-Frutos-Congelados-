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

export interface HealthBenefit {
  /** Ej: "Rica en vitamina C" */
  title: string;
  /** Explicación breve, en lenguaje llano, sin hacer afirmaciones médicas. */
  description: string;
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
  /** Beneficios nutricionales/de salud asociados a la fruta, para la ficha de producto. */
  benefits?: HealthBenefit[];
}

export const categoryLabels: Record<ProductCategory, string> = {
  berries: "Frutos rojos",
  tropicales: "Tropicales",
  mixes: "Mixes",
  pulpas: "Pulpas",
  otras: "Otras frutas",
};
