import { companyInfo } from "@/lib/data";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    description: companyInfo.description,
    url: "https://mmcoconut.com",
    telephone: companyInfo.phone,
    email: companyInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.line1,
      addressLocality: "Puduvayal, Karaikudi",
      addressRegion: "Tamil Nadu",
      postalCode: "630108",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: companyInfo.coordinates.lat,
      longitude: companyInfo.coordinates.lng,
    },
    sameAs: Object.values(companyInfo.social),
    taxID: companyInfo.gstin,
    foundingLocation: {
      "@type": "Place",
      name: "Karaikudi, Tamil Nadu, India",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: companyInfo.name,
    image: "/images/facility-exterior.png",
    "@id": "https://mmcoconut.com",
    url: "https://mmcoconut.com",
    telephone: companyInfo.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.line1,
      addressLocality: "Puduvayal",
      addressRegion: "Tamil Nadu",
      postalCode: "630108",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: companyInfo.coordinates.lat,
      longitude: companyInfo.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
