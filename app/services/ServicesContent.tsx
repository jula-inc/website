"use client";

import { motion, useScroll } from "motion/react";
import Link from "next/link";

const services = [
  {
    id: "ai-agent",
    label: "01 — AIエージェント開発",
    title: "人が動く前に、AIが終わらせる。",
    description:
      "チャットで返すだけのAIは終わった。次は「自律的に判断し、複数タスクを連鎖実行するAIエージェント」の時代。競合調査→要約→Slack投稿。売上集計→異常検知→アラート。人間がトリガーを引く前に、AIが完了している世界を作る。",
    points: [
      {
        title: "マルチステップAIエージェント",
        detail:
          "Tool Use / Function Callingで外部API・DB・ファイルシステムと連携。「調査→分析→判断→実行→報告」を自律的にこなすワークフローを構築する。エラーハンドリング、リトライ、タイムアウト制御、ログ出力まで含めた本番運用設計。",
      },
      {
        title: "社内業務エージェント",
        detail:
          "「毎週月曜に売上レポート生成→メール送信」「問い合わせ受信→分類→担当者アサイン」「競合価格変動→検知→通知」。人が毎回やっていた定型業務を、AIが24時間自動処理。Slack / Teams / メール / スプレッドシート / CRMとネイティブ連携。",
      },
      {
        title: "マルチエージェントシステム",
        detail:
          "複数AIエージェントが役割分担して協調動作。リサーチャーが情報収集、アナリストが分析、ライターがレポート生成、レビュアーが品質チェック。CrewAI / AutoGen / LangGraphによる最先端マルチエージェントアーキテクチャ。",
      },
    ],
    pain: "正しく設計されたAIエージェントは、フルタイム社員1人分以上の生産性を、24時間365日、ミスなく発揮する。",
  },
  {
    id: "ai-automation",
    label: "02 — AI業務自動化",
    title: "その業務、まだ人がやる理由はあるか。",
    description:
      "提案書、議事録、データ集計、問い合わせ対応。繰り返される知識労働の大半はAIで代替できる。問題は「できるか」ではなく「どこから手をつけるか」。最短で最大のROIを出すポイントを特定し、即座に自動化する。",
    points: [
      {
        title: "業務フロー分析 → AI適用設計",
        detail:
          "全業務を可視化。工数・属人化・ボトルネックを特定し、AI自動化すべき領域と人が判断すべき領域を切り分ける。ROIが最も高い工程から優先着手。導入前後の定量比較基盤も同時構築。",
      },
      {
        title: "ドキュメント自動生成",
        detail:
          "提案書、見積書、レポート、マニュアル、契約書ドラフト。GPT-4 / Claude / Geminiから最適なLLMを選定し、御社の文体・フォーマット・業界用語をFew-shotで学習。出力品質の自動スコアリングとレビューフロー込み。",
      },
      {
        title: "社内AIプラットフォーム導入",
        detail:
          "エンジニア不要。現場の担当者がノーコードでAIワークフローを構築・運用できるDify / LangChainベースのプラットフォームを導入。「このメール書いて」「この集計して」を即実現。部門横断で全社展開。",
      },
      {
        title: "データ入力・集計の完全自動化",
        detail:
          "Excel手作業、PDF読み取り、システム間転記。OCR × 生成AI × RPAで、紙・PDFからの情報抽出→クレンジング→DB投入→レポート生成をパイプライン化。月次集計が数日→数分。",
      },
    ],
    pain: "AIツールを入れただけでは変わらない。どこに、どう組み込み、誰が使い、どう改善するか。その設計が全てを決める。",
  },
  {
    id: "rag",
    label: "03 — RAG・ナレッジAI",
    title: "退職者と一緒に、知識が消える。\nその構造を、根本から変える。",
    description:
      "「あのマニュアルどこ？」「前どう対応した？」。ナレッジは個人の頭とローカルフォルダに散在している。RAGで社内の全知識をAIに接続し、誰でも・いつでも・即座に正しい答えにたどり着ける環境を構築する。",
    points: [
      {
        title: "社内ナレッジベースAI",
        detail:
          "ドキュメント、Wiki、Slack/Teams過去ログ、FAQ、提案書、顧客対応履歴。全てをベクトルDBに格納し、自然言語で質問→回答が返るAIを構築。オンボーディング短縮、暗黙知の共有、退職時の知識流出防止。",
      },
      {
        title: "RAGパイプライン最適化",
        detail:
          "繋げば動くものではない。チャンク戦略（固定長/セマンティック/再帰的）、Embedding選定（OpenAI/Cohere/BGE）、リランキング、ハルシネーション抑制、ソース引用自動表示。自社で1,000万件以上のデータをRAG処理した実績から、精度と速度を両立する設計を提供。",
      },
      {
        title: "業界特化型AIアシスタント",
        detail:
          "法律、医療、金融、不動産、製造。業界固有の専門用語・規制・商慣習を学習させた特化型AI。規約チェック、薬事法確認、契約書レビューなど、実務で即戦力になるAIを開発する。",
      },
    ],
    pain: "「聞けばわかる人」に依存する組織は、その人がいなくなった瞬間に崩壊する。知識をシステムに蓄積する仕組みが、組織の持続性を決める。",
  },
  {
    id: "voice-multimodal",
    label: "04 — 音声AI・マルチモーダルAI",
    title: "テキスト入力だけが、AIの入口じゃない。",
    description:
      "電話、会議、接客、検品、撮影。現場は「テキスト以外」の情報で動いている。音声・画像・動画を横断処理するマルチモーダルAIで、これまで自動化できなかった業務を一気に開拓する。",
    points: [
      {
        title: "リアルタイム音声AI",
        detail:
          "OpenAI Realtime API × Amazon Bedrock。応答遅延200ms以下。AI電話受付、AI面接、AI接客、営業ロープレ、多言語リアルタイム翻訳。感情分析、会話要約・議事録化も同時対応。24時間365日、品質均一で対応。",
      },
      {
        title: "画像認識・動画解析AI",
        detail:
          "商品画像の自動タグ付け、不良品検査、動画の自動分類・要約、図面・レシート読み取り。GPT-4o / Gemini / Claude Vision活用。EC商品登録、製造品質管理、コンテンツ運用効率化など業種別に最適設計。",
      },
      {
        title: "会議AI・議事録自動化",
        detail:
          "Zoom / Meet / Teamsの会議を自動文字起こし。話者識別、要点抽出、ToDo自動抽出、決定事項まとめ、次回アクション整理。議事録作成30分→0分。会議後すぐに全員が同じ認識を持てる。",
      },
    ],
    pain: "テキスト処理だけでは業務の20%しかカバーできない。音声・画像・動画を含む残り80%の自動化が、次の競争優位。",
  },
  {
    id: "ai-sales",
    label: "05 — AI×セールス",
    title: "営業の「勘と根性」を、\nデータとAIに置き換える。",
    description:
      "トップ営業の暗黙知を、全員が再現できる仕組みに変える。商談の事前リサーチ、提案書の自動生成、フォローメールの最適化、受注確度の予測。営業プロセス全体をAIで武装し、少人数で最大の成果を出す。",
    points: [
      {
        title: "商談準備の自動化",
        detail:
          "企業情報、決算データ、プレスリリース、SNS発信をAIが自動収集・要約。商談前に「この会社が今何に困っているか」を即座に把握。リサーチ時間を削減し、提案の質を引き上げる。",
      },
      {
        title: "提案書・見積書の自動生成",
        detail:
          "過去の受注案件データを学習し、業種・規模・課題に応じた提案書のドラフトをAIが自動生成。営業は微調整だけで済む。提案書作成に2時間→15分。",
      },
      {
        title: "受注確度予測・パイプライン最適化",
        detail:
          "CRMデータ、商談ログ、メール開封率、Webアクセス履歴をAIが分析。「この案件は今月クロージングできるか」を定量予測。確度の低い案件に時間を使わず、勝てる案件にリソースを集中させる。",
      },
    ],
    pain: "営業の属人化は、トップセールスが辞めた瞬間に売上が落ちることを意味する。仕組みで売れる組織を作る。",
  },
  {
    id: "ai-product",
    label: "06 — AI新規事業・プロダクト開発",
    title: "AIで新規事業を作る。\n2週間で動くものを見せる。",
    description:
      "「AIで何かやりたい」は聞き飽きた。何を作り、誰に届け、どう稼ぐか。数十社のAI×新規事業を共創してきた経験と、自社でAIプロダクトを構築・収益化した実績。アイデアを最速で事業に変える。",
    points: [
      {
        title: "AI新規事業の企画・共創",
        detail:
          "市場調査、競合分析、ビジネスモデル設計、収益シミュレーション。「何ができるか」ではなく「何をすれば勝てるか」から逆算。ターゲットの解像度を上げ、マネタイズを設計し、事業計画を策定。技術とビジネスの両方の視点で共に作る。",
      },
      {
        title: "マルチモデルアーキテクチャ",
        detail:
          "GPT-4oは推論。Claude 4は長文。Gemini 2.5はマルチモーダル。Mistralはコスト効率。タスクごとに最適モデルを自動ルーティング。LLMのバージョン変更に影響されない抽象化レイヤーで、コード変更なしのモデル差し替えを実現。",
      },
      {
        title: "PoC 2週間 → MVP 1ヶ月 → グロース",
        detail:
          "2週間でPoCを構築し、技術的可能性とビジネス価値を検証。1ヶ月でMVPをユーザーに当て、データで改善。本番デプロイ、監視、運用、KPI設計まで。「検証で終わる」のではなく「事業として回る」まで伴走。",
      },
    ],
    pain: "AIプロダクトの失敗パターンは決まっている。精度が出ない。コストが合わない。使われない。技術とビジネス、両方わかる人間が設計しなければ投資は回収できない。",
  },
  {
    id: "data-analytics",
    label: "07 — データ分析・予測AI",
    title: "数字を見てから動くのは、もう遅い。",
    description:
      "売上が下がった。解約が増えた。在庫が余った。気づいた時には手遅れ。過去を「見る」だけでなく未来を「予測する」AI基盤で、常に先手を打てる組織に変える。",
    points: [
      {
        title: "売上予測・需要予測",
        detail:
          "過去データ、季節変動、外部要因を学習した予測モデル。在庫最適化、人員配置、キャッシュフロー予測に直結。XGBoost / LightGBM / Prophetと生成AIのハイブリッドで、解釈可能性と精度を両立。",
      },
      {
        title: "チャーン予測・LTV分析",
        detail:
          "どのユーザーがいつ解約するか。行動ログ・購買履歴・エンゲージメントデータを多次元分析し、離脱兆候を早期検知。解約前にリテンション施策を自動トリガー。「解約されてから」を「解約される前に」に変える。",
      },
      {
        title: "KPIダッシュボード・異常検知",
        detail:
          "GA4 / Mixpanel / BigQuery / Snowflakeでデータ基盤構築。ファネル、コホート、アトリビューション分析。AI異常検知で「兆候が出た瞬間にアラート」。経営判断に直結するダッシュボードを構築。",
      },
    ],
    pain: "過去を振り返るだけのデータ分析では、競合より常に一手遅い。未来を予測し先手を打てるかが、勝敗を分ける。",
  },
  {
    id: "ai-cs",
    label: "08 — AI×カスタマーサポート",
    title: "問い合わせ対応に、\nまだ人件費をかけ続けるのか。",
    description:
      "同じ質問に何度も答える。営業時間外は対応できない。人が増えても追いつかない。AIチャットボットと音声AIで、対応品質を均一化しながらコストを劇的に削減する。人は、人にしかできない対応に集中する。",
    points: [
      {
        title: "AIチャットボット構築",
        detail:
          "FAQ、商品問い合わせ、注文状況確認、予約変更。RAGで自社データを学習させた高精度チャットボットを構築。過去の対応履歴から回答を生成し、テンプレ応答ではなく「文脈を理解した対応」を実現。対応コスト60%削減。",
      },
      {
        title: "AI電話応対・ボイスボット",
        detail:
          "電話の一次受付をAIが処理。要件のヒアリング、カテゴリ分類、簡単な案内はAIが完結。有人対応が必要な場合のみ担当者に転送。応答遅延200ms以下で、人間と話しているような自然な対話体験。",
      },
      {
        title: "対応ナレッジの自動蓄積・学習",
        detail:
          "ベテランオペレーターの対応履歴をAIが学習し、回答品質を日々向上。新人でもベテラン品質の対応が可能に。対応ログの自動分析で、問い合わせのトレンド変化も即座にキャッチ。",
      },
    ],
    pain: "CSの人件費は売上に比例して膨張する。AIで仕組み化すれば、売上が10倍になっても対応コストは据え置きにできる。",
  },
  {
    id: "system",
    label: "09 — システム開発",
    title: "「作って終わり」の開発会社に、\nもう依頼したくないなら。",
    description:
      "要件通りに作った。でも使いにくい。運用が回らない。改修のたびに追加費用。最初の設計が足りていないシステムは、事業の足を引っ張り続ける。設計からインフラ、運用まで一貫して担い、事業が伸びるまで一緒に走る。",
    points: [
      {
        title: "0→1プロダクト開発",
        detail:
          "アイデアを最速で動くプロダクトにする。ビジネス整理、技術選定、設計、UI/UX、フロントエンド・バックエンド実装、インフラ、リリース。配送追跡、メタバース通信基盤、マッチングレコメンドなど異領域のプロダクトを複数立ち上げた実績。どの業界でも最短で形にする。",
      },
      {
        title: "Webアプリ・SaaS開発",
        detail:
          "管理画面、ダッシュボード、CRM、予約、EC、業務ツール。Next.js / React / TypeScript、Node.js / Python / Go、PostgreSQL / MongoDB。マルチテナント、権限管理、API設計、Webhook連携。スケーラブルで保守しやすい設計を最初から。",
      },
      {
        title: "決済・課金基盤",
        detail:
          "クレカ、コンビニ、キャリア、海外決済。複数決済会社の並列接続とフォールバック構成。サブスク、従量、都度、複合課金。不正検知、3Dセキュア、チャージバック対策。止まらない基盤を作る。",
      },
      {
        title: "高負荷インフラ・技術的負債の解消",
        detail:
          "数千〜数万同時接続のオートスケーリング、マルチクラウド、CDN最適化、DB分散設計。改修が遅い・バグ頻発の既存システムは段階的にモダナイゼーション。モノリス→マイクロサービス、テスト基盤、CI/CD構築。事業を止めずに進化させる。",
      },
    ],
    pain: "開発コストの大半は「作った後」に発生する。最初の設計の手抜きは、改修・運用・機会損失として何倍にもなって返ってくる。",
  },
  {
    id: "growth",
    label: "10 — AI×グロース",
    title: "広告を止めたら売上も止まる。\nその構造、いつ変える？",
    description:
      "CPAは年々上昇。広告は蛇口。閉めたら終わり。SEO、コンテンツ、ファン。止めても流れ続ける集客の仕組みを、AIで加速させながら構築する。",
    points: [
      {
        title: "SEO戦略設計",
        detail:
          "キーワード調査、競合分析、サイト構造設計、内部リンク最適化、Core Web Vitals改善、構造化データ実装。記事の量産ではなく「勝てる設計」を先に作る。トピッククラスタリングとピラーページで、資産型の集客基盤を構築。",
      },
      {
        title: "AI×コンテンツマーケティング",
        detail:
          "AIで構成案自動生成、競合分析、キーワードギャップ発見。人間が企画・監修、AIがリサーチ・下書き・構造化。制作速度を大幅に引き上げながら品質は人間が担保。量と質のトレードオフを仕組みで解消。",
      },
      {
        title: "SNS・ファンマーケティング",
        detail:
          "フォロワー数ではなくLTVを最大化。AI投稿文生成、最適投稿時間分析、エンゲージメント予測。ファンコミュニティの設計・運営まで。バズではなく「積み上がる」マーケティング。",
      },
      {
        title: "アフィリエイト基盤構築",
        detail:
          "管理画面、成果トラッキング、承認フロー、報酬自動支払い。不正検知、アトリビューション設計。広告費ゼロで販路を拡大する仕組みをゼロから構築。",
      },
    ],
    pain: "広告依存は、競合が増えるほど不利になる。自走する集客の仕組みがあるかどうかが、3年後の生死を分ける。",
  },
] as const;

