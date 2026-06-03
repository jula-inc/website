import { Metadata } from "next";
import ServicesContent from "./ServicesContent";
import { services } from "@/lib/services";

const siteUrl = "https://www.jula.jp";

// 事業内容ページに実在する10領域に対応した ItemList 構造化データ。
const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "株式会社ゆらのサービス",
  itemListElement: services.map((service, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: service.label.split(" — ")[1],
    url: `${siteUrl}/services#${service.id}`,
  })),
};

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
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: `${siteUrl}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <ServicesContent />
    </>
  );
}
