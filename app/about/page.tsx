import { Metadata } from "next";
import AboutContent from "./AboutContent";

const siteUrl = "https://www.jula.jp";

export const metadata: Metadata = {
  title: "会社概要 | 関口純平が代表を務める株式会社ゆら",
  description: "株式会社ゆらの会社概要。代表取締役CEO 関口純平が率いる、アダルト業界特化のIT企業です。北海道北斗市を拠点に、決済インフラ構築、動画配信プラットフォーム開発、AIソリューション、グロース支援を提供。法人番号9440001009748。",
  keywords: ["会社概要", "株式会社ゆら", "関口純平", "代表取締役", "北海道", "北斗市", "IT企業", "アダルト業界", "法人番号"],
  openGraph: {
    title: "会社概要 | 関口純平が代表を務める株式会社ゆら",
    description: "代表 関口純平が率いるアダルト業界特化のIT企業。北海道北斗市を拠点に全国対応。",
    url: `${siteUrl}/about`,
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
