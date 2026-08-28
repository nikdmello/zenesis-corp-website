import Link from "next/link";

type InlineLink = {
  text: string;
  href: string;
};

type ContextualLinkRule = {
  href: string;
  phrases: readonly string[];
};

const contextualLinkRules: readonly ContextualLinkRule[] = [
  { href: "/business-setup-cost-dubai", phrases: ["business setup pricing", "starting prices"] },
  { href: "/general-trading-license-dubai", phrases: ["general trading licence", "general trading license"] },
  { href: "/corporate-tax-registration-in-the-uae", phrases: ["corporate tax registration"] },
  { href: "/corporate-tax-filing-services-in-the-uae", phrases: ["corporate tax filing", "corporate tax returns", "corporate tax return"] },
  { href: "/professional-bookkeeping-services-in-dubai", phrases: ["bookkeeping services", "bookkeeping"] },
  { href: "/vat-registration-services-uae", phrases: ["VAT registration"] },
  { href: "/vat-filing-services-in-the-uae", phrases: ["VAT filing", "VAT returns", "VAT return"] },
  { href: "/document-attestation-services-in-uae", phrases: ["document attestation"] },
  { href: "/golden-visa-services-in-the-uae", phrases: ["Golden Visa"] },
  { href: "/open-a-bank-account-easily", phrases: ["corporate bank account", "business bank account", "bank account opening"] },
  { href: "/uae-company-visa", phrases: ["company visa", "employment visa"] },
  { href: "/corporate-support", phrases: ["corporate support", "UBO filing", "licence renewals", "license renewals", "licence renewal", "license renewal"] },
  { href: "/mainland-vs-free-zone-dubai", phrases: ["mainland and free zone", "mainland vs free zone"] },
  { href: "/mainland", phrases: ["mainland company setup", "mainland setup"] },
  { href: "/free-zones", phrases: ["free zone company setup", "free zone setup"] },
  { href: "/offshore", phrases: ["offshore company setup", "offshore setup"] },
  { href: "/accounting-tax", phrases: ["accounting and tax"] },
  { href: "/visa-and-banking", phrases: ["visa and banking"] },
  { href: "/business-setup", phrases: ["business setup in Dubai", "UAE business setup", "business setup"] },
];

const linkClassName =
  "font-semibold !text-[#244ba8] underline decoration-[#244ba8]/45 underline-offset-4 transition-colors hover:!text-[#17377f]";

function renderInlineLinks(text: string, inlineLinks: readonly InlineLink[]) {
  const links = inlineLinks
    .map((link) => ({ ...link, start: text.indexOf(link.text) }))
    .filter((link) => link.start >= 0)
    .sort((a, b) => a.start - b.start);
  const parts: React.ReactNode[] = [];
  let cursor = 0;

  links.forEach((link) => {
    if (link.start < cursor) return;
    parts.push(text.slice(cursor, link.start));
    parts.push(
      <Link key={`${link.href}-${link.start}`} href={link.href} className={linkClassName}>
        {link.text}
      </Link>,
    );
    cursor = link.start + link.text.length;
  });

  parts.push(text.slice(cursor));
  return parts;
}

export function createContextualLinker(currentPath: string, maxLinks = 5) {
  const usedDestinations = new Set<string>();
  let linksAdded = 0;

  return function linkContextualText(
    text: string,
    inlineLinks?: readonly InlineLink[],
  ) {
    if (inlineLinks?.length) {
      inlineLinks.forEach((link) => usedDestinations.add(link.href));
      linksAdded += inlineLinks.length;
      return renderInlineLinks(text, inlineLinks);
    }

    if (linksAdded >= maxLinks) return text;

    const lowercaseText = text.toLowerCase();
    let match: { href: string; start: number; phrase: string } | undefined;

    contextualLinkRules.forEach((rule) => {
      if (rule.href === currentPath || usedDestinations.has(rule.href)) return;

      rule.phrases.forEach((phrase) => {
        const start = lowercaseText.indexOf(phrase.toLowerCase());
        if (start < 0 || (match && start >= match.start)) return;
        match = { href: rule.href, start, phrase: text.slice(start, start + phrase.length) };
      });
    });

    if (!match) return text;

    usedDestinations.add(match.href);
    linksAdded += 1;

    return (
      <>
        {text.slice(0, match.start)}
        <Link href={match.href} className={linkClassName}>
          {match.phrase}
        </Link>
        {text.slice(match.start + match.phrase.length)}
      </>
    );
  };
}
