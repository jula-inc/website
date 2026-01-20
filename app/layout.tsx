import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const siteUrl = "https://jula-inc.co.jp";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "株式会社ゆら | AI・DX推進・Web開発",
    template: "%s | 株式会社ゆら",
  },
  description: "株式会社ゆらは、AI・DX推進・Web開発で企業のデジタル変革を支援します。AIソリューション開発、業務自動化、Webアプリケーション開発など、お客様のビジネス課題を解決します。北海道北斗市を拠点に全国対応。",
  keywords: ["AI開発", "DX推進", "Web開発", "業務自動化", "AIコンサルティング", "北海道", "IT企業", "システム開発", "AIチャットボット", "生成AI"],
  authors: [{ name: "株式会社ゆら" }],
  creator: "株式会社ゆら",
  publisher: "株式会社ゆら",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "株式会社ゆら",
    title: "株式会社ゆら | AI・DX推進・Web開発",
    description: "AI・DX推進・Web開発で企業のデジタル変革を支援。北海道北斗市を拠点に全国対応。",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社ゆら | AI・DX推進・Web開発",
    description: "AI・DX推進・Web開発で企業のデジタル変革を支援。北海道北斗市を拠点に全国対応。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Google Search Consoleの確認コードがあれば追加
    // google: "verification_token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
