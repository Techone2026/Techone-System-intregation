"use client";

import { useState } from "react";
import { business } from "@/lib/business";
import { FORMSPREE_FORM_ID } from "@/lib/formspree";
import { EVENTS, trackEvent } from "@/lib/analytics";

export default function CareersForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.target;
    try {
      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form),
        }
      );

      if (response.ok) {
        setStatus("success");
        form.reset();
        // Deliberately not the lead event — applicants aren't sales leads,
        // and mixing them would inflate the conversion count.
        trackEvent(EVENTS.careersApplication, { form_name: "careers" });
      } else {
        setStatus("error");
        trackEvent(EVENTS.formError, {
          form_name: "careers",
          status_code: response.status,
        });
      }
    } catch {
      setStatus("error");
      trackEvent(EVENTS.formError, {
        form_name: "careers",
        status_code: "network",
      });
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" style={{ maxWidth: 760 }}>
        <p className="prose">
          Thanks for applying — we&rsquo;ve received your application and
          will follow up at the email or phone number you provided.
        </p>
      </div>
    );
  }

  return (
    <>
      <form
        className="form-grid"
        style={{ maxWidth: 760 }}
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_subject" value="Installer Application" />
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" required />
        </div>
        <div className="form-field">
          <label htmlFor="experience">Years of Experience</label>
          <input id="experience" name="experience" type="text" />
        </div>
        <div className="form-field full">
          <label htmlFor="resumeLink">Resume Link (optional)</label>
          <input
            id="resumeLink"
            name="resumeLink"
            type="url"
            placeholder="Link to a resume, LinkedIn profile, or portfolio"
          />
        </div>
        <div className="form-field full">
          <label htmlFor="details">Tell Us About Your Background</label>
          <textarea
            id="details"
            name="details"
            placeholder="Relevant experience, certifications, and the type of work you're looking for."
          />
        </div>
        <div className="form-field full">
          <button
            className="btn btn-solid"
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending…" : "Submit Application"}
          </button>
        </div>
      </form>
      {status === "error" && (
        <p className="form-note" style={{ color: "var(--accent-bright)" }}>
          Something went wrong sending that — please try again, or reach us
          directly at{" "}
          <a href={business.phoneHref} style={{ color: "inherit" }}>
            {business.phone}
          </a>{" "}
          or{" "}
          <a href={business.emailHref} style={{ color: "inherit" }}>
            {business.email}
          </a>
          .
        </p>
      )}
    </>
  );
}
