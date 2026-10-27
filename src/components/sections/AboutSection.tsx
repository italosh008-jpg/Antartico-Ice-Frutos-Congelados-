import { BadgeCheck, Snowflake, Users } from "lucide-react";
import { img } from "../../data/images";
import { Container } from "../ui/Container";

const stats = [
  { icon: Snowflake, label: "Congelado en punto óptimo" },
  { icon: BadgeCheck, label: "Fruta de calidad seleccionada" },
  { icon: Users, label: "Pensado para familias y comercios" },
];

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-white py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-4/3 overflow-hidden rounded-[2.5rem]">
            <img
              src={img("aboutUs", 900)}
              alt="Frutos congelados de calidad Antártico Ice"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-3xl bg-white p-4 shadow-xl shadow-ice-900/10 sm:-right-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ice-600 text-white">
              <Snowflake className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-ice-950">Cadena de frío</p>
              <p className="text-xs text-ice-700/70">cuidada en cada etapa</p>
            </div>
          </div>
        </div>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-ice-500">
            Sobre nosotros
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-ice-950 sm:text-4xl">
            Fruta de calidad, congelada para que la disfrutes cuando quieras
          </h2>
          <p className="text-balance text-base leading-relaxed text-ice-800/70">
            En Antártico Ice nos dedicamos a ofrecer frutos congelados de
            calidad, pensados para quienes buscan praticidad sin resignar
            sabor. Congelamos la fruta para conservar su color, su aroma y sus
            nutrientes, para que la tengas disponible todo el año, sin
            depender de la temporada.
          </p>
          <p className="text-balance text-base leading-relaxed text-ice-800/70">
            Trabajamos para generar confianza en cada pedido: productos bien
            seleccionados, presentaciones claras y un canal directo por
            WhatsApp para resolver cualquier consulta.
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {stats.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-2xl bg-ice-50 px-4 py-3"
              >
                <Icon className="h-4 w-4 shrink-0 text-ice-600" />
                <span className="text-sm font-semibold text-ice-900">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
