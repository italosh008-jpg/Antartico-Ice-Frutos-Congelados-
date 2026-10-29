import { Search } from "lucide-react";
import { categoryLabels, type ProductCategory } from "../../types/product";

interface ProductFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  activeCategory: ProductCategory | "todas";
  onCategoryChange: (category: ProductCategory | "todas") => void;
}

const categories: (ProductCategory | "todas")[] = [
  "todas",
  "berries",
  "tropicales",
  "mixes",
  "pulpas",
  "otras",
];

export function ProductFilters({
  search,
  onSearchChange,
  activeCategory,
  onCategoryChange,
}: ProductFiltersProps) {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="relative mx-auto w-full max-w-md">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ice-400" />
        <input
          type="search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar un producto..."
          aria-label="Buscar producto"
          className="w-full rounded-full border border-ice-200 bg-white py-3 pl-11 pr-4 text-sm text-ice-950 placeholder:text-ice-400 outline-none transition-colors focus:border-ice-500 focus:ring-4 focus:ring-ice-100"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            className={`tap rounded-full px-4 py-2 text-sm font-semibold ${
              activeCategory === category
                ? "bg-ice-600 text-white shadow-md shadow-ice-600/25"
                : "bg-ice-50 text-ice-700 hover:bg-ice-100"
            }`}
          >
            {category === "todas" ? "Todas" : categoryLabels[category]}
          </button>
        ))}
      </div>
    </div>
  );
}
