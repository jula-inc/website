"use client";

import { motion } from "motion/react";

export default function TermsContent() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-10"
        >
          利用規約
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8 text-white"
        >
          <section>
            <h2 className="text-lg font-medium text-white mb-3">第1条（適用）</h2>
            <p className="text-sm leading-relaxed">
              本規約は、株式会社ゆら（以下「当社」といいます）が提供するサービス（以下「本サービス」といいます）の利用に関する条件を定めるものです。
              ユーザーの皆様には、本規約に従って本サービスをご利用いただきます。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">第2条（禁止事項）</h2>
            <p className="text-sm leading-relaxed mb-3">
              ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 text-white">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当社または第三者の知的財産権を侵害する行為</li>
              <li>当社または第三者の名誉・信用を毀損する行為</li>
              <li>本サービスの運営を妨害する行為</li>
              <li>その他、当社が不適切と判断する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">第3条（本サービスの提供の停止等）</h2>
            <p className="text-sm leading-relaxed mb-3">
              当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく、
              本サービスの全部または一部の提供を停止または中断することができるものとします。
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 text-white">
              <li>本サービスにかかるシステムの保守点検または更新を行う場合</li>
              <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
              <li>その他、当社が本サービスの提供が困難と判断した場合</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">第4条（免責事項）</h2>
            <p className="text-sm leading-relaxed">
              当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意または重過失による場合を除き、
              一切の責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">第5条（利用規約の変更）</h2>
            <p className="text-sm leading-relaxed">
              当社は、必要と判断した場合には、ユーザーに通知することなく、いつでも本規約を変更することができるものとします。
              変更後の利用規約は、当社ウェブサイトに掲載した時点から効力を生じるものとします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">第6条（準拠法・管轄裁判所）</h2>
            <p className="text-sm leading-relaxed">
              本規約の解釈にあたっては、日本法を準拠法とします。
              本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
            </p>
          </section>

          <p className="text-sm text-white text-right pt-4">
            制定日: 2026年1月1日
          </p>
        </motion.div>
      </div>
    </div>
  );
}
