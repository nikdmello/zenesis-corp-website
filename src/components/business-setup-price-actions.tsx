"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { businessSetupStartingPrices } from "@/lib/business-setup-pricing";

const LazyConsultationModal = dynamic(
  () => import("@/components/consultation-form").then((mod) => mod.ConsultationModal),
  {
    ssr: false,
    loading: () => null,
  },
);

type BusinessSetupPrice = (typeof businessSetupStartingPrices)[number];

type BusinessSetupPriceActionsProps = {
  variant: "homepage" | "servicePage";
};

function buildPricingEnquiry(item: BusinessSetupPrice) {
  return `I am interested in ${item.title} starting from ${item.price} (${item.qualifier}). Please help me confirm the full cost and next steps.`;
}

export function BusinessSetupPriceActions({
  variant,
}: BusinessSetupPriceActionsProps) {
  const [presetEnquiry, setPresetEnquiry] = useState<string | null>(null);

  return (
    <>
      <div
        className={
          variant === "homepage"
            ? "grid gap-3 md:grid-cols-2 xl:grid-cols-5"
            : "mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5"
        }
      >
        {businessSetupStartingPrices.map((item) => {
          const enquiry = buildPricingEnquiry(item);

          return (
            <button
              key={item.title}
              type="button"
              aria-label={`Open consultation form for ${item.title} from ${item.price}`}
              className={
                variant === "homepage"
                  ? "group cursor-pointer rounded-lg border border-[#d8d0c2] bg-white/70 p-4 text-left text-[#11232a] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#244ba8]"
                  : "flex h-full cursor-pointer flex-col rounded-lg border border-[#d8d0c2] bg-white p-5 text-left text-[#11232a] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#244ba8] md:p-6"
              }
              onClick={() => setPresetEnquiry(enquiry)}
            >
              <p
                className={
                  variant === "homepage"
                    ? "text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8d7453]"
                    : "text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-[#8d7453]"
                }
              >
                {item.qualifier}
              </p>
              <h4
                className={
                  variant === "homepage"
                    ? "mt-2 min-h-[2.3rem] text-[0.96rem] font-semibold leading-tight tracking-[-0.02em] text-[#07151b]"
                    : "mt-4 min-h-[3.05rem] text-[1.2rem] font-semibold leading-tight tracking-[-0.03em] text-[#11232a] md:min-h-[3.25rem] md:text-[1.28rem]"
                }
              >
                {item.title}
              </h4>
              <div
                className={
                  variant === "homepage"
                    ? "mt-3 flex items-baseline gap-1.5 whitespace-nowrap text-[#244ba8]"
                    : "mt-5 inline-flex min-w-max items-baseline gap-2 whitespace-nowrap text-[#244ba8]"
                }
              >
                <span
                  className={
                    variant === "homepage"
                      ? "text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-[#8d7453]"
                      : "text-[0.92rem] font-semibold uppercase tracking-[0.16em] text-[#8d7453]"
                  }
                >
                  From
                </span>
                <span
                  className={
                    variant === "homepage"
                      ? "text-[1.72rem] font-semibold leading-none tracking-[-0.05em]"
                      : "text-[1.86rem] font-semibold leading-none tracking-[-0.04em] md:text-[2.08rem]"
                  }
                >
                  {item.price}
                </span>
              </div>
              <p
                className={
                  variant === "homepage"
                    ? "mt-3 text-[0.9rem] font-medium leading-6 text-[#30434b]"
                    : "mt-5 flex-1 text-[1.02rem] font-medium leading-7 text-[#11232a]/82"
                }
              >
                {item.description}
              </p>
            </button>
          );
        })}
      </div>

      {presetEnquiry ? (
        <LazyConsultationModal
          isOpen={Boolean(presetEnquiry)}
          onOpenChange={(isOpen) => {
            if (!isOpen) {
              setPresetEnquiry(null);
            }
          }}
          presetEnquiry={presetEnquiry}
        />
      ) : null}
    </>
  );
}
