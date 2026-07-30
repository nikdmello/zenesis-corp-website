import Image from "next/image";
import { PrimarySources } from "@/components/primary-sources";
import { getServiceCredibility } from "@/lib/service-credibility";

type ServiceCredibilityPanelProps = {
  path: string;
  dark?: boolean;
  variant?: "expertise" | "sources";
  embedded?: boolean;
};

export function ServiceCredibilityPanel({
  path,
  dark = false,
  variant = "sources",
  embedded = false,
}: ServiceCredibilityPanelProps) {
  const credibility = getServiceCredibility(path);

  if (!credibility) {
    return null;
  }

  if (variant === "expertise") {
    return (
      <section
        className={
          embedded
            ? "relative z-10 bg-transparent pt-4 md:pt-5"
            : "relative left-1/2 z-10 -mt-6 w-screen -translate-x-1/2 bg-transparent pb-6 pt-3 md:-mt-8 md:pb-8 md:pt-4"
        }
      >
        <div className={embedded ? "w-full" : "mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20"}>
          <div className={embedded ? "relative z-10 bg-transparent px-0 py-0" : "relative z-10 bg-transparent px-4 py-4 md:px-5"}>
            <div className="flex flex-col gap-4">
              <div className="flex min-w-0 items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-[#d8d0c2] bg-[#f5efe4]">
                  <Image
                    src={credibility.expert.imageSrc}
                    alt={credibility.expert.name}
                    fill
                    sizes="56px"
                    className="scale-[1.35] object-cover object-center"
                  />
                </div>
                <div className="min-w-0">
                  <p
                    className={`text-[0.7rem] font-semibold uppercase tracking-[0.2em] ${
                      dark ? "text-[#d5be8b]" : "text-[#8d7453]"
                    }`}
                  >
                    Reviewed by Zenesis
                  </p>
                  <h2
                    className={`mt-1 text-[1rem] font-semibold leading-tight md:text-[1.08rem] ${
                      dark ? "text-white" : "text-foreground"
                    }`}
                  >
                    {credibility.expert.name}
                  </h2>
                  <p
                    className={`mt-1 text-[0.84rem] font-medium ${
                      dark ? "text-white/66" : "text-foreground/66"
                    }`}
                  >
                    {credibility.expert.role} <span className="mx-1">•</span>
                    {credibility.expert.credentials}
                  </p>
                  <p
                    className={`mt-1.5 line-clamp-2 max-w-3xl text-[0.9rem] leading-6 ${
                      dark ? "text-white/82" : "text-foreground/78"
                    }`}
                  >
                    {credibility.expert.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f8f6f1] py-8 md:py-10">
      <div className="mx-auto w-full max-w-[78rem] px-6 md:px-10">
        <PrimarySources
          sources={credibility.sources}
          note={credibility.note}
          verificationLabel={credibility.verificationLabel}
        />
      </div>
    </section>
  );
}
