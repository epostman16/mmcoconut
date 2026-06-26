"use client";

import { Star, Quote } from "lucide-react";
import { AnimatedSection, SectionHeading } from "@/components/shared/AnimatedSection";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            badge="Testimonials"
            title="What Our Customers Say"
            subtitle="Trusted by hundreds of businesses across India for quality coconut products."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={testimonial.name} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 border border-border card-hover h-full flex flex-col">
                <Quote className="h-8 w-8 text-coconut-green/30 mb-4" />
                <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
