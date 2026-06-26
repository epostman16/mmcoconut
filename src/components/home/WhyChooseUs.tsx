"use client";

import {
  Award,
  Cog,
  Leaf,
  Truck,
  Globe,
  IndianRupee,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection, SectionHeading } from "@/components/shared/AnimatedSection";
import { whyChooseUs } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Cog,
  Leaf,
  Truck,
  Globe,
  IndianRupee,
};

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-coconut-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            badge="Why Choose Us"
            title="Your Trusted Partner for Premium Coconut Products"
            subtitle="We combine traditional quality with modern manufacturing to deliver the best coconut products in the industry."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-border card-hover h-full">
                  <div className="w-14 h-14 rounded-xl bg-coconut-green/10 flex items-center justify-center mb-5">
                    <Icon className="h-7 w-7 text-coconut-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
