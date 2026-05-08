import { ServiceDetailPage } from "@/components/service-detail-page";
import { serviceDetailPages } from "@/lib/service-pages";

export const metadata = serviceDetailPages["uae-company-visa"].metadata;

export default function UaeCompanyVisaPage() {
  return (
    <ServiceDetailPage config={serviceDetailPages["uae-company-visa"]} />
  );
}
