"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

// タイプライター効果
function useTypewriter(text: string, speed: number = 80, delay: number = 0) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;

    const startTyping = () => {
      const type = () => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(type, speed);
        } else {
          setIsComplete(true);
        }
      };
      type();
    };

    timeout = setTimeout(startTyping, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayText, isComplete };
}

// ナビゲーションリンク
const navLinks = [
  { text: "事業内容", href: "/services", color: "#06b6d4" },
  { text: "代表紹介", href: "/ceo", color: "#8b5cf6" },
  { text: "会社概要", href: "/about", color: "#f43f5e" },
  { text: "お問い合わせ", href: "/contact", color: "#06b6d4" },
];

const subLinks = [
  { text: "プライバシーポリシー", href: "/privacy" },
  { text: "利用規約", href: "/terms" },
  { text: "特定商取引法", href: "/legal" },
];

// タイプライターテキストコンポーネント
function TypewriterText({
  text,
  speed = 80,
  delay = 0,
  className = "",
  onComplete,
}: {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}) {
  const { displayText, isComplete } = useTypewriter(text, speed, delay);

  useEffect(() => {
    if (isComplete && onComplete) {
      onComplete();
    }
  }, [isComplete, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.4, repeat: Infinity }}
          className="inline-block w-[2px] h-[0.9em] bg-current ml-0.5 align-middle"
        />
      )}
    </span>
  );
}

export default function HomeContent() {
  const [mounted, setMounted] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <div className="bg-background min-h-screen pt-16 flex flex-col overflow-hidden">
      <section className="flex-1 flex items-center justify-center relative h-[calc(100vh-64px)] max-h-[calc(100vh-64px)]">
        {/* 背景グリッド */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* グロー背景 */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: 850,
            height: 700,
            background:
              "radial-gradient(circle, rgba(6,182,212,0.05) 0%, rgba(139,92,246,0.03) 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* メインコンテンツ */}
        <div className="relative z-30 text-center px-4">
          {/* 中央テキスト */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-4 md:mb-6">
              <span
                className="bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 bg-clip-text text-transparent"
                style={{
                  filter: "drop-shadow(0 0 30px rgba(6,182,212,0.4))",
                }}
              >
                {mounted && (
                  <TypewriterText
                    text="考えるな、動け。"
                    speed={100}
                    delay={400}
                    onComplete={() => setShowSubtitle(true)}
                  />
                )}
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: showSubtitle ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-medium h-[1.5em] md:h-[1.8em] mb-12 md:mb-16"
            style={{ textShadow: "0 0 30px rgba(0,0,0,0.9)" }}
          >
            {showSubtitle && (
              <>
                <TypewriterText
                  text="思考はAIへ。"
                  speed={80}
                  delay={150}
                  className="text-cyan-400"
                />
                <TypewriterText
                  text="行動はお前へ。"
                  speed={80}
                  delay={900}
                  className="text-pink-400"
                />
              </>
            )}
          </motion.p>

          {/* ナビゲーションリンク */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showSubtitle ? 1 : 0, y: showSubtitle ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-6 py-3 text-lg md:text-xl font-bold text-white transition-all duration-300 hover:scale-105"
                style={{
                  textShadow: "0 0 10px rgba(255,255,255,0.1)",
                }}
              >
                <span
                  className="relative z-10 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text"
                  style={{
                    // @ts-expect-error CSS custom property
                    "--hover-color": link.color,
                  }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget;
                    target.style.backgroundImage = `linear-gradient(to right, ${link.color}, ${link.color})`;
                    target.style.webkitBackgroundClip = "text";
                    target.style.color = "transparent";
                    target.style.textShadow = `0 0 20px ${link.color}, 0 0 40px ${link.color}`;
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget;
                    target.style.backgroundImage = "none";
                    target.style.webkitBackgroundClip = "unset";
                    target.style.color = "white";
                    target.style.textShadow = "0 0 10px rgba(255,255,255,0.1)";
                  }}
                >
                  {link.text}
                </span>
              </Link>
            ))}
          </motion.nav>

          {/* サブリンク */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showSubtitle ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-white/50"
          >
            {subLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white/80 transition-colors duration-200"
              >
                {link.text}
              </Link>
            ))}
          </motion.div>
        </div>

        {/* 装飾パーティクル */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {mounted &&
            [...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  left: `${10 + (i * 18) % 80}%`,
                  top: `${15 + (i * 20) % 70}%`,
                  background:
                    i % 3 === 0
                      ? "#06b6d4"
                      : i % 3 === 1
                        ? "#8b5cf6"
                        : "#f43f5e",
                  boxShadow: `0 0 ${3 + (i % 3) * 2}px currentColor`,
                }}
                animate={{
                  opacity: [0.04, 0.2, 0.04],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 7 + (i % 4),
                  repeat: Infinity,
                  delay: i * 0.8,
                }}
              />
            ))}
        </div>
      </section>
    </div>
  );
}
