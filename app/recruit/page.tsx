import { Metadata } from "next";
import RecruitContent, { faqs } from "./RecruitContent";
import { site } from "@/lib/site";

const siteUrl = site.url;

export const metadata: Metadata = {
  title: "エンジニア採用（業務委託・西新宿）",
  description:
    "株式会社ゆらの採用情報。アダルト領域のファンクラブサービスを自社運営。業務委託・高単価・成果還元。東京都新宿区西新宿のオフィスに週2日以上出社。AIを使いこなす即戦力エンジニアで、ビジネスサイドから事業に関わりたい25歳以下の方を募集しています。未経験不可・副業可。",
  keywords: [
    "株式会社ゆら",
    "採用",
    "求人",
    "業務委託",
    "西新宿 求人",
    "新宿 エンジニア 求人",
    "事業開発",
    "AIエンジニア",
    "高単価",
    "即戦力",
    "学生 インターン",
    "関口純平",
  ],
  openGraph: {
    title: "25歳までに、事業をひとつ持つ。｜株式会社ゆら 採用情報",
    description:
      "アダルト領域のファンクラブサービスを自社運営。業務委託・高単価・西新宿に週2日以上出社。AIを使いこなす即戦力で、事業側から入れるエンジニアを探しています。",
    url: `${siteUrl}/recruit`,
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "25歳までに、事業をひとつ持つ。｜株式会社ゆら 採用情報",
    description:
      "アダルト領域のファンクラブサービスを自社運営。業務委託・高単価・西新宿に週2日以上出社。即戦力のみ。",
  },
  alternates: {
    canonical: `${siteUrl}/recruit`,
  },
};

// Google しごと検索（Google for Jobs）用の構造化データ。
// ponytail: 常時募集なので datePosted / validThrough はビルド時に更新する。
// ポジションを分けたくなったら /recruit/[slug] ごとに 1 JobPosting へ分割する。
const now = new Date();
const validThrough = new Date(now.getTime() + 180 * 24 * 60 * 60 * 1000);

const jobPostingJsonLd = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "エンジニア（業務委託・西新宿・即戦力／事業サイドから関われる方）",
  description:
    "<p>株式会社ゆらでは、AIを使いこなす即戦力エンジニアを募集しています。開発だけでなく、事業側から関わっていただくポジションです。</p>" +
    "<ul>" +
    "<li>自社でアダルト領域のファンクラブサービスを運営しています。開発に加えて、価格設計・集客・SNS運用などマーケティング領域にも関われます。</li>" +
    "<li>AIを前提とした受託開発の案件も多数あり、単価の高いものから選んでいただけます。</li>" +
    "<li>Next.js / React / TypeScript / Python / 生成AI を用いた実装。技術選定はつくる人が決めます。</li>" +
    "<li>契約形態は業務委託。報酬は時給制で相場より高く設定し、案件の単価と成果に応じて別途還元します。</li>" +
    "<li>勤務地は東京都新宿区西新宿のオフィス。週2日以上の出社が必須で、完全リモートは不可です。稼働日数・時間は相談可、副業も可。</li>" +
    "<li>応募条件はエンジニアとしての実務経験（未経験不可）、AIを日常的に使えること、25歳以下であること。アダルト業界の経験は問いません。</li>" +
    "<li>選考はLINEでの連絡 → 西新宿のオフィスで面談 → 一緒に少しつくる → 契約の4ステップです。</li>" +
    "</ul>",
  identifier: {
    "@type": "PropertyValue",
    name: site.name,
    value: "jula-business-engineer",
  },
  datePosted: now.toISOString().slice(0, 10),
  validThrough: validThrough.toISOString().slice(0, 10),
  employmentType: ["CONTRACTOR", "PART_TIME"],
  experienceRequirements: {
    "@type": "OccupationalExperienceRequirements",
    monthsOfExperience: 12,
  },
  experienceInPlaceOfEducation: true,
  hiringOrganization: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: site.name,
    sameAs: siteUrl,
    logo: `${siteUrl}/logo.png`,
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: "西新宿5-8-2 惠徳ビル",
      addressLocality: "新宿区",
      addressRegion: "東京都",
      postalCode: site.company.postalCode,
      addressCountry: "JP",
    },
  },
  industry: "ソフトウェア開発 / 新規事業開発",
  occupationalCategory: "15-1252.00 Software Developers",
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "生成AI活用",
    "事業開発",
    "マーケティング",
  ],
  directApply: true,
  url: `${siteUrl}/recruit`,
};

// ponytail: リッチリザルトはほぼ出ないが、AI検索が Q&A を拾う口になる。本文と同じ配列を使う。
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function RecruitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <RecruitContent />
    </>
  );
}
