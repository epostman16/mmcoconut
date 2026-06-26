"use client";

import { ShieldCheck, Microscope, FileCheck, BadgeCheck } from "lucide-react";
import { AnimatedSection, SectionHeading } from "@/components/shared/AnimatedSection";

const qualityPoints = [
  {
    icon: ShieldCheck,
    title: "Quality Standards",
    description:
      "All products meet FSSAI and industry quality standards with documented compliance.",
  },
  {
    icon: Microscope,
    title: "Lab Testing",
    description:
      "Every batch undergoes laboratory testing for purity, moisture, and contamination.",
  },
  {
    icon: FileCheck,
    title: "Documentation",
    description:
      "Complete quality certificates and test reports provided with every shipment.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Facility",
    description:
      "GST registered and UDYAM certified manufacturing unit with traceable processes.",
  },
];

export function QualityAssurance() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            badge="Quality Assurance"
            title="Committed to Excellence in Every Batch"
            subtitle="Our rigorous quality control processes ensure that every product meets the highest standards of purity and consistency."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualityPoints.map((point, i) => (
            <AnimatedSection key={point.title} delay={i * 0.1}>
              <div className="text-center p-8 rounded-2xl bg-coconut-cream border border-border card-hover h-full">
                <div className="w-16 h-16 rounded-2xl bg-coconut-green/10 flex items-center justify-center mx-auto mb-5">
                  <point.icon className="h-8 w-8 text-coconut-green" />
                </div>
                <h3 className="text-lg font-bold mb-3">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
