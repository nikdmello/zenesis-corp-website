import type { ReactNode } from "react";
import Image from "next/image";
import {
  ConsultationFormButton,
  WhatsAppCueIcon,
} from "@/components/consultation-form";

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
  overlayClassName = "bg-[linear-gradient(180deg,rgba(17,35,42,0.94)_0%,rgba(17,35,42,0.88)_34%,rgba(17,35,42,0.7)_62%,rgba(17,35,42,0.32)_100%)] md:bg-[linear-gradient(90deg,rgba(17,35,42,0.98)_0%,rgba(17,35,42,0.95)_34%,rgba(17,35,42,0.72)_58%,rgba(17,35,42,0.22)_78%,transparent_92%)]",
  imageClassName = "object-cover object-[72%_center]",
}: TalkToZenesisPanelProps) {
  const renderedActions =
    actions ??
    (buttonClassName ? (
      <ConsultationFormButton
        label="Schedule a Free Consultation"
        className={buttonClassName}
        leadingIcon={<WhatsAppCueIcon />}
      />
    ) : null);

  return (
    <article
      className={`relative overflow-hidden ${wrapperClassName} !border-transparent`}
    >
      <div className="absolute inset-0 overflow-hidden md:inset-y-0 md:right-0 md:left-auto md:w-1/2">
        <Image
          src="/talk-to-zenesis.webp"
          alt="Zenesis consultation meeting"
          fill
          sizes="(min-width: 1280px) 36rem, (min-width: 768px) 50vw, 100vw"
          className={imageClassName}
        />
        <div className={`absolute inset-0 ${overlayClassName}`} />
      </div>
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
