import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";

const message = [
  "断言します。いまのAIは、ほとんどの人が思っているより、ずっと賢い。成果が出ないのは、AIの能力ではなく、使い方の設計が足りていないからです。",
  "「ChatGPTを触ってみたけど、大したことなかった」。よく聞きます。でも、同じAIを使っていても、毎月の利益を何百万円も動かす会社と、何も変わらない会社がある。違うのはAIの性能ではなく、どの業務に、どう組み込むか。その一点だけです。",
  "私は学生の頃から4社で0→1をつくり、国内最大手コンサルで数十社のAI新規事業をリードしてきました。自分のプロダクトも、立ち上げから3ヶ月で黒字に。技術もわかる、事業もわかる。だから「どこにAIを差し込めば、利益が動くか」が、手に取るように見えます。",
  "私たちは、AIを納品して終わりにはしません。見るのは、導入数でも稼働率でもなく、損益計算書がどう変わったか。利益が動かないなら、それはまだ仕事の途中です。",
  "そして、とにかく速い。考えている時間があるなら、まず動かす。最短2日でPoC、1ヶ月でMVP。正解は、会議室ではなく市場にしかありません。",
  "私たちは、AIの評論家ではありません。自ら手を動かし、数字が動くまで離れない実行部隊です。AIで勝ちたいなら、まず一度、話しましょう。",
] as const;

const closing = "AIの賢さは、もう誰の手にもある。差がつくのは、使い方だけです。";

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
  {
    period: "2026年6月",
    title: "Arlebo Ltd（英国ロンドン）創業 - Founder & CEO就任",
    description: `日本で築いた新規事業開発の知見を、より難度の高い市場へ。2026年6月、グローバル展開の拠点として英国ロンドンにArlebo Ltdを創業し、Founder & CEOに就任。Arleboが手がけるのは、規制・与信・決済などのハードルが高く、多くの企業が参入をためらうリスクの高い領域に特化した事業支援。市場参入の戦略設計から、立ち上げ、収益化、グロースまでを一貫して担い、コンプライアンスと収益性を両立させながら事業を成立させる。リスクが高い領域ほど競合は少なく、先行者の優位は大きい。誰もが避ける市場でこそ価値を生み出すパートナーとして、世界へ広げていく。`,
  },
] as const;

export default function CEOContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="grid-bg absolute inset-0" aria-hidden />
        <div className="container-page relative">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-muted-2">
              代表紹介
            </p>
          </Reveal>
          <div className="mt-8 grid items-center gap-10 md:grid-cols-[auto_1fr]">
            <Reveal>
              <div className="relative aspect-square w-40 overflow-hidden rounded-3xl border border-border sm:w-48">
                <Image
                  src="/sekiguchi.png"
                  alt="関口 純平 - 株式会社ゆら 代表取締役CEO"
                  fill
                  sizes="192px"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <h1 className="text-3xl font-black tracking-tight sm:text-5xl">関口 純平</h1>
                <p className="mt-3 text-lg text-muted">代表取締役 CEO</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Message */}
      <section className="container-page py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">代表メッセージ</h2>
          </Reveal>
          <div className="mt-8 space-y-6">
            {message.map((para, i) => (
              <Reveal key={i} delay={i * 40}>
                <p className="text-base leading-loose text-muted sm:text-lg">{para}</p>
              </Reveal>
            ))}
            <Reveal>
              <p className="border-l-2 border-accent pl-5 text-xl font-bold leading-relaxed text-foreground sm:text-2xl">
                {closing}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="container-page py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">経歴</h2>
          </Reveal>
          <div className="mt-10 space-y-px">
            {career.map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="relative border-l border-border pb-12 pl-8 last:pb-0">
                  <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-accent-deep ring-4 ring-background" />
                  <p className="font-mono text-xs font-medium uppercase tracking-wider text-muted-2">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
