import Link from "next/link";

type HomepageServiceTileProps = {
  title: string;
  description?: string;
  href?: string;
};

export function HomepageServiceTile({
  title,
  href,
}: HomepageServiceTileProps) {
  const content = (
    <>
      <div className="min-w-0 flex-1">
        <p className="text-[1.08rem] font-semibold leading-[1.2] tracking-[-0.03em] text-[#07151b] md:text-[1.14rem]">
          {title}
        </p>
      </div>
      {href ? (
        <span
          aria-hidden="true"
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#8d7453]/24 bg-white/65 text-[1rem] text-[#8d7453] transition-all duration-200 group-hover:translate-x-0.5 group-hover:border-[#8d7453]/38 group-hover:bg-white group-hover:text-[#07151b]"
        >
          →
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group relative flex min-h-[3.7rem] w-full items-center gap-3 overflow-hidden rounded-[999px] border border-[#d8c3a2]/68 bg-[linear-gradient(180deg,#f6ead4_0%,#ecd6b0_100%)] px-3.5 py-2 text-left shadow-[0_10px_24px_rgba(141,116,83,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#c9ae81] hover:bg-[linear-gradient(180deg,#f8efdc_0%,#eddab9_100%)] hover:shadow-[0_16px_32px_rgba(141,116,83,0.18)] md:min-h-[3.85rem] md:px-4"
      >
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 h-full w-9 rounded-r-[1.2rem] bg-[linear-gradient(90deg,rgba(216,195,162,0.32),rgba(216,195,162,0))]"
        />
        {content}
      </Link>
    );
  }

  return (
    <div className="relative flex min-h-[3.7rem] w-full items-center gap-3 overflow-hidden rounded-[999px] border border-[#d8c3a2]/68 bg-[linear-gradient(180deg,#f6ead4_0%,#ecd6b0_100%)] px-3.5 py-2 text-left shadow-[0_10px_24px_rgba(141,116,83,0.14)] md:min-h-[3.85rem] md:px-4">
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-9 rounded-r-[1.2rem] bg-[linear-gradient(90deg,rgba(216,195,162,0.32),rgba(216,195,162,0))]"
      />
      {content}
    </div>
  );
}
