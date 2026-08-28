import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site, footerLinks } from "@/lib/site";
import { LogoWordmark } from "./logo";
import { AddressLines } from "./address-lines";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-surface/60">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="flex items-center">
            <LogoWordmark className="text-2xl" />
          </div>
          <address className="mt-6 space-y-2 text-sm not-italic text-muted">
            <p className="flex items-start gap-2">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-foreground" />
              <span>
                <AddressLines />
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-foreground" />
              <a href={`tel:${site.tel}`} className="hover:text-foreground">
                TEL: {site.tel}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-foreground" />
              <a href={`mailto:${site.email}`} className="hover:text-foreground">
                Email: {site.email}
              </a>
            </p>
          </address>
          <p className="mt-4 text-sm text-muted-2">営業時間: {site.company.hours}</p>
        </div>

        <nav aria-label="フッターリンク">
          <h3 className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-muted-2">
            リンク
          </h3>
          <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-6 text-center text-xs text-muted-2">
          <p>{site.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
