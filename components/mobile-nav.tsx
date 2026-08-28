"use client";

import * as React from "react";
import Link from "next/link";
import { Dialog } from "@base-ui-components/react/dialog";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { nav, site } from "@/lib/site";
import { LogoWordmark } from "./logo";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-surface-2 md:hidden"
        aria-label="メニューを開く"
      >
        <Menu className="h-5 w-5" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm transition-opacity duration-300 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
        <Dialog.Popup className="fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-sm flex-col bg-background px-6 py-6 shadow-2xl transition-transform duration-300 data-[ending-style]:translate-x-full data-[starting-style]:translate-x-full">
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <LogoWordmark className="text-xl" />
            </span>
            <Dialog.Close
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-surface-2"
              aria-label="メニューを閉じる"
            >
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>
          <nav className="mt-10 flex flex-col gap-1" aria-label="モバイルナビゲーション">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-3 py-4 text-lg font-medium text-foreground transition-colors hover:bg-surface-2"
              >
                {item.label}
                <ArrowUpRight className="h-4 w-4 text-muted-2" />
              </Link>
            ))}
          </nav>
          <div className="mt-auto border-t border-border pt-6 text-sm text-muted">
            <p>{site.email}</p>
            <p className="mt-1">{site.company.hours}</p>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
