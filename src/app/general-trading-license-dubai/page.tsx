import { ServiceDetailPage } from "@/components/service-detail-page";
import { serviceDetailPages } from "@/lib/service-pages";

const config = serviceDetailPages["general-trading-license-dubai"];

export const metadata = config.metadata;

export default function GeneralTradingLicenseDubaiPage() {
  return <ServiceDetailPage config={config} />;
}
