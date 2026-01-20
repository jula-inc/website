"use client";

import { motion } from "motion/react";

const lawInfo = [
  { label: "販売業者", value: "株式会社ゆら" },
  { label: "運営統括責任者", value: "代表取締役 関口純平" },
  { label: "所在地", value: "〒049-0101 北海道北斗市追分4-11-8" },
  { label: "電話番号", value: "080-9585-8493" },
  { label: "メールアドレス", value: "info@jula.jp" },
  { label: "販売価格", value: "各商品・サービスページに記載" },
  { label: "商品代金以外の必要料金", value: "消費税、送料（別途記載）" },
  { label: "支払方法", value: "銀行振込、クレジットカード決済" },
  { label: "支払時期", value: "各商品・サービスページに記載" },
  { label: "商品の引渡し時期", value: "各商品・サービスページに記載" },
  { label: "返品・キャンセル", value: "商品の性質上、お客様都合による返品・キャンセルはお受けできません" },
];

export default function LegalContent() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-10"
        >
          特定商取引法に基づく表記
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border border-white/10 rounded-lg overflow-hidden"
        >
          <table className="w-full">
            <tbody>
              {lawInfo.map((info) => (
                <tr
                  key={info.label}
                  className="border-b border-white/10 last:border-b-0"
                >
                  <th className="text-left py-4 px-6 bg-white/5 text-white font-normal w-1/3 text-sm">
                    {info.label}
                  </th>
                  <td className="py-4 px-6 text-white text-sm">
                    {info.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <p className="text-sm text-white text-right mt-4">
          最終更新日: 2026年1月1日
        </p>
      </div>
    </div>
  );
}
