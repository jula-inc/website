// 会社の確定データ。既存ページ（about / legal / contact / footer）から正確に転記した単一情報源。
// ここを変更すると各ページの表記が一括で変わるため、文言の改変は厳禁。
export const site = {
  name: "株式会社ゆら",
  nameLegal: "株式会社JULA（株式会社ゆら）",
  url: "https://www.jula.jp",
  email: "info@jula.jp",
  tel: "080-2726-1740",
  // LINE公式アカウント（ベーシックID @174kbktw）の友だち追加URL。
  // 空文字にするとサイト上のLINEボタンは非表示になる。
  lineId: "@174kbktw",
  lineUrl: "https://line.me/R/ti/p/%40174kbktw" as string,
  company: {
    corporateNumber: "9440001009748",
    representative: "代表取締役/CEO 関口純平",
    postalCode: "160-0023",
    address: "〒160-0023 東京都新宿区西新宿5-8-2 惠徳ビル",
    addressLines: ["〒160-0023", "東京都新宿区西新宿5-8-2 惠徳ビル"],
    founded: "2026年1月14日",
    bank: "三井住友銀行",
    hours: "24時間365日",
  },
  copyright: "© 2026 株式会社ゆら",
} as const;

export const nav = [
  { label: "ホーム", href: "/" },
  { label: "事業内容", href: "/services" },
  { label: "代表紹介", href: "/ceo" },
  { label: "会社概要", href: "/about" },
  { label: "採用情報", href: "/recruit" },
  { label: "お問い合わせ", href: "/contact" },
] as const;

// 既存フッターの 7 リンク（特定商取引法に基づく表記を含む）。
export const footerLinks = [
  { label: "事業内容", href: "/services" },
  { label: "代表紹介", href: "/ceo" },
  { label: "会社概要", href: "/about" },
  { label: "採用情報", href: "/recruit" },
  { label: "プライバシーポリシー", href: "/privacy" },
  { label: "利用規約", href: "/terms" },
  { label: "特定商取引法に基づく表記", href: "/legal" },
  { label: "お問い合わせ", href: "/contact" },
] as const;
