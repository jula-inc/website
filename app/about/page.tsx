import { Metadata } from "next";
import AboutContent from "./AboutContent";

const siteUrl = "https://www.jula.jp";

export const metadata: Metadata = {
  title: "会社概要 | 株式会社ゆら",
  description:
    "株式会社ゆらの会社概要。代表取締役CEO 関口純平。AIソリューション・システム開発・グロース支援を一気通貫で提供するテクノロジーカンパニー。法人番号9440001009748。",
  keywords: [
    "会社概要",
    "株式会社ゆら",
    "関口純平",
    "代表取締役",
    "AI開発",
    "テクノロジーカンパニー",
    "法人番号",
  ],
  openGraph: {
    title: "会社概要 | 株式会社ゆら",
    description:
      "AIソリューション・システム開発・グロース支援を一気通貫で提供。",
    url: `${siteUrl}/about`,
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
