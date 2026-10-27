# Antártico Ice

Sitio web del negocio de frutos congelados **Antártico Ice**: catálogo de
productos, carrito de compras y pedidos por WhatsApp.

Hecho con React + TypeScript + Vite + Tailwind CSS v4 + lucide-react.

## ⚠️ Antes de publicar: completá estos datos

Todo el contenido editable vive en dos archivos. **No hace falta tocar
ningún componente visual para actualizar precios o datos de contacto.**

### 1. Número de WhatsApp y datos de contacto

Editá [`src/config/site.ts`](src/config/site.ts):

```ts
export const siteConfig = {
  whatsappNumber: "5491170761604", // TODO: poné el número real
  instagramUrl: "https://instagram.com/antarticoice", // TODO
  instagramHandle: "@antarticoice", // TODO
  contactEmail: "", // opcional
  address: "", // opcional
  // ...
};
```

El número de WhatsApp tiene que ir en formato internacional, sin espacios
ni signos: código de país + código de área + número (ej. Argentina:
`549` + `11` + número de 8 dígitos).

### 2. Catálogo de productos, precios e imágenes

Editá [`src/data/products.ts`](src/data/products.ts). Cada producto tiene:

```ts
{
  id: "frutilla",
  name: "Frutilla congelada",
  category: "berries", // berries | tropicales | mixes | pulpas | otras
  description: "...",
  image: img("frutilla", 800), // ver src/data/images.ts
  presentations: [
    { label: "1 kg", price: 10000 },   // precio en ARS sin IVA
    { label: "500 g", price: 6800 },
    { label: "250 g", price: null },   // null = "Consultar precio"
  ],
}
```

- Para agregar o quitar productos, agregá o borrá objetos de este array.
- Para cambiar una imagen, agregá la URL en `src/data/images.ts` y
  referenciala con `img("miId", ancho)`. También podés poner una URL de
  imagen directamente en `image: "https://..."`.
- El catálogo incluye únicamente los productos que figuran en la tarifa
  provista, con los precios tal como están ahí.

## Requisitos

- Node.js 18 o superior
- npm (incluido con Node.js)

## Cómo correrlo localmente

```bash
npm install
npm run dev
```

Abrí [http://localhost:5173](http://localhost:5173) en el navegador.

## Verificar antes de publicar

```bash
npm run build    # compila TypeScript y genera la build de producción en dist/
npm run preview  # sirve esa build localmente para probarla
```

## Publicar en internet

El proyecto genera un sitio 100% estático (`dist/`), así que podés
publicarlo gratis en cualquiera de estas opciones:

### Opción A: Vercel (recomendada, más simple)

1. Subí este proyecto a un repositorio de GitHub.
2. Entrá a [vercel.com](https://vercel.com), creá una cuenta e importá el
   repositorio.
3. Vercel detecta Vite automáticamente (build command `npm run build`,
   output `dist`). Hacé click en "Deploy".

### Opción B: Netlify

1. Subí el proyecto a GitHub (o arrastrá la carpeta `dist` ya compilada a
   [app.netlify.com/drop](https://app.netlify.com/drop) para una prueba
   rápida sin repositorio).
2. Si conectás el repositorio: build command `npm run build`, publish
   directory `dist`.

### Opción C: Cualquier hosting estático

Corré `npm run build` y subí el contenido de la carpeta `dist/` a tu
hosting (cPanel, GitHub Pages, etc.).

## Estructura del proyecto

```
src/
  config/site.ts          → WhatsApp, Instagram, email, etc.
  data/products.ts        → catálogo, precios y presentaciones
  data/images.ts          → URLs de las fotografías
  types/product.ts        → tipos de producto y categorías
  context/CartContext.tsx → lógica del carrito de compras
  utils/whatsapp.ts        → generación de mensajes de WhatsApp
  utils/format.ts          → formato de precios en pesos argentinos
  components/
    layout/    → Header, Footer, carrito, botón flotante de WhatsApp
    home/      → Hero y sección "Por qué elegirnos"
    products/  → catálogo, tarjetas de producto, filtros y búsqueda
    sections/  → Nosotros, Mayorista, FAQ, Contacto
    ui/        → botones y componentes genéricos reutilizables
```

## Notas

- Los precios no incluyen IVA, tal como indica la tarifa original.
- El formulario de contacto no envía emails automáticamente (no hay
  backend configurado): al enviarlo, abre WhatsApp con el mensaje ya
  redactado para que el usuario lo confirme y lo mande.
- Las fotografías son de stock (Unsplash), libres de uso comercial.
  Podés reemplazarlas por fotos propias del producto en cualquier momento
  editando `src/data/images.ts` o el campo `image` de cada producto.
