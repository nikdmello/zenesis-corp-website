import Link from "next/link";

type HomepageServiceTileProps = {
  title: string;
  description: string;
  href?: string;
};

export function HomepageServiceTile({
  title,
  description,
  href,
}: HomepageServiceTileProps) {
  const content = (
    <>
      <div className="min-w-0 flex-1">
        <p className="text-[1.1rem] font-bold leading-6 tracking-[-0.03em] text-white md:text-[1.15rem]">
          {title}
        </p>
        <p className="mt-1.5 max-w-[34ch] text-[0.96rem] font-medium leading-6 text-white/82 md:text-[0.98rem]">
          {description}
        </p>
      </div>
      {href ? (
        <span
          aria-hidden="true"
          className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/8 text-[1rem] text-white/78 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white"
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
        className="group flex min-h-[7rem] w-full items-start gap-4 rounded-[1.15rem] border border-[#20363f] bg-[linear-gradient(180deg,#173039_0%,#11232a_100%)] px-4 py-4 text-left shadow-[0_12px_28px_rgba(17,35,42,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#244ba8]/32 hover:bg-[linear-gradient(180deg,#1a3640_0%,#132830_100%)] md:min-h-[7.1rem] md:px-4.5"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="flex min-h-[7rem] w-full items-start gap-4 rounded-[1.15rem] border border-[#20363f] bg-[linear-gradient(180deg,#173039_0%,#11232a_100%)] px-4 py-4 text-left shadow-[0_12px_28px_rgba(17,35,42,0.12)] md:min-h-[7.1rem] md:px-4.5">
      {content}
    </div>
  );
}
