// Placeholder project set — replace with real case studies (real client
// names/photos where permitted) before launch. Same 3 projects referenced
// in the master plan's homepage "Recent Work" preview.
export const caseStudies = [
  {
    slug: "boardroom-av-network-cabling",
    tag: "Corporate Office",
    title: "Boardroom AV + Network Cabling",
    summary:
      "Full conference room AV integration and structured cabling for a Columbus-area corporate office.",
    body: "[Project details — replace with the real scope, challenge, and outcome once available.]",
  },
  {
    slug: "multi-location-menu-board-rollout",
    tag: "Restaurant Chain",
    title: "Multi-Location Menu Board Rollout",
    summary:
      "Digital menu board and kiosk deployment across multiple regional locations.",
    body: "[Project details — replace with the real scope, challenge, and outcome once available.]",
  },
  {
    slug: "security-access-control-upgrade",
    tag: "Retail / Healthcare",
    title: "Security & Access Control Upgrade",
    summary:
      "Camera and access control system design and installation across a growing facility.",
    body: "[Project details — replace with the real scope, challenge, and outcome once available.]",
  },
];

export function getCaseStudy(slug) {
  return caseStudies.find((project) => project.slug === slug);
}
