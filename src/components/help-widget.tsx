"use client";

import Link from "next/link";
import { type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { helpTopics } from "@/lib/help-content";
import { contactDetails, whatsappHref } from "@/lib/site-content";

const quickQuestionTopics = helpTopics.filter((topic) =>
  ["business-setup", "mainland-vs-free-zone", "corporate-tax", "golden-visa"].includes(
    topic.id,
  ),
);

const mobilePhoneNumber =
  contactDetails.find((item) => item.label === "Main line")?.value.replace(/\s+/g, "") ??
  "+97144474997";

export function HelpWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const panelBodyRef = useRef<HTMLDivElement | null>(null);
  const selectedTopic = useMemo(
    () => helpTopics.find((topic) => topic.id === selectedTopicId) ?? null,
    [selectedTopicId],
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!widgetRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedTopicId(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setSelectedTopicId(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeHelp = () => {
    setIsOpen(false);
    setSelectedTopicId(null);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    panelBodyRef.current?.scrollTo({ top: 0, behavior: "auto" });
  }, [isOpen, selectedTopicId]);

  return (
    <div
      ref={widgetRef}
      className="fixed bottom-5 right-5 z-[80] w-fit md:bottom-6 md:right-6"
    >
      {isOpen ? (
        <div className="fixed inset-x-3 bottom-[calc(5rem+env(safe-area-inset-bottom,0px))] max-h-[min(36rem,calc(100dvh-7rem))] overflow-hidden rounded-[1.65rem] border border-white/10 bg-[rgba(15,31,39,0.98)] text-white shadow-[0_28px_80px_rgba(7,21,27,0.3)] backdrop-blur-xl sm:absolute sm:inset-x-auto sm:bottom-[calc(100%+0.85rem)] sm:right-0 sm:w-[min(24rem,calc(100vw-2rem))] sm:max-h-none">
          <div className="border-b border-white/8 px-4 py-4 sm:px-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[1.08rem] font-semibold tracking-[-0.03em] text-white">
                  Need help?
                </p>
              </div>
              <button
                type="button"
                onClick={closeHelp}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/72 transition-colors hover:bg-white/8 hover:text-white"
                aria-label="Close help panel"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            ref={panelBodyRef}
            className="max-h-[calc(min(36rem,calc(100dvh-7rem))-5.75rem)] overflow-y-auto px-4 py-4 sm:max-h-[32rem] sm:px-5"
          >
            {!selectedTopic ? (
              <>
                <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/42">
                    Fastest ways to reach us
                  </p>
                  <div className="mt-3 grid gap-2.5">
                    <ActionLink
                      href={whatsappHref}
                      label="WhatsApp Zenesis"
                      external
                      icon={<WhatsAppBadge />}
                    />
                    <ActionLink
                      href={`tel:${mobilePhoneNumber}`}
                      label="Call the office"
                      icon={<PhoneIcon className="h-4 w-4" />}
                    />
                    <ActionLink
                      href="/contact"
                      label="Open contact page"
                      icon={<ArrowIcon className="h-4 w-4" />}
                    />
                  </div>
                </div>

                <div className="mt-5 rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/42">
                    Popular questions
                  </p>
                  <div className="mt-3 grid gap-2">
                    {quickQuestionTopics.map((topic) => (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => setSelectedTopicId(topic.id)}
                        className="group flex w-full items-start justify-between gap-3 rounded-[1.05rem] border border-white/8 bg-white/[0.03] px-3.5 py-3 text-left transition-colors hover:bg-white/[0.06]"
                      >
                        <div className="min-w-0">
                          <p className="text-[0.98rem] font-semibold leading-6 tracking-[-0.02em] text-white">
                            {topic.title}
                          </p>
                        </div>
                        <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#d8c3a2]/22 bg-[#d8c3a2]/10 text-[#f4e7cf] transition-all group-hover:border-[#d8c3a2]/34 group-hover:bg-[#d8c3a2]/16 group-hover:text-white">
                          <ArrowIcon className="h-3.5 w-3.5" />
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

              </>
            ) : (
              <>
                <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-4">
                  <h3 className="mt-2 text-[1.12rem] font-semibold leading-6 tracking-[-0.03em] text-white">
                    {selectedTopic.title}
                  </h3>
                  <p className="mt-2 text-[0.96rem] leading-7 text-white/74">
                    {selectedTopic.answer}
                  </p>
                  <Link
                    href={selectedTopic.href}
                    onClick={closeHelp}
                    className="mt-4 inline-flex items-center gap-2 text-[0.94rem] font-semibold text-[#f4e7cf] transition-colors hover:text-white"
                  >
                    {selectedTopic.hrefLabel}
                    <ArrowIcon className="h-4 w-4" />
                  </Link>
                </div>

                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() => setSelectedTopicId(null)}
                    className="inline-flex items-center gap-2 text-[0.92rem] font-semibold text-white/64 transition-colors hover:text-white"
                  >
                    <BackIcon className="h-4 w-4" />
                    Back to questions
                  </button>
                </div>

                <div className="mt-5 rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/42">
                    More questions
                  </p>
                  <div className="mt-3 grid gap-2">
                    {helpTopics
                      .filter((topic) => topic.id !== selectedTopic.id)
                      .slice(0, 4)
                      .map((topic) => (
                        <button
                          key={topic.id}
                          type="button"
                          onClick={() => setSelectedTopicId(topic.id)}
                          className="group flex w-full items-start justify-between gap-3 rounded-[1.05rem] border border-white/8 bg-white/[0.03] px-3.5 py-3 text-left transition-colors hover:bg-white/[0.06]"
                        >
                          <div className="min-w-0">
                            <p className="text-[0.98rem] font-semibold leading-6 tracking-[-0.02em] text-white">
                              {topic.title}
                            </p>
                          </div>
                          <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#d8c3a2]/22 bg-[#d8c3a2]/10 text-[#f4e7cf] transition-all group-hover:border-[#d8c3a2]/34 group-hover:bg-[#d8c3a2]/16 group-hover:text-white">
                            <ArrowIcon className="h-3.5 w-3.5" />
                          </span>
                        </button>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/42">
                    Reach Zenesis directly
                  </p>
                  <div className="mt-3 grid gap-2.5">
                    <ActionLink
                      href={whatsappHref}
                      label="Ask on WhatsApp"
                      external
                      icon={<WhatsAppBadge />}
                    />
                    <ActionLink
                      href="/contact"
                      label="Contact Zenesis"
                      icon={<ArrowIcon className="h-4 w-4" />}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => {
          if (isOpen) {
            closeHelp();
            return;
          }

          setIsOpen(true);
        }}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#11232a] text-white shadow-[0_20px_48px_rgba(7,21,27,0.26)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#173039]"
        aria-label={isOpen ? "Close help panel" : "Open help panel"}
      >
        <HelpIcon className="h-9 w-9 text-[#f4e7cf]" />
      </button>
    </div>
  );
}

type ActionLinkProps = {
  href: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
};

function ActionLink({ href, label, icon, external = false }: ActionLinkProps) {
  const className =
    "inline-flex items-center justify-between gap-3 rounded-[999px] border border-[#d8c3a2]/26 bg-[#d8c3a2]/12 px-3.5 py-2.5 text-[0.98rem] font-semibold text-[#f4e7cf] transition-colors hover:bg-[#d8c3a2]/18 hover:text-white";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        <span className="inline-flex items-center gap-2.5">
          {icon}
          <span>{label}</span>
        </span>
        <ArrowIcon className="h-4 w-4" />
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      <span className="inline-flex items-center gap-2.5">
        {icon}
        <span>{label}</span>
      </span>
      <ArrowIcon className="h-4 w-4" />
    </Link>
  );
}

function BackIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M15.83 10H4.17m0 0 4.5-4.5M4.17 10l4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HelpIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M7.87 7.47a2.35 2.35 0 1 1 4.26 1.39c-.36.51-.84.83-1.27 1.16-.69.54-1.36 1.06-1.36 2.07v.17M10 14.72h.01"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M5 5 15 15M15 5 5 15"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4.17 10h11.66m0 0-4.5-4.5m4.5 4.5-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M5.93 3.82h1.76c.3 0 .56.2.63.5l.58 2.52a.68.68 0 0 1-.2.66l-1.22 1.12a11.52 11.52 0 0 0 3.9 3.9l1.12-1.22a.68.68 0 0 1 .66-.2l2.52.58c.3.07.5.33.5.63v1.76c0 .37-.3.67-.67.67A11.58 11.58 0 0 1 5.25 4.5c0-.37.3-.68.68-.68Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppBadge() {
  return (
    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_16px_rgba(37,211,102,0.28)]">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
        <path d="M19.05 4.94A9.9 9.9 0 0 0 12 2a9.94 9.94 0 0 0-8.63 14.87L2 22l5.27-1.38A9.94 9.94 0 0 0 12 22a10 10 0 0 0 10-9.98 9.9 9.9 0 0 0-2.95-7.08Zm-7.05 15.4a8.3 8.3 0 0 1-4.23-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.33 8.33 0 1 1 7.02 3.86Zm4.57-6.23c-.25-.12-1.5-.74-1.73-.82-.23-.09-.4-.12-.56.12-.17.25-.65.82-.8.99-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.21-.73-.65-1.23-1.45-1.37-1.69-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.41-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09 0 1.23.9 2.42 1.02 2.58.12.17 1.77 2.7 4.29 3.79.6.26 1.08.42 1.44.54.61.19 1.17.16 1.61.1.49-.07 1.5-.61 1.71-1.2.21-.6.21-1.11.15-1.21-.06-.1-.23-.17-.48-.29Z" />
      </svg>
    </span>
  );
}
