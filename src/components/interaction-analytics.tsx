"use client";

import { useEffect } from "react";
import {
  getCurrentPagePath,
  trackConversionEvent,
} from "@/lib/conversion-analytics";
import { getLeadAttribution } from "@/lib/lead-attribution";

export function InteractionAnalytics() {
  useEffect(() => {
    getLeadAttribution();

    function onClick(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest<HTMLAnchorElement>("a[href]");

      if (!link) {
        return;
      }

      const href = link.getAttribute("href") ?? "";
      const label = (link.textContent ?? link.getAttribute("aria-label") ?? "")
        .trim()
        .replace(/\s+/g, " ")
        .slice(0, 100);
      const properties = {
        link_label: label,
        link_url: href.slice(0, 300),
        page_path: getCurrentPagePath(),
      };

      if (href.startsWith("tel:")) {
        trackConversionEvent("contact_phone_click", properties);
      } else if (href.startsWith("mailto:")) {
        trackConversionEvent("contact_email_click", properties);
      } else if (/^(https?:\/\/)?(wa\.me|api\.whatsapp\.com)/i.test(href)) {
        trackConversionEvent("contact_whatsapp_click", properties);
      }
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
