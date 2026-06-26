import type { Metadata } from "next";
import Image from "next/image";
import {
  Target,
  Eye,
  ShieldCheck,
  Handshake,
  Lightbulb,
  Recycle,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection, SectionHeading } from "@/components/shared/AnimatedSection";
import { values } from "@/lib/data";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about MM Coconut Processing Unit - a leading coconut processing company in Karaikudi, Tamil Nadu specializing in premium coconut products.",
};

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Handshake,
  Lightbulb,
  Recycle,
};

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-coconut-green-dark text-white overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 text-sm font-semibold">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About MM Coconut Processing Unit
            </h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              A leading coconut processing company located in Karaikudi, Tamil
              Nadu, specializing in high-quality coconut products using modern
              processing techniques.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <SectionHeading
                badge="Company Overview"
                title="Excellence in Coconut Processing Since Day One"
                subtitle="MM Coconut Processing Unit is a leading coconut processing company located in Karaikudi, Tamil Nadu. We specialize in producing high-quality coconut products using modern processing techniques while maintaining traditional quality standards."
                centered={false}
              />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our state-of-the-art manufacturing facility in Puduvayal is
                equipped with modern machinery that ensures consistent quality,
                hygienic processing, and efficient production. We source our
                coconuts directly from farms across Tamil Nadu, supporting local
                agriculture while ensuring the freshest raw materials.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a GST registered and UDYAM certified unit, we maintain the
                highest standards of business compliance and product quality,
                serving customers across India with reliable supply and
                competitive pricing.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/manufacturing-floor.png"
                  alt="MM Coconut manufacturing facility interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-coconut-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-10 border border-border h-full">
                <div className="w-14 h-14 rounded-xl bg-coconut-green/10 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-coconut-green" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver premium quality coconut products that meet
                  international standards while supporting sustainable agriculture
                  and empowering local farming communities in Tamil Nadu. We strive
                  to be the most trusted coconut processing partner for businesses
                  across India and beyond.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="bg-white rounded-2xl p-10 border border-border h-full">
                <div className="w-14 h-14 rounded-xl bg-coconut-green/10 flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-coconut-green" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become India&apos;s most recognized coconut processing brand,
                  known for uncompromising quality, innovation in processing
                  technology, and sustainable business practices that benefit both
                  our customers and the environment.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Our Values"
              title="Principles That Guide Everything We Do"
            />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = iconMap[value.icon] || ShieldCheck;
              return (
                <AnimatedSection key={value.title} delay={i * 0.1}>
                  <div className="text-center p-8 rounded-2xl bg-coconut-cream border border-border card-hover h-full">
                    <div className="w-14 h-14 rounded-xl bg-coconut-green/10 flex items-center justify-center mx-auto mb-5">
                      <Icon className="h-7 w-7 text-coconut-green" />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-coconut-green-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Our Facility"
              title="State-of-the-Art Manufacturing Facility"
              subtitle="Our modern processing unit in Puduvayal is equipped with advanced machinery for efficient and hygienic coconut processing."
              light
            />
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection>
              <div className="relative rounded-2xl overflow-hidden aspect-video">
                <Image
                  src="/images/facility-exterior.png"
                  alt="MM Coconut facility exterior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="relative rounded-2xl overflow-hidden aspect-video">
                <Image
                  src="/images/processing-machine.png"
                  alt="Processing machinery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <SectionHeading
                badge="Quality Control"
                title="Rigorous Quality Control Process"
                subtitle="Every product batch goes through comprehensive testing to ensure it meets our strict quality parameters."
                centered={false}
              />
              <ul className="space-y-4">
                {[
                  "Raw material inspection and grading upon arrival",
                  "In-process quality monitoring at every stage",
                  "Laboratory testing for purity and contamination",
                  "Final product inspection before packaging",
                  "Batch-wise quality documentation and traceability",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-coconut-green shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/manufacturing-floor.png"
                  alt="Quality control at manufacturing floor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-coconut-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Sustainability"
              title="Sustainability & Eco-Friendly Practices"
              subtitle="We are committed to environmentally responsible manufacturing that minimizes waste and maximizes resource utilization."
            />
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Zero Waste Processing",
                description:
                  "Every part of the coconut is utilized — from oil and copra to shell, husk, and fiber products.",
              },
              {
                title: "Sustainable Sourcing",
                description:
                  "Direct partnerships with local farmers promote sustainable coconut cultivation practices.",
              },
              {
                title: "Eco-Friendly Packaging",
                description:
                  "We use recyclable and biodegradable packaging materials wherever possible.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-border card-hover h-full">
                  <Recycle className="h-8 w-8 text-coconut-green mb-4" />
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
