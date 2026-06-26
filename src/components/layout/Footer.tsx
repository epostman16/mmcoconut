import Link from "next/link";
import { MapPin, Phone, Mail, Leaf } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/shared/SocialIcons";
import { companyInfo, footerLinks } from "@/lib/data";
import { Newsletter } from "@/components/shared/Newsletter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coconut-green-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Leaf className="h-5 w-5 text-coconut-green-light" />
              </div>
              <div>
                <span className="font-bold text-lg">MM Coconut</span>
                <span className="block text-[10px] uppercase tracking-widest text-white/60">
                  Processing Unit
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Leading coconut processing company in Tamil Nadu, delivering
              premium quality coconut products across India.
            </p>
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
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-coconut-green transition-colors"
                  aria-label="Social media link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-coconut-green-light transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Our Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-coconut-green-light transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin className="h-5 w-5 text-coconut-green-light shrink-0 mt-0.5" />
                <span className="text-white/70">{companyInfo.address.full}</span>
              </li>
              <li>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex gap-3 text-sm text-white/70 hover:text-coconut-green-light transition-colors"
                >
                  <Phone className="h-5 w-5 text-coconut-green-light shrink-0" />
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex gap-3 text-sm text-white/70 hover:text-coconut-green-light transition-colors"
                >
                  <Mail className="h-5 w-5 text-coconut-green-light shrink-0" />
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <Newsletter />
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-white/40">
            <span>GSTIN: {companyInfo.gstin}</span>
            <span>UDYAM: {companyInfo.udyam}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
