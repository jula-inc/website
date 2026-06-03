import { Reveal } from "@/components/reveal";

const companyInfo = [
  { label: "商号", value: "株式会社JULA（株式会社ゆら）" },
  { label: "法人番号", value: "9440001009748" },
  { label: "代表者", value: "代表取締役/CEO 関口純平" },
  { label: "所在地", value: "〒503-0893 岐阜県大垣市南頰町四丁目28番地" },
  { label: "代表番号", value: "080-2726-1740" },
  { label: "メールアドレス", value: "info@jula.jp" },
  { label: "創業", value: "2026年1月14日" },
  { label: "主要取引銀行", value: "三井住友銀行" },
  { label: "営業時間", value: "平日 9:00 – 18:00" },
] as const;

export default function AboutContent() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="grid-bg absolute inset-0" aria-hidden />
        <div className="container-page relative">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-muted-2">
              About
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">会社概要</h1>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-12 pb-24 sm:py-16 sm:pb-32">
        <Reveal className="mx-auto max-w-3xl">
          <dl className="overflow-hidden rounded-card border border-border">
            {companyInfo.map((info, i) => (
              <div
                key={info.label}
                className={`grid grid-cols-1 gap-1 px-6 py-5 sm:grid-cols-[200px_1fr] sm:gap-6 ${
                  i % 2 === 0 ? "bg-surface" : "bg-background"
                }`}
              >
                <dt className="text-sm font-medium text-muted-2">{info.label}</dt>
                <dd className="text-sm leading-relaxed text-foreground tabular-nums">
                  {info.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>
    </>
  );
}
