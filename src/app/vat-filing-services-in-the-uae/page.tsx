import { ServiceDetailPage } from "@/components/service-detail-page";
import { serviceDetailPages } from "@/lib/service-pages";

export const metadata =
  serviceDetailPages["vat-filing-services-in-the-uae"].metadata;

export default function VatFilingPage() {
  return (
    <ServiceDetailPage
      config={serviceDetailPages["vat-filing-services-in-the-uae"]}
    />
  );
}
