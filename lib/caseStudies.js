// Real and placeholder case studies. The homepage "Recent Work" preview
// shows only the first 3 (per the master plan); /work lists all of them.
export const caseStudies = [
  {
    slug: "boardroom-av-network-cabling",
    tag: "Corporate Office",
    client: "PNC Bank",
    title: "Boardroom AV + Network Cabling",
    summary:
      "Full conference room AV integration and structured cabling for a Columbus-area corporate office.",
    body: "[Project details — replace with the real scope, challenge, and outcome once available.]",
  },
  {
    slug: "multi-location-menu-board-rollout",
    tag: "Restaurant Chain",
    client: "Starbucks",
    title: "Multi-Location Menu Board Rollout",
    summary:
      "Digital menu board and kiosk deployment across multiple regional locations.",
    body: "[Project details — replace with the real scope, challenge, and outcome once available.]",
  },
  {
    slug: "security-access-control-upgrade",
    tag: "Retail",
    client: "Gabe's",
    title: "Security & Access Control Upgrade",
    summary:
      "Camera and access control system design and installation across a growing facility.",
    body: "[Project details — replace with the real scope, challenge, and outcome once available.]",
  },
  {
    slug: "dicks-sporting-goods-digital-display",
    tag: "Retail",
    client: "Dick's Sporting Goods",
    title: "In-Store Digital Display Installation",
    summary:
      "Large-format digital display and video wall installation built into an in-store retail fixture.",
    body: "[Project details — replace with the real scope, challenge, and outcome once available.]",
  },
  {
    slug: "winans-chocolate-digital-menu-boards",
    tag: "Specialty Retail",
    client: "Winan's Chocolates",
    title: "Digital Menu Board Installation",
    summary:
      "Digital menu boards and signage installed for a specialty chocolate and coffee retailer.",
    body: "[Project details — replace with the real scope, challenge, and outcome once available.]",
  },
  {
    slug: "loves-travel-stops-digital-signage",
    tag: "Convenience Retail",
    client: "Love's Travel Stops",
    title: "Digital Signage & Self-Service Kiosk Installation",
    summary:
      "Digital promotional displays and a self-service beverage kiosk installed at a travel center location.",
    body: "[Project details — replace with the real scope, challenge, and outcome once available.]",
  },
];

export function getCaseStudy(slug) {
  return caseStudies.find((project) => project.slug === slug);
}
