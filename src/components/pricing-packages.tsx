"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/arrow-right-icon";
import { useState } from "react";
import { businessSetupStartingPrices } from "@/lib/business-setup-pricing";
import { getCurrentPagePath, trackConversionEvent } from "@/lib/conversion-analytics";

const ConsultationModal = dynamic(
  () => import("@/components/consultation-form").then((mod) => mod.ConsultationModal),
  { ssr: false },
);

const groups = [
  {
    title: "UAE company formation",
    indexes: [0, 1, 2],
  },
  {
    title: "Freelance and offshore",
    indexes: [3, 4, 5],
  },
];

export function PricingPackages() {
  const [enquiry, setEnquiry] = useState<string | null>(null);

  return (
    <>
      <header className="pricing-packages-header">
        <h2>Choose your starting point</h2>
        <p>Start with the route closest to your plans. Zenesis confirms the full scope and cost before filing.</p>
      </header>
      {groups.map((group) => (
        <div key={group.title} className="pricing-package-group">
          <div className="pricing-package-group-heading">
            <h2>{group.title}</h2>
          </div>
          <div className="pricing-package-grid">
            {group.indexes.map((index) => {
              const item = businessSetupStartingPrices[index];
              const range = "maxNumericPrice" in item;
              return (
                <article className="pricing-package" key={item.title}>
                  <div className="pricing-package-identity">
                    <p className="pricing-package-qualifier">{item.qualifier}</p>
                    <h3>{item.title}</h3>
                  </div>
                  <ul className="pricing-package-highlights" aria-label={`${item.title} details`}>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}><span aria-hidden="true" />{highlight}</li>
                    ))}
                  </ul>
                  <div className="pricing-package-price">
                    <span>{range ? "Price range" : "Starting from"}</span>
                    <strong><small>AED</small> {item.price.replace(/^AED\s*/, "")}</strong>
                  </div>
                  <div className="pricing-package-actions">
                    <button
                      type="button"
                      className="pricing-package-cta"
                      onClick={() => {
                        trackConversionEvent("consultation_cta_click", {
                          cta_label: `${item.title} pricing card`,
                          page_path: getCurrentPagePath(),
                        });
                        setEnquiry(`I am interested in ${item.title} (${item.qualifier}), ${range ? "priced at" : "starting from"} ${item.price}. Please confirm the full cost and next steps.`);
                      }}
                    >
                      Discuss this option <ArrowRightIcon className="h-4 w-4" />
                    </button>
                    <Link href={item.href} className="pricing-package-details">View service</Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ))}
      {enquiry && (
        <ConsultationModal
          isOpen
          onOpenChange={(open) => { if (!open) setEnquiry(null); }}
          presetEnquiry={enquiry}
          trigger="pricing-card"
        />
      )}
    </>
  );
}
