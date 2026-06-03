import { Reveal } from "@/components/reveal";

export default function PrivacyContent() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="container-page relative">
        <Reveal>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            プライバシーポリシー
          </h1>
        </Reveal>

        <div className="mt-12 max-w-3xl space-y-10">
          <Reveal>
            <h2 className="text-lg font-semibold tracking-tight">
              1. 個人情報の収集について
            </h2>
            <p className="mt-3 text-sm leading-loose text-muted">
              当社は、お客様から個人情報をご提供いただく場合、その利用目的を明示し、適法かつ公正な手段によって収集いたします。
            </p>
          </Reveal>

          <Reveal>
            <h2 className="text-lg font-semibold tracking-tight">
              2. 個人情報の利用について
            </h2>
            <p className="mt-3 text-sm leading-loose text-muted">
              当社は、お客様からご提供いただいた個人情報を、以下の目的で利用いたします。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-loose text-muted">
              <li>お問い合わせへの回答</li>
              <li>サービスの提供・運営</li>
              <li>新サービス・キャンペーン等のご案内</li>
              <li>その他、お客様に事前にお知らせした目的</li>
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="text-lg font-semibold tracking-tight">
              3. 個人情報の第三者提供について
            </h2>
            <p className="mt-3 text-sm leading-loose text-muted">
              当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
            </p>
          </Reveal>

          <Reveal>
            <h2 className="text-lg font-semibold tracking-tight">
              4. 個人情報の管理について
            </h2>
            <p className="mt-3 text-sm leading-loose text-muted">
              当社は、個人情報の漏洩、滅失、毀損等を防止するため、適切な安全管理措置を講じます。
            </p>
          </Reveal>

          <Reveal>
            <h2 className="text-lg font-semibold tracking-tight">
              5. 個人情報の開示・訂正・削除について
            </h2>
            <p className="mt-3 text-sm leading-loose text-muted">
              お客様がご自身の個人情報の開示、訂正、削除等を希望される場合は、当社までご連絡ください。
              本人確認の上、適切に対応いたします。
            </p>
          </Reveal>

          <Reveal>
            <h2 className="text-lg font-semibold tracking-tight">6. お問い合わせ窓口</h2>
            <p className="mt-3 text-sm leading-loose text-muted">
              個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
            </p>
            <address className="mt-4 rounded-card border border-border bg-surface p-5 not-italic">
              <p className="text-sm leading-relaxed text-foreground">
                株式会社ゆら
                <br />
                〒503-0893 岐阜県大垣市南頰町四丁目28番地
                <br />
                TEL: 080-2726-1740
                <br />
                Email: info@jula.jp
              </p>
            </address>
          </Reveal>

          <Reveal>
            <p className="text-right text-xs text-muted-2">制定日: 2026年1月1日</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
