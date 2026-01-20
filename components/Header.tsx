"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";

const navigation = [
  { name: "ホーム", href: "/" },
  { name: "事業内容", href: "/services" },
  { name: "代表紹介", href: "/ceo" },
  { name: "会社概要", href: "/about" },
  { name: "お問い合わせ", href: "/contact" },
];

// Animated path for hamburger
const Path = ({
  d,
  variants,
  transition,
}: {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="white"
    strokeLinecap="round"
    d={d}
    variants={variants}
    transition={transition}
  />
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[60] bg-background/90 backdrop-blur-sm border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold text-white hover:opacity-80 transition-opacity relative z-[60]"
            >
              株式会社ゆら
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-[60] w-10 h-10 flex items-center justify-center"
              aria-label="メニュー"
              initial={false}
              animate={isOpen ? "open" : "closed"}
            >
              <svg width="20" height="20" viewBox="0 0 20 20">
                <Path
                  variants={{
                    closed: { d: "M 2 4 L 18 4" },
                    open: { d: "M 4 16 L 16 4" },
                  }}
                />
                <Path
                  d="M 2 10 L 18 10"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  transition={{ duration: 0.1 }}
                />
                <Path
                  variants={{
                    closed: { d: "M 2 16 L 18 16" },
                    open: { d: "M 4 4 L 16 16" },
                  }}
                />
              </svg>
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-background z-[55] flex flex-col items-center justify-center pt-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex flex-col items-center gap-10"
            >
              {navigation.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className="text-3xl font-bold text-white hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
