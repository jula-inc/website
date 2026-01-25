"use client";

import { motion, useScroll } from "motion/react";
import Link from "next/link";

const services = [
  {
    id: "platform",
    label: "Platform Development",
    title: "FANZA手数料、高くない？",
    description: "売上の30〜50%を持っていかれる。自社プラットフォームなら、その利益は全部あなたのもの。",
    points: [
      {
        title: "動画配信プラットフォーム構築",
        detail: "サブスク、PPV、レンタル。収益モデルに合わせた設計。4K対応、DRM実装で海賊版対策も。",
      },
      {
        title: "ファンクラブ・クリエイター支援サイト",
        detail: "OnlyFans、Fantia型のプラットフォームを自社で。投げ銭、限定コンテンツ、ファンとの直接課金。",
      },
      {
        title: "ライブ配信システム",
        detail: "低遅延ライブ配信、チャット、投げ銭。数千人同時接続に耐えるインフラ設計。",
      },
    ],
    pain: "大手プラットフォームに依存し続けると、規約変更一発で収益が消える。",
  },
  {
    id: "payment",
    label: "Payment Infrastructure",
    title: "決済、断られ続けてない？",
    description: "Stripe、PayPal、国内クレカ大手。全部NG。でも、方法はある。",
    points: [
      {
        title: "業界対応決済の導入支援",
        detail: "アダルト対応の決済代行会社との接続。クレカ、コンビニ払い、キャリア決済まで。",
      },
      {
        title: "海外決済・多通貨対応",
        detail: "海外ユーザーからの課金。ドル、ユーロ、暗号通貨。チャージバック対策も込み。",
      },
      {
        title: "サブスク課金システム",
        detail: "継続課金、トライアル、プラン変更。解約率を下げるUX設計まで。",
      },
    ],
    pain: "決済が止まれば、ビジネスが止まる。冗長構成とリスク分散は必須。",
  },
  {
    id: "ai",
    label: "AI Solutions",
    title: "10万本の動画、手動でタグ付けしてる？",
    description: "コンテンツが増えるほど運用が破綻する。AIで自動化すれば、人は企画に集中できる。",
    points: [
      {
        title: "コンテンツ自動タグ付け・分類",
        detail: "出演者、シチュエーション、プレイ内容。AIが自動判定してメタデータを付与。",
      },
      {
        title: "パーソナライズレコメンド",
        detail: "ユーザーの視聴履歴から好みを学習。「次に見たい」を提案して回遊率・課金率を上げる。",
      },
      {
        title: "違反コンテンツ自動検出",
        detail: "児童ポルノ、無修正、権利侵害。アップロード時に自動スキャンして即ブロック。",
      },
    ],
    pain: "運用コストが売上を食い潰す前に、仕組みで解決する。",
  },
  {
    id: "growth",
    label: "Growth & Marketing",
    title: "Google広告もMeta広告も使えない。どうする？",
    description: "広告が使えないなら、検索とファンで勝つ。業界特化のグロース戦略を設計する。",
    points: [
      {
        title: "アダルトSEO",
        detail: "一般SEOとはロジックが違う。業界特有のキーワード戦略、被リンク獲得、サイト構造設計。",
      },
      {
        title: "アフィリエイト基盤構築",
        detail: "アフィリエイター向け管理画面、成果トラッキング、報酬支払いシステムまで一括構築。",
      },
      {
        title: "SNS・ファンマーケティング",
        detail: "X(Twitter)運用、Discord/Telegramコミュニティ。ファンを育てて、LTVを最大化。",
      },
    ],
    pain: "広告に頼れない業界だからこそ、オーガニックとファンの仕組みが生死を分ける。",
  },
];

const numbers = [
  { value: "50%+", label: "プラットフォーム手数料からの解放" },
  { value: "10x", label: "コンテンツ管理効率化" },
  { value: "0", label: "広告費での集客実績" },
];

export default function ServicesContent() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 64,
          left: 0,
          right: 0,
          height: 3,
          originX: 0,
          zIndex: 100,
        }}
        className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400"
      />

      <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm text-neutral-500 mb-6"
          >
            Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold text-white leading-[1.1] mb-8"
          >
            仕組みで
            <br />
            信頼を作る。
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-xl text-neutral-400 max-w-2xl leading-relaxed"
          >
            決済が通らない。広告が打てない。大手に断られる。
            <br />
            この業界の「当たり前の壁」を、技術で突破する。
          </motion.p>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-12 md:py-16 px-6 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-6 md:gap-12">
            {numbers.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-5xl font-bold text-white mb-2">
                  {item.value}
                </p>
                <p className="text-xs md:text-sm text-neutral-500">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-20 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          {services.map((service) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="py-16 md:py-24 border-t border-neutral-800"
            >
              {/* Label */}
              <p className="text-xs font-medium text-neutral-600 uppercase tracking-wider mb-6">
                {service.label}
              </p>

              {/* Title */}
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-base md:text-lg text-neutral-400 mb-10 max-w-2xl">
                {service.description}
              </p>

              {/* Points */}
              <div className="space-y-6 mb-10">
                {service.points.map((point, i) => (
                  <div key={i} className="border-l-2 border-neutral-700 pl-6">
                    <h3 className="text-white font-semibold mb-2">
                      {point.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      {point.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Pain Point */}
              <div className="bg-neutral-900 border border-neutral-800 px-6 py-4 rounded">
                <p className="text-sm text-neutral-300">
                  {service.pain}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-6 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            「アダルトはちょっと...」
            <br />
            と断られた経験、ありませんか？
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-500 mb-10 max-w-xl mx-auto"
          >
            私たちは断りません。NDAベースで、御社の課題を聞かせてください。
            <br />
            業界を理解したエンジニアが、一緒に解決策を考えます。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
            >
              無料で相談する
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
