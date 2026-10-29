import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "../../config/site";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

const faqs = [
  {
    question: "¿Cómo tengo que conservar los frutos congelados?",
    answer:
      "Mantené el producto congelado (a -18 °C aproximadamente) hasta el momento de usarlo. Una vez descongelado, se recomienda consumirlo dentro de las horas siguientes y no volver a congelarlo.",
  },
  {
    question: "¿En qué presentaciones venden los productos?",
    answer:
      "Según el producto, ofrecemos presentaciones de 250 g, 500 g y 1 kg. Podés ver el detalle y el precio de cada presentación en la ficha de cada producto del catálogo.",
  },
  {
    question: "¿Cómo hago un pedido?",
    answer:
      "Podés armar tu pedido desde el catálogo agregando los productos al carrito y enviándolo por WhatsApp, o escribirnos directamente para consultar por un producto puntual.",
  },
  {
    question: "¿Cómo son las entregas?",
    answer: `${siteConfig.deliveryInfo}. Coordinamos el resto de los detalles de la entrega por WhatsApp una vez confirmado el pedido.`,
  },
  {
    question: "¿Todos los productos tienen disponibilidad todo el año?",
    answer:
      "La disponibilidad puede variar según el producto y el stock del momento. Te recomendamos consultarnos por WhatsApp antes de confirmar tu pedido para asegurar la disponibilidad.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-frost-50 py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="¿Tenés dudas? Acá te las resolvemos"
        />

        <div className="w-full max-w-2xl divide-y divide-ice-100 overflow-hidden rounded-3xl border border-ice-100 bg-white">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="tap-soft flex w-full items-center justify-between gap-4 px-6 py-5 text-left hover:bg-ice-50/60"
                >
                  <span className="text-sm font-semibold text-ice-950 sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-ice-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-ice-800/70">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
