/**
 * IDs base de las fotografías (Unsplash) usadas en el sitio.
 * `img()` arma la URL final con el ancho y la calidad pedidos,
 * para que cada componente pida solo el tamaño que necesita.
 */
const BASE_IDS = {
  hero: "https://images.unsplash.com/photo-1438907046657-4ae137eb8c5e",
  frutilla: "https://images.unsplash.com/photo-1749243666446-fa1a6420f6c9",
  arandano: "https://plus.unsplash.com/premium_photo-1674831509063-e68252300846",
  frambuesa: "https://images.unsplash.com/photo-1633073559427-d2f518f12d90",
  mango: "https://images.unsplash.com/photo-1519096845289-95806ee03a1a",
  anana: "https://images.unsplash.com/photo-1614963366795-973eb8748ebb",
  mixPatagonico: "https://images.unsplash.com/photo-1580691155297-c6dfa3ca61c4",
  // Recortada (rect) para excluir los arándanos de fondo del original: este
  // mix es solo frambuesa + frutilla.
  mixRojoPremium:
    "https://images.unsplash.com/photo-1556048029-9c5edf1aa695?rect=150,0,1850,1100",
  aboutUs: "https://images.unsplash.com/photo-1708923345245-c972fd41c792",
  wholesale: "https://images.unsplash.com/photo-1500301802642-622bee979621",
  durazno: "https://images.unsplash.com/photo-1629828874514-c1e5103f2150",
  lima: "https://images.unsplash.com/photo-1739355992720-ad5281700da4",
  maracuya: "https://images.unsplash.com/photo-1574358725225-f9c7fe12d354",
} as const;

export function img(
  id: keyof typeof BASE_IDS,
  width: number,
  quality = 80,
): string {
  const base = BASE_IDS[id];
  const separator = base.includes("?") ? "&" : "?";
  return `${base}${separator}w=${width}&q=${quality}&auto=format&fit=crop`;
}
