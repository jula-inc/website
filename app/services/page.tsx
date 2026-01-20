import { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "事業内容 - Web開発・AIソリューション・DX推進",
  description: "株式会社ゆらの事業内容。Webサイト・アプリケーション開発、AIソリューション開発（チャットボット、業務自動化）、DX推進支援（クラウド導入、ペーパーレス化）など、企業のデジタル変革を包括的にサポートします。",
  keywords: ["Web開発", "AIソリューション", "DX推進", "システム開発", "AIチャットボット", "業務自動化", "クラウド導入", "ペーパーレス化"],
  openGraph: {
    title: "事業内容 - Web開発・AIソリューション・DX推進 | 株式会社ゆら",
    description: "Webサイト・アプリケーション開発、AIソリューション開発、DX推進支援など、企業のデジタル変革を包括的にサポート。",
    url: "/services",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
