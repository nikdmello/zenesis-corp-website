import { CardAccent, SectionHeading } from "@/components/site-shell";

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

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.question}
              className="rounded-[1.85rem] border border-[#d8d0c2] bg-white p-7 text-[#11232a] shadow-[0_18px_50px_rgba(17,35,42,0.14)] md:p-8"
            >
              <CardAccent />
              <h3 className="text-[1.22rem] font-semibold leading-tight tracking-[-0.04em] text-foreground md:text-[1.3rem]">
                {item.question}
              </h3>
              <p className="mt-4 text-[1.1rem] leading-8 text-foreground/92 md:text-[1.14rem]">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
