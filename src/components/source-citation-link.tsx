"use client";

type SourceCitationLinkProps = {
  sourceIndex: number;
};

export function SourceCitationLink({ sourceIndex }: SourceCitationLinkProps) {
  function handleClick() {
    document
      .getElementById(`source-${sourceIndex}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`View source ${sourceIndex}`}
      className="cursor-pointer border-0 bg-transparent p-0 font-semibold !text-[#244ba8] hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244ba8] focus-visible:ring-offset-2"
    >
      [{sourceIndex}]
    </button>
  );
}
