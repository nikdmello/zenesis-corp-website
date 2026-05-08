import { ServiceDetailPage } from "@/components/service-detail-page";
import { serviceDetailPages } from "@/lib/service-pages";

export const metadata =
  serviceDetailPages["document-attestation-services-in-uae"].metadata;

export default function DocumentAttestationPage() {
  return (
    <ServiceDetailPage
      config={serviceDetailPages["document-attestation-services-in-uae"]}
    />
  );
}
