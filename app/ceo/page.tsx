import { Metadata } from "next";
import CEOContent from "./CEOContent";

const siteUrl = "https://jula-inc.co.jp";

export const metadata: Metadata = {
  title: "関口純平 | 株式会社ゆら・株式会社NINJA 代表取締役CEO",
  description: "関口純平（せきぐちじゅんぺい）は、株式会社ゆら・株式会社NINJAの代表取締役CEO。大学時代から4社でエンジニア経験を積み、国内最大手コンサルティングファームを経て起業。株式会社NINJAでは「ビズAI」「育成年代サッカー.com」「DOTS Personal」を展開。株式会社ゆらではアダルト業界特化のIT企業として決済・プラットフォーム・AI開発を手がける。",
  keywords: ["関口純平", "せきぐちじゅんぺい", "Junpei Sekiguchi", "代表取締役", "CEO", "株式会社ゆら", "株式会社NINJA", "AIエンジニア", "起業家", "北海道", "スタートアップ経営者"],
  openGraph: {
    title: "関口純平 | 株式会社ゆら・株式会社NINJA 代表取締役CEO",
    description: "関口純平（せきぐちじゅんぺい）- 株式会社ゆら・株式会社NINJA代表。エンジニア出身の起業家。アダルト業界特化IT企業とメディア・スポーツ事業を展開。",
    url: `${siteUrl}/ceo`,
    type: "profile",
    images: [
      {
        url: `${siteUrl}/sekiguchi.png`,
        width: 400,
        height: 400,
        alt: "関口純平 - 株式会社ゆら代表取締役CEO",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "関口純平 | 株式会社ゆら・株式会社NINJA 代表取締役CEO",
    description: "エンジニア出身の起業家。アダルト業界特化IT企業とメディア・スポーツ事業を展開。",
    images: [`${siteUrl}/sekiguchi.png`],
  },
  alternates: {
    canonical: `${siteUrl}/ceo`,
  },
  other: {
    "profile:first_name": "純平",
    "profile:last_name": "関口",
  },
};

// 構造化データ（Person）
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "関口純平",
  alternateName: ["せきぐちじゅんぺい", "Junpei Sekiguchi"],
  jobTitle: "代表取締役CEO",
  worksFor: [
    {
      "@type": "Organization",
      name: "株式会社ゆら",
      url: siteUrl,
    },
    {
      "@type": "Organization",
      name: "株式会社NINJA",
    },
  ],
  image: `${siteUrl}/sekiguchi.png`,
  url: `${siteUrl}/ceo`,
  sameAs: [],
  knowsAbout: ["AI開発", "Web開発", "DX推進", "起業", "エンジニアリング", "アダルト業界IT"],
  description: "株式会社ゆら・株式会社NINJAの代表取締役CEO。大学時代から4社でエンジニア経験を積み、国内最大手コンサルティングファームを経て起業。アダルト業界特化IT企業を経営。",
};

export default function CEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <CEOContent />
    </>
  );
}
