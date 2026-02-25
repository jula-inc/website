import { Metadata } from "next";
import HomeContent from "./HomeContent";

const siteUrl = "https://www.jula.jp";

export const metadata: Metadata = {
  title: "株式会社ゆら | AI開発・DX推進・システム開発",
  description:
    "株式会社ゆらは、AIエージェント開発・RAG・音声AI・業務自動化・システム開発・グロース支援を一気通貫で提供。代表 関口純平のAI×新規事業共創の実績をもとに、2週間でPoC、1ヶ月でMVPを実現します。",
  keywords: [
    "株式会社ゆら",
    "関口純平",
    "AI開発",
    "AIエージェント",
    "DX推進",
    "システム開発",
    "RAG",
    "業務自動化",
  ],
  openGraph: {
    title: "株式会社ゆら | AI開発・DX推進・システム開発",
    description:
      "AIソリューション・システム開発・グロース支援を一気通貫で提供。2週間でPoC、1ヶ月でMVPを実現。",
    url: siteUrl,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function Home() {
  return <HomeContent />;
}
