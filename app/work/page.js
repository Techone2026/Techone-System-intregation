import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/lib/caseStudies";
import { workImages } from "@/lib/workImages";
import CTABand from "@/components/CTABand";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Work | TechOne Installers",
  description:
    "Real commercial AV, security, and digital signage installations for clients like Starbucks, Dick's Sporting Goods, PNC Bank, and more across Central Ohio.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="grid-bg"></div>
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <span className="eyebrow">Recent Work</span>
          <h1
            style={{
              fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              maxWidth: "22ch",
              marginBottom: 20,
            }}
          >
            Projects across Ohio&rsquo;s commercial spaces.
          </h1>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="case-grid">
            {caseStudies.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="case-card"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="case-thumb">
                  {workImages[project.slug] ? (
                    <Image
                      src={workImages[project.slug]}
                      alt={`${project.title} photo`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 900px) 100vw, 33vw"
                    />
                  ) : (
                    "[ PROJECT PHOTO ]"
                  )}
                </div>
                <div className="case-body">
                  <span className="case-tag">
                    {project.tag}
                    {project.client ? ` · ${project.client}` : ""}
                  </span>
                  <h4>{project.title}</h4>
                  <p>{project.summary}</p>
                  <span className="case-link">Read the project →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
