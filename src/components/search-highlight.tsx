import { getHighlightParts } from "@/lib/site-search";

export function SearchHighlight({
  text,
  query,
  highlightClassName = "bg-[#ead9b7] text-inherit",
}: {
  text: string;
  query: string;
  highlightClassName?: string;
}) {
  const parts = getHighlightParts(text, query);

  return (
    <>
      {parts.map((part, index) =>
        part.match ? (
          <mark
            key={`${part.text}-${index}`}
            className={`rounded-[0.24rem] px-0.5 py-[0.03rem] ${highlightClassName}`}
          >
            {part.text}
          </mark>
        ) : (
          <span key={`${part.text}-${index}`}>{part.text}</span>
        ),
      )}
    </>
  );
}
