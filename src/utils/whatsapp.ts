import { buildWhatsAppUrl } from "../config/site";
import type { CartLineDetails } from "../context/CartContext";
import { formatPrice } from "./format";

export function singleProductWhatsAppUrl(params: {
  productName: string;
  presentationLabel?: string;
}): string {
  const { productName, presentationLabel } = params;
  const lines = [
    "¡Hola Antártico Ice! 👋",
    `Quiero consultar por: *${productName}*${
      presentationLabel ? ` (${presentationLabel})` : ""
    }.`,
  ];
  return buildWhatsAppUrl(lines.join("\n"));
}

export function cartWhatsAppUrl(items: CartLineDetails[]): string {
  const header = "¡Hola Antártico Ice! 👋\nQuiero hacer el siguiente pedido:\n";

  const body = items
    .map((item) => {
      const priceText =
        item.lineTotal !== null
          ? ` — ${formatPrice(item.lineTotal)}`
          : " — a consultar";
      return `• ${item.product.name} (${item.presentation.label}) x${item.quantity}${priceText}`;
    })
    .join("\n");

  const hasUnpriced = items.some((i) => i.lineTotal === null);
  const total = items.reduce((sum, i) => sum + (i.lineTotal ?? 0), 0);
  const totalText = hasUnpriced
    ? `\n\nSubtotal estimado: ${formatPrice(total)} (hay productos a consultar)`
    : `\n\nTotal: ${formatPrice(total)}`;

  const footer = "\n\n¿Me confirmás disponibilidad y forma de entrega? ¡Gracias!";

  return buildWhatsAppUrl(header + body + totalText + footer);
}

export function wholesaleWhatsAppUrl(): string {
  const message = [
    "¡Hola Antártico Ice! 👋",
    "Soy de un comercio gastronómico y quiero solicitar una cotización mayorista.",
    "Rubro: ",
    "Productos de interés: ",
    "Volumen estimado mensual: ",
  ].join("\n");
  return buildWhatsAppUrl(message);
}

export function generalWhatsAppUrl(): string {
  return buildWhatsAppUrl("¡Hola Antártico Ice! 👋 Quiero hacer una consulta.");
}
