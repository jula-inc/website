"use client";

import Link from "next/link";

const footerLinks = [
  { name: "事業内容", href: "/services" },
  { name: "代表紹介", href: "/ceo" },
  { name: "会社概要", href: "/about" },
  { name: "プライバシーポリシー", href: "/privacy" },
  { name: "利用規約", href: "/terms" },
  { name: "特定商取引法に基づく表記", href: "/legal" },
  { name: "お問い合わせ", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">株式会社ゆら</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              〒049-0101<br />
              北海道北斗市追分4-11-8<br />
              TEL: 080-9585-8493<br />
              Email: info@jula.jp
            </p>
            <p className="text-white/40 text-sm mt-4">
              営業時間: 平日 9:00 - 18:00
            </p>
          </div>

          <div>
            <h4 className="font-medium text-white mb-4">リンク</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/40 text-sm">
            © 2026 株式会社ゆら
          </p>
        </div>
      </div>
    </footer>
  );
}
