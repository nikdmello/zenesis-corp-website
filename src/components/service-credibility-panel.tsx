import { getServiceCredibility } from "@/lib/service-credibility";

export function ServiceCredibilityPanel({ path }: { path: string }) {
  const credibility = getServiceCredibility(path);

  if (!credibility) {
    return null;
  }

  return (
    <section className="relative left-1/2 -mt-px w-screen -translate-x-1/2 bg-[#f5efe4] py-14 md:py-16">
      <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 xl:px-20">
        <div className="border-y border-[#d8d0c2] py-8 md:py-10">
          <div className="grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-[#8d7453]">
                Relevant Zenesis expertise
              </p>
              <h2 className="mt-4 text-[1.55rem] font-semibold leading-tight text-foreground md:text-[1.75rem]">
                {credibility.expert.name}, {credibility.expert.credentials}
              </h2>
              <p className="mt-2 text-[1rem] font-semibold text-foreground/68">
                {credibility.expert.role}
              </p>
              <p className="mt-4 max-w-3xl text-[1.04rem] leading-8 text-foreground/84">
                {credibility.expert.bio}
              </p>
              <a
                href={credibility.expert.profileHref}
                className="mt-5 inline-flex text-[0.98rem] font-semibold text-[#244ba8] hover:underline"
              >
                View leadership profile
              </a>
            </div>

            <div>
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-[#8d7453]">
                {credibility.verificationLabel}
              </p>
              <p className="mt-4 max-w-3xl text-[1.02rem] leading-8 text-foreground/80">
                {credibility.note}
              </p>
              <ul className="mt-5 divide-y divide-[#d8d0c2] border-y border-[#d8d0c2]">
                {credibility.sources.map((source) => (
                  <li key={source.href} className="py-3.5">
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-start justify-between gap-4"
                    >
                      <span>
                        <span className="block text-[1rem] font-semibold leading-7 text-foreground group-hover:text-[#244ba8]">
                          {source.title}
                        </span>
                        <span className="mt-0.5 block text-[0.9rem] leading-6 text-foreground/62">
                          {source.publisher}
                        </span>
                      </span>
                      <span aria-hidden="true" className="mt-1 shrink-0 text-[#8d7453]">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
