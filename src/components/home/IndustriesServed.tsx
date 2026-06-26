"use client";

import {
  UtensilsCrossed,
  Sparkles,
  Pill,
  Wheat,
  Beef,
  Factory,
  Hotel,
  Ship,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection, SectionHeading } from "@/components/shared/AnimatedSection";
import { industries } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  UtensilsCrossed,
  Sparkles,
  Pill,
  Wheat,
  Beef,
  Factory,
  Hotel,
  Ship,
};

export function IndustriesServed() {
  return (
    <section className="section-padding bg-coconut-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            badge="Industries"
            title="Industries We Serve"
            subtitle="Our coconut products cater to diverse industries across India and international markets."
          />
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon] || Factory;
            return (
              <AnimatedSection key={industry.name} delay={i * 0.05}>
                <div className="bg-white rounded-xl p-6 text-center border border-border card-hover">
                  <div className="w-12 h-12 rounded-lg bg-coconut-green/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-coconut-green" />
                  </div>
                  <h3 className="text-sm font-semibold">{industry.name}</h3>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