export default function ServicesContent() {
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
        className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400"
        aria-hidden="true"
      />

      <div className="min-h-screen bg-[#0a0a0a]">
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm text-cyan-400 font-medium mb-6 tracking-wider"
            >
              Service
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-7xl font-bold text-white leading-[1.1] mb-8"
            >
              AIを、
              <br />
              事業の武器にする。
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-xl text-neutral-400 max-w-2xl leading-relaxed"
            >
              AI×新規事業の共創を数十社手がけてきた代表が、
              <br />
              導入で終わらない「稼げるAI」を設計・実装する。
            </motion.p>
          </div>
        </section>

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
                <p className="text-xs font-medium text-neutral-600 uppercase tracking-wider mb-6">
                  {service.label}
                </p>

                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 whitespace-pre-line">
                  {service.title}
                </h2>

                <p className="text-base md:text-lg text-neutral-400 mb-12 max-w-2xl leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-8 mb-12">
                  {service.points.map((point, i) => (
                    <div key={i} className="border-l-2 border-neutral-700 pl-6">
                      <h3 className="text-white font-semibold mb-3">
                        {point.title}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-[1.8]">
                        {point.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-neutral-900/80 border border-neutral-800 px-6 py-5 rounded">
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {service.pain}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="py-20 md:py-32 px-6 border-t border-neutral-800">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              AIで何かやりたい。
              <br />
              でも、何から始めればいい？
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-neutral-500 mb-10 max-w-xl mx-auto leading-relaxed"
            >
              その状態から伴走します。
              <br />
              2週間でPoCを出し、1ヶ月でMVPを形にする。
              <br />
              まずは、今の課題を聞かせてください。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-black font-semibold hover:bg-neutral-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
