import { useMemo, useState } from "react";
import { products } from "../../data/products";
import type { ProductCategory } from "../../types/product";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ProductCard } from "./ProductCard";
import { ProductFilters } from "./ProductFilters";

export function ProductsSection() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "todas">(
    "todas",
  );

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "todas" || product.category === activeCategory;
      const matchesSearch =
        term === "" ||
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <section id="productos" className="bg-frost-50 py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Catálogo"
          title="Nuestros frutos congelados"
          description="Elegí tus productos favoritos, la presentación que necesitás y armá tu pedido. Los precios no incluyen IVA."
        />

        <ProductFilters
          search={search}
          onSearchChange={setSearch}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {filtered.length === 0 ? (
          <p className="py-10 text-center text-ice-700/70">
            No encontramos productos que coincidan con tu búsqueda.
          </p>
        ) : (
          <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
