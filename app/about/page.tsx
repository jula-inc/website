import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "会社概要",
  description: "株式会社ゆらの会社概要。北海道北斗市を拠点に、AI・DX推進・Web開発で企業のデジタル変革を支援するIT企業です。会社名、所在地、代表者、設立日、事業内容などの基本情報をご確認いただけます。",
  keywords: ["会社概要", "株式会社ゆら", "北海道", "北斗市", "IT企業", "AI開発", "DX推進"],
  openGraph: {
    title: "会社概要 | 株式会社ゆら",
    description: "北海道北斗市を拠点に、AI・DX推進・Web開発で企業のデジタル変革を支援するIT企業。",
    url: "/about",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
