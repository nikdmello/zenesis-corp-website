import type { Metadata } from "next";
import NextImage from "next/image";
import { ConsultationInlinePanel } from "@/components/consultation-form";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { versionedAssetPath } from "@/lib/asset-paths";
import {
  contactDetails,
  googleMapsEmbedHref,
  googleMapsHref,
  socialLinks,
  whatsappHref,
} from "@/lib/site-content";
import { legacyRouteMeta, toMetadata } from "@/lib/legacy-meta";

export const metadata: Metadata = toMetadata(legacyRouteMeta.contact, "/contact");

export default function ContactPage() {
  return (
    <SiteShell currentPath="/contact">
      <PageIntro
        eyebrow="Contact Zenesis"
        title="Contact Us"
        description="Get in touch for company setup, tax, visa, banking, and ongoing corporate support in the UAE."
        backgroundImageSrc={versionedAssetPath("/sections/awards-and-recognition.webp")}
        backgroundImageAlt="Zenesis awards and recognition"
        backgroundImagePosition="!object-[58%_48%]"
        backgroundImageMode="ambient"
        preloadBackgroundImage
      />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 overflow-hidden bg-white pb-0 pt-10 md:pt-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-[68%] max-w-[56rem] sm:w-[60%] lg:w-[52%]"
        >
          <NextImage
            src={versionedAssetPath("/sections/uae-flag.webp")}
            alt=""
            fill
            sizes="(min-width: 1024px) 896px, (min-width: 640px) 60vw, 68vw"
            className="object-cover object-center opacity-[0.42] saturate-[0.9]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.78)_18%,rgba(255,255,255,0.24)_52%,rgba(255,255,255,0.08)_100%)]" />
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-[100rem] gap-7 px-6 md:px-12 lg:grid-cols-[1.08fr_0.92fr] xl:px-20">
          <ConsultationInlinePanel />

          <div className="flex h-full flex-col gap-5">
            <div className="border border-[#d8d0c2] bg-white shadow-[0_10px_28px_rgba(17,35,42,0.06)]">
              <div className="grid sm:grid-cols-2">
              {contactDetails.map((item, index) => {
                const isOffice = item.label === "Office";
                const isWhatsApp = item.label === "Mobile / WhatsApp";
                const href = isOffice
                  ? googleMapsHref
                  : isWhatsApp
                    ? whatsappHref
                    : `mailto:${item.value}`;
                return (
                  <a
                    key={item.label}
                    href={href}
                    target={isOffice || isWhatsApp ? "_blank" : undefined}
                    rel={isOffice || isWhatsApp ? "noreferrer" : undefined}
                    className={`group p-5 !text-[#011735] transition-colors hover:bg-[#f8f6f1] ${isOffice ? "sm:col-span-2 sm:border-t sm:border-[#e4dbce]" : "border-b border-[#e4dbce] sm:border-b-0"} ${index === 0 ? "sm:border-r sm:border-[#e4dbce]" : ""}`}
                  >
                    <h2 className="text-[0.82rem] font-semibold text-[#8d7453]">
                      {item.label}
                    </h2>
                    <div className="mt-2 flex items-start gap-2.5">
                      {isWhatsApp ? (
                        <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                          <WhatsAppIcon className="h-4 w-4 fill-current" />
                        </span>
                      ) : null}
                      <p className={`${isOffice ? "text-[0.92rem] leading-6" : "text-[1rem] leading-7"} font-semibold tracking-[-0.02em] text-foreground`}>
                        {item.value}
                      </p>
                    </div>
                    {isOffice ? <span className="mt-2 inline-flex text-xs font-semibold text-accent">Open in Maps ↗</span> : null}
                  </a>
                );
              })}
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#e4dbce] px-5 py-4">
                <span className="text-[0.82rem] font-semibold text-[#8d7453]">Follow Zenesis</span>
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold !text-[#011735] transition-colors hover:!text-[#244ba8]"
                  >
                    {item.label === "Facebook" ? <FacebookIcon className="h-4 w-4 fill-current" /> : null}
                    {item.label === "LinkedIn" ? <LinkedInIcon className="h-4 w-4 fill-current" /> : null}
                    {item.label === "Instagram" ? <InstagramIcon className="h-4 w-4 stroke-current" /> : null}
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <article className="flex flex-col overflow-hidden border border-[#d8d0c2] bg-white shadow-[0_10px_28px_rgba(17,35,42,0.06)] lg:flex-1">
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <h2 className="text-[1rem] font-semibold tracking-[-0.02em] text-foreground">Dubai office</h2>
                <a
                  href={googleMapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold !text-[#244ba8] hover:underline"
                >
                  <span>Open in Maps</span>
                  <span aria-hidden="true" className="text-base leading-none transition-transform group-hover:translate-x-0.5">↗</span>
                </a>
              </div>
              <div className="overflow-hidden border-t border-[#e4dbce] lg:flex-1">
                <iframe
                  src={googleMapsEmbedHref}
                  title="Zenesis location on Google Maps"
                  suppressHydrationWarning
                  className="h-[18rem] w-full border-0 md:h-[20rem] lg:h-full lg:min-h-[18rem]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </article>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.05 4.94A9.9 9.9 0 0 0 12 2a9.94 9.94 0 0 0-8.63 14.87L2 22l5.27-1.38A9.94 9.94 0 0 0 12 22a10 10 0 0 0 10-9.98 9.9 9.9 0 0 0-2.95-7.08Zm-7.05 15.4a8.3 8.3 0 0 1-4.23-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.33 8.33 0 1 1 7.02 3.86Zm4.57-6.23c-.25-.12-1.5-.74-1.73-.82-.23-.09-.4-.12-.56.12-.17.25-.65.82-.8.99-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.21-.73-.65-1.23-1.45-1.37-1.69-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.41-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09 0 1.23.9 2.42 1.02 2.58.12.17 1.77 2.7 4.29 3.79.6.26 1.08.42 1.44.54.61.19 1.17.16 1.61.1.49-.07 1.5-.61 1.71-1.2.21-.6.21-1.11.15-1.21-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M13.5 21v-7.38H16l.38-2.95H13.5V8.8c0-.85.24-1.43 1.47-1.43h1.57V4.73c-.27-.04-1.2-.12-2.29-.12-2.27 0-3.82 1.39-3.82 3.93v2.13H8v2.95h2.43V21h3.07Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M6.94 8.5a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46ZM5.4 18.6h3.08V9.77H5.4v8.84Zm4.92 0h3.08v-4.93c0-1.3.25-2.56 1.86-2.56 1.58 0 1.6 1.48 1.6 2.65v4.84h3.08v-5.46c0-2.68-.58-4.74-3.71-4.74-1.51 0-2.52.83-2.93 1.62h-.04V9.77h-2.95c.04.7 0 8.84 0 8.84Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="4.25" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.6" strokeWidth="1.8" />
      <circle cx="17.25" cy="6.85" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
