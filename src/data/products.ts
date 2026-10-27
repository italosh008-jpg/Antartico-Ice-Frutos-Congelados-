import { img } from "./images";
import type { Product } from "../types/product";

/**
 * Catálogo de productos de Antártico Ice.
 *
 * Para modificar precios, descripciones, presentaciones o agregar/quitar
 * productos, editá únicamente este archivo. El resto del sitio (catálogo,
 * carrito y mensajes de WhatsApp) se actualiza automáticamente.
 *
 * Si un producto todavía no tiene precio definido, dejá `price: null` y
 * la web mostrará "Consultar precio".
 */
export const products: Product[] = [
  {
    id: "frutilla",
    name: "Frutilla congelada",
    category: "berries",
    description:
      "Frutillas congeladas en su punto justo de maduración, ideales para licuados, postres y mermeladas caseras.",
    image: img("frutilla", 800),
    featured: true,
    presentations: [
      { label: "1 kg", price: 10000 },
      { label: "500 g", price: 6800 },
      { label: "250 g", price: 4600 },
    ],
  },
  {
    id: "arandanos",
    name: "Arándanos congelados",
    category: "berries",
    description:
      "Arándanos enteros congelados, ricos en antioxidantes. Perfectos para desayunos, batidos y repostería.",
    image: img("arandano", 800),
    featured: true,
    presentations: [
      { label: "1 kg", price: 16800 },
      { label: "500 g", price: 9700 },
      { label: "250 g", price: 5500 },
    ],
  },
  {
    id: "frambuesa",
    name: "Frambuesa congelada",
    category: "berries",
    description:
      "Frambuesas congeladas de sabor intenso, cosechadas y congeladas rápidamente para conservar todo su aroma.",
    image: img("frambuesa", 800),
    featured: true,
    presentations: [
      { label: "1 kg", price: 30100 },
      { label: "500 g", price: 18600 },
      { label: "250 g", price: 11200 },
    ],
  },
  {
    id: "mango",
    name: "Mango congelado",
    category: "tropicales",
    description:
      "Trozos de mango congelado, dulce y jugoso, listos para licuados, bowls y postres tropicales.",
    image: img("mango", 800),
    presentations: [
      { label: "1 kg", price: 11400 },
      { label: "500 g", price: 7200 },
      { label: "250 g", price: 4900 },
    ],
  },
  {
    id: "anana",
    name: "Ananá congelado",
    category: "tropicales",
    description:
      "Trozos de ananá congelado, frescos y listos para usar en jugos, licuados y guarniciones.",
    image: img("anana", 800),
    featured: true,
    presentations: [
      { label: "1 kg", price: 16900 },
      { label: "500 g", price: 10100 },
      { label: "250 g", price: 5400 },
    ],
  },
  {
    id: "durazno",
    name: "Durazno congelado",
    category: "otras",
    description:
      "Duraznos congelados en gajos, ideales para postres, compotas y preparaciones dulces.",
    image: img("durazno", 800),
    presentations: [
      { label: "1 kg", price: 11000 },
      { label: "500 g", price: 6800 },
      { label: "250 g", price: 4400 },
    ],
  },
  {
    id: "mix-patagonico",
    name: "Mix Patagónico",
    category: "mixes",
    description:
      "Selección de frutos rojos congelados estilo patagónico, perfecta para disfrutar en cualquier momento del año.",
    image: img("mixFrutosRojos", 800),
    featured: true,
    presentations: [
      { label: "1 kg", price: 17600 },
      { label: "500 g", price: 11200 },
      { label: "250 g", price: 6800 },
    ],
  },
  {
    id: "mix-rojo-premium",
    name: "Mix Rojo Premium",
    category: "mixes",
    description:
      "Combinación premium de frutos rojos congelados, seleccionados por su calidad y sabor.",
    image: img("mixFrutosRojos", 800, 70),
    presentations: [
      { label: "1 kg", price: 19700 },
      { label: "500 g", price: 11500 },
      { label: "250 g", price: 7600 },
    ],
  },
  {
    id: "pulpa-lima-tahiti",
    name: "Pulpa de Lima Tahití",
    category: "pulpas",
    description:
      "Pulpa de lima Tahití congelada, lista para jugos, tragos y postres con un toque cítrico.",
    image: img("lima", 800),
    presentations: [{ label: "1 kg", price: 11500 }],
  },
  {
    id: "pulpa-maracuya",
    name: "Pulpa de Maracuyá",
    category: "pulpas",
    description:
      "Pulpa de maracuyá congelada, con todo el aroma y la acidez característica de la fruta de la pasión.",
    image: img("maracuya", 800),
    presentations: [{ label: "1 kg", price: 16200 }],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
