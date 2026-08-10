import Image from "next/image";
import type { ReactNode } from "react";
import { CleanSectionLink } from "@/components/clean-section-link";
import { getServiceCredibility } from "@/lib/service-credibility";

export type PageGuideItem = {
  href: string;
  label: string;
};

type PageGuideRailProps = {
  items: readonly PageGuideItem[];
  credibilityPath: string;
  className?: string;
  navigationLabel?: string;
};

export function PageGuideRail({ items, credibilityPath, className = "", navigationLabel = "In this guide" }: PageGuideRailProps) {
  const credibility = getServiceCredibility(credibilityPath);
  const reviewedLabel = credibility?.verificationLabel.replace(/^Sources checked /, "");

  return (
    <aside className={`sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-y-auto border-l border-[#d9d1c5] pl-7 lg:block ${className}`}>
      {credibility ? (
        <section className="border-b border-[#d9d1c5] pb-6">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#d8d0c2] bg-[#f5efe4]">
              <Image
                src={credibility.expert.imageSrc}
                alt={credibility.expert.name}
                fill
                sizes="48px"
                className="scale-[1.15] object-cover object-center"
              />
            </div>
            <div className="min-w-0">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#8d7453]">Reviewed by</p>
              <p className="mt-1 text-[0.94rem] font-semibold leading-5 text-foreground">{credibility.expert.name}</p>
              <p className="mt-0.5 text-[0.76rem] leading-5 text-foreground/62">{credibility.expert.credentials}</p>
            </div>
          </div>
        </section>
      ) : null}

      <nav aria-label="Page sections" className="border-b border-[#d9d1c5] py-6">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8d7453]">{navigationLabel}</p>
        <ol className="mt-4 space-y-2.5">
          {items.map((item, index) => (
            <li key={item.href}>
              <CleanSectionLink href={item.href as `#${string}`} className="group flex items-start gap-2.5 text-[0.82rem] font-semibold leading-5 text-foreground/72 hover:text-[#244ba8]">
                <span className="mt-px text-[0.66rem] tabular-nums text-[#8d7453]">{String(index + 1).padStart(2, "0")}</span>
                <span>{item.label}</span>
              </CleanSectionLink>
            </li>
          ))}
        </ol>
      </nav>

      {credibility ? (
        <section className="pt-6">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#1f7652]">Officially sourced</p>
          <p className="mt-2 text-[0.82rem] leading-5 text-foreground/68">Last reviewed {reviewedLabel}</p>
          <CleanSectionLink href="#primary-sources" className="mt-3 inline-flex text-[0.82rem] font-semibold text-[#244ba8] hover:underline">
            View primary sources
          </CleanSectionLink>
        </section>
      ) : null}
    </aside>
  );
}

type PageGuideLayoutProps = {
  children: ReactNode;
  items: readonly PageGuideItem[];
  credibilityPath: string;
  navigationLabel?: string;
};

type PageRailLayoutProps = {
  children: ReactNode;
  rail: ReactNode;
};

export function PageRailLayout({ children, rail }: PageRailLayoutProps) {
  return (
    <div className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-white">
      <div className="mx-auto grid w-full max-w-[100rem] lg:grid-cols-[minmax(0,1fr)_17rem]">
        <main className="min-w-0 [&>section]:!left-auto [&>section]:!w-full [&>section]:!translate-x-0">{children}</main>
        <div className="hidden border-l border-[#d9d1c5] bg-white px-7 lg:block">{rail}</div>
      </div>
    </div>
  );
}

export function PageGuideLayout({ children, items, credibilityPath, navigationLabel }: PageGuideLayoutProps) {
  return (
    <PageRailLayout
      rail={<PageGuideRail items={items} credibilityPath={credibilityPath} navigationLabel={navigationLabel} className="!block !border-l-0 !pl-0 py-8" />}
    >
      {children}
    </PageRailLayout>
  );
}
