import { business } from "@/lib/business";
import { buildMetadata } from "@/lib/seo";
import CareersForm from "@/components/CareersForm";

export const metadata = buildMetadata({
  title: "Careers | TechOne Installers",
  description:
    "TechOne Installers is hiring low-voltage and AV/security installers for our Central Ohio crews. Apply online today.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="grid-bg"></div>
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <span className="eyebrow">Become Part of the Team</span>
          <h1
            style={{
              fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              maxWidth: "22ch",
              marginBottom: 20,
            }}
          >
            We&rsquo;re looking for installers.
          </h1>
          <p className="prose">
            TechOne Installers is hiring experienced low-voltage and
            AV/security installers for our Central Ohio crews. If you take
            pride in clean cable runs and a job done right, we want to hear
            from you.
          </p>
          <p className="prose" style={{ marginTop: 18 }}>
            Questions before you apply?{" "}
            <a
              href={business.phoneHref}
              style={{ color: "var(--accent-bright)" }}
            >
              {business.phone}
            </a>{" "}
            &middot;{" "}
            <a
              href={business.emailHref}
              style={{ color: "var(--accent-bright)" }}
            >
              {business.email}
            </a>
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <CareersForm />
        </div>
      </section>
    </main>
  );
}
