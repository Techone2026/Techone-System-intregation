import Image from "next/image";
import CTABand from "@/components/CTABand";
import sheldonPhoto from "@/public/images/sheldon-lambert.jpg";

export const metadata = {
  title: "About | TechOne Installers",
  description:
    "25+ years designing and building the systems commercial spaces run on.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="grid-bg"></div>
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <span className="eyebrow">Who We Are</span>
          <h1
            style={{
              fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              maxWidth: "22ch",
              marginBottom: 28,
            }}
          >
            25+ years designing and building the systems commercial spaces
            run on.
          </h1>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="prose">
            TechOne Installers started in 2000 as a low-voltage installation
            business in Michigan, founded by Sheldon Lambert after years of
            hands-on work across high-profile corporate and low-voltage
            projects in California and Michigan. As the business grew, it
            relocated to Central Ohio to better serve an expanding base of
            commercial clients.
          </p>
          <p className="prose">
            Today, TechOne Installers is a full commercial technology
            integrator — and through our Systems Integration division, we
            handle everything from initial system design to installation,
            testing, and ongoing support — for corporate offices, healthcare
            facilities, schools, restaurants, and retail locations across
            Ohio and surrounding states.
          </p>

          <div className="ceo-block">
            <div className="ceo-photo">
              <Image
                src={sheldonPhoto}
                alt="Sheldon Lambert, CEO of TechOne Installers"
              />
            </div>
            <div className="quote-block">
              <p>
                &ldquo;Every project we take on is a commitment, not just a
                task. I&rsquo;m personally invested in making sure our
                promise — swift, high-quality, well-integrated systems — is
                something our clients actually experience, not just
                something we say. We work with leading manufacturers and
                stay current on the technology our clients depend on,
                because this isn&rsquo;t just a business for me. It&rsquo;s
                a craft, and I want us to get it right every time.&rdquo;
              </p>
              <div className="who">
                SHELDON LAMBERT, CEO, TECHONE INSTALLERS
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          <div>
            <span className="section-tag">Vision</span>
            <p className="prose">
              We believe businesses should be able to rely on their
              technology without thinking about it. Our job is to design and
              build systems that just work — reliably, on schedule, and
              without surprises.
            </p>
          </div>
          <div>
            <span className="section-tag">Mission</span>
            <p className="prose">
              We deliver system design, integration, and installation with
              the same standard every time: clear communication, quality
              workmanship, and a job done right the first time.
            </p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          <div>
            <span className="section-tag">Credentials</span>
            <ul className="credentials-list">
              <li>Licensed &amp; insured</li>
              <li>BICSI-certified structured cabling technicians*</li>
              <li>CTS (AVIXA)-certified AV technicians*</li>
              <li>Authorized dealer/partner: [manufacturer names]*</li>
            </ul>
            <p className="form-note" style={{ marginTop: 14 }}>
              * In progress — see the certification roadmap.
            </p>
          </div>
          <div>
            <span className="section-tag">Who We Work With</span>
            <ul className="audience-list">
              <li>Corporate offices</li>
              <li>Healthcare facilities</li>
              <li>Educational institutions</li>
              <li>Retail environments</li>
              <li>Restaurants &amp; hospitality</li>
              <li>Property managers &amp; GCs</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
