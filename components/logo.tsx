import { cn } from "@/lib/utils";

/**
 * 株式会社ゆら ブランドマーク。
 * 上下を逆にした「A」（∀）の横棒を脚の外へはみ出させた、スピード感のあるモノマーク。
 * currentColor を継承するため text-foreground（チャコール）で描画される。
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("text-foreground", className)}
      fill="none"
      role="img"
      aria-label="株式会社ゆら"
    >
      <g
        stroke="currentColor"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M28 22 L50 82 L72 22" />
        <path d="M26.8 46 L73.2 46" />
      </g>
    </svg>
  );
}
