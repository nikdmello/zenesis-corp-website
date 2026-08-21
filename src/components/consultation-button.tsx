"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  getCurrentPagePath,
  trackConversionEvent,
} from "@/lib/conversion-analytics";

const consultationPromptSeenKey = "zenesis-consultation-prompt-seen";

function hasSeenConsultationPrompt() {
  try {
    return window.localStorage.getItem(consultationPromptSeenKey) === "true";
  } catch {
    try {
      return window.sessionStorage.getItem(consultationPromptSeenKey) === "true";
    } catch {
      return false;
    }
  }
}

function markConsultationPromptSeen() {
  try {
    window.localStorage.setItem(consultationPromptSeenKey, "true");
    return;
  } catch {
    // Fall back to tab storage if persistent storage is blocked.
  }

  try {
    window.sessionStorage.setItem(consultationPromptSeenKey, "true");
  } catch {
    // Ignore storage access issues and fall back to in-memory behavior.
  }
}

const LazyConsultationModal = dynamic(
  () => import("@/components/consultation-form").then((mod) => mod.ConsultationModal),
  {
    ssr: false,
    loading: () => null,
  },
);

type ConsultationFormProps = {
  label: string;
  className?: string;
  presetEnquiry?: string;
  leadingIcon?: ReactNode;
};

export function ConsultationFormButton({
  label,
  className,
  presetEnquiry,
  leadingIcon,
}: ConsultationFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const resolvedPresetEnquiry =
    presetEnquiry ??
    (label.toLowerCase().includes("consultation")
      ? "I would like to schedule a free consultation with Zenesis."
      : undefined);

  return (
    <>
      <button
        type="button"
        className={`!rounded-[0.7rem] ${className ?? ""}`}
        onClick={() => {
          trackConversionEvent("consultation_cta_click", {
            cta_label: label,
            page_path: getCurrentPagePath(),
          });
          setIsOpen(true);
        }}
      >
        <span className="inline-flex items-center gap-2">
          {leadingIcon}
          <span>{label}</span>
        </span>
      </button>

      {isOpen ? (
        <LazyConsultationModal
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          presetEnquiry={resolvedPresetEnquiry}
          trigger="cta"
        />
      ) : null}
    </>
  );
}

export function ConsultationFormButtonWithScrollPrompt({
  label,
  className,
  presetEnquiry,
  leadingIcon,
}: ConsultationFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    if (hasSeenConsultationPrompt()) {
      hasTriggeredRef.current = true;
      return;
    }

    const onScroll = () => {
      if (hasTriggeredRef.current) {
        return;
      }

      if (window.scrollY < 72) {
        return;
      }

      hasTriggeredRef.current = true;
      markConsultationPromptSeen();
      setIsOpen(true);
      window.removeEventListener("scroll", onScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        type="button"
        className={`!rounded-[0.7rem] ${className ?? ""}`}
        onClick={() => {
          trackConversionEvent("consultation_cta_click", {
            cta_label: label,
            page_path: getCurrentPagePath(),
          });
          markConsultationPromptSeen();
          hasTriggeredRef.current = true;
          setIsOpen(true);
        }}
      >
        <span className="inline-flex items-center gap-2">
          {leadingIcon}
          <span>{label}</span>
        </span>
      </button>

      {isOpen ? (
        <LazyConsultationModal
          isOpen={isOpen}
          onOpenChange={(nextIsOpen) => {
            if (!nextIsOpen) {
              hasTriggeredRef.current = true;
            }
            setIsOpen(nextIsOpen);
          }}
          presetEnquiry={presetEnquiry}
          trigger="scroll-or-cta"
        />
      ) : null}
    </>
  );
}

export function ConsultationSessionPrompt() {
  const [isOpen, setIsOpen] = useState(false);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    if (hasSeenConsultationPrompt()) {
      hasTriggeredRef.current = true;
      return;
    }

    const openPrompt = () => {
      if (hasTriggeredRef.current) {
        return;
      }

      hasTriggeredRef.current = true;
      markConsultationPromptSeen();
      setIsOpen(true);
      window.removeEventListener("scroll", onScroll);
    };

    const onScroll = () => {
      if (window.scrollY < 72) {
        return;
      }

      openPrompt();
    };

    const timer = window.setTimeout(openPrompt, 9000);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return isOpen ? (
    <LazyConsultationModal
      isOpen={isOpen}
      onOpenChange={(nextIsOpen) => {
        if (!nextIsOpen) {
          hasTriggeredRef.current = true;
        }
        setIsOpen(nextIsOpen);
      }}
      trigger="session-prompt"
    />
  ) : null;
}

type WhatsAppCueIconProps = {
  inverse?: boolean;
};

export function WhatsAppCueIcon({ inverse = false }: WhatsAppCueIconProps) {
  return (
    <span
      className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
        inverse
          ? "bg-white text-[#25D366] shadow-[0_6px_16px_rgba(255,255,255,0.18)]"
          : "bg-[#25D366] text-white shadow-[0_6px_16px_rgba(37,211,102,0.28)]"
      }`}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
        <path d="M19.05 4.94A9.9 9.9 0 0 0 12 2a9.94 9.94 0 0 0-8.63 14.87L2 22l5.27-1.38A9.94 9.94 0 0 0 12 22a10 10 0 0 0 10-9.98 9.9 9.9 0 0 0-2.95-7.08Zm-7.05 15.4a8.3 8.3 0 0 1-4.23-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.33 8.33 0 1 1 7.02 3.86Zm4.57-6.23c-.25-.12-1.5-.74-1.73-.82-.23-.09-.4-.12-.56.12-.17.25-.65.82-.8.99-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.21-.73-.65-1.23-1.45-1.37-1.69-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.41-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09 0 1.23.9 2.42 1.02 2.58.12.17 1.77 2.7 4.29 3.79.6.26 1.08.42 1.44.54.61.19 1.17.16 1.61.1.49-.07 1.5-.61 1.71-1.2.21-.6.21-1.11.15-1.21-.06-.1-.23-.17-.48-.29Z" />
      </svg>
    </span>
  );
}
