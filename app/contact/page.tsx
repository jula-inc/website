import { Metadata } from "next";
import ContactContent from "./ContactContent";

const siteUrl = "https://www.jula.jp";

export const metadata: Metadata = {
  title: "お問い合わせ | 株式会社ゆら",
  description:
    "株式会社ゆらへのお問い合わせ。AI開発・システム開発・DX推進・グロース支援に関するご相談を承ります。代表 関口純平が直接対応。まずは無料相談から。",
  keywords: [
    "お問い合わせ",
    "相談",
    "見積もり",
    "AI開発相談",
    "システム開発",
    "関口純平",
    "株式会社ゆら",
  ],
  openGraph: {
    title: "お問い合わせ | 株式会社ゆら",
    description:
      "AI開発・システム開発・DX推進に関するご相談。代表が直接対応、まずは無料相談から。",
    url: `${siteUrl}/contact`,
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
