import Image from "next/image";
import { getServiceCredibility } from "@/lib/service-credibility";

function formatSourceUrl(href: string) {
  try {
    const url = new URL(href);
    const normalizedPath = `${url.pathname}${url.search}`.replace(/\/$/, "") || "/";
    return {
      host: url.hostname.replace(/^www\./, ""),
      path: normalizedPath,
    };
  } catch {
    return {
      host: href,
      path: "",
    };
  }
}

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
    <section
      className={`relative left-1/2 -mt-px w-screen -translate-x-1/2 py-6 md:py-8 ${
        dark ? "bg-[#11232a]" : "bg-[#f5efe4]"
      }`}
    >
      <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <div
          className={`rounded-[1.45rem] border px-4 py-4 shadow-none md:px-6 md:py-5 ${
            dark
              ? "border-white/10 bg-white/[0.025]"
              : "border-[#e1d7c8] bg-[linear-gradient(180deg,#faf7f1_0%,#f6f0e6_100%)]"
          }`}
        >
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start">
            <div className="max-w-xl">
              <div>
                <span
                  className={`block h-[3px] w-10 rounded-full ${
                    dark ? "bg-[#d5be8b]" : "bg-[#8d7453]"
                  }`}
                />
                <p
                  className={`mt-2.5 text-[1.02rem] font-semibold uppercase tracking-[0.12em] md:text-[1.08rem] ${
                    dark ? "text-[#d5be8b]" : "text-[#8d7453]"
                  }`}
                >
                  Official sources
                </p>
              </div>
              <p
                className={`mt-3 text-[0.78rem] font-semibold uppercase tracking-[0.14em] ${
                  dark ? "text-white/56" : "text-[#8d7453]"
                }`}
              >
                {credibility.verificationLabel}
              </p>
              <p
                className={`mt-3 text-[0.92rem] leading-6 ${
                  dark ? "text-white/74" : "text-foreground/72"
                }`}
              >
                {credibility.note}
              </p>
            </div>

            <ul className="grid min-w-0 gap-2.5">
              {credibility.sources.map((source) => {
                const formattedUrl = formatSourceUrl(source.href);

                return (
                  <li key={source.href} className="min-w-0">
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`group block w-full min-w-0 overflow-hidden rounded-[1rem] border px-3.5 py-3.5 transition-all duration-200 ${
                        dark
                          ? "border-white/10 bg-white/[0.025] hover:bg-white/[0.05]"
                          : "border-[#e5dccf] bg-white/82 hover:bg-white"
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className={`mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[0.72rem] ${
                              dark
                                ? "border-white/10 bg-white/[0.035] text-[#d5be8b]"
                                : "border-[#e4dacb] bg-[#fbf8f1] text-[#8d7453]"
                            }`}
                          >
                            ↗
                          </span>
                          <div className="min-w-0 flex-1">
                            <span
                              className={`block break-words text-[0.92rem] font-semibold leading-5 [overflow-wrap:anywhere] group-hover:text-[#244ba8] ${
                                dark ? "text-white/90" : "text-foreground/90"
                              }`}
                            >
                              {source.title}
                            </span>
                            <span
                              className={`mt-1 block break-words text-[0.8rem] leading-5 [overflow-wrap:anywhere] ${
                                dark ? "text-white/56" : "text-foreground/58"
                              }`}
                            >
                              {source.publisher}
                            </span>
                          </div>
                        </div>

                        <div className="mt-3 flex min-w-0 items-center gap-3">
                          <div
                            className={`flex min-w-0 flex-1 items-center gap-1 overflow-hidden rounded-full border px-2.5 py-1.5 font-mono text-[0.66rem] leading-5 ${
                              dark
                                ? "border-white/10 bg-white/[0.035] text-white/62"
                                : "border-[#e4dacb] bg-[#fbf8f1] text-[#11232a]/62"
                            }`}
                          >
                            <span className="block min-w-0 flex-1 truncate whitespace-nowrap">
                              <span className="font-semibold">
                                {formattedUrl.host}
                              </span>
                              {formattedUrl.path ? (
                                <span
                                  className={
                                    dark
                                      ? "text-white/48"
                                      : "text-[#11232a]/48"
                                  }
                                >
                                  {formattedUrl.path}
                                </span>
                              ) : null}
                            </span>
                          </div>
                          <span
                            aria-hidden="true"
                            className={`shrink-0 text-[0.78rem] font-semibold transition-transform duration-200 group-hover:translate-x-0.5 ${
                              dark ? "text-[#d5be8b]" : "text-[#8d7453]"
                            }`}
                          >
                            Open ↗
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
