import Image from "next/image";
import Link from "next/link";

type BusinessSetupRouteCardProps = {
  title: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  frontSummary: string;
  backDescription?: string;
  points: readonly string[];
  ctaLabel?: string;
  variant?: "setup" | "essential";
};

export function BusinessSetupRouteCard({
  title,
  href,
  imageSrc,
  imageAlt,
  imageWidth = 1920,
  imageHeight = 1303,
  frontSummary,
  backDescription,
  points,
  ctaLabel = "View route",
  variant = "setup",
}: BusinessSetupRouteCardProps) {
  const isEssential = variant === "essential";
  const hasImage = Boolean(imageSrc && imageAlt);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-[#d8d0c2] bg-white text-[#011735] shadow-[0_12px_30px_rgba(17,35,42,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#bca57f] hover:shadow-[0_16px_36px_rgba(17,35,42,0.12)] focus-within:border-[#bca57f] focus-within:shadow-[0_16px_36px_rgba(17,35,42,0.12)]">
      <Link
        href={href}
        aria-label={`${ctaLabel}: ${title}`}
        className="absolute inset-0 z-10 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#244ba8]"
      >
        <span className="sr-only">{ctaLabel}: {title}</span>
      </Link>

      {hasImage ? (
        <div className="overflow-hidden border-b border-[#e4dbce] bg-[#f8f6f1]">
          <Image
            src={imageSrc!}
            alt={imageAlt!}
            width={imageWidth}
            height={imageHeight}
            sizes="(min-width: 1280px) 22vw, (min-width: 768px) 45vw, 100vw"
            className="aspect-[16/9] w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      ) : null}

      <div className={`flex flex-1 flex-col ${isEssential ? "p-5" : "p-6"}`}>
        <h3 className="text-[1.28rem] font-semibold leading-7 tracking-[-0.02em] text-foreground md:text-[1.38rem]">
          {title}
        </h3>
        <p className="mt-4 text-[1rem] leading-7 text-[#07151b]/78">
          {frontSummary}
        </p>

        <details className="group/details relative z-20 mt-5 border-y border-[#e4dbce] bg-white py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[0.9rem] font-semibold text-[#244ba8] marker:content-none">
            <span>What this includes</span>
            <span className="text-xl leading-none text-[#8d7453] transition-transform group-open/details:rotate-45">
              +
            </span>
          </summary>
          {backDescription ? (
            <p className="mt-4 text-[0.96rem] leading-7 text-[#07151b]/76">
              {backDescription}
            </p>
          ) : null}
          <ul className="mt-4 divide-y divide-[#e4dbce] border-y border-[#e4dbce]">
            {points.map((point) => (
              <li key={point} className="flex gap-3 py-3 text-[0.94rem] leading-7 text-[#07151b]/84">
                <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#8d7453]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </details>

        <Link
          href={href}
          className="relative z-20 mt-auto inline-flex items-center gap-2 pt-5 text-[0.94rem] font-semibold text-[#244ba8] hover:underline"
        >
          <span>{ctaLabel}</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
