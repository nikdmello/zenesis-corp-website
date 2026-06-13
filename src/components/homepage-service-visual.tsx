type HomepageServiceVisualVariant =
  | "business-setup"
  | "accounting-tax"
  | "visa-and-banking"
  | "corporate-support";

type HomepageServiceVisualProps = {
  variant: HomepageServiceVisualVariant;
  title: string;
};

export function HomepageServiceVisual({
  variant,
  title,
}: HomepageServiceVisualProps) {
  const accentWidths: Record<HomepageServiceVisualVariant, string> = {
    "business-setup": "w-20",
    "accounting-tax": "w-16",
    "visa-and-banking": "w-24",
    "corporate-support": "w-18",
  };

  return (
    <div
      className="relative h-full overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(216,195,162,0.18),transparent_28%),linear-gradient(145deg,#173039_0%,#11232a_58%,#0b1820_100%)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_44%)]" />
      <div
        className={`absolute left-6 top-6 h-px ${accentWidths[variant]} bg-[linear-gradient(90deg,rgba(216,195,162,0.55),rgba(216,195,162,0.04))]`}
      />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.02)_100%)]" />
      <div
        aria-hidden="true"
        className="absolute -right-6 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full border border-white/8 bg-white/[0.03]"
      />
      <div
        aria-hidden="true"
        className="absolute right-7 top-1/2 h-12 w-px -translate-y-1/2 bg-[linear-gradient(180deg,rgba(216,195,162,0.04),rgba(216,195,162,0.48),rgba(216,195,162,0.04))]"
      />

      <div className="relative flex h-full items-end px-6 py-5 md:px-7 md:py-6">
        <div className="min-w-0">
          <h3 className="whitespace-nowrap text-[1.78rem] font-medium leading-none tracking-[-0.055em] text-white [text-shadow:0_1px_0_rgba(255,255,255,0.04)] md:text-[2rem] xl:text-[1.72rem]">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}
