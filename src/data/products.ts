import { img } from "./images";
import type { Product } from "../types/product";

/**
 * Catálogo de productos de Antártico Ice.
 *
 * Para modificar precios, descripciones, presentaciones, beneficios o
 * agregar/quitar productos, editá únicamente este archivo. El resto del
 * sitio (catálogo, ficha de producto, carrito y mensajes de WhatsApp) se
 * actualiza automáticamente.
 *
 * Si un producto todavía no tiene precio definido, dejá `price: null` y
 * la web mostrará "Consultar precio".
 *
 * `benefits` son datos nutricionales generales y conocidos de cada fruta
 * (no afirmaciones médicas ni promesas de la marca) y se muestran en la
 * ficha de producto.
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
    benefits: [
      {
        title: "Fuente de vitamina C",
        description:
          "Aporta una buena cantidad de vitamina C, que contribuye al funcionamiento normal del sistema inmunitario.",
      },
      {
        title: "Antioxidantes naturales",
        description:
          "Contiene antocianinas, los pigmentos que le dan su color rojo y actúan como antioxidantes.",
      },
      {
        title: "Baja en calorías",
        description:
          "Es una fruta con bajo aporte calórico y buen contenido de fibra, ideal para una alimentación equilibrada.",
      },
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
    benefits: [
      {
        title: "Altos en antioxidantes",
        description:
          "Son una de las frutas con mayor concentración de antocianinas, los antioxidantes responsables de su color azulado.",
      },
      {
        title: "Fuente de vitamina K y C",
        description:
          "Aportan vitamina K y vitamina C dentro de una dieta variada y equilibrada.",
      },
      {
        title: "Aportan fibra",
        description:
          "Suman fibra dietaria, que ayuda a la digestión y a la sensación de saciedad.",
      },
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
    benefits: [
      {
        title: "Muy ricas en fibra",
        description:
          "Están entre las frutas con mayor contenido de fibra dietaria por porción.",
      },
      {
        title: "Fuente de vitamina C",
        description:
          "Aportan vitamina C, que contribuye al funcionamiento normal del sistema inmunitario.",
      },
      {
        title: "Antioxidantes naturales",
        description:
          "Contienen compuestos antioxidantes como el ácido elágico, presente en varios frutos rojos.",
      },
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
    benefits: [
      {
        title: "Rico en vitamina C",
        description:
          "Es una fruta con alto contenido de vitamina C, que contribuye al sistema inmunitario.",
      },
      {
        title: "Aporta vitamina A",
        description:
          "Contiene betacarotenos, precursores de la vitamina A, que le dan su color naranja característico.",
      },
      {
        title: "Fuente de fibra",
        description:
          "Suma fibra dietaria, útil para una digestión saludable.",
      },
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
    benefits: [
      {
        title: "Muy rico en vitamina C",
        description:
          "Una porción cubre buena parte del requerimiento diario de vitamina C.",
      },
      {
        title: "Contiene bromelina",
        description:
          "Aporta bromelina, una enzima natural de la fruta, tradicionalmente asociada a la digestión.",
      },
      {
        title: "Fuente de manganeso",
        description:
          "Suma manganeso, un mineral que participa en distintos procesos del organismo.",
      },
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
    benefits: [
      {
        title: "Fuente de vitamina C y A",
        description:
          "Aporta vitamina C y betacarotenos (provitamina A) dentro de una dieta equilibrada.",
      },
      {
        title: "Bajo en calorías",
        description:
          "Es una fruta liviana, con buen contenido de agua y fibra.",
      },
      {
        title: "Aporta potasio",
        description:
          "Suma potasio, un mineral presente de forma natural en la mayoría de las frutas frescas.",
      },
    ],
  },
  {
    id: "mix-patagonico",
    name: "Mix Patagónico",
    category: "mixes",
    description:
      "Mix de arándanos, frambuesas y frutillas congeladas, la combinación clásica de frutos rojos patagónicos en un solo producto.",
    image: img("mixPatagonico", 800),
    featured: true,
    presentations: [
      { label: "1 kg", price: 17600 },
      { label: "500 g", price: 11200 },
      { label: "250 g", price: 6800 },
    ],
    benefits: [
      {
        title: "Tres frutos rojos en uno",
        description:
          "Suma los antioxidantes naturales del arándano, la frambuesa y la frutilla en una sola porción.",
      },
      {
        title: "Rico en vitamina C",
        description:
          "Las tres frutas aportan vitamina C, que contribuye al funcionamiento normal del sistema inmunitario.",
      },
      {
        title: "Fuente de fibra",
        description:
          "Suma la fibra dietaria característica de los frutos rojos, útil para una digestión saludable.",
      },
    ],
  },
  {
    id: "mix-rojo-premium",
    name: "Mix Rojo Premium",
    category: "mixes",
    description:
      "Mix premium de frambuesas y frutillas congeladas, seleccionadas por su calidad y sabor, sin arándanos.",
    image: img("mixRojoPremium", 800),
    presentations: [
      { label: "1 kg", price: 19700 },
      { label: "500 g", price: 11500 },
      { label: "250 g", price: 7600 },
    ],
    benefits: [
      {
        title: "Combinación 100% roja",
        description:
          "Une frambuesa y frutilla, dos frutos rojos de sabor intenso, sin mezclar con otras variedades.",
      },
      {
        title: "Rico en vitamina C",
        description:
          "Ambas frutas aportan vitamina C, que contribuye al funcionamiento normal del sistema inmunitario.",
      },
      {
        title: "Antioxidantes naturales",
        description:
          "Suma los antioxidantes propios de la frambuesa y la frutilla, responsables de su color intenso.",
      },
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
    benefits: [
      {
        title: "Fuente de vitamina C",
        description:
          "Como todo cítrico, aporta vitamina C, que contribuye al sistema inmunitario.",
      },
      {
        title: "Antioxidantes cítricos",
        description:
          "Contiene compuestos antioxidantes propios de los cítricos, como los flavonoides.",
      },
      {
        title: "Aporta hidratación",
        description:
          "Al tratarse de pulpa, conserva el agua natural de la fruta, ideal para bebidas y jugos.",
      },
    ],
  },
  {
    id: "pulpa-maracuya",
    name: "Pulpa de Maracuyá",
    category: "pulpas",
    description:
      "Pulpa de maracuyá congelada, con todo el aroma y la acidez característica de la fruta de la pasión.",
    image: img("maracuya", 800),
    presentations: [{ label: "1 kg", price: 16200 }],
    benefits: [
      {
        title: "Rica en vitamina C",
        description:
          "Aporta vitamina C, que contribuye al funcionamiento normal del sistema inmunitario.",
      },
      {
        title: "Fuente de fibra",
        description:
          "Sus semillas comestibles suman fibra dietaria a la preparación.",
      },
      {
        title: "Aporta vitamina A",
        description:
          "Contiene carotenoides, precursores de la vitamina A.",
      },
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
