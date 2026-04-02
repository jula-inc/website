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

const siteUrl = "https://www.jula.jp";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "株式会社ゆら | AI開発・DX推進・システム開発",
    template: "%s | 株式会社ゆら",
  },
  description:
    "株式会社ゆらは、AIソリューション・システム開発・グロース支援を一気通貫で提供するテクノロジーカンパニーです。代表 関口純平のAIプロダクト開発・新規事業共創の実績をもとに、2週間でPoC、1ヶ月でMVPを実現。AIエージェント開発、RAG、音声AI、業務自動化など最先端AI技術で事業成果に直結します。",
  keywords: [
    "株式会社ゆら",
    "関口純平",
    "AI開発",
    "AIエージェント",
    "DX推進",
    "システム開発",
    "RAG",
    "業務自動化",
    "グロース支援",
    "AIソリューション",
  ],
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
    title: "株式会社ゆら | AI開発・DX推進・システム開発",
    description:
      "AIソリューション・システム開発・グロース支援を一気通貫で提供。2週間でPoC、1ヶ月でMVPを実現するスピード開発。",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社ゆら | AI開発・DX推進・システム開発",
    description:
      "AIソリューション・システム開発・グロース支援を一気通貫で提供。2週間でPoC、1ヶ月でMVPを実現するスピード開発。",
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
    <html lang="ja" className="dark" style={{ colorScheme: "dark" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "株式会社ゆら",
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              founder: {
                "@type": "Person",
                name: "関口純平",
                jobTitle: "代表取締役CEO",
                url: `${siteUrl}/ceo`,
              },
              foundingDate: "2026-01-14",
              address: {
                "@type": "PostalAddress",
                streetAddress: "南頰町四丁目28番地",
                addressLocality: "大垣市",
                addressRegion: "岐阜県",
                postalCode: "503-0893",
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
