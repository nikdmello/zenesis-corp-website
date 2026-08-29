import Image from "next/image";
import Link from "next/link";
import { CleanSectionLink } from "@/components/clean-section-link";
import { versionedAssetPath } from "@/lib/asset-paths";

export type ServiceSubpageLinkItem = {
  label: string;
  href: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageClassName?: string;
};

const serviceSubpageVisuals: Record<
  string,
  {
    imageSrc: string;
    imageAlt: string;
    imageClassName?: string;
  }
> = {
  "/business-setup": {
    imageSrc: versionedAssetPath("/services/business-setup.webp"),
    imageAlt: "Business setup and company formation planning in Dubai",
    imageClassName: "object-[58%_center]",
  },
  "/business-setup-cost-dubai": {
    imageSrc: versionedAssetPath("/services/business-setup-cost-uae.webp"),
    imageAlt: "Business setup pricing and free zone package review",
    imageClassName: "object-[82%_32%]",
  },
  "/accounting-tax": {
    imageSrc: versionedAssetPath("/services/accounting-and-tax.webp"),
    imageAlt: "Accounting and tax support for UAE businesses",
    imageClassName: "object-[66%_center]",
  },
  "/visa-and-banking": {
    imageSrc: versionedAssetPath("/services/visa-banking-consultation.webp"),
    imageAlt: "Visa and banking consultation in Dubai",
    imageClassName: "object-top",
  },
  "/corporate-support": {
    imageSrc: versionedAssetPath("/services/branch-and-representative-offices.webp"),
    imageAlt: "Corporate support and branch office services in the UAE",
    imageClassName: "object-top",
  },
  "/mainland-vs-free-zone-dubai": {
    imageSrc: versionedAssetPath("/services/mainland-vs-freezone.webp"),
    imageAlt: "Mainland and free zone setup comparison in Dubai",
    imageClassName: "object-[82%_34%]",
  },
  "/mainland": {
    imageSrc: versionedAssetPath("/services/mainland.webp"),
    imageAlt: "Mainland company setup planning in Dubai",
    imageClassName: "object-[68%_24%]",
  },
  "/general-trading-license-dubai": {
    imageSrc: versionedAssetPath("/services/general-trading-license-dubai.webp"),
    imageAlt: "General trading licence planning with a Dubai business consultant",
    imageClassName: "object-[68%_center]",
  },
  "/free-zones": {
    imageSrc: versionedAssetPath("/services/freezone.webp"),
    imageAlt: "Free zone company setup planning in Dubai",
    imageClassName: "object-[70%_24%]",
  },
  "/offshore": {
    imageSrc: versionedAssetPath("/services/offshore.webp"),
    imageAlt: "Offshore company structure planning",
    imageClassName: "object-[72%_22%]",
  },
  "/document-attestation-services-in-uae": {
    imageSrc: versionedAssetPath("/services/document-attestation.webp"),
    imageAlt: "Document attestation support in the UAE",
    imageClassName: "object-[86%_36%]",
  },
  "/open-a-bank-account-easily": {
    imageSrc: versionedAssetPath("/services/banking-support.webp"),
    imageAlt: "UAE business bank account support planning",
    imageClassName: "object-[82%_30%]",
  },
  "/uae-company-visa": {
    imageSrc: versionedAssetPath("/services/company-visas.webp"),
    imageAlt: "Company visa support and residency planning in the UAE",
    imageClassName: "object-[80%_28%]",
  },
  "/golden-visa-services-in-the-uae": {
    imageSrc: versionedAssetPath("/services/golden-visa.webp"),
    imageAlt: "Golden Visa planning and long-term UAE residency support",
    imageClassName: "object-[28%_82%]",
  },
  "/corporate-tax-registration-in-the-uae": {
    imageSrc: versionedAssetPath("/services/corporate-tax-registration.webp"),
    imageAlt: "Corporate tax registration support in the UAE",
    imageClassName: "object-[84%_30%]",
  },
  "/corporate-tax-filing-services-in-the-uae": {
    imageSrc: versionedAssetPath("/services/corporate-tax-filing.webp"),
    imageAlt: "Corporate tax filing support in the UAE",
    imageClassName: "object-[84%_30%]",
  },
  "/vat-filing-services-in-the-uae": {
    imageSrc: versionedAssetPath("/services/vat-filing.webp"),
    imageAlt: "VAT filing support in the UAE",
    imageClassName: "object-[84%_32%]",
  },
  "/vat-registration-services-uae": {
    imageSrc: versionedAssetPath("/services/vat-filing.webp"),
    imageAlt: "VAT registration application support in the UAE",
    imageClassName: "object-[84%_32%]",
  },
  "/professional-bookkeeping-services-in-dubai": {
    imageSrc: versionedAssetPath("/services/bookkeeping.webp"),
    imageAlt: "Bookkeeping and reporting support in Dubai",
    imageClassName: "object-[84%_30%]",
  },
};

