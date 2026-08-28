import { ServiceDetailPage } from "@/components/service-detail-page";
import { serviceDetailPages } from "@/lib/service-pages";

export const metadata =
  serviceDetailPages["vat-registration-services-uae"].metadata;

export default function VatRegistrationServicesPage() {
  return (
    <ServiceDetailPage
      config={serviceDetailPages["vat-registration-services-uae"]}
    />
  );
}
