import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import {
  OrganizationSchema,
  LocalBusinessSchema,
} from "@/components/seo/SchemaMarkup";
import { companyInfo } from "@/lib/data";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mmcoconut.com"),
  title: {
    default: `${companyInfo.name} | Premium Coconut Products Manufacturer`,
    template: `%s | ${companyInfo.name}`,
  },
  description: companyInfo.description,
  keywords: [
    "coconut processing",
    "coconut oil manufacturer",
    "virgin coconut oil",
    "desiccated coconut",
    "coconut copra",
    "coconut products Tamil Nadu",
    "coconut supplier India",
    "MM Coconut Processing Unit",
    "Karaikudi coconut",
  ],
  authors: [{ name: companyInfo.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: companyInfo.name,
    title: companyInfo.tagline,
    description: companyInfo.description,
    images: [{ url: "/images/facility-exterior.png", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
