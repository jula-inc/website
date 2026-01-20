import { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "株式会社ゆらのプライバシーポリシー。個人情報の収集・利用目的、第三者提供、安全管理措置、お問い合わせ先など、個人情報の取り扱いについてご確認いただけます。",
  openGraph: {
    title: "プライバシーポリシー | 株式会社ゆら",
    description: "個人情報の取り扱いについて。",
    url: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
