import { Metadata } from "next";
import LegalContent from "./LegalContent";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: "株式会社ゆらの特定商取引法に基づく表記。販売業者情報、代表者、所在地、連絡先、支払方法、返品・キャンセルポリシーについてご確認いただけます。",
  openGraph: {
    title: "特定商取引法に基づく表記 | 株式会社ゆら",
    description: "販売業者情報、支払方法、返品・キャンセルポリシーについて。",
    url: "/legal",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/legal",
  },
};

export default function LegalPage() {
  return <LegalContent />;
}
