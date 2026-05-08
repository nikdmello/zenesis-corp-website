import { ServiceDetailPage } from "@/components/service-detail-page";
import { serviceDetailPages } from "@/lib/service-pages";

export const metadata =
  serviceDetailPages["golden-visa-services-in-the-uae"].metadata;

export default function GoldenVisaPage() {
  return (
    <ServiceDetailPage
      config={serviceDetailPages["golden-visa-services-in-the-uae"]}
    />
  );
}
