import { Reveal } from "@/components/reveal";

export default function TermsContent() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="container-page relative">
        <Reveal>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">利用規約</h1>
        </Reveal>

        <div className="mt-12 max-w-3xl space-y-10">
          <Reveal>
            <h2 className="text-lg font-semibold tracking-tight">第1条（適用）</h2>
            <p className="mt-3 text-sm leading-loose text-muted">
              本規約は、株式会社ゆら（以下「当社」といいます）が提供するサービス（以下「本サービス」といいます）の利用に関する条件を定めるものです。
              ユーザーの皆様には、本規約に従って本サービスをご利用いただきます。
            </p>
          </Reveal>

          <Reveal>
            <h2 className="text-lg font-semibold tracking-tight">第2条（禁止事項）</h2>
            <p className="mt-3 text-sm leading-loose text-muted">
              ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-loose text-muted">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当社または第三者の知的財産権を侵害する行為</li>
              <li>当社または第三者の名誉・信用を毀損する行為</li>
              <li>本サービスの運営を妨害する行為</li>
              <li>その他、当社が不適切と判断する行為</li>
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="text-lg font-semibold tracking-tight">
              第3条（本サービスの提供の停止等）
            </h2>
            <p className="mt-3 text-sm leading-loose text-muted">
              当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく、
              本サービスの全部または一部の提供を停止または中断することができるものとします。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-loose text-muted">
              <li>本サービスにかかるシステムの保守点検または更新を行う場合</li>
              <li>
                地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
              </li>
              <li>その他、当社が本サービスの提供が困難と判断した場合</li>
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="text-lg font-semibold tracking-tight">第4条（免責事項）</h2>
            <p className="mt-3 text-sm leading-loose text-muted">
              当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意または重過失による場合を除き、
              一切の責任を負いません。
            </p>
          </Reveal>

          <Reveal>
            <h2 className="text-lg font-semibold tracking-tight">第5条（利用規約の変更）</h2>
            <p className="mt-3 text-sm leading-loose text-muted">
              当社は、必要と判断した場合には、ユーザーに通知することなく、いつでも本規約を変更することができるものとします。
              変更後の利用規約は、当社ウェブサイトに掲載した時点から効力を生じるものとします。
            </p>
          </Reveal>

          <Reveal>
            <h2 className="text-lg font-semibold tracking-tight">
              第6条（準拠法・管轄裁判所）
            </h2>
            <p className="mt-3 text-sm leading-loose text-muted">
              本規約の解釈にあたっては、日本法を準拠法とします。
              本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
            </p>
          </Reveal>

          <Reveal>
            <p className="text-right text-xs text-muted-2">制定日: 2026年1月1日</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
