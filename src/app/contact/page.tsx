import type { Metadata } from "next";
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
        title="Contact us"
        description="Get in touch for company setup, tax, visa, banking, and ongoing corporate support in the UAE."
        backgroundImageSrc={versionedAssetPath("/team-photo-cropped.webp")}
        backgroundImageAlt="Zenesis team photo"
        backgroundImagePosition="!object-[58%_28%]"
        backgroundImageMode="ambient"
      />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#11232a] py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-[100rem] gap-6 px-6 md:px-12 lg:grid-cols-[1.02fr_0.98fr] xl:px-20">
          <ConsultationInlinePanel />

          <div className="flex flex-col gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactDetails.map((item) => {
                const isOffice = item.label === "Office";
                const isWhatsApp = item.label === "Mobile / WhatsApp";

                if (isOffice) {
                  return (
                    <a
                      key={item.label}
                      href={googleMapsHref}
                      target="_blank"
                      rel="noreferrer"
                      className="group rounded-[1.4rem] border border-[#d8d0c2] bg-white p-6 text-[#11232a] shadow-[0_18px_50px_rgba(17,35,42,0.14)] transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      <h2 className="text-[1.08rem] font-semibold tracking-[-0.03em] text-foreground md:text-[1.14rem]">
                        {item.label}
                      </h2>
                      <p className="mt-4 text-[1.02rem] font-semibold leading-7 tracking-[-0.03em] text-foreground md:text-[1.08rem]">
                        {item.value}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors group-hover:text-accent-strong">
                        Open in Google Maps
                        <span aria-hidden="true">↗</span>
                      </span>
                    </a>
                  );
                }

                if (isWhatsApp) {
                  return (
                    <a
                      key={item.label}
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="group rounded-[1.4rem] border border-[#d8d0c2] bg-white p-6 text-[#11232a] shadow-[0_18px_50px_rgba(17,35,42,0.14)] transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      <h2 className="text-[1.08rem] font-semibold tracking-[-0.03em] text-foreground md:text-[1.14rem]">
                        {item.label}
                      </h2>
                      <div className="mt-4 flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_24px_rgba(37,211,102,0.22)]">
                          <WhatsAppIcon className="h-5 w-5 fill-current" />
                        </span>
                        <p className="text-[1.12rem] font-semibold leading-8 tracking-[-0.03em] text-foreground md:text-[1.18rem]">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="rounded-[1.4rem] border border-[#d8d0c2] bg-white p-6 text-[#11232a] shadow-[0_18px_50px_rgba(17,35,42,0.14)]"
                  >
                    <h2 className="text-[1.08rem] font-semibold tracking-[-0.03em] text-foreground md:text-[1.14rem]">
                      {item.label}
                    </h2>
                    <p className="mt-4 text-[1.12rem] font-semibold leading-8 tracking-[-0.03em] text-foreground md:text-[1.18rem]">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>

            <article className="rounded-[1.6rem] border border-[#d8d0c2] bg-white p-6 text-[#11232a] shadow-[0_18px_50px_rgba(17,35,42,0.14)]">
              <h2 className="text-[1.24rem] font-semibold tracking-[-0.04em] text-foreground md:text-[1.32rem]">
                Social Media
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-foreground/10 bg-[#f8f5ef] px-4 py-3 text-[1rem] font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-[#244ba8]/20 hover:text-[#244ba8]"
                  >
                    {item.label === "Facebook" ? <FacebookIcon className="h-5 w-5 fill-current" /> : null}
                    {item.label === "LinkedIn" ? <LinkedInIcon className="h-5 w-5 fill-current" /> : null}
                    {item.label === "Instagram" ? <InstagramIcon className="h-5 w-5 stroke-current" /> : null}
                    {item.label}
                  </a>
                ))}
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-[#d8d0c2] bg-white p-4 shadow-[0_18px_50px_rgba(17,35,42,0.14)] md:p-5">
              <div className="flex items-center justify-between gap-4 px-2 pb-4 pt-1">
                <div>
                  <h2 className="text-[1.08rem] font-semibold tracking-[-0.03em] text-foreground md:text-[1.14rem]">
                    Office Map
                  </h2>
                  <p className="mt-3 text-[clamp(1.7rem,2.6vw,2.6rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-foreground">
                    Visit the Dubai office.
                  </p>
                </div>
                <a
                  href={googleMapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 rounded-full border border-foreground/10 bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
                >
                  Open in Maps
                </a>
              </div>
              <div className="overflow-hidden rounded-[1.5rem] border border-foreground/10">
                <iframe
                  src={googleMapsEmbedHref}
                  title="Zenesis location on Google Maps"
                  suppressHydrationWarning
                  className="h-[34rem] w-full border-0"
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
