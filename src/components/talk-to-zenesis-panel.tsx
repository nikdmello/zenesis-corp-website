import type { ReactNode } from "react";
import Image from "next/image";
import { ConsultationFormButton } from "@/components/consultation-form";

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
  overlayClassName = "bg-[linear-gradient(180deg,rgba(245,239,228,0.96)_0%,rgba(245,239,228,0.9)_34%,rgba(245,239,228,0.74)_62%,rgba(245,239,228,0.34)_100%)] md:bg-[linear-gradient(90deg,rgba(245,239,228,0.96)_0%,rgba(245,239,228,0.92)_30%,rgba(245,239,228,0.72)_54%,rgba(245,239,228,0.24)_74%,transparent_90%)]",
  imageClassName = "object-cover object-[72%_center]",
}: TalkToZenesisPanelProps) {
  const renderedActions =
    actions ??
    (buttonClassName ? (
      <ConsultationFormButton
        label="Schedule a Free Consultation"
        className={buttonClassName}
      />
    ) : null);

  return (
    <article
      className={`relative overflow-hidden ${wrapperClassName} !border-transparent`}
    >
      <Image
        src="/talk-to-zenesis.webp"
        alt="Zenesis consultation meeting"
        fill
        sizes="(min-width: 1280px) 72rem, (min-width: 768px) calc(100vw - 5rem), calc(100vw - 3rem)"
        className={imageClassName}
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />
      <div className="relative z-10 max-w-[44rem]">
        <p className={eyebrowClassName}>{eyebrow}</p>
        <h2 className={titleClassName}>{title}</h2>
        <div className={`mt-5 max-w-[40rem] space-y-5 ${textClassName}`}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {renderedActions ? <div className="mt-8">{renderedActions}</div> : null}
      </div>
    </article>
  );
}
