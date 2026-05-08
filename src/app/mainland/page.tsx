import { ServiceDetailPage } from "@/components/service-detail-page";
import { serviceDetailPages } from "@/lib/service-pages";

export const metadata = serviceDetailPages.mainland.metadata;

export default function MainlandPage() {
  return <ServiceDetailPage config={serviceDetailPages.mainland} />;
}
