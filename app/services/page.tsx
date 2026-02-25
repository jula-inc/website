import { Metadata } from "next";
import ServicesContent from "./ServicesContent";

const siteUrl = "https://www.jula.jp";

export const metadata: Metadata = {
  title: "事業内容 | AIソリューション・システム開発・グロース支援",
  description:
    "株式会社ゆらの事業内容。AIエージェント開発、RAG・ナレッジAI、音声AI、AI新規事業開発、業務自動化、データ分析・予測AI、システム開発、AI×セールス、AI×カスタマーサポート、コンテンツマーケティング。2週間でPoC、1ヶ月でMVPを実現するスピード開発。",
  keywords: [
    "AI開発",
    "AIエージェント",
    "RAG",
    "音声AI",
    "業務自動化",
    "システム開発",
    "DX推進",
    "グロース支援",
    "関口純平",
    "株式会社ゆら",
  ],
  openGraph: {
    title: "事業内容 | AIソリューション・システム開発・グロース支援 - 株式会社ゆら",
    description:
      "AIエージェント開発からグロース支援まで10領域を一気通貫で提供。2週間でPoC、1ヶ月でMVP。",
    url: `${siteUrl}/services`,
  },
  alternates: {
    canonical: `${siteUrl}/services`,
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
