import Link from "next/link";
import {
  ArrowRight,
  Check,
  FileText,
  MapPin,
  UserRound,
  Wallet,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

const facts = [
  {
    icon: FileText,
    label: "Contract",
    value: "業務委託",
    note: "契約は基本、業務委託のみ",
  },
  {
    icon: Wallet,
    label: "Reward",
    value: "高単価",
    note: "単価の高い案件から選べる",
  },
  {
    icon: MapPin,
    label: "Place",
    value: "西新宿・週2〜",
    note: "最低でも週2日は出社",
  },
  {
    icon: UserRound,
    label: "Who",
    value: "25歳以下・即戦力",
    note: "未経験の育成枠はありません",
  },
];

const business = [
  {
    tag: "自社サービス",
    title: "アダルト領域の、ファンクラブサービス。",
    body: "クリエイターとファンをつなぐサービスを、自社で運営しています。サービス名はここでは出していませんが、面談で数字ごとお見せします。",
    extra:
      "開発だけの関わり方はしていません。何をつくるかの決定、価格の設計、集客、SNS運用まで、事業の全部に入ってもらいます。「マーケティングもやりたい」は、むしろ歓迎です。",
  },
  {
    tag: "受託開発",
    title: "単価の高い案件が、さばききれずに残っている。",
    body: "AIを前提にした開発の相談が、処理しきれない量で来ています。アダルト領域の案件も、一般の事業会社からの案件も両方あります。条件を満たす人には、単価の高いものから選んでもらいます。",
    extra:
      "言われた通りに作るだけの案件は受けていません。要件を決めるところから相手と話す場面が多くなります。やりたい領域があれば、先に言ってください。そこに寄せます。",
  },
];

const disqualify = [
  {
    title: "エンジニアとしての実務経験がない方",
    body: "育成の枠を持っていません。入った初日から、自分で判断して動いてもらいます。",
  },
  {
    title: "AIを日常的に使っていない方",
    body: "Claude Code、Cursor、生成AI。すでに使っている前提で話が進みます。これから覚えます、では速度が合いません。",
  },
  {
    title: "週1しか出社できない方",
    body: "最低でも週2日、西新宿に来られることが条件です。完全リモートの相談は受けていません。",
  },
  {
    title: "技術だけをやりたい方",
    body: "仕様が降りてくるのを待つ仕事ではありません。数字を見て、何をつくるかを決めるところからやってもらいます。",
  },
];

const inReturn = [
  "単価の高い案件を、選べるだけ持っています",
  "自社サービスに、事業側から入れます",
  "25歳のうちに、事業をひとつ持てます",
  "やりたいことを言ってもらえれば、そこに寄せます",
];

const persona = [
  {
    title: "AIを、道具として使い倒している",
    body: "Claude Code、Cursor、生成AI。すでに自分の生産量を何倍かにできている人。",
  },
  {
    title: "ビジネス側から、技術を考えられる",
    body: "「どうつくるか」の前に「なぜつくるか」を詰められる人。単価やマーケティングの話に、自分から入っていける人。",
  },
  {
    title: "「誰かがやる」と思わない",
    body: "落ちているボールを拾える人。指示がないと止まってしまう人には、この環境はしんどいと思います。",
  },
  {
    title: "アダルトを、フラットに見られる",
    body: "偏見も、過剰な思い入れも要りません。ひとつの市場として数字で見られるか。ここは譲れません。",
  },
];

const conditions = [
  { label: "契約形態", value: "業務委託（基本）" },
  {
    label: "報酬",
    value:
      "時給制。相場より高く設定しています。案件の単価と成果に応じて、別途還元します。",
  },
  { label: "勤務地", value: site.company.address },
  {
    label: "勤務形態",
    value:
      "週2日以上、西新宿のオフィスに出社。残りの日の働き方は相談できます。完全リモートは不可。",
  },
  { label: "稼働", value: "週の日数・時間は相談。副業も可。" },
  {
    label: "応募条件",
    value:
      "25歳以下／エンジニアとしての実務経験（未経験不可）／AIを日常的に使えること",
  },
];

const steps = [
  {
    step: "01",
    title: "LINEで連絡",
    body: "履歴書より先に、GitHubや作ったものを見せてください。土日でも深夜でも、基本すぐ返します。",
  },
  {
    step: "02",
    title: "西新宿で会う",
    body: "オフィスで1時間ほど。自社サービスの中身と数字を、その場で出します。",
  },
  {
    step: "03",
    title: "少し、一緒につくる",
    body: "実際の課題を一緒に手を動かして。合うかどうかを、お互いに確認します。",
  },
  {
    step: "04",
    title: "契約",
    body: "合えば最短で。稼働の始め方は、そちらの都合に合わせます。",
  },
];

export const faqs = [
  {
    q: "未経験ですが、応募できますか。",
    a: "申し訳ありませんが、お受けしていません。育成の枠を持っておらず、入った初日から自分で判断して動ける方に限っています。",
  },
  {
    q: "アダルト業界での経験は必要ですか。",
    a: "不要です。求めているのは業界経験ではなく、エンジニアとしての実務経験です。業界知識は入ってから覚えれば十分間に合います。",
  },
  {
    q: "自社サービスは、具体的にどんなものですか。",
    a: "アダルト領域のファンクラブサービスです。サービス名はここでは出していませんが、面談で数字も含めてお見せします。",
  },
  {
    q: "週2出社の、残りの日はどうなりますか。",
    a: "相談で決めます。リモートで問題ない日は無理に来なくて構いません。ただし、完全リモートでの契約は受けていません。",
  },
  {
    q: "副業でも可能ですか。",
    a: "可能です。週2日の出社が守れることが条件になります。",
  },
  {
    q: "報酬はどれくらいですか。",
    a: "時給は相場より高く設定しています。案件と稼働条件で変わるため、具体的な金額は面談でお伝えします。",
  },
  {
    q: "やりたい領域の希望は、通りますか。",
    a: "通ります。むしろ最初に聞かせてください。人数が少ないぶん、やりたいと言ったことがそのまま担当になります。自社サービス側に寄せることも、受託の特定領域に寄せることもできます。",
  },
  {
    q: "なぜ25歳以下なんですか。",
    a: "短期の人員補充ではなく、事業を任せられるところまで一緒に行きたいからです。その前提で考えると、この線になりました。",
  },
];

function PrimaryCta({ label }: { label: string }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {site.lineUrl && (
        <Button asChild size="lg">
          <a href={site.lineUrl} target="_blank" rel="noopener noreferrer">
            {label} <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      )}
      <Button asChild size="lg" variant={site.lineUrl ? "outline" : "primary"}>
        <Link href="/contact">フォームから問い合わせる</Link>
      </Button>
    </div>
  );
}

