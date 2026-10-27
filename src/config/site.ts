/**
 * Configuración general del sitio.
 * Modificá estos valores para actualizar los datos de contacto del negocio.
 */

export const siteConfig = {
  businessName: "Antártico Ice",
  tagline: "El sabor de la naturaleza, todo el año.",

  // ⚠️ IMPORTANTE: completá este número con el WhatsApp real del negocio.
  // Formato internacional sin espacios ni signos: código de país + código de área + número.
  // Ejemplo Argentina: "5491170761604" (54 + 9 + 11 + número).
  whatsappNumber: "5491170761604", // TODO: reemplazar por el número real de Antártico Ice

  instagramUrl: "https://instagram.com/antarticoice", // TODO: reemplazar por el usuario real
  instagramHandle: "@antarticoice",

  // TODO: completar con el email real de contacto si corresponde.
  contactEmail: "",

  deliveryInfo: "Entregas los miércoles a partir de las 18 hs",
  ivaNote: "Las tarifas no incluyen IVA",

  address: "", // TODO: completar si el negocio tiene local o depósito con atención al público
} as const;

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
