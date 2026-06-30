"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection, SectionHeading } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductImage } from "@/components/products/ProductImage";
import { products } from "@/lib/data";

export function ProductHighlights() {
  const featured = products.filter((p) => !p.featured).slice(0, 6);

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            badge="Our Products"
            title="More Coconut Products"
            subtitle="Alongside our flagship desiccated coconut powder, we offer oils, copra, and industrial coconut materials."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featured.map((product, i) => (
            <AnimatedSection key={product.id} delay={i * 0.08}>
              <div className="group bg-white rounded-2xl border border-border overflow-hidden card-hover h-full flex flex-col">
                <div className="relative">
                  <ProductImage
                    src={product.image}
                    alt={product.name}
                    gradient={product.gradient}
                    className="h-48"
                    iconClassName="h-16 w-16"
                    priority={i < 3}
                  />
                  <Badge
                    variant="secondary"
                    className="absolute top-4 left-4 z-10 bg-white/90 text-foreground"
                  >
                    {product.featured ? "Flagship" : product.category.replace("-", " ")}
                  </Badge>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-coconut-green transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {product.shortDescription}
                  </p>
                  <Link
                    href={`/products#${product.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-coconut-green mt-4 hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <Button asChild size="lg">
            <Link href="/products">
              View All Products
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
