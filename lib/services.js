// Single source of truth for the six service subpages (/services/[slug]).
// Homepage grid, footer links, and each subpage all read from this list.
export const services = [
  {
    slug: "audio-visual",
    index: "01",
    tag: "AV",
    name: "Audio / Visual Systems",
    cardDescription:
      "Conference rooms, lobbies, and shared spaces designed for clear communication and seamless presentation.",
    intro:
      "From a single-display conference room to a fully integrated multi-room AV system, TechOne designs and installs audio/visual solutions built around how your team actually works — not a generic package.",
    whatsIncluded: [
      "System design and equipment recommendation",
      "Display, projector, and video wall installation",
      "Audio system design and installation",
      "Control system programming and integration",
      "Cable management and clean installation",
      "Testing, training, and ongoing support",
    ],
    whoFor: [
      "Corporate offices",
      "Conference centers",
      "Lobbies",
      "Retail environments",
      "Houses of worship",
      "Shared/collaborative spaces",
    ],
  },
  {
    slug: "security-surveillance",
    index: "02",
    tag: "SECURITY",
    name: "Security & Surveillance",
    cardDescription:
      "Camera systems and access control designed around how your business actually operates.",
    intro:
      "From a single-entrance camera system to a fully integrated access control and monitoring platform, TechOne designs and installs security systems built around how your business actually operates — not a one-size-fits-all package.",
    whatsIncluded: [
      "Site assessment and camera/access control system design",
      "Camera and NVR/DVR installation",
      "Access control and door hardware integration",
      "Network configuration for remote monitoring",
      "Cable management and clean installation",
      "Testing, training, and ongoing support",
    ],
    whoFor: [
      "Corporate offices",
      "Retail locations",
      "Healthcare facilities",
      "Warehouses",
      "Multi-tenant properties",
      "Restaurants",
    ],
  },
  {
    slug: "digital-signage",
    index: "03",
    tag: "SIGNAGE",
    name: "Digital Signage",
    cardDescription:
      "Menu boards, wayfinding, and brand displays — installed and supported for uptime.",
    intro:
      "From a single menu board to a multi-location signage rollout, TechOne designs and installs digital signage systems that stay reliable and easy to manage long after installation day.",
    whatsIncluded: [
      "Signage system design and content platform recommendation",
      "Display and mounting hardware installation",
      "Media player and content management setup",
      "Network configuration for remote content updates",
      "Cable management and clean installation",
      "Testing, training, and ongoing support",
    ],
    whoFor: [
      "Restaurants",
      "Retail storefronts",
      "Corporate lobbies",
      "Healthcare waiting areas",
      "Multi-location brands",
    ],
  },
  {
    slug: "structured-cabling",
    index: "04",
    tag: "CABLING",
    name: "Structured Cabling & Network",
    cardDescription:
      "Cat5e/Cat6 infrastructure built to spec and properly documented — the foundation everything else runs on.",
    intro:
      "Every system in your building runs on the cabling underneath it. TechOne designs and installs structured cabling and network infrastructure built to spec, tested, and documented properly — so everything connected to it performs the way it should.",
    whatsIncluded: [
      "Cabling system design and pathway planning",
      "Cat5e / Cat6 / fiber cable installation",
      "Patch panel and rack termination",
      "Network switch and equipment configuration",
      "Cable testing, certification, and labeling",
      "As-built documentation and ongoing support",
    ],
    whoFor: [
      "New construction and build-outs",
      "Office renovations",
      "Multi-location rollouts",
      "Facilities upgrading aging infrastructure",
    ],
  },
  {
    slug: "business-communications",
    index: "05",
    tag: "COMMS",
    name: "Business Communications",
    cardDescription:
      "Phone and communication systems installed with minimal downtime during transition.",
    intro:
      "TechOne installs phone and communication systems designed for minimal disruption during the transition — so your team stays reachable while the system changes underneath them.",
    whatsIncluded: [
      "System design and equipment recommendation",
      "Phone system installation and configuration",
      "Network integration for VoIP systems",
      "Handset and device setup",
      "Testing and staff training",
      "Ongoing support and service",
    ],
    whoFor: [
      "Corporate offices",
      "Healthcare facilities",
      "Retail locations",
      "Any business transitioning phone systems",
    ],
  },
  {
    slug: "restaurant-hospitality",
    index: "06",
    tag: "HOSPITALITY",
    name: "Restaurant & Hospitality Tech",
    cardDescription:
      "Kiosks and guest-facing systems designed for high-traffic, high-uptime environments.",
    intro:
      "From guest-facing kiosks to back-of-house displays, TechOne designs and installs restaurant and hospitality technology built for high-traffic, high-uptime environments where downtime means lost business.",
    whatsIncluded: [
      "Kiosk and digital menu board system design",
      "Point-of-sale and kiosk hardware installation",
      "Digital menu board and display installation",
      "Network configuration for reliable uptime",
      "Cable management and clean installation",
      "Testing, training, and ongoing support",
    ],
    whoFor: [
      "Restaurants",
      "Quick-service and fast-casual chains",
      "Hotels",
      "Entertainment venues",
    ],
  },
];

export function getService(slug) {
  return services.find((service) => service.slug === slug);
}