type ServiceSubpageLinksProps = {
  items: readonly ServiceSubpageLinkItem[];
  columnsClassName?: string;
  variant?: "default" | "compact";
};

export function ServiceSubpageLinks({
  items,
  columnsClassName = "sm:grid-cols-2",
  variant = "default",
}: ServiceSubpageLinksProps) {
  const isCompact = variant === "compact";

  return (
    <div className={`grid gap-3 ${columnsClassName}`}>
      {items.map((item) => {
        const visual = item.imageSrc
          ? {
              imageSrc: item.imageSrc,
              imageAlt: item.imageAlt ?? item.label,
              imageClassName: item.imageClassName,
            }
          : serviceSubpageVisuals[item.href];

        if (isCompact) {
          const compactContent = (
            <>
              {visual ? (
                <div className="w-28 shrink-0 overflow-hidden border-r border-[#e7ded1] bg-[#f8f5ef] sm:w-32">
                  <Image
                    src={visual.imageSrc}
                    alt=""
                    width={256}
                    height={192}
                    className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                      visual.imageClassName ?? "object-center"
                    }`}
                  />
                </div>
              ) : null}
              <div className="self-center px-4 py-3">
                <p className="text-sm font-semibold text-[#8d7453]">Service</p>
                <h3 className="mt-2 text-[1rem] font-semibold leading-snug tracking-[-0.02em] text-foreground group-hover:text-[#244ba8]">
                  {item.label}
                </h3>
              </div>
            </>
          );
          const compactClassName =
            "group flex min-h-28 overflow-hidden border border-[#d8d0c2] bg-white text-foreground transition-colors duration-200 hover:border-[#b79248] hover:bg-[#fcfaf6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#244ba8]";

          return item.href.startsWith("#") ? (
            <CleanSectionLink key={item.href} href={item.href as `#${string}`} className={compactClassName}>
              {compactContent}
            </CleanSectionLink>
          ) : (
            <Link key={item.href} href={item.href} className={compactClassName}>
              {compactContent}
            </Link>
          );
        }

        const className = "group flex min-h-[9.5rem] flex-col justify-between overflow-hidden rounded-lg border border-[#d8d0c2] bg-white text-foreground shadow-[0_10px_28px_rgba(17,35,42,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#244ba8]/24";
        const content = (
          <>
            {visual ? (
              <div className="overflow-hidden border-b border-[#e5dccf] bg-[#f8f5ef]">
                <Image
                  src={visual.imageSrc}
                  alt={visual.imageAlt}
                  width={720}
                  height={450}
                  className={`aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                    visual.imageClassName ?? "object-center"
                  }`}
                />
              </div>
            ) : null}

            <div className="flex flex-1 flex-col justify-between px-5 py-5">
              <div>
                <h3
                  className="text-[1.04rem] font-semibold leading-7 tracking-[-0.03em] text-foreground md:text-[1.06rem]"
                >
                  {item.label}
                </h3>
                {item.description ? (
                  <p
                    className="text-muted mt-3 text-[0.98rem] leading-7 md:text-[1rem]"
                  >
                    {item.description}
                  </p>
                ) : null}
              </div>

              <div className="mt-5 flex items-center justify-between gap-4">
                <span
                  className="text-sm font-semibold text-[#244ba8] transition-colors group-hover:text-[#1b3c86]"
                >
                  Open service
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-[1rem] font-semibold text-[#244ba8] transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </div>
            </div>
          </>
        );

        return item.href.startsWith("#") ? (
          <CleanSectionLink key={item.href} href={item.href as `#${string}`} className={className}>{content}</CleanSectionLink>
        ) : (
          <Link key={item.href} href={item.href} className={className}>{content}</Link>
        );
      })}
    </div>
  );
}
