import { Metadata } from "next";
import ServicesContent from "./ServicesContent";

const siteUrl = "https://www.jula.jp";

export const metadata: Metadata = {
  title: "事業内容 | アダルト業界特化の決済・プラットフォーム・AI開発",
  description: "株式会社ゆらの事業内容。アダルト業界に特化した決済インフラ構築、動画配信プラットフォーム開発、ファンクラブサイト構築、AIによるコンテンツ自動管理、広告に頼らないSEO・アフィリエイト・SNSマーケティング。他社に断られた案件もNDAベースで対応。",
  keywords: ["アダルト業界", "決済システム", "動画配信プラットフォーム", "ファンクラブ", "AI開発", "SEO対策", "アフィリエイト", "関口純平", "株式会社ゆら"],
  openGraph: {
    title: "事業内容 | アダルト業界特化の決済・プラットフォーム・AI開発",
    description: "アダルト業界特化。決済・プラットフォーム・AI・グロース支援。他社に断られた案件もNDAベースで対応。",
    url: `${siteUrl}/services`,
  },
  alternates: {
    canonical: `${siteUrl}/services`,
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
