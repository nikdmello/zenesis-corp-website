import {
  businessSetupCostComparisonRows,
  businessSetupPricingLastUpdated,
} from "@/lib/business-setup-pricing";

export function BusinessSetupCostTable() {
  return (
    <div className="pricing-comparison overflow-hidden border-y border-[#d8d0c2] bg-white">
      <div className="pricing-comparison-heading border-b border-[#d8d0c2] py-5">
        <h3 className="text-[1.28rem] font-semibold leading-tight tracking-[-0.04em] text-[#011735] md:text-[1.55rem]">
          Dubai business setup cost comparison
        </h3>
        <p className="mt-3 text-sm font-medium text-[#8d7453]/78">
          Updated{" "}
          <time dateTime={businessSetupPricingLastUpdated.isoDate}>
            {businessSetupPricingLastUpdated.label}
          </time>
        </p>
      </div>

      <div className="pricing-comparison-scroll overflow-x-auto">
        <table className="pricing-comparison-table w-full border-collapse text-left">
          <thead className="bg-[#011735] text-white">
            <tr>
              {[
                "Setup type",
                "Starting price",
                "Best for",
                "Includes",
                "Final cost depends on",
              ].map((heading) => (
                <th
                  key={heading}
                  scope="col"
                  className="px-4 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.12em]"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {businessSetupCostComparisonRows.map((row) => (
              <tr key={row.setupType} className="pricing-comparison-row border-t border-[#e4dacb]">
                <th
                  scope="row"
                  data-label="Setup type"
                  className="pricing-comparison-name w-[12rem] px-4 py-4 text-[1rem] font-semibold leading-6 text-[#011735]"
                >
                  {row.setupType}
                </th>
                <td data-label="Starting price" className="pricing-comparison-price whitespace-nowrap px-4 py-4 text-[1.1rem] font-semibold text-[#244ba8]">
                  {row.startingPrice}
                </td>
                <td data-label="Best for" className="px-4 py-4 text-[0.98rem] font-medium leading-6 text-[#011735]/84">
                  {row.bestFor}
                </td>
                <td data-label="Includes" className="px-4 py-4 text-[0.98rem] font-medium leading-6 text-[#011735]/84">
                  {row.includes}
                </td>
                <td data-label="Final cost depends on" className="px-4 py-4 text-[0.98rem] font-medium leading-6 text-[#011735]/84">
                  {row.finalCostDependsOn}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
