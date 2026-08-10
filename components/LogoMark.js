// Stylized recreation of the TechOne Installers arrow + circuit icon mark.
// Hand-redrawn approximation (no source vector file was available to
// trace) — swap out if/when the original vector logo becomes available.
export default function LogoMark({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <path d="M44,50 L20,50" />
        <circle cx="18" cy="50" r="3.5" fill="var(--accent)" />
        <path d="M44,65 L14,65 L14,80" />
        <circle cx="14" cy="82" r="3.5" fill="var(--accent)" />
        <path d="M44,80 L26,80" />
        <circle cx="24" cy="80" r="3.5" fill="var(--accent)" />

        <path d="M76,50 L100,50" />
        <circle cx="102" cy="50" r="3.5" fill="var(--accent)" />
        <path d="M76,65 L106,65 L106,80" />
        <circle cx="106" cy="82" r="3.5" fill="var(--accent)" />
        <path d="M76,80 L94,80" />
        <circle cx="96" cy="80" r="3.5" fill="var(--accent)" />
      </g>

      <path
        d="M60,14 L30,48"
        stroke="var(--accent)"
        strokeWidth="16"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M60,14 L90,48"
        stroke="var(--accent)"
        strokeWidth="16"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="44" y="20" width="32" height="84" rx="2" fill="var(--accent)" />
    </svg>
  );
}
