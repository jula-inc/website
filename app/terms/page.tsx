import { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "利用規約",
  description: "株式会社ゆらの利用規約。サービスのご利用条件、禁止事項、免責事項、知的財産権などについてご確認いただけます。",
  openGraph: {
    title: "利用規約 | 株式会社ゆら",
    description: "サービスのご利用に関する条件について。",
    url: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return <TermsContent />;
}
