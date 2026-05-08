import { ServiceDetailPage } from "@/components/service-detail-page";
import { serviceDetailPages } from "@/lib/service-pages";

export const metadata = serviceDetailPages["open-a-bank-account-easily"].metadata;

export default function BankAccountPage() {
  return (
    <ServiceDetailPage
      config={serviceDetailPages["open-a-bank-account-easily"]}
    />
  );
}
