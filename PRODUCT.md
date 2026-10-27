# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: individual/home consumers in Argentina who order frozen fruit for
home use, mainly through WhatsApp (confirmed priority: direct consumer
comes first).

Secondary: wholesale/gastronomic buyers — restaurants, bars, cafeterías,
hoteles, heladerías, distribuidores y comercios gastronómicos — who request
bulk quotes through the "Venta mayorista" section.

## Product Purpose

Antártico Ice sells frozen fruit (frutillas, arándanos, frambuesas, mango,
ananá, durazno, mixes de frutos rojos, pulpas) in Argentina. The site exists
to showcase the real catalog, build trust in an unfamiliar online buyer, and
convert visitors into orders — entirely through WhatsApp (cart → prefilled
WhatsApp message). There is no online payment or account system in this
version.

## Positioning

Not yet confirmed by the owner — do not invent a differentiator (e.g.
"local sourcing", "largest capacity") until they state one.

## Operating Context

- Products are sold frozen, by weight: bags of 250 g / 500 g / 1 kg (some
  pulp products only come in 1 kg).
- Prices shown do not include IVA (stated on the original flyer and on the
  site).
- The flyer historically mentioned delivery "miércoles a partir de las 18
  hs", but the actual delivery/service area is **not yet defined** — the
  owner confirmed this is still undecided, so the site must not claim a
  specific coverage zone (e.g. "CABA y GBA" or "envíos a todo el país")
  until they confirm one.
- All ordering happens through WhatsApp; there is no checkout or payment
  flow.

## Capabilities and Constraints

- Static site, no backend/database/accounts (React + TypeScript + Vite +
  Tailwind CSS v4).
- WhatsApp number (`src/config/site.ts`) and Instagram handle/URL are
  currently placeholders pending the owner's real values — still open
  TODOs, not confirmed facts.
- Catalog (names, categories, descriptions, prices, presentations, images)
  lives entirely in `src/data/products.ts` / `src/data/images.ts` so it can
  be edited without touching visual components.
- Contact form has no backend: submitting it opens WhatsApp with the
  message prefilled rather than silently "succeeding".

## Brand Commitments

- Name: **Antártico Ice**.
- Palette: azul hielo (ice blue), white, soft light blue (celeste suave),
  dark blue accents — explicitly specified by the owner, not a free
  choice for future work.
- Logo: a penguin/bird mark. The owner shared a reference image inline in
  chat (not saved to disk, so it could not be traced/vectorized exactly);
  the current `src/components/ui/Logo.tsx` is a hand-recreated
  approximation of that mark, recolored into the ice-blue palette. This is
  a placeholder for the real logo file — replace it directly once the
  owner provides the actual asset (SVG/AI/high-res PNG), rather than
  refining the hand-drawn version further.

## Evidence on Hand

- The product list, weights and prices in the catalog come directly from a
  flyer the owner shared ("Antártico Ice — Frutos Congelados — Tarifas
  actualizadas"). No prices were invented beyond what that flyer states;
  products not on the flyer (e.g. an earlier draft's "Moras" and "Mix de
  frutas tropicales") were explicitly removed by the owner and must not be
  reintroduced.
- No testimonials, case studies, certifications, press mentions, or
  third-party evidence exist yet — future work must not fabricate these.

## Product Principles

1. Never show an invented price — a presentation with no price on the
   flyer shows "Consultar precio", never a guessed number.
2. Catalog, prices, images, WhatsApp number and contact data stay centrally
   editable (`src/config`, `src/data`), never hardcoded into components.
3. WhatsApp is the only real conversion channel right now — every call to
   action should lead there until a payment/backend integration exists.
4. Direct-consumer experience takes priority over wholesale in layout and
   emphasis decisions (confirmed owner priority); wholesale stays present
   but secondary.
5. Never state a delivery area, schedule, or commercial policy that the
   owner hasn't confirmed — leave it unspecified rather than invent one.

## Accessibility & Inclusion

No product-specific requirement established beyond general web
accessibility already in place (color contrast, alt text on images,
keyboard-operable interactive elements).
