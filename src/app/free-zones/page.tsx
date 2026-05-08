import { ServiceDetailPage } from "@/components/service-detail-page";
import { serviceDetailPages } from "@/lib/service-pages";

export const metadata = serviceDetailPages["free-zones"].metadata;

export default function FreeZonesPage() {
  return <ServiceDetailPage config={serviceDetailPages["free-zones"]} />;
}
