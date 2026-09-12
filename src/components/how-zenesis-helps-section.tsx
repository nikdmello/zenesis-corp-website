import { SectionHeading } from "@/components/site-shell";

type HowZenesisHelpsItem = {
  title: string;
  description: string;
};

type HowZenesisHelpsSectionProps = {
  description: string;
  items: readonly HowZenesisHelpsItem[];
};

export function HowZenesisHelpsSection({
  description,
  items,
}: HowZenesisHelpsSectionProps) {
  return (
    <section
      id="how-zenesis-helps"
      className="relative left-1/2 -mt-px w-screen -translate-x-1/2 scroll-mt-28 bg-[#011735] py-11 text-white md:py-14 [&_.section-title]:text-white [&_.text-muted]:text-white/82"
    >
      <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <SectionHeading title="How Zenesis helps" description={description} />

        <div className="mt-7 grid border-y border-white/18 md:grid-cols-3 md:divide-x md:divide-white/18">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="border-b border-white/18 py-5 last:border-b-0 md:border-b-0 md:px-6 md:first:pl-0 md:last:pr-0"
            >
              <span className="text-sm font-semibold text-[#ead5aa]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[1.08rem] font-semibold leading-tight text-white md:text-[1.18rem]">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-7 text-white/74">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
