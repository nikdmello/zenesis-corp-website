import { ServiceDetailPage } from "@/components/service-detail-page";
import { serviceDetailPages } from "@/lib/service-pages";

export const metadata = serviceDetailPages["visa-and-banking"].metadata;

export default function VisaAndBankingPage() {
  return <ServiceDetailPage config={serviceDetailPages["visa-and-banking"]} />;
}
