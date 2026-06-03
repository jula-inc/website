import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";

export default function ContactContent() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="container-page relative">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-muted-2">
            Contact
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">お問い合わせ</h1>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-medium text-foreground">お問い合わせ先</h2>
                <div className="mt-5 space-y-6">
                  <ContactItem icon={MapPin} label="所在地">
                    〒503-0893 岐阜県大垣市南頰町四丁目28番地
                  </ContactItem>
                  <ContactItem icon={Phone} label="電話番号">
                    <a
                      href="tel:080-2726-1740"
                      className="hover:text-foreground hover:underline"
                    >
                      080-2726-1740
                    </a>
                  </ContactItem>
                  <ContactItem icon={Mail} label="メールアドレス">
                    <a
                      href="mailto:info@jula.jp"
                      className="hover:text-foreground hover:underline"
                    >
                      info@jula.jp
                    </a>
                  </ContactItem>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-foreground">営業時間</h2>
                <div className="mt-5">
                  <ContactItem icon={Clock} label="平日 9:00 – 18:00">
                    土日祝日はお休みをいただいております
                  </ContactItem>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-medium text-muted-2">{label}</p>
        <div className="mt-1 text-sm leading-relaxed text-foreground">{children}</div>
      </div>
    </div>
  );
}
