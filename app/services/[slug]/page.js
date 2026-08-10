import { notFound } from "next/navigation";
import Image from "next/image";
import { services, getService } from "@/lib/services";
import { serviceImages } from "@/lib/serviceImages";
import CTABand from "@/components/CTABand";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} Integration | TechOne Systems Integration`,
    description: service.cardDescription,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const photo = serviceImages[service.slug];

  return (
    <main>
      <section className="page-hero">
        <div className="grid-bg"></div>
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <span className="eyebrow">
            {service.index} / {service.tag}
          </span>
          <h1
            style={{
              fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              maxWidth: "24ch",
              marginBottom: 28,
            }}
          >
            {service.name} Integration
          </h1>
          <p className="prose">{service.intro}</p>
        </div>
      </section>

      {photo && (
        <section style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="service-photo">
              <Image
                src={photo}
                alt={`${service.name} installation example`}
                sizes="(max-width: 900px) 100vw, 1116px"
              />
            </div>
          </div>
        </section>
      )}

      <section style={{ paddingTop: 0 }}>
        <div
          className="wrap"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}
        >
          <div>
            <span className="section-tag">What&rsquo;s Included</span>
            <ul className="included-list" style={{ marginTop: 18 }}>
              {service.whatsIncluded.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="section-tag">Who This Is For</span>
            <ul className="audience-list" style={{ marginTop: 18 }}>
              {service.whoFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
