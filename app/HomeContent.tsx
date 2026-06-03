import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";

const stats = [
  { value: "2日", label: "で、まずPoC" },
  { value: "1ヶ月", label: "で、MVPをリリース" },
  { value: "0→1", label: "の開発に特化" },
  { value: "24/7", label: "止まらないAIを実装" },
];

const reasons = [
  {
    icon: Zap,
    title: "売るのは、AIではなく利益。",
    body: "ツールを入れただけでは何も変わらない。自動化で固定費を半分に。エージェントを24時間働かせる。予測で競合の一手先を取る。技術を、そのまま数字に変える設計をする。",
  },
  {
    icon: Sparkles,
    title: "技術と事業、両方を描ける。",
    body: "コードを書ける人は多い。だが「どう稼ぐか」まで描ける人は少ない。数十社のAI新規事業と、自社プロダクトの黒字化。その両輪があるから、投資はちゃんと回収できる。",
  },
  {
    icon: ShieldCheck,
    title: "議論より、動くもの。",
    body: "一時間の会議は、三十分で動かしたものに負ける。完璧を待たず、出して、反応を見て、直す。最短2日でPoC、1ヶ月でMVP。速さそのものが、競争力になる。",
  },
];

const approach = [
  {
    step: "01",
    title: "課題を見極める",
    body: "業務を可視化し、AIが最も高いROIを生む箇所を特定する。「何ができるか」ではなく「何をすれば勝てるか」から逆算する。",
  },
  {
    step: "02",
    title: "2日でPoC",
    body: "技術的に可能か、事業として効くか。まず最短で動くものをつくって確かめる。大企業が稟議を回す前に、もう答えが出ている。",
  },
  {
    step: "03",
    title: "1ヶ月でMVP",
    body: "ユーザーに当て、データで改善する。本番デプロイ、監視、運用、KPI設計まで一気に。",
  },
  {
    step: "04",
    title: "成果が出るまで走る",
    body: "検証で終わらせない。事業として回るまで、自分たちで手を動かしてやり切る。数字が動くまで、離れない。",
  },
];

export default function HomeContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="grid-bg absolute inset-0" aria-hidden />

        <div className="container-page relative">
          <Reveal>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
              AIを、
              <br />
              <span className="text-gradient">事業の武器に。</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              賢いAIを、誰より速く形にする。それだけで、勝てる時代になった。
              <br className="hidden sm:block" />
              最短2日でPoC、1ヶ月でMVP。考えるより先に、動かす。
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  無料で相談する <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">事業内容を見る</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-background px-6 py-8">
                  <dt className="text-3xl font-black tracking-tight text-gradient sm:text-4xl md:text-5xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-sm text-muted">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Why us */}
      <section className="relative py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why us"
            title="導入支援ではない。AIで勝つ側に立たせる。"
            description="ツールを入れて満足、では何も変わらない。事業のどこにAIを埋め込めば利益が動くのか。そこだけを、本気で設計する。"
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 100}>
                <div className="card-surface gradient-border flex h-full flex-col rounded-card p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-deep text-white">
                    <reason.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{reason.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="relative py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="Approach"
            title="最短2日でPoC、1ヶ月でMVP。"
            description="アイデアを最速で事業に変える。検証で終わらず、成果が出るまで一緒に走る。"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((item, i) => (
              <Reveal key={item.step} delay={i * 90}>
                <div className="relative h-full rounded-card border border-border bg-surface p-7">
                  <span className="font-mono text-3xl font-bold text-gradient">{item.step}</span>
                  <h3 className="mt-4 text-base font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder teaser */}
      <section className="relative py-24 sm:py-32">
        <div className="container-page">
          <Reveal className="card-surface gradient-border overflow-hidden rounded-card p-8 sm:p-12">
            <div className="grid items-center gap-10 md:grid-cols-[1fr_1.4fr]">
              <div className="relative">
                <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-2xl border border-border">
                  <Image
                    src="/sekiguchi.png"
                    alt="関口 純平 - 株式会社ゆら 代表取締役CEO"
                    fill
                    sizes="(max-width: 768px) 80vw, 320px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-muted-2">
                  Message
                </p>
                <blockquote className="mt-5 text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                  AIが、頭が悪いわけじゃない。使い方が、悪いだけだ。
                </blockquote>
                <p className="mt-6 text-sm leading-relaxed text-muted">
                  AIの賢さは、もう誰の手にもある。差がつくのは、使い方だけです。
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div>
                    <p className="font-semibold">関口 純平</p>
                    <p className="text-sm text-muted">代表取締役 CEO</p>
                  </div>
                  <Button asChild variant="outline" size="sm" className="ml-auto">
                    <Link href="/ceo">
                      代表メッセージを読む <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
