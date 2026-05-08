import { ServiceDetailPage } from "@/components/service-detail-page";
import { serviceDetailPages } from "@/lib/service-pages";

export const metadata =
  serviceDetailPages["corporate-tax-registration-in-the-uae"].metadata;

export default function CorporateTaxRegistrationPage() {
  return (
    <ServiceDetailPage
      config={serviceDetailPages["corporate-tax-registration-in-the-uae"]}
    />
  );
}
