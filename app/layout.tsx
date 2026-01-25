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
    default: "株式会社ゆら | 関口純平が率いるアダルト業界特化IT企業",
    template: "%s | 株式会社ゆら",
  },
  description: "株式会社ゆらは、代表 関口純平が率いるアダルト業界特化のIT企業です。決済インフラ構築、動画配信プラットフォーム開発、AIソリューション、グロース支援など、大手が参入しづらい領域で技術力を発揮。他社に断られた案件もNDAベースで対応。",
  keywords: ["関口純平", "株式会社ゆら", "アダルト業界", "IT企業", "決済システム", "動画配信プラットフォーム", "AI開発", "SEO対策", "北海道", "システム開発"],
  authors: [{ name: "関口純平" }, { name: "株式会社ゆら" }],
  creator: "関口純平",
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
    title: "株式会社ゆら | 関口純平が率いるアダルト業界特化IT企業",
    description: "代表 関口純平が率いるアダルト業界特化のIT企業。決済・プラットフォーム・AI・グロース支援。",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社ゆら | 関口純平が率いるアダルト業界特化IT企業",
    description: "代表 関口純平が率いるアダルト業界特化のIT企業。決済・プラットフォーム・AI・グロース支援。",
    creator: "@sekijum",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "株式会社ゆら",
              url: siteUrl,
              logo: `${siteUrl}/logo-transparent.png`,
              founder: {
                "@type": "Person",
                name: "関口純平",
                jobTitle: "代表取締役CEO",
                url: `${siteUrl}/ceo`,
              },
              foundingDate: "2026-01-14",
              address: {
                "@type": "PostalAddress",
                addressLocality: "北斗市",
                addressRegion: "北海道",
                postalCode: "049-0101",
                addressCountry: "JP",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`${notoSansJP.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
