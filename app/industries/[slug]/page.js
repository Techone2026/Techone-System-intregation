import { notFound } from "next/navigation";
import Link from "next/link";
import { verticals, getVertical } from "@/lib/verticals";
import { getService } from "@/lib/services";
import IndustryIcon from "@/components/IndustryIcon";
import CTABand from "@/components/CTABand";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return verticals.map((vertical) => ({ slug: vertical.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const vertical = getVertical(slug);
  if (!vertical) return {};
  return buildMetadata({
    title: `${vertical.name} | TechOne Systems Integration`,
    description: vertical.intro,
    path: `/industries/${vertical.slug}`,
  });
}

export default async function VerticalPage({ params }) {
  const { slug } = await params;
  const vertical = getVertical(slug);
  if (!vertical) notFound();

  const relevantServices = vertical.serviceSlugs
    .map((serviceSlug) => getService(serviceSlug))
    .filter(Boolean);

  return (
    <main>
      <section className="page-hero">
        <div className="grid-bg"></div>
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <div className="industry-icon-badge">
            <IndustryIcon slug={vertical.slug} />
          </div>
          <span className="eyebrow">Industries / {vertical.name}</span>
          <h1
            style={{
              fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              maxWidth: "22ch",
              marginBottom: 20,
            }}
          >
            {vertical.tagline}
          </h1>
          <p className="prose">{vertical.intro}</p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <span className="section-tag">What This Usually Means</span>
          <ul className="included-list" style={{ marginTop: 18, maxWidth: "70ch" }}>
            {vertical.painPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">Relevant Services</span>
            <h2>What we&rsquo;d bring in for {vertical.name.toLowerCase()}.</h2>
          </div>
          <div className="services-grid">
            {relevantServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-card"
              >
                <h3>{service.name}</h3>
                <p>{service.cardDescription}</p>
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
