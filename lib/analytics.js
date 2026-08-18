// GA4 measurement ID. Read at build time (the site is a static export, so
// there is no server to read env vars at runtime) and set in the deploy
// workflow from the NEXT_PUBLIC_GA_ID secret. Analytics is simply absent
// when it isn't set, which is what local dev and previews want anyway.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// The events worth counting as conversions in GA4. Keeping the names in one
// place stops the Admin > Events screen filling up with near-duplicates.
export const EVENTS = {
  // Someone asked us to contact them about a project. This is the one that
  // should be marked as a key event / conversion in GA4.
  lead: "generate_lead",
  // Tap-to-call and mailto clicks. Not proof of a conversation, but the
  // closest signal we have that someone tried to reach us directly.
  phoneClick: "phone_click",
  emailClick: "email_click",
  // Job applications, tracked separately so they never get counted as sales
  // leads.
  careersApplication: "careers_application",
  // Form POST failed. Worth watching: a spike here means lost leads.
  formError: "form_error",
};

// Fire a GA4 event. No-ops when analytics is unconfigured or blocked, so
// callers never need to guard.
export function trackEvent(name, params = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
