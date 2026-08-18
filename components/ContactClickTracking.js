"use client";

import { useEffect } from "react";
import { EVENTS, trackEvent } from "@/lib/analytics";

// Phone and email links live in the footer, the contact page, and the
// contact form's error state. Rather than wrapping each one, this listens
// once at the document level so any tel:/mailto: link added later is
// counted automatically. Renders nothing.
export default function ContactClickTracking() {
  useEffect(() => {
    function handleClick(event) {
      const link = event.target.closest?.("a[href^='tel:'], a[href^='mailto:']");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const isPhone = href.startsWith("tel:");
      trackEvent(isPhone ? EVENTS.phoneClick : EVENTS.emailClick, {
        link_url: href,
        // Which page drove the call is the useful part.
        page_path: window.location.pathname,
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
