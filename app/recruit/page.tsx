import { Metadata } from "next";
import RecruitContent from "./RecruitContent";

const siteUrl = "https://www.jula.jp";

export const metadata: Metadata = {
  title: "採用情報 | 株式会社ゆら",
  description:
    "株式会社ゆらの採用情報。社長が今もコードを書く会社。政治より実装、会議より動くもの。フルリモート・コアタイムなし・実力主義。2週間でPoC、1ヶ月でMVPのスピードで、AI時代の新規開発に挑むエンジニアを募集しています。",
  keywords: [
    "株式会社ゆら",
    "採用",
    "求人",
    "エンジニア採用",
    "AIエンジニア",
    "フルリモート",
    "新規開発",
    "関口純平",
  ],
  openGraph: {
    title: "採用情報 | 株式会社ゆら",
    description:
      "社長が今もコードを書く会社。フルリモート・実力主義・スピード重視。AI時代の新規開発に挑むエンジニアを募集。",
    url: `${siteUrl}/recruit`,
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: `${siteUrl}/recruit`,
  },
};

export default function RecruitPage() {
  return <RecruitContent />;
}
