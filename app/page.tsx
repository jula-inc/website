import { Metadata } from "next";
import HomeContent from "./HomeContent";

const siteUrl = "https://jula-inc.co.jp";

export const metadata: Metadata = {
  title: "株式会社ゆら | 関口純平が率いるアダルト業界特化IT企業",
  description: "株式会社ゆらは、代表 関口純平が率いるアダルト業界特化のIT企業です。決済インフラ構築、動画配信プラットフォーム開発、AIによるコンテンツ管理自動化、広告に頼らないグロース戦略など、大手が参入しづらい領域で技術力を発揮します。",
  keywords: ["関口純平", "株式会社ゆら", "アダルト業界", "IT企業", "決済システム", "動画配信", "AI開発"],
  openGraph: {
    title: "株式会社ゆら | 関口純平が率いるアダルト業界特化IT企業",
    description: "代表 関口純平が率いるアダルト業界特化のIT企業。決済・プラットフォーム・AI・グロース支援。",
    url: siteUrl,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function Home() {
  return <HomeContent />;
}
