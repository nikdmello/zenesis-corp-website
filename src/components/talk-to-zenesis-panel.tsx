import type { ReactNode } from "react";
import { ConsultationFormButton } from "@/components/consultation-button";

type TalkToZenesisPanelProps = {
  eyebrowClassName?: string;
  titleClassName?: string;
  textClassName?: string;
  wrapperClassName?: string;
  buttonClassName?: string;
  paragraphs: string[];
  title?: string;
  eyebrow?: string;
  actions?: ReactNode;
  overlayClassName?: string;
  imageClassName?: string;
  presetEnquiry?: string;
};

export function TalkToZenesisPanel({
  paragraphs,
  title = "Talk to Zenesis",
  eyebrow = "Next Step",
  actions,
  presetEnquiry,
}: TalkToZenesisPanelProps) {
  const renderedActions =
    actions ??
    (
      <ConsultationFormButton
        label="Book a consultation"
        className="inline-flex rounded-[0.7rem] border border-[#f6e4bd]/90 bg-[linear-gradient(135deg,#fff9ec_0%,#edd9b2_52%,#d9b97e_100%)] px-6 py-3 text-sm font-semibold tracking-[0.015em] !text-[#11232a] shadow-[0_14px_30px_rgba(17,35,42,0.14),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all hover:-translate-y-0.5 hover:brightness-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b79056] focus-visible:ring-offset-2"
        presetEnquiry={
          presetEnquiry ??
          "I would like to book a consultation with Zenesis."
        }
      />
    );

  return (
    <article className="border-y border-[#d8d0c2] py-8 text-[#11232a] md:py-10">
      <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div className="max-w-[50rem]">
          <p className="text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-[#8d7453]">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-[1.16] tracking-[-0.02em] text-[#11232a] sm:text-[1.9rem] md:text-[2.05rem]">
            {title}
          </h2>
          <div className="mt-4 max-w-[44rem] space-y-4 text-[1.06rem] font-medium leading-8 text-[#11232a]/82 md:text-[1.1rem]">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        {renderedActions ? <div className="flex flex-col gap-3 sm:flex-row md:justify-end">{renderedActions}</div> : null}
      </div>
    </article>
  );
}