export default function RecruitContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="grid-bg absolute inset-0" aria-hidden />
        <div className="container-page relative">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-muted-2">
              Recruit 2026
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl">
              25歳までに、
              <br />
              <span className="text-gradient">事業をひとつ持つ。</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              ゆらは、アダルト領域で自社サービスを運営している会社です。未経験の受け入れはしていません。
              AIを武器に自分で手を動かせて、事業の数字まで追える人と、一緒に事業をつくりたい。
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10">
              <PrimaryCta label="LINEで話を聞く" />
            </div>
          </Reveal>

          {/* Facts */}
          <div className="mt-16 grid gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f, i) => (
              <Reveal key={f.label} delay={i * 70}>
                <div className="h-full bg-surface px-6 py-7">
                  <div className="flex items-center gap-2 text-muted-2">
                    <f.icon className="h-4 w-4" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em]">
                      {f.label}
                    </span>
                  </div>
                  <p className="mt-3 text-xl font-bold tracking-tight">{f.value}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{f.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Message */}
      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-loose text-muted sm:text-lg">
          <Reveal>
            <p className="font-semibold text-foreground">
              先に、いちばん厳しいところを書きます。
            </p>
          </Reveal>
          <Reveal>
            <p>
              うちは、未経験を育てる体力をまだ持っていません。入ってすぐ自分で判断して手を動かせる人だけを取っています。研修もマニュアルもないので、そこを期待して来ると、お互いに不幸になります。
            </p>
          </Reveal>
          <Reveal>
            <p>
              そして事業の中身はアダルトです。人に言いづらい場面もあります。それでも来てほしいのは、この市場が一番速く事業を覚えられる場所だからです。広告も決済も制限だらけで、まともにやろうとすると集客も運用も全部自分たちで作ることになる。結果として、20代のうちに事業を丸ごと見る経験が手に入ります。よその会社で同じ経験をしようとしたら、10年はかかると思います。
            </p>
          </Reveal>
          <Reveal>
            <p>
              私も毎日コードを書いています。年功も、社内政治もありません。見ているのは、速くていいものを出せるかどうかだけです。
            </p>
          </Reveal>
          <Reveal>
            <p>
              うちは若くて、人の少ない会社です。制度も整っていません。ただ、それは裏を返せば、入った瞬間から事業の真ん中に立てるということです。人数が少ないので、やりたいと言ったことが、そのまま担当になります。
            </p>
          </Reveal>
          <Reveal>
            <p className="font-semibold text-foreground">
              ひとつだけ約束します。入って後悔はさせません。ここで過ごす時間を、人生でいちばん成長した期間にします。根拠は、私自身が今もそれを続けているからです。
            </p>
          </Reveal>
          <Reveal>
            <p>
              この若さを武器に、最強の仲間と事業をつくりたいと思っています。
            </p>
          </Reveal>
          <Reveal>
            <p className="text-sm text-muted-2">
              株式会社ゆら 代表取締役 CEO ／ 関口 純平
            </p>
          </Reveal>
        </div>
      </section>

      {/* Business */}
      <section className="relative py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we do"
            title="自社サービスと、受託。両方あります。"
            description="どちらにも、事業側から入れます。コードを書くだけの関わり方はしていません。"
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {business.map((b, i) => (
              <Reveal key={b.tag} delay={i * 100}>
                <div className="flex h-full flex-col rounded-card border border-border bg-surface p-8">
                  <span className="w-fit rounded-full border border-border bg-background px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-2">
                    {b.tag}
                  </span>
                  <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight sm:text-2xl">
                    {b.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{b.body}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{b.extra}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements: NG then upside */}
      <section className="relative py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Requirements"
            title="先に、お断りしておきます。"
            description="条件は厳しめです。次のどれかに当てはまる方は、たぶん合いません。"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {disqualify.map((d, i) => (
              <Reveal key={d.title} delay={(i % 2) * 80}>
                <div className="flex h-full gap-4 rounded-card border border-border bg-surface p-6">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted-2">
                    <X className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight">{d.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{d.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-6 rounded-card border border-border bg-gradient-to-br from-surface to-surface-2 p-8 sm:p-10">
              <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                逆に、ここを満たせるなら。
              </h3>
              <ul className="mt-6 space-y-3">
                {inReturn.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-deep text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground sm:text-base">
                      {r}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Persona */}
      <section className="relative py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Who we want"
            title="こんな人を、探しています。"
            description="スキルの一覧より、この4つです。全部に当てはまるなら、話が早いと思います。"
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

      {/* Conditions */}
      <section className="relative py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Conditions"
            title="条件は、曖昧にしません。"
            description="入ってから話が違う、をなくしたいので、先に出しておきます。"
          />
          <div className="mt-12 max-w-3xl divide-y divide-border overflow-hidden rounded-card border border-border">
            {conditions.map((c) => (
              <Reveal key={c.label}>
                <div className="flex flex-col gap-1 bg-surface px-6 py-5 sm:flex-row sm:gap-8 sm:px-8">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-2 sm:w-32 sm:shrink-0 sm:pt-1">
                    {c.label}
                  </span>
                  <span className="text-sm leading-relaxed text-foreground">{c.value}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-5 max-w-3xl text-xs leading-relaxed text-muted-2">
              ※
              年齢の条件について：短期の人員補充ではなく、事業を任せられる段階まで長く一緒に取り組むことを前提とした募集のため、若年層を対象としています。
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Process"
            title="話して、つくって、決める。"
            description="何次面接もありません。途中で辞退しても、まったく問題ありません。"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 80}>
                <div className="h-full rounded-card border border-border bg-surface p-7">
                  <span className="font-mono text-3xl font-bold text-gradient">{s.step}</span>
                  <h3 className="mt-4 text-base font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="FAQ" title="よくある質問。" />
          <div className="mt-12 max-w-3xl divide-y divide-border overflow-hidden rounded-card border border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-surface">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-sm font-semibold tracking-tight sm:px-8 sm:text-base [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="shrink-0 font-mono text-lg text-muted-2 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 text-sm leading-relaxed text-muted sm:px-8">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="container-page relative">
          <Reveal className="relative overflow-hidden rounded-card border border-border bg-gradient-to-br from-surface to-surface-2 px-8 py-16 text-center sm:px-12 sm:py-20">
            <div className="grid-bg absolute inset-0 opacity-70" aria-hidden />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                最強の仲間と、
                <br className="sm:hidden" />
                <span className="text-gradient">事業をつくりたい。</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
                若くて、人の少ない会社です。だからこそ、入った人がそのまま事業の中心に立てます。
                <br className="hidden sm:block" />
                LINEにひとこと送ってもらえれば、代表の関口が直接返信します。土日も深夜も、基本すぐ返します。
              </p>
              <div className="mt-10 flex justify-center">
                <PrimaryCta label="LINEで話を聞く" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
