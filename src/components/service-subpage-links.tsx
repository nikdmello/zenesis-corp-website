import Link from "next/link";

export type ServiceSubpageLinkItem = {
  label: string;
  href: string;
  description?: string;
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
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`group flex flex-col justify-between overflow-hidden border border-[#d8d0c2] bg-white text-foreground shadow-[0_14px_36px_rgba(17,35,42,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#244ba8]/20 hover:shadow-[0_18px_44px_rgba(17,35,42,0.11)] ${
            isCompact
              ? "min-h-[8.1rem] rounded-[1.2rem] px-4 py-4"
              : "min-h-[9.5rem] rounded-[1.45rem] px-5 py-5"
          }`}
        >
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
              →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
