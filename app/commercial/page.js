import CTABand from "@/components/CTABand";

export const metadata = {
  title: "Commercial & Enterprise | TechOne Systems Integration",
  description:
    "One integrator for AV, security, and infrastructure — from design through support.",
};

export default function CommercialPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="grid-bg"></div>
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <span className="eyebrow">
            TechOne Systems Integration — For Facilities Directors, IT
            Managers &amp; General Contractors
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
            One integrator for AV, security, and infrastructure — from
            design through support.
          </h1>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="prose">
            TechOne Systems Integration is the commercial division of
            TechOne Installers — the team we bring to larger, more complex
            projects that need design, engineering, and multi-system
            coordination, not just installation. Whether you&rsquo;re
            outfitting a single headquarters, managing a multi-location
            rollout, or specifying systems for a new build, we act as a
            single point of accountability for AV, security, digital
            signage, and network infrastructure — so you&rsquo;re not
            managing four separate vendors.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <span className="section-tag">What We Bring to Larger Projects</span>
          <ul className="included-list" style={{ marginTop: 18 }}>
            <li>Site assessment and system design, not just installation</li>
            <li>Structured cabling built to spec and properly documented</li>
            <li>Coordination with architects, GCs, and IT teams</li>
            <li>Manufacturer-certified installation</li>
            <li>Post-install support and service agreements</li>
            <li>Experience across multi-site and phased rollouts</li>
          </ul>
        </div>
      </section>

      <CTABand
        heading="Have a larger project in mind?"
        body="Tell us about the scope — a single headquarters, a multi-location rollout, or a new build — and we'll walk you through what a single-integrator approach would look like for your project."
        ctaLabel="Request a Project Consultation"
      />
    </main>
  );
}
