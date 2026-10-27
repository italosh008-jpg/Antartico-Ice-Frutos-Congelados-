import { Leaf, Snowflake, Timer, Truck } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Container } from "../ui/Container";

const reasons = [
  {
    icon: Snowflake,
    title: "Congelación que conserva",
    description:
      "Congelamos la fruta en su punto óptimo de maduración para mantener su sabor, color y nutrientes intactos.",
  },
  {
    icon: Leaf,
    title: "Calidad seleccionada",
    description:
      "Trabajamos con fruta de calidad, seleccionada cuidadosamente antes de cada proceso de congelado.",
  },
  {
    icon: Timer,
    title: "Practicidad todo el año",
    description:
      "Tené siempre a mano la fruta que necesitás, sin depender de la temporada ni preocuparte por que se eche a perder.",
  },
  {
    icon: Truck,
    title: "Pedidos simples",
    description:
      "Hacé tu pedido en minutos por WhatsApp y coordiná la entrega de forma rápida y directa.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Por qué elegirnos"
          title="Frío que cuida cada fruta, calidad que se nota"
          description="En Antártico Ice combinamos fruta de calidad con un proceso de congelado cuidadoso, para que cada producto llegue con el mejor sabor posible."
        />

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex flex-col gap-4 rounded-3xl border border-ice-100 bg-frost-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ice-200 hover:shadow-xl hover:shadow-ice-900/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ice-600 text-white transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="text-lg font-bold text-ice-950">{title}</h3>
              <p className="text-sm leading-relaxed text-ice-800/70">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
