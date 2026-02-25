import { Metadata } from "next";
import CEOContent from "./CEOContent";

const siteUrl = "https://www.jula.jp";

export const metadata: Metadata = {
  title: "関口純平 | 代表取締役CEO - 株式会社ゆら・株式会社NINJA",
  description:
    "関口純平（せきぐちじゅんぺい）は、株式会社ゆら・株式会社NINJAの代表取締役CEO。大学時代から4社でエンジニア経験を積み、国内最大手コンサルティングファームで数十社のAI×新規事業共創をリード。自らAIプロダクトを開発・収益化した実績を持つエンジニア起業家。",
  keywords: [
    "関口純平",
    "せきぐちじゅんぺい",
    "Junpei Sekiguchi",
    "代表取締役",
    "CEO",
    "株式会社ゆら",
    "株式会社NINJA",
    "AIエンジニア",
    "起業家",
    "AI開発",
    "スタートアップ経営者",
  ],
  openGraph: {
    title: "関口純平 | 代表取締役CEO - 株式会社ゆら・株式会社NINJA",
    description:
      "エンジニア出身のAI起業家。数十社のAI×新規事業共創をリードし、自らAIプロダクトを開発・収益化。",
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
    title: "関口純平 | 代表取締役CEO - 株式会社ゆら・株式会社NINJA",
    description:
      "エンジニア出身のAI起業家。数十社のAI×新規事業共創をリードし、自らAIプロダクトを開発・収益化。",
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
  knowsAbout: [
    "AI開発",
    "AIエージェント",
    "RAG",
    "Web開発",
    "DX推進",
    "新規事業開発",
    "エンジニアリング",
  ],
  description:
    "株式会社ゆら・株式会社NINJAの代表取締役CEO。大学時代から4社でエンジニア経験を積み、国内最大手コンサルティングファームで数十社のAI×新規事業共創をリード。自らAIプロダクトを開発・収益化した実績を持つ。",
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
