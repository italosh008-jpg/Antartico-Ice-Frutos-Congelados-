import { MessageCircle } from "lucide-react";
import { siteConfig } from "../../config/site";
import { generalWhatsAppUrl } from "../../utils/whatsapp";
import { Container } from "../ui/Container";
import { InstagramIcon } from "../ui/InstagramIcon";
import { LogoMark } from "../ui/Logo";

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Mayorista", href: "#mayorista" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  return (
    <footer className="bg-ice-950 text-ice-100">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <a href="#inicio" className="flex items-center gap-2.5">
            <LogoMark tone="onDark" className="h-11 w-9 shrink-0" />
            <span className="font-display text-lg font-extrabold leading-none text-white">
              ANTÁRTICO
              <span className="block text-right text-xs font-semibold tracking-[0.06em] text-ice-300">
                ICE
              </span>
            </span>
          </a>
          <p className="max-w-sm text-sm leading-relaxed text-ice-300">
            Frutas congeladas de calidad para disfrutar en cualquier momento.
            Conservamos el sabor y los nutrientes de la fruta recién
            cosechada para que la tengas lista todo el año.
          </p>
          <div className="flex items-center gap-3 pt-1">
            <a
              href={generalWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-ice-100 transition-colors hover:bg-ice-600 hover:text-white"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-ice-100 transition-colors hover:bg-ice-600 hover:text-white"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-ice-400">
            Navegación
          </h3>
          <ul className="flex flex-col gap-2.5">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ice-200 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-ice-400">
            Contacto
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm text-ice-200">
            <li>WhatsApp: {siteConfig.whatsappNumber}</li>
            <li>Instagram: {siteConfig.instagramHandle}</li>
            <li>{siteConfig.deliveryInfo}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-ice-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Antártico Ice. Todos los derechos
            reservados.
          </p>
          <p>{siteConfig.ivaNote}</p>
        </Container>
      </div>
    </footer>
  );
}
