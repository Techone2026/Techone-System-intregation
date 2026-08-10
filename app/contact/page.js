import { services } from "@/lib/services";

export const metadata = {
  title: "Contact | TechOne Installers",
  description: "Let's talk about your project.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="grid-bg"></div>
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <span className="eyebrow">Get In Touch</span>
          <h1
            style={{
              fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              maxWidth: "22ch",
              marginBottom: 20,
            }}
          >
            Let&rsquo;s talk about your project.
          </h1>
          <p className="prose">
            Tell us what you&rsquo;re working with, and we&rsquo;ll follow up
            to discuss next steps — including a site assessment if needed.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <form className="form-grid" style={{ maxWidth: 760 }}>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required />
            </div>
            <div className="form-field">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" />
            </div>
            <div className="form-field full">
              <label htmlFor="serviceType">Service Type</label>
              <select id="serviceType" name="serviceType" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {service.name}
                  </option>
                ))}
                <option value="other">Other / Not Sure</option>
              </select>
            </div>
            <div className="form-field full">
              <label htmlFor="details">Project Details</label>
              <textarea
                id="details"
                name="details"
                placeholder="Tell us about your space, timeline, and what you're trying to accomplish."
              />
            </div>
            <div className="form-field full">
              <button className="btn btn-solid" type="submit">
                Request a Site Assessment
              </button>
            </div>
          </form>
          <p className="form-note">
            This form is a UI placeholder — it isn&rsquo;t wired to a backend
            or email yet. Connect it to a form service or API route before
            launch.
          </p>
        </div>
      </section>
    </main>
  );
}
