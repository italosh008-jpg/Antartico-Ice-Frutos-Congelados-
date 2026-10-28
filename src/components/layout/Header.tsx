import { Menu, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "../../config/site";
import { useCart } from "../../context/CartContext";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";
import { LogoMark } from "../ui/Logo";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Mayorista", href: "#mayorista" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm shadow-ice-900/5"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-18 items-center justify-between py-3">
        <a href="#inicio" className="flex items-center gap-2.5 shrink-0">
          <LogoMark
            tone={scrolled ? "onLight" : "onDark"}
            className="h-11 w-11 shrink-0 drop-shadow-sm"
          />
          <span
            className={`font-display text-lg font-bold leading-none transition-colors ${
              scrolled ? "text-ice-950" : "text-white"
            }`}
          >
            Antártico
            <span
              className={`block text-xs font-semibold tracking-[0.3em] ${
                scrolled ? "text-ice-500" : "text-ice-200"
              }`}
            >
              ICE
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 ${
                scrolled
                  ? "text-ice-800/80 hover:bg-ice-50 hover:text-ice-700"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCart}
            aria-label="Abrir carrito de compras"
            className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              scrolled
                ? "text-ice-800 hover:bg-ice-50"
                : "text-white hover:bg-white/10"
            }`}
          >
            <ShoppingCart className="h-5 w-5" strokeWidth={2} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-ice-600 px-1 text-[11px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </button>

          <div className="hidden sm:block">
            <ButtonLink
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              variant={scrolled ? "primary" : "secondary"}
              size="md"
            >
              Pedir por WhatsApp
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Abrir menú"
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden ${
              scrolled
                ? "text-ice-800 hover:bg-ice-50"
                : "text-white hover:bg-white/10"
            }`}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" strokeWidth={2} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={2} />
            )}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="lg:hidden border-t border-ice-100 bg-white/95 backdrop-blur-md animate-fade-in">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-ice-900 transition-colors hover:bg-ice-50"
              >
                {link.label}
              </a>
            ))}
            <ButtonLink
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className="mt-2 w-full sm:hidden"
            >
              Pedir por WhatsApp
            </ButtonLink>
          </Container>
        </div>
      )}
    </header>
  );
}
