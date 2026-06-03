import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const persona = [
  {
    title: "自分で決めて、自分でつくる",
    body: "指示を待つのではなく、課題を見つけて手を動かせる。「誰かがやる」ではなく「自分がやる」と思える人。",
  },
  {
    title: "AIを、道具として使い倒す",
    body: "Cursor、Claude、Copilot。新しいAIをためらわず取り入れ、自分の生産性を何倍にもできる人。",
  },
  {
    title: "完璧より、まず一歩",
    body: "80%で出して、反応を見て直す。立ち止まって悩むより、動かして確かめるスピードを楽しめる人。",
  },
  {
    title: "事業を、自分ごとにできる",
    body: "「技術のため」ではなく「事業を伸ばすため」に考えられる。つくったものが数字に効くまで見届けたい人。",
  },
];

const howWeWork = [
  {
    title: "フルリモート・コアタイムなし",
    body: "どこに住んでいても、何時に働いても。成果さえ出れば、場所も時間も自由です。",
  },
  {
    title: "会議は最小、実装は最大",
    body: "定例会議、日報、何段もの承認フロー。極力なくします。コードを書く時間を、何より守ります。",
  },
  {
    title: "実力が、そのまま評価",
    body: "社長が技術を直接見ます。年功序列も、社内政治もゼロ。できる人が、正当に評価されます。",
  },
  {
    title: "最新を、ためらわず使う",
    body: "いい技術が出たら、まず試す。「これを使いたい」という提案を、いつでも歓迎します。",
  },
];

const steps = [
  {
    step: "01",
    title: "カジュアル面談",
    body: "まずは雑談ベースで。お互いの雰囲気と、やりたいことを知るところから。",
  },
  {
    step: "02",
    title: "一緒に、少しつくる",
    body: "簡単な課題やペアプロで、実際に手を動かす感覚を確かめ合います。テストではなく、相性確認です。",
  },
  {
    step: "03",
    title: "オファー",
    body: "フィットすれば、最短で。副業・学生インターンからのスタートも歓迎します。",
  },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Claude Code",
  "Codex",
  "Cursor",
  "GitHub Copilot",
  "Claude",
  "OpenAI",
  "Vercel",
  "AWS",
];

const positions = [
  "AIエンジニア（エージェント・RAG・音声/マルチモーダル）",
  "フルスタックエンジニア（0→1プロダクト開発）",
  "業務委託・副業・学生インターンも歓迎",
];

export default function RecruitContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="grid-bg absolute inset-0" aria-hidden />
        <div className="container-page relative">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-muted-2">
              Recruit
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl">
              AI時代の速さで、
              <br />
              <span className="text-gradient">つくる人へ。</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              ゆらは、思いついたその日に試すチーム。社長も、毎日コードを書いています。
              手を動かす人だけを、募集します。
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link href="/contact">
                  カジュアル面談から話す <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Message */}
      <section className="container-page py-12 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-loose text-muted sm:text-lg">
          <Reveal>
            <p className="font-semibold text-foreground">
              正直、ゆらはまだ小さな会社です。
            </p>
          </Reveal>
          <Reveal>
            <p>
              制度も知名度も、これからつくる段階。でも、その分だけ裁量は大きい。あなたが書いたコードは翌日にはプロダクトになり、あなたの提案が、そのまま会社の方針になることもあります。
            </p>
          </Reveal>
          <Reveal>
            <p>
              私は今も毎日コードを書いています。だから、技術を軽く見る評価も、社内政治もありません。見るのは一つだけ。速く、いいものをつくれるか。それに尽きます。
            </p>
          </Reveal>
          <Reveal>
            <p className="text-sm text-muted-2">株式会社ゆら 代表取締役 CEO ／ 関口 純平</p>
          </Reveal>
        </div>
      </section>

      {/* Persona */}
      <section className="relative py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Who we want"
            title="こんな人と、働きたい。"
            description="スキルよりも、まずスタンス。次の4つに「自分のことだ」と感じたら、きっと合います。"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {persona.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 80}>
                <div className="flex h-full gap-4 rounded-card border border-border bg-surface p-6">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-deep text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="relative py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="How we work" title="ゆらの働き方" />
          <div className="mt-12 max-w-3xl divide-y divide-border overflow-hidden rounded-card border border-border">
            {howWeWork.map((w) => (
              <Reveal key={w.title}>
                <div className="bg-surface px-6 py-6 sm:px-8">
                  <h3 className="text-base font-semibold tracking-tight">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Selection */}
      <section className="relative py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Process"
            title="選考は、話して、つくって、決める。"
            description="形式的な何次面接もありません。お互いに「一緒にやれそう」を確かめる、シンプルな流れです。"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 90}>
                <div className="relative h-full rounded-card border border-border bg-surface p-7">
                  <span className="font-mono text-3xl font-bold text-gradient">{s.step}</span>
                  <h3 className="mt-4 text-base font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Positions & stack */}
      <section className="relative py-16 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">募集ポジション</h2>
            <ul className="mt-6 space-y-3">
              {positions.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-foreground">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-2" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">ふだん使う技術</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-surface px-4 py-1.5 font-mono text-xs text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-2">
              ※ 使いたい技術があれば、提案してください。新しい挑戦は歓迎です。
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="container-page relative">
          <Reveal className="relative overflow-hidden rounded-card border border-border bg-gradient-to-br from-surface to-surface-2 px-8 py-16 text-center sm:px-12 sm:py-20">
            <div className="grid-bg absolute inset-0 opacity-70" aria-hidden />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                まずは、<span className="text-gradient">話しませんか。</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
                応募も、ゆるい相談も大歓迎です。
                <br className="hidden sm:block" />
                お問い合わせフォームから「採用」とご記入のうえ、お送りください。
              </p>
              <div className="mt-10">
                <Button asChild size="lg">
                  <Link href="/contact">
                    話を聞いてみる <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
