import { articleSectionHeadingClassName } from "@/lib/article-styles";

type ServiceAnswerItem = {
  question: string;
  answer: string;
};

type ServiceAnswerSectionProps = {
  title: string;
  description: string;
  items: readonly ServiceAnswerItem[];
  dark?: boolean;
  contentClassName?: string;
  contained?: boolean;
};

export function ServiceAnswerSection({
  title,
  description,
  items,
  contentClassName = "",
  contained = false,
}: ServiceAnswerSectionProps) {
  return (
    <section
      id="direct-answers"
      className={`relative -mt-px scroll-mt-28 bg-[#f8f6f1] py-11 md:py-14 ${contained ? "w-full" : "left-1/2 w-screen -translate-x-1/2"}`}
    >
      <div className={`mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20 ${contentClassName}`}>
        <div>
          <h2 className={articleSectionHeadingClassName}>{title}</h2>
          <p className="mt-4 text-[1.02rem] leading-8 text-[#07151b]/76 md:text-[1.06rem]">
            {description}
          </p>

          <div className="mt-7 divide-y divide-[#e4dbce] border-y border-[#e4dbce]">
            {items.map((item, index) => (
              <details key={item.question} className="group py-5" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 marker:content-none">
                  <span className="flex min-w-0 items-start gap-3">
                    <span className="mt-1 shrink-0 text-[0.72rem] font-semibold tabular-nums text-[#8d7453]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[1.04rem] font-semibold leading-7 text-foreground md:text-[1.08rem]">
                      {item.question}
                    </span>
                  </span>
                  <span className="mt-0.5 shrink-0 text-2xl leading-none text-[#8d7453] transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="ml-9 mt-4 text-[1.02rem] leading-8 text-[#07151b]/82 md:text-[1.04rem]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
