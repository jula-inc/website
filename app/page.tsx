import { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "株式会社ゆら | AI・DX推進・Web開発で企業のデジタル変革を支援",
  description: "株式会社ゆらは、AI・DX推進・Web開発で企業のデジタル変革を支援します。AIソリューション開発、業務自動化、Webアプリケーション開発など、お客様のビジネス課題を解決します。北海道北斗市を拠点に全国対応。",
  openGraph: {
    title: "株式会社ゆら | AI・DX推進・Web開発で企業のデジタル変革を支援",
    description: "AI・DX推進・Web開発で企業のデジタル変革を支援。北海道北斗市を拠点に全国対応。",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeContent />;
}
