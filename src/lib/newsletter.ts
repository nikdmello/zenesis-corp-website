export const newsletterTopics = [
  { id: "business-setup", label: "Business setup and visas" },
  { id: "accounting-tax", label: "Accounting, VAT and corporate tax" },
  { id: "corporate-offshore", label: "Corporate and offshore" },
  { id: "zenesis-news", label: "Zenesis news and events" },
] as const;

export type NewsletterTopicId = (typeof newsletterTopics)[number]["id"];

export function getNewsletterTopicLabels(topicIds: NewsletterTopicId[]) {
  const selected = new Set(topicIds);
  return newsletterTopics
    .filter((topic) => selected.has(topic.id))
    .map((topic) => topic.label);
}
