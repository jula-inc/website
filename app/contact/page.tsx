import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "株式会社ゆらへのお問い合わせ。AI開発、DX推進、Web開発、システム開発に関するご相談を承ります。無料相談も実施中。お気軽にご連絡ください。",
  keywords: ["お問い合わせ", "相談", "見積もり", "AI開発相談", "DX推進相談", "Web開発相談"],
  openGraph: {
    title: "お問い合わせ | 株式会社ゆら",
    description: "AI開発、DX推進、Web開発に関するご相談を承ります。無料相談実施中。",
    url: "/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
