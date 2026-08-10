import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";
import CTABand from "@/components/CTABand";

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) return {};
  return {
    title: `${project.title} | TechOne Installers`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) notFound();

  return (
    <main>
      <section className="page-hero">
        <div className="grid-bg"></div>
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <span className="eyebrow">{project.tag}</span>
          <h1
            style={{
              fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              maxWidth: "24ch",
              marginBottom: 20,
            }}
          >
            {project.title}
          </h1>
          <p className="prose">{project.summary}</p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="case-thumb" style={{ height: 280, marginBottom: 32 }}>
            [ PROJECT PHOTO ]
          </div>
          <p className="prose">{project.body}</p>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
