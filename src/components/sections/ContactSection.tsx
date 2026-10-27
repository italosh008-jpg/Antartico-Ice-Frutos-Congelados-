import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { siteConfig } from "../../config/site";
import { generalWhatsAppUrl } from "../../utils/whatsapp";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { InstagramIcon } from "../ui/InstagramIcon";
import { SectionHeading } from "../ui/SectionHeading";

interface FormState {
  name: string;
  phone: string;
  message: string;
}

const initialState: FormState = { name: "", phone: "", message: "" };

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState<string | null>(null);

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setError("Completá tu nombre y tu mensaje antes de enviarlo.");
      return;
    }
    setError(null);

    const text = [
      "¡Hola Antártico Ice! 👋",
      `Mi nombre es ${form.name}.`,
      form.phone ? `Mi teléfono de contacto es ${form.phone}.` : null,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section id="contacto" className="bg-white py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos"
          description="Escribinos por WhatsApp, seguinos en Instagram o dejanos tu consulta: te vamos a responder directamente por WhatsApp."
        />

        <div className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <a
              href={generalWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-ice-100 p-5 transition-colors hover:border-ice-300 hover:bg-ice-50/60"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#25D366]/10 text-[#25D366]">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-ice-950">WhatsApp</p>
                <p className="text-sm text-ice-700/70">
                  {siteConfig.whatsappNumber}
                </p>
              </div>
            </a>

            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-ice-100 p-5 transition-colors hover:border-ice-300 hover:bg-ice-50/60"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ice-50 text-ice-600">
                <InstagramIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-ice-950">Instagram</p>
                <p className="text-sm text-ice-700/70">
                  {siteConfig.instagramHandle}
                </p>
              </div>
            </a>

            {siteConfig.contactEmail && (
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="flex items-center gap-4 rounded-2xl border border-ice-100 p-5 transition-colors hover:border-ice-300 hover:bg-ice-50/60"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ice-50 text-ice-600">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ice-950">Email</p>
                  <p className="text-sm text-ice-700/70">
                    {siteConfig.contactEmail}
                  </p>
                </div>
              </a>
            )}

            {siteConfig.address && (
              <div className="flex items-center gap-4 rounded-2xl border border-ice-100 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ice-50 text-ice-600">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ice-950">Ubicación</p>
                  <p className="text-sm text-ice-700/70">{siteConfig.address}</p>
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4 rounded-3xl border border-ice-100 bg-frost-50 p-7 lg:col-span-3"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-semibold text-ice-900">
                Nombre
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Tu nombre"
                className="rounded-xl border border-ice-200 bg-white px-4 py-2.5 text-sm text-ice-950 outline-none transition-colors focus:border-ice-500 focus:ring-4 focus:ring-ice-100"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-sm font-semibold text-ice-900">
                Teléfono (opcional)
              </label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="Tu teléfono de contacto"
                className="rounded-xl border border-ice-200 bg-white px-4 py-2.5 text-sm text-ice-950 outline-none transition-colors focus:border-ice-500 focus:ring-4 focus:ring-ice-100"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-semibold text-ice-900">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Contanos en qué te podemos ayudar"
                className="resize-none rounded-xl border border-ice-200 bg-white px-4 py-2.5 text-sm text-ice-950 outline-none transition-colors focus:border-ice-500 focus:ring-4 focus:ring-ice-100"
              />
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <p className="text-xs text-ice-700/60">
              Al enviar, se abrirá WhatsApp con tu mensaje listo para
              confirmarlo y enviarlo. Todavía no contamos con un formulario
              con envío automático por email.
            </p>

            <Button type="submit" variant="primary" size="lg" className="mt-1">
              <Send className="h-4 w-4" />
              Enviar por WhatsApp
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
