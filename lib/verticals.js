// The 5 industry verticals called out in the rebrand plan's SEO section.
// Each page pulls in the relevant services rather than duplicating content.
export const verticals = [
  {
    slug: "corporate-offices",
    name: "Corporate Offices",
    tagline: "Systems built for how your team actually works.",
    intro:
      "Hybrid meetings, growing headcount, and access control that has to keep up — corporate offices need AV, network, and security systems that work the same way every day, not just on install day.",
    painPoints: [
      "Conference rooms where video calls don't just work reliably",
      "Access control and camera coverage that scales as you add space or staff",
      "Network and cabling infrastructure that doesn't need to be ripped out for the next office move",
      "One team accountable for AV, security, and cabling instead of three separate vendors",
    ],
    serviceSlugs: [
      "audio-visual",
      "structured-cabling",
      "security-surveillance",
      "business-communications",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline: "Infrastructure that holds up where reliability isn't optional.",
    intro:
      "Patient privacy, staff communication, and network uptime carry more weight in a healthcare facility than almost anywhere else. Systems here get designed and documented accordingly.",
    painPoints: [
      "Access control for patient-sensitive and restricted areas",
      "Camera coverage across waiting rooms, entrances, and parking areas",
      "Reliable network infrastructure for the systems staff depend on all day",
      "Digital signage and wayfinding that's easy for patients to actually use",
    ],
    serviceSlugs: [
      "security-surveillance",
      "structured-cabling",
      "digital-signage",
      "business-communications",
    ],
  },
  {
    slug: "education",
    name: "Education",
    tagline: "Campus-wide systems, one integrator to call.",
    intro:
      "From a single classroom to a full campus, education facilities need security and AV systems designed to be managed centrally — not a different vendor for every building.",
    painPoints: [
      "Campus-wide access control and camera coverage across multiple buildings",
      "Classroom and auditorium AV that staff can actually operate without a manual",
      "Network and cabling infrastructure that supports growth without a full re-cable",
      "A single point of contact for service across an entire campus",
    ],
    serviceSlugs: [
      "security-surveillance",
      "audio-visual",
      "structured-cabling",
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    tagline: "Loss prevention and customer-facing tech that stays up.",
    intro:
      "Retail environments run on uptime — a camera system that's down or signage that's dark is a problem on the sales floor, not just an IT ticket.",
    painPoints: [
      "Camera coverage for loss prevention across sales floor, stockroom, and entrances",
      "Digital signage and promotional displays that are easy to update across locations",
      "Reliable network connectivity for POS and back-office systems",
      "Consistent systems across multiple store locations",
    ],
    serviceSlugs: [
      "security-surveillance",
      "digital-signage",
      "structured-cabling",
    ],
  },
  {
    slug: "restaurant-hospitality",
    name: "Restaurant & Hospitality",
    tagline: "Guest-facing technology built for high traffic, every shift.",
    intro:
      "Digital menu boards, self-service kiosks, and guest Wi-Fi all have to work through a full dinner rush — this is technology that gets designed for high-traffic, high-uptime environments from the start.",
    painPoints: [
      "Digital menu boards and displays that stay reliable through every shift",
      "Self-service kiosk and POS network reliability",
      "Security coverage across dining, kitchen, and entrance areas",
      "Multi-location rollouts that need to look and work the same everywhere",
    ],
    serviceSlugs: [
      "restaurant-hospitality",
      "digital-signage",
      "security-surveillance",
      "structured-cabling",
    ],
  },
];

export function getVertical(slug) {
  return verticals.find((v) => v.slug === slug);
}
