"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { AnimatedSection, SectionHeading } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/lib/data";

export function FeaturedProduct() {
  const product = products.find((p) => p.featured);

  if (!product) return null;

  return (
    <section className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            badge="Flagship Product"
            title="Desiccated Coconut Powder"
            subtitle="Our most sought-after product — fine-grade, hygienically processed, and packed for bakeries, confectionery makers, and food manufacturers."
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <AnimatedSection>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] ring-1 ring-border">
                <Image
                  src={product.image}
                  alt="Desiccated coconut powder in kraft paper pouches"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <Badge className="absolute top-4 left-4 z-10 bg-coconut-green text-white border-0 gap-1.5 px-3 py-1.5">
                <Star className="h-3.5 w-3.5 fill-current" />
                Our Main Product
              </Badge>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                {product.description}
              </p>

              <ul className="grid sm:grid-cols-2 gap-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle className="h-5 w-5 text-coconut-green shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Used in</p>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <Badge key={app} variant="outline">
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button asChild size="lg">
                  <Link href={`/products#${product.slug}`}>
                    View Product Details
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={`/contact?product=${encodeURIComponent(product.name)}`}>
                    Request a Quote
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
