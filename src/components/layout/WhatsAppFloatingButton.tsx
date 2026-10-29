import { MessageCircle } from "lucide-react";
import { siteConfig } from "../../config/site";
import { generalWhatsAppUrl } from "../../utils/whatsapp";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={generalWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escribinos por WhatsApp al ${siteConfig.whatsappNumber}`}
      className="wa-fab fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:bottom-7 sm:right-7"
    >
      {/* Anillo que se expande: llama la atención sin mover el botón. */}
      <span aria-hidden className="wa-pulse" />

      {/* La etiqueta vive fuera del círculo, así aparecer no reacomoda nada. */}
      <span
        aria-hidden
        className="wa-label absolute right-full mr-3 whitespace-nowrap rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-ice-950 shadow-lg shadow-ice-900/10"
      >
        Hacé tu pedido
      </span>

      <MessageCircle
        className="h-6 w-6 shrink-0"
        strokeWidth={2}
        fill="currentColor"
      />
    </a>
  );
}
