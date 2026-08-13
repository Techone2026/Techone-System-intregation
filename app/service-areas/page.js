import { serviceAreas } from "@/lib/serviceAreas";
import { business } from "@/lib/business";
import { buildMetadata } from "@/lib/seo";
import CTABand from "@/components/CTABand";

export const metadata = buildMetadata({
  title: "Service Areas | TechOne Installers",
  description:
    "Commercial AV, security, and network integration serving Columbus and Central Ohio — including Dublin, Westerville, Worthington, Gahanna, New Albany, and more.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="grid-bg"></div>
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <span className="eyebrow">Where We Work</span>
          <h1
            style={{
              fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              maxWidth: "24ch",
              marginBottom: 20,
            }}
          >
            Central Ohio commercial installs, wherever your business is.
          </h1>
          <p className="prose">
            TechOne Installers is based in {business.address.city},{" "}
            {business.address.state}, but our crews travel to the job — we
            don&rsquo;t run a storefront customers visit. Corporate offices,
            healthcare facilities, schools, restaurants, and retail
            locations across the following areas are all part of our
            regular service territory.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <span className="section-tag">Areas We Serve</span>
          <ul
            className="audience-list"
            style={{
              marginTop: 18,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px 32px",
            }}
          >
            {serviceAreas.map((city) => (
              <li key={city}>{city}, OH</li>
            ))}
          </ul>
          <p className="prose" style={{ marginTop: 32 }}>
            Don&rsquo;t see your city listed? We still may be able to help —
            reach out and tell us where you&rsquo;re located.
          </p>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
