"use client";

import { useState } from "react";
import { services } from "@/lib/services";
import { business } from "@/lib/business";
import { FORMSPREE_FORM_ID } from "@/lib/formspree";
import { EVENTS, trackEvent } from "@/lib/analytics";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.target;
    // Read before reset() so the event still knows which service was picked.
    const serviceType = new FormData(form).get("serviceType") || "unspecified";
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
        // Only fires on a confirmed 2xx, so the conversion count matches the
        // number of requests that actually reached Formspree.
        trackEvent(EVENTS.lead, {
          form_name: "contact",
          service_type: serviceType,
        });
      } else {
        setStatus("error");
        trackEvent(EVENTS.formError, {
          form_name: "contact",
          status_code: response.status,
        });
      }
    } catch {
      setStatus("error");
      trackEvent(EVENTS.formError, {
        form_name: "contact",
        status_code: "network",
      });
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" style={{ maxWidth: 760 }}>
        <p className="prose">
          Thanks — your request came through. We&rsquo;ll follow up at the
          email or phone number you provided within one business day.
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
          <button
            className="btn btn-solid"
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "submitting"
              ? "Sending…"
              : "Request a Site Assessment"}
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
