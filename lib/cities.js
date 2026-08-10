// Single source of truth for every city landing page.
// Add a new city by adding an entry here — a page is generated automatically
// at /locations/[slug].
export const cities = [
  {
    slug: "austin-tx",
    name: "Austin, TX",
    blurb:
      "Systems integration services for businesses across the Austin metro area.",
    phone: "[PHONE NUMBER]",
  },
  {
    slug: "dallas-tx",
    name: "Dallas, TX",
    blurb:
      "Systems integration services for businesses across the Dallas–Fort Worth metro area.",
    phone: "[PHONE NUMBER]",
  },
  {
    slug: "houston-tx",
    name: "Houston, TX",
    blurb:
      "Systems integration services for businesses across the greater Houston area.",
    phone: "[PHONE NUMBER]",
  },
];

export function getCity(slug) {
  return cities.find((city) => city.slug === slug);
}
