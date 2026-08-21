import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

type ServiceRevealItem = {
  title: string;
  href: string;
  cta: string;
  items: readonly string[];
  icon: "business" | "accounting" | "visa" | "support";
  imageSrc: string;
  imageAlt: string;
  lead: string;
};

type HomepageServicesRevealProps = {
  items: readonly ServiceRevealItem[];
};

const stageNumberByIndex: Record<number, string> = {
  0: "01",
  1: "02",
  2: "03",
  3: "04",
};

function ServiceIcon({ type }: { type: ServiceRevealItem["icon"] }) {
  const common = "h-[1.1rem] w-[1.1rem]";

  if (type === "business") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common}>
        <path d="M4 19.5h16" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M7 19V8.5h4V19" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 19V4.5h4V19" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 11.5h.01M15 8.5h.01M15 11.5h.01" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "accounting") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common}>
        <rect x="5" y="4.5" width="14" height="15" rx="2.5" strokeWidth="1.5" />
        <path d="M8 15.5l2.8-2.8 2.2 2.2 3-4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 8.5h8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "visa") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common}>
        <rect x="4.5" y="6" width="15" height="11.5" rx="2.5" strokeWidth="1.5" />
        <path d="M8 10h8" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 13.5h3.5" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="16.2" cy="13.3" r="1.6" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common}>
      <circle cx="12" cy="12" r="4.25" strokeWidth="1.5" />
      <path d="M12 5.25v2.5M12 16.25v2.5M5.25 12h2.5M16.25 12h2.5" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 9.8v2.4l1.7 1.2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HomepageServicesReveal({
  items,
}: HomepageServicesRevealProps) {
  return (
    <section
      id="services"
      className="relative left-1/2 w-screen -translate-x-1/2 scroll-mt-14 overflow-hidden bg-[#f8f6f1] py-14 text-[#07151b] md:scroll-mt-18 md:py-18"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-full max-w-[56rem] md:w-[46vw] md:min-w-[34rem] xl:w-[52vw] xl:min-w-[42rem]"
      >
        <div
          className="absolute inset-0 opacity-[0.36] md:opacity-[0.54] xl:opacity-[0.6]"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 18%, rgba(0,0,0,0.32) 36%, rgba(0,0,0,0.72) 58%, #000 76%, #000 100%)",
            maskImage:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 18%, rgba(0,0,0,0.32) 36%, rgba(0,0,0,0.72) 58%, #000 76%, #000 100%)",
          }}
        >
          <Image
            src="/sections/uae-flag.webp"
            alt=""
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 46vw, 896px"
            className="object-cover object-right"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,246,241,0.2)_0%,rgba(248,246,241,0.1)_28%,rgba(248,246,241,0.02)_68%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <div className="max-w-[62rem] border-b border-[#cfc5b7] pb-8">
          <div>
            <div className="h-px w-16 bg-[#b88d53]/75" />
            <h2 className="section-title mt-5 w-full !text-[1.75rem] font-semibold !leading-[1.16] !tracking-[-0.02em] text-[#07151b] sm:!text-[1.9rem] md:!text-[2.05rem]">
            Our services
            </h2>
          </div>
          <p className="mt-5 max-w-[54rem] text-[1.06rem] leading-8 text-[#30434b] md:text-[1.1rem]">
            From choosing the right setup route to visa, banking, tax, and ongoing compliance, Zenesis supports every stage of operating in the UAE.
          </p>
        </div>

        <div className="relative z-10 divide-y divide-[#cfc5b7]">
          {items.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 70}>
              <Link
                href={item.href}
                className="group grid grid-cols-[3.25rem_minmax(0,1fr)] gap-x-4 gap-y-5 py-7 text-[#07151b] transition-colors duration-300 hover:bg-white/72 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244ba8] focus-visible:ring-inset md:min-h-[15rem] md:grid-cols-[5rem_minmax(12rem,0.72fr)_minmax(18rem,1fr)_8rem] md:items-center md:gap-8 md:px-5 lg:min-h-[17rem]"
              >
              <div className="flex flex-col items-center self-start pt-0.5 md:self-center md:pt-0">
                <span className="text-[0.88rem] font-semibold tabular-nums text-[#8d7453]">
                  {stageNumberByIndex[index]}
                </span>
                <span className="mt-4 flex h-10 w-10 items-center justify-center border border-[#d8d0c2] bg-white text-[#8d7453]">
                  <ServiceIcon type={item.icon} />
                </span>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#8d7453]">{item.lead}</p>
                <h3 className="mt-2 text-[1.55rem] font-semibold leading-[1.08] text-[#07151b] md:text-[1.72rem]">
                  {item.title}
                </h3>
                <ul className="mt-5 space-y-2 text-[0.96rem] leading-6 text-[#07151b]/72">
                  {item.items.map((entry) => <li key={entry}>{entry}</li>)}
                </ul>
              </div>

              <div className="relative col-span-2 aspect-[16/9] w-full overflow-hidden md:col-span-1 md:aspect-auto md:h-full md:min-h-[12rem]">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 38vw, (min-width: 768px) 34vw, calc(100vw - 3rem)"
                  className={`object-cover transition-transform duration-700 group-hover:scale-[1.025] ${index === 0 || index === 2 ? "object-top" : "object-center"}`}
                />
                <div className="absolute inset-0 border border-black/8" />
              </div>

              <span className="col-span-2 inline-flex items-center justify-between border-t border-[#d8d0c2] pt-4 text-sm font-semibold text-[#244ba8] md:col-span-1 md:justify-end md:border-t-0 md:pt-0">
                {item.cta}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
