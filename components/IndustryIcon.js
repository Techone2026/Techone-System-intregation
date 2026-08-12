// Original line-art icons, one per industry vertical, drawn in the site's
// own blueprint/schematic style. No stock or web-sourced imagery.
const ICONS = {
  "corporate-offices": (
    <>
      <rect x="16" y="10" width="32" height="44" fill="none" strokeWidth="2" />
      <path d="M16 22 H48 M16 32 H48 M16 42 H48" strokeWidth="1.3" />
      <path d="M26 10 V54 M38 10 V54" strokeWidth="1.3" />
      <rect x="28" y="44" width="8" height="10" fill="currentColor" stroke="none" />
    </>
  ),
  healthcare: (
    <>
      <circle cx="32" cy="32" r="21" fill="none" strokeWidth="2" />
      <path
        d="M32 21 V43 M21 32 H43"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
    </>
  ),
  education: (
    <>
      <path
        d="M32 13 L57 25 L32 37 L7 25 Z"
        fill="none"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M19 29 V41 Q32 48 45 41 V29"
        fill="none"
        strokeWidth="2"
      />
      <path d="M53 27 V43" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="53" cy="46" r="2.2" fill="currentColor" stroke="none" />
    </>
  ),
  retail: (
    <>
      <path
        d="M17 22 H47 L45 53 H19 Z"
        fill="none"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M23 22 V16 Q23 9 32 9 Q41 9 41 16 V22"
        fill="none"
        strokeWidth="2"
      />
    </>
  ),
  "restaurant-hospitality": (
    <>
      <path
        d="M20 9 V25 M16 9 V19 M24 9 V19 M20 25 V55"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M42 9 C35 13 35 24 42 28 V55"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  ),
};

export default function IndustryIcon({ slug, className }) {
  const paths = ICONS[slug];
  if (!paths) return null;

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      stroke="var(--accent)"
      color="var(--accent)"
      fill="none"
      aria-hidden="true"
    >
      {paths}
    </svg>
  );
}
