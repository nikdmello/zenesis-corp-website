type HomepageServiceVisualVariant =
  | "business-setup"
  | "accounting-tax"
  | "visa-and-banking"
  | "corporate-support";

type HomepageServiceVisualProps = {
  variant: HomepageServiceVisualVariant;
};

const visualNumbers: Record<HomepageServiceVisualVariant, string> = {
  "business-setup": "01",
  "accounting-tax": "02",
  "corporate-support": "03",
  "visa-and-banking": "04",
};

export function HomepageServiceVisual({
  variant,
}: HomepageServiceVisualProps) {
  const number = visualNumbers[variant];

  return (
    <div
      aria-hidden="true"
      className="relative h-full overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(216,195,162,0.18),transparent_28%),linear-gradient(145deg,#173039_0%,#11232a_58%,#0b1820_100%)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_44%)]" />
      <div className="absolute right-6 top-6 h-px w-20 bg-[linear-gradient(90deg,rgba(216,195,162,0.55),rgba(216,195,162,0.04))]" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.02)_100%)]" />

      <div className="relative flex h-full items-end justify-between px-6 py-5 md:px-7 md:py-6">
        <div className="flex items-end gap-3">
          <span className="text-[5.8rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.1] md:text-[6.6rem] xl:text-[5.3rem]">
            {number}
          </span>
          <span className="mb-2 block h-10 w-px bg-[linear-gradient(180deg,rgba(216,195,162,0.05),rgba(216,195,162,0.55),rgba(216,195,162,0.05))]" />
        </div>
        <div className="mb-1 h-11 w-11 rounded-full border border-white/10 bg-white/[0.04]" />
      </div>
    </div>
  );
}
