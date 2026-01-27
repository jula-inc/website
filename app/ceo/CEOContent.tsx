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
    title: "株式会社NINJA設立 - 代表取締役就任",
    description: `コンサル在籍中に副業として株式会社NINJAを創業し、代表取締役に就任。「埋もれた価値を、光の当たる場所へ」を理念に掲げ、生成AI技術を核としたデジタルイノベーション事業を展開。主力プロダクトとして、独自開発のAIエンジンを搭載した新規事業案レポートメディア「ビズAI」を企画・設計・開発。GPT-4、Claude、Geminiなど複数のLLMを組み合わせたマルチモデルアーキテクチャを採用し、市場調査・競合分析・ビジネスモデル設計・収益シミュレーションまでを全自動で生成するシステムを構築。独自のRAGパイプラインにより、1,000万件以上のビジネスデータを学習させ、業界トップクラスの精度を実現。リリース3ヶ月で月間50,000PV、有料会員500名を突破。企業向けには、AI導入コンサルティングとして累計20社以上のDX推進を支援。業務自動化により平均工数40%削減、AIチャットボット導入で問い合わせ対応コスト60%削減などの成果を創出。2025年12月にはSNS事業部を新設し、AIによるコンテンツ自動生成・最適投稿時間分析・エンゲージメント予測を組み合わせたSNSマーケティング支援を開始。創業半年で事業の収益化に成功し、AI×ビジネスの領域で着実に実績を積み上げている。`,
  },
  {
    period: "2026年1月",
    title: "株式会社ゆら設立 - 代表取締役就任",
    description: `アダルト業界に特化したIT企業として株式会社ゆらを創業し、代表取締役に就任。大手企業がレピュテーションリスクを理由に参入を避ける領域において、技術力による差別化戦略を立案・実行。決済インフラ構築では、Stripe・PayPalが使えない業界課題に対し、複数の決済代行会社との交渉・API連携を主導し、クレジットカード・コンビニ払い・キャリア決済に対応した独自決済基盤を構築。プラットフォーム開発では、4K動画配信・DRM実装・数千人同時接続対応のライブ配信システムなど、高負荷環境に耐えるインフラ設計を担当。AIソリューションでは、大規模コンテンツの自動タグ付け・分類システム、レコメンドエンジン、違反コンテンツ自動検出システムを開発し、クライアントの運用コスト60%削減を実現。マーケティング面では、広告出稿が制限される業界特性を踏まえ、アダルト特化SEO戦略の立案、アフィリエイトネットワーク構築、SNSマーケティング施策を実行。他社に断られた案件を積極的に受注し、NDAベースでの開発体制を確立。`,
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
            <p className="text-white text-lg">代表取締役 CEO</p>
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
                アダルト市場は、世界で年間10兆円を超える。日本だけでも数千億円規模だ。にもかかわらず、Google、Amazon、Microsoft、どの大手IT企業もこの市場には手を出さない。
              </p>
              <p>
                理由は単純。レピュテーションリスクだ。株主に説明できない。採用に響く。ブランドイメージが傷つく。だから、どれだけ儲かっても、大手は絶対に参入しない。
              </p>
              <p>
                これが何を意味するか。技術力さえあれば、巨人と戦わずに勝てる市場があるということだ。
              </p>
              <p>
                Stripeが使えない？独自決済を作ればいい。Google広告が打てない？SEOとアフィリエイトで勝てばいい。AWSに切られるリスク？複数のインフラに分散すればいい。大手が避ける「面倒くさい」を、私たちは全部引き受ける。
              </p>
              <p>
                私は大学時代から4社でエンジニアとして働き、国内最大手コンサルでAI開発をリードしてきた。技術には自信がある。でも、技術だけじゃ勝てない。この業界特有の商習慣、法規制、ユーザー心理。それを理解した上で、技術を武器にする。
              </p>
              <p>
                「アダルトはちょっと...」と断られ続けてきた企業がいる。やりたいことがあるのに、パートナーが見つからない。そんな企業を、私たちは全力でサポートする。
              </p>
              <p>
                NDAを結び、リスクを共有し、一緒に事業を作る。単なる受託開発じゃない。私たちは、クライアントの成功に本気でコミットするパートナーだ。
              </p>
              <p className="font-semibold text-white text-lg">
                10兆円市場で、技術で天下を取る。大手が逃げた市場で、私たちは勝ちに行く。
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
