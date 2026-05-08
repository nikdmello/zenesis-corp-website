import { ServiceDetailPage } from "@/components/service-detail-page";
import { serviceDetailPages } from "@/lib/service-pages";

export const metadata =
  serviceDetailPages["corporate-tax-filing-services-in-the-uae"].metadata;

export default function CorporateTaxFilingPage() {
  return (
    <ServiceDetailPage
      config={serviceDetailPages["corporate-tax-filing-services-in-the-uae"]}
    />
  );
}
