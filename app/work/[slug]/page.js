import { notFound } from "next/navigation";
import Image from "next/image";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";
import { workImages } from "@/lib/workImages";
import { workGallery } from "@/lib/workGallery";
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
  const gallery = workGallery[slug] || [];

  return (
    <main>
      <section className="page-hero">
        <div className="grid-bg"></div>
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <span className="eyebrow">
            {project.tag}
            {project.client ? ` · ${project.client}` : ""}
          </span>
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
          <div
            className="case-thumb"
            style={{ height: 280, marginBottom: 32 }}
          >
            {workImages[project.slug] ? (
              <Image
                src={workImages[project.slug]}
                alt={`${project.title} photo`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 900px) 100vw, 1116px"
              />
            ) : (
              "[ PROJECT PHOTO ]"
            )}
          </div>
          <p className="prose">{project.body}</p>

          {gallery.length > 0 && (
            <div className="work-gallery">
              {gallery.map((image, index) => (
                <div className="work-gallery-item" key={index}>
                  <Image
                    src={image}
                    alt={`${project.title} additional photo ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABand />
    </main>
  );
}
