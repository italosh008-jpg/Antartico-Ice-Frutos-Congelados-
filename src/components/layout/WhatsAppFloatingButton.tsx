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
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-[#25D366] py-3.5 pl-3.5 pr-3.5 text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:pr-5 sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-6 w-6 shrink-0" strokeWidth={2} fill="currentColor" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-xs">
        Hacé tu pedido
      </span>
    </a>
  );
}
