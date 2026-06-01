import Link from "next/link";

export type ServiceSubpageLinkItem = {
  label: string;
  href: string;
  description?: string;
};

type ServiceSubpageLinksProps = {
  items: readonly ServiceSubpageLinkItem[];
  columnsClassName?: string;
};

export function ServiceSubpageLinks({
  items,
  columnsClassName = "sm:grid-cols-2",
}: ServiceSubpageLinksProps) {
  return (
    <div className={`grid gap-3 ${columnsClassName}`}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group flex min-h-[9.5rem] flex-col justify-between overflow-hidden rounded-[1.45rem] border border-[#d8d0c2] bg-[linear-gradient(180deg,#fffdfa_0%,#f6efe3_100%)] px-5 py-5 text-foreground shadow-[0_14px_36px_rgba(17,35,42,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#244ba8]/20 hover:shadow-[0_18px_44px_rgba(17,35,42,0.11)]"
        >
          <div>
            <h3 className="text-[1.08rem] font-semibold leading-7 tracking-[-0.03em] text-foreground md:text-[1.12rem]">
              {item.label}
            </h3>
            {item.description ? (
              <p className="mt-3 text-[0.98rem] leading-7 text-muted md:text-[1rem]">
                {item.description}
              </p>
            ) : null}
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <span className="text-sm font-semibold text-[#244ba8] transition-colors group-hover:text-[#1b3c86]">
              Open service
            </span>
            <span
              aria-hidden="true"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#244ba8]/14 bg-[#244ba8]/8 text-[1rem] font-semibold text-[#244ba8] transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
