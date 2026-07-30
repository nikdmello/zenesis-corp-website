import { businessSetupPricingFaqs } from "@/lib/business-setup-pricing";
import { ServiceAnswerSection } from "@/components/service-answer-section";

type BusinessSetupPricingFaqProps = {
  title?: string;
  description?: string;
  dark?: boolean;
};

export function BusinessSetupPricingFaq({
  title = "Business setup pricing FAQ",
  description = "Short pricing answers for founders comparing Dubai business setup costs before speaking with a consultant.",
  dark,
}: BusinessSetupPricingFaqProps) {
  return (
    <ServiceAnswerSection
      title={title}
      description={description}
      items={businessSetupPricingFaqs}
      dark={dark}
    />
  );
}
