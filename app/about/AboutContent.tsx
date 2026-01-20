"use client";

import { motion } from "motion/react";

const companyInfo = [
  { label: "商号", value: "株式会社JULA（株式会社ゆら）" },
  { label: "法人番号", value: "9440001009748" },
  { label: "代表者", value: "代表取締役/CEO 関口純平" },
  { label: "所在地", value: "〒049-0101 北海道北斗市追分4-11-8" },
  { label: "代表番号", value: "080-9585-8493" },
  { label: "メールアドレス", value: "info@jula.jp" },
  { label: "創業", value: "2026年1月14日" },
  { label: "主要取引銀行", value: "三井住友銀行" },
  { label: "営業時間", value: "平日 9:00 - 18:00" },
];

export default function AboutContent() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-10"
        >
          会社概要
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border border-white/10 rounded-lg overflow-hidden"
        >
          <table className="w-full">
            <tbody>
              {companyInfo.map((info) => (
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
      </div>
    </div>
  );
}
