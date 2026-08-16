import {
  businessSetupCostComparisonRows,
  businessSetupPricingLastUpdated,
} from "@/lib/business-setup-pricing";

export function BusinessSetupCostTable() {
  return (
    <div className="overflow-hidden rounded-lg border border-[#d8d0c2] bg-white">
      <div className="border-b border-[#d8d0c2] px-5 py-5 md:px-6">
        <h3 className="text-[1.28rem] font-semibold leading-tight tracking-[-0.04em] text-[#11232a] md:text-[1.55rem]">
          Dubai business setup cost comparison
        </h3>
        <p className="mt-3 text-sm font-medium text-[#8d7453]/78">
          Updated{" "}
          <time dateTime={businessSetupPricingLastUpdated.isoDate}>
            {businessSetupPricingLastUpdated.label}
          </time>
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[58rem] border-collapse text-left">
          <thead className="bg-[#11232a] text-white">
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
                  className="px-4 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.16em]"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {businessSetupCostComparisonRows.map((row) => (
              <tr key={row.setupType} className="border-t border-[#e4dacb]">
                <th
                  scope="row"
                  className="w-[12rem] px-4 py-4 text-[1rem] font-semibold leading-6 text-[#11232a]"
                >
                  {row.setupType}
                </th>
                <td className="whitespace-nowrap px-4 py-4 text-[1.18rem] font-semibold tracking-[-0.03em] text-[#244ba8]">
                  {row.startingPrice}
                </td>
                <td className="px-4 py-4 text-[0.98rem] font-medium leading-6 text-[#11232a]/84">
                  {row.bestFor}
                </td>
                <td className="px-4 py-4 text-[0.98rem] font-medium leading-6 text-[#11232a]/84">
                  {row.includes}
                </td>
                <td className="px-4 py-4 text-[0.98rem] font-medium leading-6 text-[#11232a]/84">
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
