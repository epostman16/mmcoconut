"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Droplets,
  Leaf,
  Package,
  Factory,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo, navLinks, products } from "@/lib/data";
import { cn } from "@/lib/utils";

const productMenuItems = [
  {
    title: "Oils",
    icon: Droplets,
    items: products.filter((p) => p.category === "oils"),
  },
  {
    title: "Powders & Raw",
    icon: Leaf,
    items: products.filter(
      (p) => p.category === "powders" || p.category === "raw-materials"
    ),
  },
  {
    title: "By-Products",
    icon: Package,
    items: products.filter((p) => p.category === "by-products"),
  },
  {
    title: "Industrial",
    icon: Factory,
    items: products.filter((p) => p.category === "industrial"),
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass shadow-md border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="bg-coconut-green-dark text-white text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <span>{companyInfo.address.district}</span>
          <a
            href={`tel:${companyInfo.phone}`}
            className="flex items-center gap-1.5 hover:text-coconut-green-light transition-colors"
          >
            <Phone className="h-3 w-3" />
            {companyInfo.phone}
          </a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-coconut-green flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg leading-tight text-foreground">
                MM Coconut
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-coconut-green font-semibold">
                Processing Unit
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.href === "/products" ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:text-coconut-green hover:bg-coconut-green/5",
                      megaOpen && "text-coconut-green bg-coconut-green/5"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        megaOpen && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[700px]"
                      >
                        <div className="bg-white rounded-2xl shadow-2xl border border-border p-6 grid grid-cols-2 gap-6">
                          {productMenuItems.map((group) => (
                            <div key={group.title}>
                              <div className="flex items-center gap-2 mb-3">
                                <group.icon className="h-4 w-4 text-coconut-green" />
                                <h4 className="font-bold text-sm text-foreground">
                                  {group.title}
                                </h4>
                              </div>
                              <ul className="space-y-1">
                                {group.items.map((product) => (
                                  <li key={product.id}>
                                    <Link
                                      href={`/products#${product.slug}`}
                                      className="block px-3 py-2 text-sm text-muted-foreground hover:text-coconut-green hover:bg-coconut-green/5 rounded-lg transition-colors"
                                      onClick={() => setMegaOpen(false)}
                                    >
                                      {product.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          <div className="col-span-2 pt-4 border-t border-border flex justify-between items-center">
                            <p className="text-sm text-muted-foreground">
                              10+ premium coconut products
                            </p>
                            <Button asChild size="sm">
                              <Link href="/products">View All Products</Link>
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:text-coconut-green hover:bg-coconut-green/5"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button asChild variant="outline" size="sm">
              <Link href="/products">View Products</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 rounded-lg text-base font-medium hover:bg-coconut-green/5 hover:text-coconut-green transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center justify-center gap-2 text-sm text-coconut-green font-medium"
                >
                  <Phone className="h-4 w-4" />
                  {companyInfo.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
