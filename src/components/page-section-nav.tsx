import { CleanSectionLink } from "@/components/clean-section-link";

type PageSectionNavItem = {
  href: `#${string}`;
  label: string;
};

type PageSectionNavProps = {
  items: readonly PageSectionNavItem[];
  className?: string;
};

export function PageSectionNav({ items, className = "" }: PageSectionNavProps) {
  return (
    <aside
      className={`sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-y-auto border-l border-[#d9d1c5] pl-7 lg:block ${className}`}
    >
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#8d7453]">
        On this page
      </p>
      <ol className="mt-5 space-y-3.5">
        {items.map((item, index) => (
          <li key={item.href}>
            <CleanSectionLink
              href={item.href}
              className="group flex items-start gap-3 text-[0.84rem] font-semibold leading-5 text-foreground/72 hover:text-[#244ba8]"
            >
              <span className="mt-px text-[0.68rem] tabular-nums text-[#8d7453]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item.label}</span>
            </CleanSectionLink>
          </li>
        ))}
      </ol>
    </aside>
  );
}

export function PageSectionNavMobile({ items, className = "" }: PageSectionNavProps) {
  return (
    <nav
      aria-label="On this page"
      className={`border-y border-[#d9d1c5] bg-[#f8f6f1] px-6 py-6 lg:hidden ${className}`}
    >
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
          <span>
            <span className="block text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-[#8d7453]">
              On this page
            </span>
            <span className="mt-2 block text-[0.96rem] leading-7 text-[#07151b]/68">
              {items.length} sections
            </span>
          </span>
          <span className="text-2xl leading-none text-[#8d7453] transition-transform group-open:rotate-45">
            +
          </span>
        </summary>
        <ol className="mt-5 space-y-3 border-t border-[#d9d1c5] pt-5">
          {items.map((item, index) => (
            <li key={item.href}>
              <CleanSectionLink
                href={item.href}
                className="flex items-start gap-3 text-[0.92rem] font-semibold leading-6 text-foreground"
              >
                <span className="mt-0.5 text-[0.72rem] tabular-nums text-[#8d7453]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item.label}</span>
              </CleanSectionLink>
            </li>
          ))}
        </ol>
      </details>
    </nav>
  );
}
