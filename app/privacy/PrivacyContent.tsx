"use client";

import { motion } from "motion/react";

export default function PrivacyContent() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-10"
        >
          プライバシーポリシー
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8 text-white"
        >
          <section>
            <h2 className="text-lg font-medium text-white mb-3">1. 個人情報の収集について</h2>
            <p className="text-sm leading-relaxed">
              当社は、お客様から個人情報をご提供いただく場合、その利用目的を明示し、適法かつ公正な手段によって収集いたします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">2. 個人情報の利用について</h2>
            <p className="text-sm leading-relaxed mb-3">
              当社は、お客様からご提供いただいた個人情報を、以下の目的で利用いたします。
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 text-white">
              <li>お問い合わせへの回答</li>
              <li>サービスの提供・運営</li>
              <li>新サービス・キャンペーン等のご案内</li>
              <li>その他、お客様に事前にお知らせした目的</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">3. 個人情報の第三者提供について</h2>
            <p className="text-sm leading-relaxed">
              当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">4. 個人情報の管理について</h2>
            <p className="text-sm leading-relaxed">
              当社は、個人情報の漏洩、滅失、毀損等を防止するため、適切な安全管理措置を講じます。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">5. 個人情報の開示・訂正・削除について</h2>
            <p className="text-sm leading-relaxed">
              お客様がご自身の個人情報の開示、訂正、削除等を希望される場合は、当社までご連絡ください。
              本人確認の上、適切に対応いたします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">6. お問い合わせ窓口</h2>
            <p className="text-sm leading-relaxed mb-3">
              個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
            </p>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-white text-sm">
                株式会社ゆら<br />
                〒049-0101 北海道北斗市追分4-11-8<br />
                TEL: 080-9585-8493<br />
                Email: info@jula.jp
              </p>
            </div>
          </section>

          <p className="text-sm text-white text-right pt-4">
            制定日: 2026年1月1日
          </p>
        </motion.div>
      </div>
    </div>
  );
}
