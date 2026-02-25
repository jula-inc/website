"use client";

import { motion, useScroll } from "motion/react";
import Image from "next/image";

const career = [
  {
    period: "大学在学中（4年間）",
    title:
      "ITベンチャー企業にてフルスタックエンジニアとして0→1のプロダクト開発を主導",
    description: `約10名規模のスタートアップにて、創業初期フェーズから参画。要件定義から設計、フロントエンド・バックエンド開発、インフラ構築、運用保守まで、エンジニアリングの全工程を一貫して担当。手荷物の当日配送サービスでは、リアルタイム配送追跡システムの設計・実装を担当し、配送効率を40%向上。メタバース展示会プラットフォームでは3D空間でのリアルタイム通信基盤を構築。マッチングアプリではレコメンドアルゴリズムの開発とユーザー体験の最適化を実現。限られたリソースの中で、技術選定からビジネスインパクトまでを考え抜く実践力を身につけ、複数のプロダクトを市場投入。`,
  },
  {
    period: "新卒入社（2024年4月〜）",
    title:
      "国内最大手コンサルティングファームにて生成AI・最新技術の研究開発とDX推進をリード",
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
    description: `「AIを、事業の武器にする」をミッションに株式会社ゆらを創業し、代表取締役に就任。これまで培ったAIプロダクト開発・DX推進・新規事業共創の全てを集約し、AIソリューション・システム開発・グロース支援を一気通貫で提供する体制を構築。創業直後からAIエージェント開発、RAGによる社内ナレッジAI、リアルタイム音声AI、業務自動化基盤など、最先端のAI技術を事業成果に直結させるプロジェクトを次々と展開。2週間でPoC、1ヶ月でMVPを形にするスピード開発を武器に、大企業が半年かかるプロセスを圧倒的に短縮。システム開発では0→1のプロダクト立ち上げから決済基盤、高負荷インフラまで対応。グロースではAI×コンテンツマーケティングとSEO戦略を組み合わせ、広告費ゼロで集客基盤を構築する手法を確立。「AIで何かやりたいが、何から始めればいいかわからない」という企業に対し、業務分析からAI適用設計、PoC、本番導入、運用まで一気通貫で伴走。単なる受託開発ではなく、クライアントの事業成長に本気でコミットするパートナーとして事業を拡大中。`,
  },
] as const;

export default function CEOContent() {
  const { scrollYProgress } = useScroll();

  return (
    <>
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
        aria-hidden="true"
      />

      <div className="min-h-screen bg-background pt-24 pb-16 px-6">
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 rounded-full overflow-hidden border-4 border-primary/50">
              <Image
                src="/sekiguchi.png"
                alt="関口 純平"
                fill
                sizes="(max-width: 768px) 192px, 256px"
                className="object-cover"
                priority
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              関口 純平
            </h2>
            <p className="text-white text-lg">代表取締役 CEO</p>
          </div>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
          aria-labelledby="message-heading"
        >
          <h2
            id="message-heading"
            className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
          >
            代表メッセージ
          </h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="text-white leading-relaxed space-y-6">
              <p>
                AIで、ゲームのルールが変わった。10人のチームが、100人の組織を追い抜ける時代になった。
              </p>
              <p>
                だが、ほとんどの企業はまだ気づいていない。ChatGPTを触って「うちもAI導入しました」と言っているだけ。事業のどこにAIを埋め込めば利益が倍になるのか。どの業務をAIエージェントに任せれば人件費が半分になるのか。本気で設計している会社は、驚くほど少ない。
              </p>
              <p>
                私は大学時代から4社でエンジニアとして0→1のプロダクト開発を手がけ、国内最大手コンサルで数十社のAI×新規事業の共創をリードしてきた。自分自身でもAIプロダクトを企画・開発し、リリース3ヶ月で収益化まで持っていった。コードを書ける人間はいる。だが、「この技術で、どう稼ぐか」まで設計できる人間はほとんどいない。
              </p>
              <p>
                私たちがやるのは、AIの導入支援ではない。AIを事業の武器に変えることだ。業務自動化で人件費を半分にする。AIエージェントを24時間稼働させる。予測AIで競合より一手先を打つ。音声AIでカスタマーサポートを丸ごと置き換える。技術を、直接的に利益に変換する。
              </p>
              <p>
                スピードが全てだ。2週間でPoCを出す。1ヶ月でMVPを形にする。大企業が半年かけて稟議を回している間に、私たちはプロダクトをリリースし、ユーザーからフィードバックを得ている。この差が、1年後に取り返しのつかない差になる。
              </p>
              <p>
                「AIで何かやりたいが、何から始めればいいかわからない」。その相談が一番多い。だからこそ、私たちがいる。業務の棚卸し、AI適用箇所の特定、技術選定、設計、開発、運用。全て一気通貫でやる。そして、成果が出るまで絶対に手を離さない。
              </p>
              <p className="font-semibold text-white text-lg">
                AIを使う側か、AIで勝つ側か。その差は、今この瞬間に決まる。
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
          aria-labelledby="career-heading"
        >
          <h2
            id="career-heading"
            className="text-2xl md:text-3xl font-bold text-white mb-12 text-center"
          >
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
                <div
                  className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="inline-block px-3 py-1 bg-white/10 text-white text-sm font-semibold rounded-full mb-3">
                  {item.period}
                </span>
                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-white leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </>
  );
}
