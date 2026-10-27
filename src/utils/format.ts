export function formatPrice(price: number | null): string {
  if (price === null) return "Consultar precio";
  return price.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  });
}
