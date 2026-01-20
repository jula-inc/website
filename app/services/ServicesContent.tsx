"use client";

import { motion, useScroll } from "motion/react";

const services = [
  {
    id: "web",
    title: "Webサイト・アプリケーション開発",
    subtitle: "受託開発",
    color: "from-primary to-cyan-400",
    intro: "「ホームページを作りたい」「社内の業務をシステム化したい」といったご要望に対応します。最初のヒアリングから、デザイン、開発、公開後のサポートまで一貫してお任せいただけます。",
    items: [
      {
        title: "コーポレートサイト制作",
        content: `
          会社のホームページを新しく作りたい、あるいは今あるサイトをリニューアルしたいというご依頼をお受けしています。

          まず、どんな目的でサイトを作りたいのかをお聞きします。「採用を強化したい」「会社の信頼性を高めたい」「問い合わせを増やしたい」など、目的によって作るべきサイトの形は変わります。

          デザインは、会社のロゴやパンフレットなど既存の素材があればそれに合わせて統一感を出します。素材がない場合は、こちらで提案することも可能です。

          完成後は、お客様自身でお知らせやブログを更新できるようにWordPressなどの仕組みを導入します。操作方法は画面を見ながら説明しますので、パソコンが苦手な方でも大丈夫です。
        `,
      },
      {
        title: "業務システム開発",
        content: `
          「Excelで顧客リストを管理しているが、人数が増えて限界」「紙の申請書を回覧しているが、テレワークで困っている」といった課題をお持ちの企業様向けに、専用のシステムを開発します。

          まず、今どのような流れで業務を行っているかを詳しくお聞きします。現場で実際に使っているExcelファイルや紙の帳票を見せていただき、どこに手間がかかっているか、どこでミスが起きやすいかを一緒に整理します。

          その上で、「この部分をシステム化すると、毎月◯時間の作業が不要になります」といった形で、具体的な効果をお伝えします。

          システムは、インターネットがあればどこからでもアクセスできるWebアプリケーションとして開発します。スマートフォンからも使えるようにすることも可能です。
        `,
      },
      {
        title: "ランディングページ制作",
        content: `
          商品の販売やサービスの申し込みを増やすための、1ページ完結型のWebページを制作します。

          Google広告やInstagram広告を出稿されている企業様から、「広告をクリックした人がそのまま申し込んでくれるページを作りたい」というご依頼をいただくことが多いです。

          制作にあたっては、まず「誰に」「何を」「どう伝えるか」を一緒に整理します。ターゲットとなるお客様像、商品の強み、競合との違いなどをヒアリングし、それをページの構成に落とし込みます。

          公開後は、実際にどれくらいの人が申し込みボタンを押したかなどのデータを確認し、改善のご提案をします。
        `,
      },
      {
        title: "既存サイトの改善",
        content: `
          「ホームページはあるけど、問い合わせが全然来ない」「古いまま放置していて、スマホで見ると崩れる」といったお悩みをお持ちの企業様向けに、現状分析と改善を行います。

          まず、Googleアナリティクスなどのアクセス解析ツールを確認し、サイトの現状を把握します。どのページがよく見られているか、どこで離脱しているか、どんなキーワードで検索されているかなどを調べます。

          その上で、「このページの内容を充実させましょう」「問い合わせフォームをもっと目立つ場所に置きましょう」「ページの表示速度を改善しましょう」といった具体的な改善案をご提案します。

          大規模なリニューアルが必要な場合は、別途お見積もりをお出しします。
        `,
      },
    ],
    tech: ["Next.js", "React", "TypeScript", "Node.js", "Python", "AWS", "GCP"],
  },
  {
    id: "ai",
    title: "AIソリューション開発",
    subtitle: "AI活用支援",
    color: "from-secondary to-purple-400",
    intro: "ChatGPTをはじめとする生成AI技術を使って、日々の業務を効率化する仕組みを作ります。「AIで何ができるか分からない」という段階からご相談いただけます。",
    items: [
      {
        title: "社内向けAIチャットボット",
        content: `
          「経費精算のやり方は？」「有給の申請方法は？」「この製品の仕様は？」といった社内からの問い合わせに、AIが自動で回答する仕組みを作ります。

          仕組みとしては、社内のマニュアルや規程集、過去のQ&Aなどをあらかじめ読み込ませておき、質問に対して関連する情報を探し出して回答を生成します。

          導入事例として、ある企業では総務部への問い合わせの約6割がAIで解決できるようになり、担当者の対応時間が大幅に減りました。

          SlackやMicrosoft Teamsなど、普段お使いのチャットツールから利用できるようにすることも可能です。新しいツールを覚える必要はありません。
        `,
      },
      {
        title: "顧客対応の自動化",
        content: `
          Webサイトからの問い合わせや、メールでの質問に対して、AIが自動で回答する仕組みを構築します。

          よくある質問（営業時間、料金、サービス内容など）については、人を介さずにすぐ回答できるようになります。複雑な問い合わせや、契約に関わる内容については、担当者に引き継ぐ仕組みにすることもできます。

          24時間対応が可能になるため、夜間や休日に問い合わせがあってもお客様をお待たせしません。

          また、どんな質問が多いかを分析することで、Webサイトに掲載すべき情報や、商品・サービスの改善点が見えてくることもあります。
        `,
      },
      {
        title: "資料作成の自動化",
        content: `
          報告書、議事録、提案書など、毎回似たような形式で作成している文書を、AIで自動生成する仕組みを作ります。

          たとえば、営業日報であれば、訪問先や商談内容をフォームに入力するだけで、上長に提出できる形式の報告書が自動で作成されます。

          議事録については、会議の録音データをアップロードすると、発言内容を文字起こしし、要点をまとめた議事録を作成することができます。

          提案書については、顧客情報や過去の提案書をもとに、たたき台となる文書を自動生成し、そこから人が編集する形にすることで、作成時間を短縮できます。
        `,
      },
      {
        title: "AI導入の相談",
        content: `
          「うちでもAIを活用したいけど、何から始めればいいか分からない」という企業様向けに、現状の業務を整理し、AIで効率化できる部分を一緒に探すところからお手伝いします。

          まず、普段どのような業務に時間がかかっているかをヒアリングします。「毎週このレポートを作るのに半日かかる」「この確認作業を3人がかりでやっている」といった具体的な話をお聞きします。

          その上で、「この作業はAIで自動化できます」「この作業は現時点のAI技術では難しいです」といった形で、現実的な提案をします。

          いきなり大きなシステムを作るのではなく、まず1つの業務で試してみて効果を確認する、という進め方をおすすめしています。
        `,
      },
    ],
    tech: ["OpenAI API", "Amazon Bedrock", "Dify", "LangChain", "Python"],
  },
  {
    id: "dx",
    title: "DX推進支援",
    subtitle: "デジタル化支援",
    color: "from-accent to-pink-400",
    intro: "「ITに詳しい人がいない」「何から手をつければいいか分からない」という企業様のデジタル化をお手伝いします。ツールの選定から導入、社内への定着まで伴走します。",
    items: [
      {
        title: "クラウドツールの導入",
        content: `
          紙やExcelで管理している情報を、クラウドサービスに移行するお手伝いをします。

          たとえば、顧客情報をExcelで管理している場合、複数人で同時に編集すると上書きされてしまう、最新版がどれか分からなくなる、といった問題が起きがちです。これをクラウドの顧客管理ツールに移行すると、誰がいつ更新したかが記録され、複数人での編集も問題なくできるようになります。

          ツールは、Notion、kintone、Salesforceなど、お客様の規模や予算、やりたいことに合わせて選定します。無料で使えるものから、本格的な有料サービスまで、選択肢をご説明した上で決めていただきます。

          導入時には、既存のExcelからデータを移行し、使い方の説明会を開催します。
        `,
      },
      {
        title: "ペーパーレス化",
        content: `
          紙で行っている業務を電子化するお手伝いをします。

          契約書であれば、電子契約サービス（クラウドサインやDocuSignなど）を導入することで、印刷・押印・郵送の手間がなくなり、契約完了までの期間が大幅に短縮されます。

          請求書であれば、システムから直接PDFを発行してメールで送付する仕組みにすることで、毎月の請求業務を効率化できます。電子帳簿保存法への対応も可能です。

          申請書であれば、紙の回覧をやめてオンラインでの承認フローに変更することで、テレワーク中でも滞りなく処理が進むようになります。

          どこから手をつければいいか分からない場合は、まず現状の紙業務を洗い出すところからお手伝いします。
        `,
      },
      {
        title: "社内ツールの整備",
        content: `
          社内の情報共有やコミュニケーションを効率化するためのツール導入をお手伝いします。

          「重要な連絡がメールに埋もれて見逃してしまう」「過去のやり取りを探すのに時間がかかる」といった課題がある場合、Slack（スラック）やMicrosoft Teams（チームズ）といったビジネスチャットツールの導入が有効です。

          チャットツールを入れただけでは定着しないことも多いため、「緊急の連絡はこのチャンネルに投稿する」「この種類の相談はこのチャンネルで行う」といったルール作りも一緒に行います。

          また、プロジェクトの進捗管理であればAsana（アサナ）やNotionなど、目的に応じた適切なツールをご提案します。
        `,
      },
      {
        title: "データの見える化",
        content: `
          売上、顧客数、在庫など、経営に必要な数字をひと目で確認できる仕組み（ダッシュボード）を作成します。

          現状、これらの数字を確認するために、複数のシステムを開いたり、Excelでデータを加工したりしている場合、かなりの時間がかかっているはずです。

          データを自動で集計し、グラフや表でリアルタイムに表示するダッシュボードを作成することで、「今月の売上は先月と比べてどうか」「どの商品が売れているか」といった情報をすぐに確認できるようになります。

          ツールとしては、Google データポータル（無料）やTableau（有料）などを使用します。お客様のデータの保管場所や予算に応じて、最適なものをご提案します。
        `,
      },
    ],
    tech: ["AWS", "GCP", "Salesforce", "kintone", "Notion", "Slack"],
  },
];

function ServiceSection({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-32"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-sm text-white uppercase tracking-widest">
            {service.subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
            {service.title}
          </h2>
          <p className="text-white mt-6 text-lg leading-relaxed">
            {service.intro}
          </p>
        </div>

        {/* Service Items */}
        <div className="space-y-12">
          {service.items.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/[0.07] transition-colors"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                {item.title}
              </h3>
              <div className="text-white leading-loose whitespace-pre-line">
                {item.content.trim()}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-12 text-center">
          <p className="text-white text-sm mb-4">主な使用技術</p>
          <div className="flex flex-wrap justify-center gap-3">
            {service.tech.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm rounded-full bg-white/10 text-white border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

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
        className="bg-gradient-to-r from-primary via-secondary to-accent"
      />

      <div className="min-h-screen bg-background pt-24 pb-16 px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            事業内容
          </h1>
          <p className="text-white text-lg max-w-2xl mx-auto">
            お客様のビジネス課題に合わせて、最適なソリューションをご提案します
          </p>
        </motion.div>

        {/* Services */}
        {services.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
      </div>
    </>
  );
}
