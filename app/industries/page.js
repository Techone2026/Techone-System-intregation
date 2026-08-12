import Link from "next/link";
import { verticals } from "@/lib/verticals";
import IndustryIcon from "@/components/IndustryIcon";
import CTABand from "@/components/CTABand";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Industries We Serve | TechOne Installers",
  description:
    "Commercial AV, security, and network integration for corporate offices, healthcare, education, retail, and restaurant & hospitality clients across Central Ohio.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="grid-bg"></div>
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <span className="eyebrow">Industries We Serve</span>
          <h1
            style={{
              fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              maxWidth: "22ch",
              marginBottom: 20,
            }}
          >
            Systems designed around how your industry actually runs.
          </h1>
          <p className="prose">
            The same six services, applied differently depending on what
            your building needs to do every day.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="services-grid">
            {verticals.map((vertical) => (
              <Link
                key={vertical.slug}
                href={`/industries/${vertical.slug}`}
                className="service-card"
              >
                <IndustryIcon
                  slug={vertical.slug}
                  className="industry-card-icon"
                />
                <h3>{vertical.name}</h3>
                <p>{vertical.tagline}</p>
                <span className="service-link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
