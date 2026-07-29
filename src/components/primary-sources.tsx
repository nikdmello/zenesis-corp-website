import { articleSectionHeadingClassName } from "@/lib/article-styles";

export type PrimarySource = {
  title: string;
  publisher: string;
  href: string;
};

type PrimarySourcesProps = {
  sources: readonly PrimarySource[];
  note: string;
  verificationLabel?: string;
};

export function SourceCitations({
  sources,
  label = "Official guidance",
}: {
  sources: readonly PrimarySource[];
  label?: string;
}) {
  if (!sources.length) {
    return null;
  }

  return (
    <p className="mt-3 text-[0.82rem] leading-6 text-foreground/62">
      {label}{" "}
      <span className="inline-flex whitespace-nowrap align-baseline">
        {sources.map((source, index) => (
          <a
            key={source.href}
            href={`#source-${index + 1}`}
            aria-label={`View source ${index + 1}: ${source.title}`}
            className="font-semibold text-[#244ba8] hover:underline"
          >
            [{index + 1}]
          </a>
        ))}
      </span>
    </p>
  );
}

export function PrimarySources({
  sources,
  note,
  verificationLabel,
}: PrimarySourcesProps) {
  if (!sources.length) {
    return null;
  }

  return (
    <section
      id="primary-sources"
      className="scroll-mt-28 border-y border-[#d9d1c5] bg-[#f8f6f1] px-6 py-9 md:px-8"
    >
      <p className="text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-[#8d7453]">
        Reviewed against official guidance
      </p>
      <h2 className={articleSectionHeadingClassName}>Primary sources</h2>
      <p className="mt-4 max-w-4xl text-[1.04rem] leading-8 text-[#07151b]/78">
        {note}
      </p>
      <ul className="mt-6 divide-y divide-[#e4dbce] border-y border-[#e4dbce]">
        {sources.map((source, index) => (
          <li
            key={source.href}
            id={`source-${index + 1}`}
            className="scroll-mt-28 py-4"
          >
            <a
              href={source.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start justify-between gap-5"
            >
              <span className="flex min-w-0 items-start gap-2">
                <span className="shrink-0 text-[1.05rem] font-semibold leading-7 text-[#244ba8]">
                  [{index + 1}]
                </span>
                <span className="min-w-0">
                  <span className="block text-[1.05rem] font-semibold leading-7 text-[#244ba8] group-hover:underline">
                    {source.title}
                  </span>
                  <span className="mt-1 block text-[0.94rem] leading-6 text-foreground/66">
                    {source.publisher}
                  </span>
                </span>
              </span>
              <span aria-hidden="true" className="mt-1 shrink-0 text-[#8d7453]">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
      {verificationLabel ? (
        <p className="mt-5 text-[0.94rem] leading-7 text-[#07151b]/64">
          {verificationLabel}
        </p>
      ) : null}
    </section>
  );
}
