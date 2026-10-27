import {
  ChefHat,
  Coffee,
  IceCreamCone,
  MessageCircle,
  Store,
  UtensilsCrossed,
} from "lucide-react";
import { img } from "../../data/images";
import { wholesaleWhatsAppUrl } from "../../utils/whatsapp";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

const segments = [
  { icon: UtensilsCrossed, label: "Restaurantes" },
  { icon: Coffee, label: "Bares y cafeterías" },
  { icon: ChefHat, label: "Hoteles" },
  { icon: IceCreamCone, label: "Heladerías" },
  { icon: Store, label: "Distribuidores" },
  { icon: Store, label: "Comercios gastronómicos" },
];

export function WholesaleSection() {
  return (
    <section
      id="mayorista"
      className="relative overflow-hidden bg-ice-950 py-20 text-white sm:py-28"
    >
      <img
        src={img("wholesale", 1600, 60)}
        alt="Frutos congelados para uso gastronómico"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-ice-950 via-ice-950/95 to-ice-900/90" />

      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-ice-300">
            Venta mayorista
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Abastecé tu negocio con frutos congelados de calidad
          </h2>
          <p className="text-balance text-base leading-relaxed text-ice-100/80">
            Trabajamos con restaurantes, bares, cafeterías, hoteles,
            heladerías, distribuidores y comercios gastronómicos que
            necesitan fruta congelada de manera constante. Contanos qué
            necesitás y te acercamos una cotización a medida.
          </p>

          <a href={wholesaleWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="lg">
              <MessageCircle className="h-4 w-4" />
              Solicitar cotización mayorista
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {segments.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <Icon className="h-6 w-6 text-ice-300" strokeWidth={1.8} />
              <span className="text-sm font-semibold text-ice-50">
                {label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
