import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-page relative">
        <Reveal className="relative overflow-hidden rounded-card border border-border bg-gradient-to-br from-surface to-surface-2 px-8 py-16 text-center sm:px-12 sm:py-20">
          <div className="grid-bg absolute inset-0 opacity-70" aria-hidden />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              AIで何かやりたい。
              <br />
              でも、<span className="text-gradient">何から始めればいい？</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              その状態から、形にします。最短2日でPoCを出し、1ヶ月でMVPをリリースする。
              <br className="hidden sm:block" />
              まずは、今の課題を聞かせてください。
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  無料で相談する <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">事業内容を見る</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
