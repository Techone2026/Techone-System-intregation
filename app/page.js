import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";
import { caseStudies } from "@/lib/caseStudies";
import { serviceImages } from "@/lib/serviceImages";
import SignalPathDiagram from "@/components/SignalPathDiagram";
import CTABand from "@/components/CTABand";
import bicsiBadge from "@/public/images/badges/bicsi-individual-member.png";

export default function Home() {
  return (
    <main id="top">
      <section className="hero">
        <div className="grid-bg"></div>
        <div className="wrap hero-inner">
          <div>
            <span className="eyebrow">
              AV · Security · Network Integration — Central Ohio
            </span>
            <h1>
              We design, engineer, and deploy the systems your business{" "}
              <em>runs on.</em>
            </h1>
            <p>
              TechOne Installers&rsquo; Systems Integration division designs
              and deploys commercial audio/visual, security, digital
              signage, and structured cabling systems — built for corporate
              offices, healthcare, education, retail, and hospitality.
            </p>
            <div className="hero-ctas">
              <Link className="btn btn-solid" href="/contact">
                Request a Site Assessment
              </Link>
              <Link className="btn" href="/#work">
                See Our Work
              </Link>
            </div>
          </div>

          <SignalPathDiagram />
        </div>
      </section>

      <div className="proof">
        <div className="wrap proof-grid">
          <div>
            <div className="proof-num">25+</div>
            <div className="proof-cap">Years in Low Voltage</div>
          </div>
          <div>
            <div className="proof-num">2,800+</div>
            <div className="proof-cap">Commercial Sites Outfitted</div>
          </div>
          <div>
            <div className="proof-num">[Mfr]</div>
            <div className="proof-cap">Authorized Partner</div>
          </div>
          <div>
            <Image
              src={bicsiBadge}
              alt="BICSI Individual Member"
              className="proof-badge"
            />
            <div className="proof-cap">BICSI Individual Member</div>
          </div>
        </div>
      </div>

      <section id="services">
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">What We Integrate</span>
            <h2>Six systems. One accountable integrator.</h2>
            <p>
              Every system below is designed, installed, tested, and
              supported by the same team — so nothing falls into the gap
              between vendors.
            </p>
          </div>
        </div>
        <div className="wrap">
          <div className="services-grid">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-card"
              >
                {serviceImages[service.slug] && (
                  <div className="service-card-thumb">
                    <Image
                      src={serviceImages[service.slug]}
                      alt={`${service.name} example`}
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                    />
                  </div>
                )}
                <h3>{service.name}</h3>
                <p>{service.cardDescription}</p>
                <span className="service-link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="process">
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">How We Work</span>
            <h2>A defined process, not a truck roll.</h2>
          </div>
          <div className="process-list">
            <div className="process-item">
              <div>
                <h4>Site Assessment</h4>
                <p>
                  We evaluate your space, existing infrastructure, and goals
                  — on-site when needed — before a single component is
                  specified.
                </p>
              </div>
            </div>
            <div className="process-item">
              <div>
                <h4>System Design</h4>
                <p>
                  A clear plan for what&rsquo;s being installed, where, how
                  it&rsquo;s wired, and how it performs — reviewed with you
                  before work begins.
                </p>
              </div>
            </div>
            <div className="process-item">
              <div>
                <h4>Integration &amp; Install</h4>
                <p>
                  Our technicians execute with attention to the details that
                  matter: cable management, testing, labeling, clean
                  handoff.
                </p>
              </div>
            </div>
            <div className="process-item">
              <div>
                <h4>Support</h4>
                <p>
                  We stay available for service, troubleshooting, and future
                  expansion as your needs change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">Recent Work</span>
            <h2>Projects across Ohio&rsquo;s commercial spaces.</h2>
          </div>
          <div className="case-grid">
            {caseStudies.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="case-card"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="case-thumb">[ PROJECT PHOTO ]</div>
                <div className="case-body">
                  <span className="case-tag">{project.tag}</span>
                  <h4>{project.title}</h4>
                  <p>{project.summary}</p>
                  <span className="case-link">Read the project →</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link className="btn" href="/work">
              See All Projects →
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">Client Feedback</span>
            <h2>What clients say once the job is done.</h2>
          </div>
          <div className="testi-grid">
            <div className="testi-card">
              <span className="testi-mark">&ldquo;</span>
              <p>
                [Real client quote — reliability, communication, or quality
                of install]
              </p>
              <div className="who">NAME, TITLE — COMPANY</div>
            </div>
            <div className="testi-card">
              <span className="testi-mark">&ldquo;</span>
              <p>[Real client quote]</p>
              <div className="who">NAME, TITLE — COMPANY</div>
            </div>
            <div className="testi-card">
              <span className="testi-mark">&ldquo;</span>
              <p>[Real client quote]</p>
              <div className="who">NAME, TITLE — COMPANY</div>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
