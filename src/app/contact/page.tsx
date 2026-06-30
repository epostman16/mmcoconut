import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/shared/SocialIcons";
import { AnimatedSection, SectionHeading } from "@/components/shared/AnimatedSection";
import { ContactForm } from "@/components/contact/ContactForm";
import { GoogleMap } from "@/components/contact/GoogleMap";
import { BusinessHours } from "@/components/contact/BusinessHours";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${companyInfo.name} for bulk orders and inquiries. Located in Puduvayal, Karaikudi, Tamil Nadu. Call ${companyInfo.phone}.`,
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: { product?: string };
}) {
  const defaultProduct = searchParams.product;
  return (
    <>
      <section className="relative pt-32 pb-16 bg-coconut-green-dark text-white overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 text-sm font-semibold">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Have questions about our products or need a bulk quote? We&apos;re
              here to help. Reach out to us today.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <AnimatedSection>
                <ContactForm defaultProduct={defaultProduct} />
              </AnimatedSection>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection delay={0.1}>
                <div className="bg-coconut-cream rounded-2xl border border-border p-6">
                  <h3 className="font-bold text-lg mb-6">
                    {companyInfo.name}
                  </h3>
                  <ul className="space-y-5">
                    <li className="flex gap-4">
                      <MapPin className="h-5 w-5 text-coconut-green shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p>{companyInfo.address.line1}</p>
                        <p>{companyInfo.address.line2}</p>
                        <p>{companyInfo.address.district}</p>
                      </div>
                    </li>
                    <li>
                      <a
                        href={`tel:${companyInfo.phone}`}
                        className="flex gap-4 text-sm hover:text-coconut-green transition-colors"
                      >
                        <Phone className="h-5 w-5 text-coconut-green shrink-0" />
                        {companyInfo.phone}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="flex gap-4 text-sm hover:text-coconut-green transition-colors"
                      >
                        <Mail className="h-5 w-5 text-coconut-green shrink-0" />
                        {companyInfo.email}
                      </a>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <BusinessHours />
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="bg-white rounded-2xl border border-border p-6">
                  <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: FacebookIcon, href: companyInfo.social.facebook },
                      { icon: InstagramIcon, href: companyInfo.social.instagram },
                      { icon: LinkedinIcon, href: companyInfo.social.linkedin },
                      { icon: YoutubeIcon, href: companyInfo.social.youtube },
                    ].map(({ icon: Icon, href }, i) => (
                      <a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-coconut-green/10 flex items-center justify-center hover:bg-coconut-green hover:text-white text-coconut-green transition-colors"
                        aria-label="Social media"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Location"
              title="Find Us on the Map"
              subtitle="Visit our manufacturing facility in Puduvayal, Karaikudi."
            />
            <GoogleMap />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
