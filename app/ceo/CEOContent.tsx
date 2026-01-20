"use client";

import { motion, useScroll } from "motion/react";
import Image from "next/image";

const career = [
  {
    period: "大学在学中（4年間）",
    title: "ITベンチャー企業にてフルスタックエンジニアとして0→1のプロダクト開発を主導",
    description: `約10名規模のスタートアップにて、創業初期フェーズから参画。要件定義から設計、フロントエンド・バックエンド開発、インフラ構築、運用保守まで、エンジニアリングの全工程を一貫して担当。手荷物の当日配送サービスでは、リアルタイム配送追跡システムの設計・実装を担当し、配送効率を40%向上。メタバース展示会プラットフォームでは3D空間でのリアルタイム通信基盤を構築。マッチングアプリではレコメンドアルゴリズムの開発とユーザー体験の最適化を実現。限られたリソースの中で、技術選定からビジネスインパクトまでを考え抜く実践力を身につけ、複数のプロダクトを市場投入。`,
  },
  {
    period: "新卒入社（2024年4月〜）",
    title: "国内最大手コンサルティングファームにて生成AI・最新技術の研究開発とDX推進をリード",
    description: `新規事業支援に特化したコンサルティング部門において、生成AIをはじめとする最新技術の調査・検証・実装・社内展開までを一貫してリード。OpenAI Realtime APIとAmazon Bedrockを活用した次世代AI面接システムの開発では、技術選定からアーキテクチャ設計、実装までを主導し、自然な対話を実現するリアルタイム音声処理と応答遅延200ms以下の高速レスポンスを達成。さらに、Difyを活用した社内業務自動化プラットフォームを独自に構築し、提案書作成やデータ分析などの知識労働を自動化。これにより業務時間を平均40%削減、運用コストを年間1,000万円以上削減することに成功。RAG（Retrieval-Augmented Generation）による社内ナレッジベースの構築や、LLMのプロンプトエンジニアリング最適化により、業務の属人化を解消し組織全体の生産性を劇的に向上。この取り組みが経営層に評価され、入社1年目ながら社内AI推進チームの中心メンバーとして抜擢。クライアント向けのAI導入コンサルティングにおいても、技術的知見とビジネス理解を両立した提案力で複数プロジェクトを成功に導く。`,
  },
  {
    period: "2025年6月",
    title: "株式会社NINJA設立",
    description: `4社での経験を活かし、AIソリューション開発とITコンサルティングを軸とした株式会社NINJAを創業。デジタルイノベーション事業とヒューマンケア事業の2つの事業部を展開。デジタルイノベーション事業部では、生成AI、クラウドアーキテクチャ、データエンジニアリングの専門知識を活かし、企業のDX推進とビジネス変革を支援。ヒューマンケア事業部では、サッカー経験を活かし、スポーツ×テクノロジーによる人材育成サービスを提供。`,
  },
  {
    period: "2026年1月",
    title: "株式会社ゆら設立",
    description: `AIソリューション開発とITコンサルティングに特化した株式会社ゆらを創業。`,
  },
];

export default function CEOContent() {
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
        className="bg-gradient-to-r from-primary via-secondary to-accent"
      />

      <div className="min-h-screen bg-background pt-24 pb-16 px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            代表紹介
          </h1>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="flex flex-col items-center">
            {/* Photo */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 rounded-full overflow-hidden border-4 border-primary/50">
              <Image
                src="/sekiguchi.png"
                alt="関口 純平"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Name & Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              関口 純平
            </h2>
            <p className="text-white text-lg mb-8">代表取締役 CEO</p>

            {/* Introduction */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 max-w-3xl">
              <p className="text-white leading-relaxed text-center">
                大学時代からエンジニアとして、4社で様々な現場を経験してきました。
                コードを書くことは好きですが、それ以上に好きなのは、技術を使って誰かの課題を解決する瞬間です。
              </p>
              <p className="text-white leading-relaxed text-center mt-4">
                「できなかったこと」が「できる」に変わる。
                その瞬間に立ち会えることが、この仕事の一番の醍醐味だと思っています。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Message Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            代表メッセージ
          </h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="text-white leading-relaxed space-y-6">
              <p>
                技術で解決できることは、たくさんあります。でも現実には、知識がない、リソースがない、方法がわからない、自信が持てない、リスクが怖い。そんな様々な理由で、一歩を踏み出せずに諦めてしまう人や企業が、まだまだ多く存在します。
              </p>
              <p>
                やりたいことがあるのに、できないままで終わってしまう。そんな状況を、私は変えたいと思いました。
              </p>
              <p>
                そのためには、一人の力では限界があります。それぞれ違う強みを持った仲間が集まることで、この組織は生まれました。
              </p>
              <p>
                私たちがやりたいのは、本当に必要な人に、必要な支援を届けること。技術はあくまで手段です。大切なのは、困っている人の課題が解決されることであり、挑戦する人の背中を押せることです。
              </p>
              <p>
                だから、技術の話ばかりする組織ではなく、人の話をする組織でありたい。お客様にも、仲間にも、「この組織と一緒に働きたい」そう思ってもらえる存在でありたい。
              </p>
              <p className="font-semibold text-white">
                正解のない時代だからこそ、一緒に考え、一緒に悩み、一緒に前に進むことができると信じて、私たちは挑戦し続けます。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Career Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            経歴
          </h2>
          <div className="space-y-12">
            {career.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-primary/50"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
                <span className="inline-block px-3 py-1 bg-white/10 text-white text-sm font-semibold rounded-full mb-3">
                  {item.period}
                </span>
                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-white leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
