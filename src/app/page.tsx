import { Hero, Stats } from "@/components/home/Hero";
import { FeaturedProduct } from "@/components/home/FeaturedProduct";
import { CompanyIntro } from "@/components/home/CompanyIntro";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProductHighlights } from "@/components/home/ProductHighlights";
import { ManufacturingProcess } from "@/components/home/ManufacturingProcess";
import { QualityAssurance } from "@/components/home/QualityAssurance";
import { IndustriesServed } from "@/components/home/IndustriesServed";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactCTA } from "@/components/home/ContactCTA";
import { FAQ } from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProduct />
      <CompanyIntro />
      <WhyChooseUs />
      <ProductHighlights />
      <ManufacturingProcess />
      <QualityAssurance />
      <IndustriesServed />
      <Testimonials />
      <ContactCTA />
      <FAQ />
    </>
  );
}
