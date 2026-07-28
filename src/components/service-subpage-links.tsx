import Image from "next/image";
import Link from "next/link";
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
  "/business-setup-services-uae": {
    imageSrc: versionedAssetPath("/services/business-setup-services-uae.webp"),
    imageAlt: "Business setup services planning in the UAE",
    imageClassName: "object-[82%_32%]",
  },
  "/company-formation-dubai": {
    imageSrc: versionedAssetPath("/services/company-formation-dubai.webp"),
    imageAlt: "Company formation route planning in Dubai",
    imageClassName: "object-[82%_32%]",
  },
  "/business-setup-cost-dubai": {
    imageSrc: versionedAssetPath("/services/business-setup-cost-uae.webp"),
    imageAlt: "Business setup pricing and free zone package review",
    imageClassName: "object-[82%_32%]",
  },
  "/mainland-vs-free-zone-dubai": {
    imageSrc: versionedAssetPath("/services/mainland-vs-freezone.webp"),
    imageAlt: "Mainland and free zone setup comparison in Dubai",
    imageClassName: "object-[82%_34%]",
  },
  "/low-cost-business-setup-uae": {
    imageSrc: versionedAssetPath("/services/low-cost-setup.webp"),
    imageAlt: "Low-cost UAE business setup route planning",
    imageClassName: "object-[82%_34%]",
  },
  "/mainland": {
    imageSrc: versionedAssetPath("/services/mainland.webp"),
    imageAlt: "Mainland company setup planning in Dubai",
    imageClassName: "object-[68%_24%]",
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

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`group flex flex-col justify-between overflow-hidden border border-[#d8d0c2] bg-white text-foreground shadow-[0_14px_36px_rgba(17,35,42,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#244ba8]/20 hover:shadow-[0_18px_44px_rgba(17,35,42,0.11)] ${
              isCompact ? "min-h-[8.1rem] rounded-[1.2rem]" : "min-h-[9.5rem] rounded-[1.45rem]"
            }`}
          >
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

            <div className={`flex flex-1 flex-col justify-between ${isCompact ? "px-4 py-4" : "px-5 py-5"}`}>
              <div>
                <h3
                  className={`font-semibold tracking-[-0.03em] text-foreground ${
                    isCompact
                      ? "text-[1rem] leading-6 md:text-[1.04rem]"
                      : "text-[1.08rem] leading-7 md:text-[1.12rem]"
                  }`}
                >
                  {item.label}
                </h3>
                {item.description ? (
                  <p
                    className={`text-muted ${
                      isCompact
                        ? "mt-2 text-[0.9rem] leading-6 md:text-[0.94rem]"
                        : "mt-3 text-[0.98rem] leading-7 md:text-[1rem]"
                    }`}
                  >
                    {item.description}
                  </p>
                ) : null}
              </div>

              <div className={`flex items-center justify-between gap-4 ${isCompact ? "mt-4" : "mt-5"}`}>
                <span
                  className={`font-semibold text-[#244ba8] transition-colors group-hover:text-[#1b3c86] ${
                    isCompact ? "text-[0.82rem]" : "text-sm"
                  }`}
                >
                  Open service
                </span>
                <span
                  aria-hidden="true"
                  className={`inline-flex shrink-0 items-center justify-center rounded-full border border-[#244ba8]/14 bg-[#244ba8]/8 font-semibold text-[#244ba8] transition-transform duration-200 group-hover:translate-x-0.5 ${
                    isCompact ? "h-9 w-9 text-[0.95rem]" : "h-10 w-10 text-[1rem]"
                  }`}
                >
                  {"->"}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
