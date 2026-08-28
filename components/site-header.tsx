"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { nav } from "@/lib/site";
import { Button } from "./ui/button";
import { MobileNav } from "./mobile-nav";
import { LogoWordmark } from "./logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="group flex items-center">
          <LogoWordmark className="text-2xl transition-transform group-hover:-translate-y-0.5" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.slice(0, -1).map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active ? "text-foreground" : "text-muted hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="/contact">お問い合わせ</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
