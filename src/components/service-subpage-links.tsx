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
    imageSrc: versionedAssetPath("/backgrounds/business-setup-bg.webp"),
    imageAlt: "Business setup advisory meeting in Dubai",
    imageClassName: "object-[78%_center]",
  },
  "/business-setup-services-uae": {
    imageSrc: versionedAssetPath("/backgrounds/business-setup-bg.webp"),
    imageAlt: "Business setup services planning in the UAE",
    imageClassName: "object-[82%_center]",
  },
  "/company-formation-dubai": {
    imageSrc: versionedAssetPath("/mainland.webp"),
    imageAlt: "Company formation route planning in Dubai",
    imageClassName: "object-[68%_24%]",
  },
  "/business-setup-cost-dubai": {
    imageSrc: versionedAssetPath("/freezone.webp"),
    imageAlt: "Business setup pricing and free zone package review",
    imageClassName: "object-[70%_24%]",
  },
  "/mainland-vs-free-zone-dubai": {
    imageSrc: versionedAssetPath("/free-zone.webp"),
    imageAlt: "Mainland and free zone setup comparison in Dubai",
    imageClassName: "object-[74%_center]",
  },
  "/low-cost-business-setup-uae": {
    imageSrc: versionedAssetPath("/freezone.webp"),
    imageAlt: "Low-cost UAE business setup route planning",
    imageClassName: "object-[70%_24%]",
  },
  "/mainland": {
    imageSrc: versionedAssetPath("/mainland.webp"),
    imageAlt: "Mainland company setup planning in Dubai",
    imageClassName: "object-[68%_24%]",
  },
  "/free-zones": {
    imageSrc: versionedAssetPath("/freezone.webp"),
    imageAlt: "Free zone company setup planning in Dubai",
    imageClassName: "object-[70%_24%]",
  },
  "/offshore": {
    imageSrc: versionedAssetPath("/offshore.webp"),
    imageAlt: "Offshore company structure planning",
    imageClassName: "object-[72%_22%]",
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
