import type { Metadata } from "next";
import { ConsultationInlinePanel } from "@/components/consultation-form";
import { PageIntro, SiteShell } from "@/components/site-shell";
import {
  contactDetails,
  googleMapsEmbedHref,
  googleMapsHref,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact | Zenesis Corporation",
  description:
    "Contact Zenesis Corporation in Dubai, UAE using the company office address, phone numbers, and email details.",
};

export default function ContactPage() {
  return (
    <SiteShell currentPath="/contact">
      <PageIntro
        eyebrow="Contact Zenesis"
        title="Contact the Zenesis team."
      />

      <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-[100rem] gap-6 px-6 md:px-12 lg:grid-cols-[1.02fr_0.98fr] xl:px-20">
          <ConsultationInlinePanel />

          <div className="flex flex-col gap-6">
            <article className="glass-panel overflow-hidden rounded-[2rem] p-4 md:p-5">
              <div className="flex items-center justify-between gap-4 px-2 pb-4 pt-1">
                <div>
                  <p className="eyebrow text-accent">Office Map</p>
                  <h2 className="mt-3 text-[clamp(1.7rem,2.6vw,2.6rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-foreground">
                    Visit the Dubai office.
                  </h2>
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
                  className="h-[34rem] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </article>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactDetails.map((item) => {
                const isOffice = item.label === "Office";

                if (isOffice) {
                  return (
                    <a
                      key={item.label}
                      href={googleMapsHref}
                      target="_blank"
                      rel="noreferrer"
                      className="glass-panel group rounded-[1.4rem] p-6 transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      <p className="eyebrow text-muted">{item.label}</p>
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

                return (
                  <div
                    key={item.label}
                    className="glass-panel rounded-[1.4rem] p-6"
                  >
                    <p className="eyebrow text-muted">{item.label}</p>
                    <p className="mt-4 text-[1.12rem] font-semibold leading-8 tracking-[-0.03em] text-foreground md:text-[1.18rem]">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
