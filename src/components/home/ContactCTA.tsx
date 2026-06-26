"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/data";

export function ContactCTA() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-coconut-green-dark via-coconut-green to-coconut-green-light" />
          <div className="absolute inset-0 hero-pattern opacity-50" />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Get in touch for bulk orders, product samples, or custom
              requirements. Our team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="white">
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-coconut-green"
              >
                <a href={`tel:${companyInfo.phone}`}>
                  <Phone className="h-5 w-5" />
                  {companyInfo.phone}
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
