import { Reveal } from "@/components/reveal";
import { Card, CardTitle, CardBody } from "@/components/ui/card";
import { CtaSection } from "@/components/cta-section";
import { services } from "@/lib/services";

export default function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="grid-bg absolute inset-0" aria-hidden />
        <div className="container-page relative">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-muted-2">
              Service
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              AIを、<span className="text-gradient">事業の武器にする。</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              いまのAIは、もう十分すぎるほど賢い。成果が出ないのは、使い方の設計が足りていないだけ。
              その設計を、数十社のAI事業を手がけてきた私たちがやります。
            </p>
          </Reveal>

          {/* index */}
          <Reveal delay={240}>
            <div className="mt-12 flex flex-wrap gap-2">
              {services.map((s) => {
                const [no, name] = s.label.split(" — ");
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs text-muted transition-colors hover:border-muted-2/40 hover:text-foreground"
                  >
                    <span className="font-mono text-muted-2">{no}</span>
                    {name}
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service sections */}
      <div className="container-page space-y-24 py-16 sm:space-y-32 sm:py-20">
        {services.map((service) => {
          const [no, name] = service.label.split(" — ");
          return (
            <section key={service.id} id={service.id} className="scroll-mt-28">
              <Reveal>
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm font-bold text-gradient">{no}</span>
                  <span className="h-px flex-1 bg-border" />
                  <span className="text-sm font-medium text-muted-2">{name}</span>
                </div>
              </Reveal>

              <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1.5fr]">
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <Reveal>
                    <h2 className="whitespace-pre-line text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </Reveal>
                </div>

                <div className="space-y-4">
                  {service.points.map((point, i) => (
                    <Reveal key={point.title} delay={i * 70}>
                      <Card>
                        <CardTitle>{point.title}</CardTitle>
                        <CardBody>{point.detail}</CardBody>
                      </Card>
                    </Reveal>
                  ))}
                  <Reveal>
                    <div className="rounded-card border border-foreground/15 bg-gradient-to-br from-surface-2 to-transparent p-6">
                      <p className="text-sm leading-relaxed text-foreground/90">{service.pain}</p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CtaSection />
    </>
  );
}
