import { Metadata } from "next";
import CEOContent from "./CEOContent";

const siteUrl = "https://www.jula.jp";

export const metadata: Metadata = {
  title: "関口純平 | 代表取締役CEO",
  description:
    "毎日コードを書いている経営者です。大学時代から4社でエンジニア、国内最大手のコンサルティングファームで数十社のAI×新規事業をリード。いまは自分でAIプロダクトをつくって収益化しています。株式会社ゆら 代表取締役CEO ／ 関口純平。",
  keywords: [
    "関口純平",
    "せきぐちじゅんぺい",
    "Junpei Sekiguchi",
    "代表取締役",
    "CEO",
    "株式会社ゆら",
    "AIエンジニア",
    "起業家",
    "AI開発",
    "スタートアップ経営者",
  ],
  openGraph: {
    title: "関口純平 | 代表取締役CEO - 株式会社ゆら",
    description:
      "毎日コードを書いている経営者。数十社のAI×新規事業をリードし、いまは自分でAIプロダクトをつくって収益化しています。",
    url: `${siteUrl}/ceo`,
    type: "profile",
    images: [
      {
        url: `${siteUrl}/sekiguchi.jpg`,
        width: 1024,
        height: 1024,
        alt: "関口純平 - 株式会社ゆら代表取締役CEO",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "関口純平 | 代表取締役CEO - 株式会社ゆら",
    description:
      "毎日コードを書いている経営者。数十社のAI×新規事業をリードし、いまは自分でAIプロダクトをつくって収益化しています。",
    images: [`${siteUrl}/sekiguchi.jpg`],
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
      name: "Arlebo Ltd",
      url: "https://arlebo-website.vercel.app",
    },
  ],
  image: `${siteUrl}/sekiguchi.jpg`,
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
    "株式会社ゆら 代表取締役CEO。大学時代から4社でエンジニアとして働き、国内最大手のコンサルティングファームで数十社のAI×新規事業をリード。現在も自らコードを書き、AIプロダクトの開発と収益化に携わる。",
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
