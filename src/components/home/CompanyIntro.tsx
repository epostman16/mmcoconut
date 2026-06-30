"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { AnimatedSection, SectionHeading } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";

export function CompanyIntro() {
  const highlights = [
    "Specialists in premium desiccated coconut powder",
    "Government registered & UDYAM certified unit",
    "Modern processing facility in Karaikudi",
    "Direct sourcing from Tamil Nadu farms",
    "Export-ready product quality standards",
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/facility-exterior.png"
                  alt="MM Coconut Processing Unit facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-coconut-green text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm text-white/80">Years of Excellence</div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <SectionHeading
              badge="About Us"
              title="Leading Coconut Processing Company in Tamil Nadu"
              subtitle="MM Coconut Processing Unit specializes in producing high-quality coconut products using modern processing techniques while maintaining traditional quality standards."
              centered={false}
            />
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-coconut-green shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild>
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
