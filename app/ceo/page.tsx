import { Metadata } from "next";
import CEOContent from "./CEOContent";

export const metadata: Metadata = {
  title: "代表紹介 - 関口純平",
  description: "株式会社ゆら代表取締役CEO 関口純平のプロフィール。大学時代からエンジニアとして4社での経験を経て、AIソリューション開発とITコンサルティングに特化した株式会社ゆらを創業。技術で課題を解決し、挑戦する人の背中を押します。",
  keywords: ["関口純平", "代表取締役", "CEO", "株式会社ゆら", "AIエンジニア", "DX推進", "北海道"],
  openGraph: {
    title: "代表紹介 - 関口純平 | 株式会社ゆら",
    description: "株式会社ゆら代表取締役CEO 関口純平。AIソリューション開発とITコンサルティングで企業のデジタル変革を支援。",
    url: "/ceo",
    images: [
      {
        url: "/sekiguchi.png",
        width: 400,
        height: 400,
        alt: "関口純平",
      },
    ],
  },
  alternates: {
    canonical: "/ceo",
  },
};

export default function CEOPage() {
  return <CEOContent />;
}
