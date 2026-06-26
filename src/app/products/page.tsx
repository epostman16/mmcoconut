import type { Metadata } from "next";
import { Suspense } from "react";
import { AnimatedSection, SectionHeading } from "@/components/shared/AnimatedSection";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductCategory } from "@/lib/data";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our complete range of premium coconut products including coconut oil, virgin coconut oil, desiccated coconut powder, copra, and industrial raw materials.",
};

function ProductsContent({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const category = (searchParams.category as ProductCategory) || "all";
  return <ProductGrid initialCategory={category} />;
}

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-coconut-green-dark text-white overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 text-sm font-semibold">
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Premium Coconut Products
            </h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Discover our comprehensive range of high-quality coconut products
              for food, cosmetic, and industrial applications.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="text-center py-20">Loading products...</div>}>
            <ProductsContent searchParams={searchParams} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
