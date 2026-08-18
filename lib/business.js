// Real business facts, used across the footer, contact page, and
// structured data.
export const business = {
  phone: "(740) 419-1178",
  phoneHref: "tel:+17404191178",
  email: "sales@techoneinstallers.com",
  emailHref: "mailto:sales@techoneinstallers.com",
  address: {
    street: "2545 Farmers Dr #100",
    city: "Columbus",
    state: "OH",
    zip: "43235",
  },
  // 7am-7pm Monday through Saturday; closed Sunday. Feeds the
  // openingHoursSpecification in lib/schema.js.
  hours: {
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "07:00",
    closes: "19:00",
    closedDays: ["Sunday"],
  },
  // Canonical profile URLs for schema.org sameAs — the signal Google uses to
  // tie this site to the Google Business Profile and social listings. Add the
  // real URLs (GBP, LinkedIn, Facebook) here; nothing is emitted while empty.
  profiles: ["https://www.facebook.com/techoneinstallers/"],
};
