"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { track } from "@vercel/analytics";

type EventValue = string | number | boolean | null;
type EventProperties = Record<string, EventValue>;

export function trackConversionEvent(
  name: string,
  properties: EventProperties = {},
) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer;

    if (dataLayer) {
      sendGAEvent("event", name, properties);
    }
  } catch {
    // Analytics must never interrupt a visitor action.
  }

  try {
    track(name, properties);
  } catch {
    // Vercel Analytics can be unavailable in local or blocked environments.
  }
}

export function getCurrentPagePath() {
  if (typeof window === "undefined") {
    return "";
  }

  return `${window.location.pathname}${window.location.search}`;
}
