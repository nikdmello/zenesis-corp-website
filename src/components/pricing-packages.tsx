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
    title: "Company formation and freelance permits",
    description: "Choose whether you need a company, a residence visa, or a permit to work independently.",
    options: [
      { index: 3, question: "Work independently" },
      { index: 0, question: "Start a company without a visa" },
      { index: 1, question: "Start a company and get UAE residency" },
      { index: 2, question: "Trade directly across the UAE" },
    ],
  },
  {
    title: "Hold assets or ownership interests",
    description: "Choose the registry based on where the structure will be used.",
    options: [
      { index: 4, question: "Use a UAE offshore registry" },
      { index: 5, question: "Use an international registry" },
    ],
  },
] as const;

export function PricingPackages() {
  const [enquiry, setEnquiry] = useState<string | null>(null);

  return (
    <>
      <header className="pricing-packages-header">
        <h2>Setup pricing</h2>
        <p>Compare starting prices below. We confirm your package inclusions and full quote before you proceed.</p>
      </header>
      {groups.map((group) => (
        <div key={group.title} className="pricing-package-group">
          <div className="pricing-package-group-heading">
            <h2>{group.title}</h2>
            <p>{group.description}</p>
          </div>
          <div className={`pricing-package-grid pricing-package-grid-${group.options.length}`}>
            {group.options.map((option) => {
              const item = businessSetupStartingPrices[option.index];
              const range = "maxNumericPrice" in item;
              return (
                <article className="pricing-package" key={item.title}>
                  <div className="pricing-package-identity">
                    <p className="pricing-package-question">{option.question}</p>
                    <h3>{item.title}</h3>
                  </div>
                  <div className={`pricing-package-price ${range ? "pricing-package-price-range" : ""}`}>
                    <span>{range ? "Price range" : "Starting from"}</span>
                    <strong><small>AED</small> {item.price.replace(/^AED\s*/, "")}</strong>
                  </div>
                  <ul className="pricing-package-highlights" aria-label={`${item.title} details`}>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}><span aria-hidden="true" />{highlight}</li>
                    ))}
                  </ul>
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
                      Get a quote <ArrowRightIcon className="h-4 w-4" />
                    </button>
                    <Link href={item.href} className="pricing-package-details">View service</Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ))}
      <aside className="pricing-route-callout">
        <div>
          <h2>Free zone or mainland?</h2>
          <span>Compare where you can operate, office requirements, and visa options.</span>
        </div>
        <Link href="/mainland-vs-free-zone-dubai" className="pricing-route-callout-link">
          Compare routes <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </aside>
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
