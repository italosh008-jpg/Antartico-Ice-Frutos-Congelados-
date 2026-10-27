import { ArrowRight, MessageCircle } from "lucide-react";
import { img } from "../../data/images";
import { generalWhatsAppUrl } from "../../utils/whatsapp";
import { Button, ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-ice-950 pt-24"
    >
      <img
        src={img("hero", 1920, 75)}
        alt="Mix de frutos rojos congelados: arándanos, frambuesas y moras"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ice-950/95 via-ice-950/70 to-ice-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ice-950/80 via-transparent to-transparent" />

      <Container className="relative z-10 py-20">
        <div className="max-w-2xl animate-fade-up">
          <span className="mb-5 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-ice-100 backdrop-blur-sm">
            Frutos congelados premium
          </span>

          <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            El sabor de la naturaleza,{" "}
            <span className="text-ice-300">todo el año.</span>
          </h1>

          <p className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-ice-100/90">
            Frutas congeladas de calidad para disfrutar en cualquier momento.
            Cosechadas en su punto justo y congeladas para conservar todo su
            sabor, color y nutrientes.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#productos" variant="primary" size="lg">
              Ver productos
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <a
              href={generalWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg" className="w-full">
                <MessageCircle className="h-4 w-4" />
                Pedir por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
