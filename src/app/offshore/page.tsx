import { ServiceDetailPage } from "@/components/service-detail-page";
import { serviceDetailPages } from "@/lib/service-pages";

export const metadata = serviceDetailPages.offshore.metadata;

export default function OffshorePage() {
  return <ServiceDetailPage config={serviceDetailPages.offshore} />;
}
