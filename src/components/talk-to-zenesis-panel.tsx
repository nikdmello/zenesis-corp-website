import type { ReactNode } from "react";
import Image from "next/image";
import { ConsultationFormButton } from "@/components/consultation-button";

type TalkToZenesisPanelProps = {
  eyebrowClassName: string;
  titleClassName: string;
  textClassName: string;
  wrapperClassName: string;
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
  eyebrowClassName,
  titleClassName,
  textClassName,
  wrapperClassName,
  buttonClassName,
  paragraphs,
  title = "Talk to Zenesis",
  eyebrow = "Next Step",
  actions,
  overlayClassName = "bg-[linear-gradient(180deg,rgba(17,35,42,0.9)_0%,rgba(17,35,42,0.82)_34%,rgba(17,35,42,0.6)_62%,rgba(17,35,42,0.24)_100%)] md:bg-[linear-gradient(90deg,rgba(17,35,42,0.94)_0%,rgba(17,35,42,0.88)_34%,rgba(17,35,42,0.62)_58%,rgba(17,35,42,0.18)_78%,transparent_92%)]",
  imageClassName = "object-cover object-[72%_center]",
  presetEnquiry,
}: TalkToZenesisPanelProps) {
  const renderedActions =
    actions ??
    (buttonClassName ? (
      <ConsultationFormButton
        label="Schedule a Free Consultation"
        className={buttonClassName}
        presetEnquiry={
          presetEnquiry ??
          "I would like to schedule a free consultation with Zenesis."
        }
      />
    ) : null);

  return (
    <article
      className={`relative flex min-h-[18rem] w-full overflow-hidden ${wrapperClassName} !rounded-lg !border !border-[#cfc4b4] !bg-[#11232a] !p-6 !text-white !shadow-none md:min-h-[19rem] md:!p-8`}
    >
      <div className="absolute inset-0 overflow-hidden md:inset-y-0 md:right-0 md:left-auto md:w-1/2">
        <Image
          src="/sections/talk-to-zenesis.webp"
          alt="Zenesis consultation meeting"
          fill
          sizes="(min-width: 1280px) 36rem, (min-width: 768px) 50vw, 100vw"
          className={imageClassName}
        />
        <div className={`absolute inset-0 ${overlayClassName}`} />
      </div>
      <div className="relative z-10 my-auto w-full max-w-[44rem]">
        <p className={eyebrowClassName}>{eyebrow}</p>
        <h2 className={titleClassName}>{title}</h2>
        <div className={`mt-4 max-w-[40rem] space-y-4 ${textClassName}`}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {renderedActions ? <div className="mt-6">{renderedActions}</div> : null}
      </div>
    </article>
  );
}
