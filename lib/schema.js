import { SITE_URL } from "@/lib/site";
import { business } from "@/lib/business";
import { serviceAreas } from "@/lib/serviceAreas";

// Stable @id for the organization node so Service and Breadcrumb markup on
// other pages can point back at it instead of redeclaring the business.
export const ORG_ID = `${SITE_URL}/#organization`;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: "TechOne Installers",
  alternateName: "TechOne Systems Integration",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-mark.png`,
  image: `${SITE_URL}/images/og-default.jpg`,
  description:
    "Commercial audio/visual, security, digital signage, structured cabling, business communications, and restaurant technology integration serving Central Ohio and surrounding states.",
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.zip,
    addressCountry: "US",
  },
  // Crews travel to the job; there is no storefront customers visit.
  areaServed: [
    { "@type": "State", name: "Ohio" },
    ...serviceAreas.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: { "@type": "State", name: "Ohio" },
    })),
  ],
  // sameAs is how Google ties this site to the Google Business Profile and
  // social listings. Dropped entirely while business.profiles is empty so we
  // never emit an empty array.
  ...(business.profiles.length > 0 ? { sameAs: business.profiles } : {}),
};

// Service markup for /services/[slug] — the pages meant to rank for
// "<service> integration" queries.
export function serviceJsonLd(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}#service`,
    name: `${service.name} Integration`,
    serviceType: service.name,
    description: service.intro,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { "@id": ORG_ID },
    areaServed: serviceAreas.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: { "@type": "State", name: "Ohio" },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} — What's Included`,
      itemListElement: service.whatsIncluded.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item },
      })),
    },
  };
}

// items: [{ name, path }] — the trail *below* the homepage, which is added here.
export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "" }, ...items].map(
      (item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      }),
    ),
  };
}
