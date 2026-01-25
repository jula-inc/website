import { Metadata } from "next";
import ContactContent from "./ContactContent";

const siteUrl = "https://www.jula.jp";

export const metadata: Metadata = {
  title: "お問い合わせ | 株式会社ゆら - 関口純平",
  description: "株式会社ゆらへのお問い合わせ。代表 関口純平が直接対応。アダルト業界向け決済システム、動画配信プラットフォーム、AI開発、SEO・マーケティングに関するご相談を承ります。他社に断られた案件もNDAベースで無料相談。",
  keywords: ["お問い合わせ", "相談", "見積もり", "関口純平", "株式会社ゆら", "アダルト業界", "決済相談", "プラットフォーム開発相談"],
  openGraph: {
    title: "お問い合わせ | 株式会社ゆら - 関口純平",
    description: "アダルト業界向けIT開発のご相談。他社に断られた案件もNDAベースで無料相談。",
    url: `${siteUrl}/contact`,
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
