import Link from "next/link";

export default function CTABand({
  eyebrow,
  heading = "Have a project in mind?",
  body = "Tell us what you're working with — a single room, a full build-out, or a multi-location rollout — and we'll walk you through what a system designed for your space would look like.",
  ctaLabel = "Request a Site Assessment",
  ctaHref = "/contact",
  id,
}) {
  return (
    <div className="cta-band" id={id}>
      <div className="wrap">
        {eyebrow && (
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            {eyebrow}
          </span>
        )}
        <h2>{heading}</h2>
        <p>{body}</p>
        <Link className="btn btn-solid" href={ctaHref}>
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
