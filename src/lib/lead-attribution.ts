"use client";

import type { ConsultationLeadAttribution } from "@/lib/consultation-lead";

const attributionStorageKey = "zenesis-lead-attribution";

function readStoredAttribution() {
  try {
    const stored = window.sessionStorage.getItem(attributionStorageKey);
    return stored ? (JSON.parse(stored) as ConsultationLeadAttribution) : null;
  } catch {
    return null;
  }
}

function createAttribution(): ConsultationLeadAttribution {
  const query = new URLSearchParams(window.location.search);

  return {
    landingPage: `${window.location.pathname}${window.location.search}`,
    referrer: document.referrer || "Direct / unavailable",
    utmSource: query.get("utm_source") ?? "",
    utmMedium: query.get("utm_medium") ?? "",
    utmCampaign: query.get("utm_campaign") ?? "",
    utmTerm: query.get("utm_term") ?? "",
    utmContent: query.get("utm_content") ?? "",
    gclid: query.get("gclid") ?? "",
  };
}

export function getLeadAttribution(): ConsultationLeadAttribution {
  const stored = readStoredAttribution();

  if (stored?.landingPage) {
    return stored;
  }

  const attribution = createAttribution();

  try {
    window.sessionStorage.setItem(
      attributionStorageKey,
      JSON.stringify(attribution),
    );
  } catch {
    // Continue with in-memory attribution when storage is unavailable.
  }

  return attribution;
}
