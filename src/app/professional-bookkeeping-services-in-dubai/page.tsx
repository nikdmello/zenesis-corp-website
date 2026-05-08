import { ServiceDetailPage } from "@/components/service-detail-page";
import { serviceDetailPages } from "@/lib/service-pages";

export const metadata =
  serviceDetailPages["professional-bookkeeping-services-in-dubai"].metadata;

export default function ProfessionalBookkeepingPage() {
  return (
    <ServiceDetailPage
      config={serviceDetailPages["professional-bookkeeping-services-in-dubai"]}
    />
  );
}
