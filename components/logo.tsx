import { Roboto_Slab } from "next/font/google";
import { cn } from "@/lib/utils";

const logoFont = Roboto_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

/**
 * 株式会社ゆら ワードマーク。
 * SONY のような文字だけのロゴ。スラブセリフ体の「JULA」。
 * currentColor を継承するため text-foreground（チャコール）で描画される。
 */
export function LogoWordmark({ className }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="株式会社ゆら"
      className={cn(
        logoFont.className,
        "select-none leading-none tracking-[0.08em] text-foreground",
        className
      )}
    >
      JULA
    </span>
  );
}
