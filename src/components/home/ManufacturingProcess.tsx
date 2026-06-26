"use client";

import Image from "next/image";
import { AnimatedSection, SectionHeading } from "@/components/shared/AnimatedSection";
import { manufacturingSteps } from "@/lib/data";

export function ManufacturingProcess() {
  return (
    <section className="section-padding bg-coconut-green-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-coconut-green-light rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection>
          <SectionHeading
            badge="Our Process"
            title="Modern Manufacturing Process"
            subtitle="From farm to final product, every step is carefully controlled to ensure premium quality."
            light
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl">
              <Image
                src="/images/processing-machine.png"
                alt="Coconut processing machinery"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {manufacturingSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-coconut-green flex items-center justify-center shrink-0 font-bold text-sm">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
