"use client";

import { useState } from "react";
import { Search, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  products,
  productCategories,
  type Product,
  type ProductCategory,
} from "@/lib/data";
import { ProductModal } from "./ProductModal";
import { ProductImage } from "./ProductImage";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  initialCategory?: ProductCategory;
}

export function ProductGrid({ initialCategory = "all" }: ProductGridProps) {
  const [category, setCategory] = useState<ProductCategory>(initialCategory);
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = products
    .filter((p) => {
      const matchesCategory = category === "all" || p.category === category;
      const matchesSearch =
        search === "" ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => Number(b.featured) - Number(a.featured));

  return (
    <>
      <div className="mb-10 space-y-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                category === cat.id
                  ? "bg-coconut-green text-white shadow-md"
                  : "bg-white border border-border text-muted-foreground hover:border-coconut-green hover:text-coconut-green"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">
            No products found matching your criteria.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <AnimatedSection key={product.id} delay={i * 0.05}>
              <Card
                id={product.slug}
                className="group overflow-hidden card-hover h-full flex flex-col scroll-mt-32"
              >
                <div className="relative">
                  <ProductImage
                    src={product.image}
                    alt={product.name}
                    gradient={product.gradient}
                    className="h-52"
                    iconClassName="h-20 w-20"
                  />
                  <Badge className="absolute top-4 left-4 z-10" variant="secondary">
                    {product.featured ? "Flagship Product" : product.category.replace("-", " ")}
                  </Badge>
                  {product.featured && (
                    <Badge className="absolute top-4 right-4 z-10 bg-coconut-green text-white border-0 gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      Main Product
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {product.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {product.features.slice(0, 2).map((f) => (
                      <Badge key={f} variant="outline" className="text-xs">
                        {f}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => setSelectedProduct(product)}
                    >
                      View Details
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => setSelectedProduct(product)}
                    >
                      Inquiry
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      )}

      <ProductModal
        product={selectedProduct}
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
