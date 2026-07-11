import { SectionHeading } from "@/components/site-shell";

type ServiceAnswerItem = {
  question: string;
  answer: string;
};

type ServiceAnswerSectionProps = {
  title: string;
  description: string;
  items: readonly ServiceAnswerItem[];
  dark?: boolean;
};

export function ServiceAnswerSection({
  title,
  description,
  items,
  dark = false,
}: ServiceAnswerSectionProps) {
  return (
    <section
      className={`relative left-1/2 -mt-px w-screen -translate-x-1/2 py-16 md:py-20 ${
        dark ? "bg-[#11232a]" : "bg-[#f5efe4]"
      }`}
    >
      <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <SectionHeading
          eyebrow=""
          title={title}
          description={description}
          titleClassName={dark ? "!text-white" : undefined}
          descriptionClassName={dark ? "!text-white/92" : undefined}
        />

        <div className="mt-9 grid gap-3">
          {items.map((item, index) => (
            <details
              key={item.question}
              className="group rounded-[1.25rem] border border-[#d8d0c2] bg-white text-[#11232a] shadow-[0_14px_38px_rgba(17,35,42,0.09)]"
              open={index === 0}
            >
              <summary className="grid cursor-pointer list-none grid-cols-[2.75rem_1fr_2.25rem] items-center gap-3 px-5 py-5 marker:content-none sm:grid-cols-[3.5rem_1fr_2.5rem] sm:px-6 md:py-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8d0c2] bg-[#fbf8f1] text-sm font-semibold text-[#8d7453]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 text-[1.08rem] font-semibold leading-snug text-[#11232a] md:text-[1.18rem]">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#11232a]/12 bg-[#f5efe4] text-[1.5rem] font-light leading-none text-[#11232a] transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="px-5 pb-5 sm:pl-[6.5rem] sm:pr-8 md:pb-6">
                <p className="max-w-5xl border-t border-[#d8d0c2]/80 pt-4 text-[1rem] font-medium leading-7 text-[#11232a]/78 md:text-[1.06rem]">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
