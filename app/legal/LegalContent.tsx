import { Reveal } from "@/components/reveal";

const lawInfo = [
  { label: "販売業者", value: "株式会社ゆら" },
  { label: "運営統括責任者", value: "代表取締役 関口純平" },
  { label: "所在地", value: "〒503-0893 岐阜県大垣市南頰町四丁目28番地" },
  { label: "電話番号", value: "080-2726-1740" },
  { label: "メールアドレス", value: "info@jula.jp" },
  { label: "販売価格", value: "各商品・サービスページに記載" },
  { label: "商品代金以外の必要料金", value: "消費税、送料（別途記載）" },
  { label: "支払方法", value: "銀行振込、クレジットカード決済" },
  { label: "支払時期", value: "各商品・サービスページに記載" },
  { label: "商品の引渡し時期", value: "各商品・サービスページに記載" },
  {
    label: "返品・キャンセル",
    value: "商品の性質上、お客様都合による返品・キャンセルはお受けできません",
  },
] as const;

export default function LegalContent() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="container-page relative">
        <Reveal>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            特定商取引法に基づく表記
          </h1>
        </Reveal>

        <Reveal delay={80} className="mt-12 max-w-3xl">
          <dl className="overflow-hidden rounded-card border border-border">
            {lawInfo.map((info, i) => (
              <div
                key={info.label}
                className={`grid grid-cols-1 gap-1 px-6 py-5 sm:grid-cols-[220px_1fr] sm:gap-6 ${
                  i % 2 === 0 ? "bg-surface" : "bg-background"
                }`}
              >
                <dt className="text-sm font-medium text-muted-2">{info.label}</dt>
                <dd className="text-sm leading-relaxed text-foreground">{info.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-right text-sm text-muted-2">最終更新日: 2026年1月1日</p>
        </Reveal>
      </div>
    </section>
  );
}
