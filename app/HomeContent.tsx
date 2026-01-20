"use client";

import { useEffect, useState, useRef, useCallback } from "react";
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

interface WordData {
  text: string;
  href: string;
  size: number;
  color: string;
}

// 全ページ + 重要ワード
const words: WordData[] = [
  // 全ページリンク（必須）
  { text: "事業内容", href: "/services", size: 1.4, color: "#06b6d4" },
  { text: "代表紹介", href: "/ceo", size: 1.4, color: "#8b5cf6" },
  { text: "会社概要", href: "/about", size: 1.3, color: "#f43f5e" },
  { text: "お問い合わせ", href: "/contact", size: 1.3, color: "#06b6d4" },
  { text: "プライバシーポリシー", href: "/privacy", size: 1.0, color: "#8b5cf6" },
  { text: "利用規約", href: "/terms", size: 1.0, color: "#f43f5e" },
  { text: "特定商取引法", href: "/legal", size: 1.0, color: "#06b6d4" },
  // 重要ワード
  { text: "関口純平", href: "/ceo", size: 1.5, color: "#8b5cf6" },
  { text: "AI開発", href: "/services", size: 1.35, color: "#f43f5e" },
  { text: "DX推進", href: "/services", size: 1.3, color: "#06b6d4" },
  { text: "Web開発", href: "/services", size: 1.3, color: "#8b5cf6" },
  { text: "北海道", href: "/about", size: 1.25, color: "#f43f5e" },
  { text: "JULA", href: "/about", size: 1.4, color: "#06b6d4" },
  { text: "コンサルティング", href: "/services", size: 1.15, color: "#8b5cf6" },
  { text: "AIチャットボット", href: "/services", size: 1.1, color: "#f43f5e" },
  { text: "業務自動化", href: "/services", size: 1.1, color: "#06b6d4" },
  { text: "OpenAI", href: "/services", size: 1.15, color: "#8b5cf6" },
  { text: "受託開発", href: "/services", size: 1.15, color: "#f43f5e" },
];

// フィボナッチ球面分布（均等な球体配置）
function fibonacciSphere(
  samples: number,
  radiusX: number,
  radiusY: number,
  radiusZ: number,
  centerExclusionY: number,
  centerExclusionX: number
) {
  const points: { x: number; y: number; z: number }[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); // 黄金角

  for (let i = 0; i < samples; i++) {
    // -1から1の範囲でyを均等に分布
    const y = 1 - (i / (samples - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = phi * i;

    let px = Math.cos(theta) * radiusAtY * radiusX;
    let py = y * radiusY;
    const pz = Math.sin(theta) * radiusAtY * radiusZ;

    // 中央エリア回避（yが0付近の場合）
    if (Math.abs(py) < centerExclusionY) {
      // 上下に押し出す
      const pushDirection = py >= 0 ? 1 : -1;
      py = (centerExclusionY + 20) * pushDirection;
      // 横にも広げる
      px *= 1.3;
    }

    // 中央の長方形エリアを完全に避ける
    if (Math.abs(px) < centerExclusionX && Math.abs(py) < centerExclusionY) {
      const pushDirection = px >= 0 ? 1 : -1;
      px = (centerExclusionX + 50) * pushDirection;
    }

    points.push({ x: px, y: py, z: pz });
  }

  return points;
}

interface Word3DProps {
  word: WordData;
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number };
  isMobile: boolean;
}

function Word3D({ word, position, rotation, isMobile }: Word3DProps) {
  const [hovered, setHovered] = useState(false);

  const cosY = Math.cos(rotation.y);
  const sinY = Math.sin(rotation.y);
  const cosX = Math.cos(rotation.x);
  const sinX = Math.sin(rotation.x);

  let x = position.x * cosY - position.z * sinY;
  let z = position.x * sinY + position.z * cosY;
  let y = position.y;
  const newY = y * cosX - z * sinX;
  const newZ = y * sinX + z * cosX;
  y = newY;
  z = newZ;

  // 座標を丸めて震えを防止
  x = Math.round(x * 10) / 10;
  y = Math.round(y * 10) / 10;
  z = Math.round(z * 10) / 10;

  const maxZ = isMobile ? 200 : 450;
  const depth = (z + maxZ) / (maxZ * 1.6);
  const scale = Math.max(0.5, Math.min(1.4, depth));
  const opacity = Math.max(0.25, Math.min(1, depth * 1.1));
  const blur = z < -maxZ * 0.5 ? Math.abs(z + maxZ * 0.5) / (maxZ * 0.6) : 0;

  const baseFontSize = isMobile ? 0.75 : 1.3;

  return (
    <Link
      href={word.href}
      className="absolute left-1/2 top-1/2 whitespace-nowrap select-none"
      style={{
        transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0px)`,
        opacity: hovered ? 1 : opacity,
        zIndex: Math.round(z + 500),
        fontSize: `${baseFontSize * word.size}rem`,
        fontWeight: 700,
        color: hovered ? word.color : "#ffffff",
        textShadow: hovered
          ? `0 0 20px ${word.color}, 0 0 40px ${word.color}`
          : `0 0 ${8 * scale}px rgba(255,255,255,0.15)`,
        filter: blur > 0 ? `blur(${Math.min(blur, 1.5)}px)` : undefined,
        transition: "color 0.2s, text-shadow 0.2s, opacity 0.2s",
        cursor: "pointer",
        letterSpacing: "0.02em",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setTimeout(() => setHovered(false), 200)}
    >
      <span
        style={{
          transform: `scale(${scale * (hovered ? 1.1 : 1)})`,
          display: "inline-block",
          transition: "transform 0.2s ease-out",
        }}
      >
        {word.text}
      </span>
    </Link>
  );
}

function WordCloud3D() {
  const rotationRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0.05 });
  const [, forceUpdate] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const lastPointerRef = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 配置パラメータ（球体）- 画面いっぱい使用
  const positions = fibonacciSphere(
    words.length,
    isMobile ? 170 : 550,  // radiusX - 横幅を大きく
    isMobile ? 340 : 340,  // radiusY - 縦幅を大きく
    isMobile ? 120 : 400,  // radiusZ - 奥行きを大きく
    isMobile ? 55 : 70,    // centerExclusionY
    isMobile ? 50 : 120    // centerExclusionX
  );

  // スムーズなアニメーションループ
  useEffect(() => {
    const animate = () => {
      if (!isDragging) {
        rotationRef.current.x += velocityRef.current.x * 0.016;
        rotationRef.current.y += velocityRef.current.y * 0.016;

        // 滑らかな減衰
        velocityRef.current.x *= 0.98;
        velocityRef.current.y *= 0.98;

        if (Math.abs(velocityRef.current.x) < 0.004) velocityRef.current.x = 0;
        if (Math.abs(velocityRef.current.y) < 0.012) velocityRef.current.y = 0.035;

        forceUpdate((n) => n + 1);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true);
    velocityRef.current = { x: 0, y: 0 };
    lastPointerRef.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;

      const deltaX = e.clientX - lastPointerRef.current.x;
      const deltaY = e.clientY - lastPointerRef.current.y;

      const sensitivity = isMobile ? 0.004 : 0.003;
      rotationRef.current.x -= deltaY * sensitivity;
      rotationRef.current.y += deltaX * sensitivity;

      velocityRef.current = {
        x: -deltaY * sensitivity * 0.4,
        y: deltaX * sensitivity * 0.4,
      };

      lastPointerRef.current = { x: e.clientX, y: e.clientY };
      forceUpdate((n) => n + 1);
    },
    [isDragging, isMobile]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
    velocityRef.current.x = Math.max(-0.6, Math.min(0.6, velocityRef.current.x));
    velocityRef.current.y = Math.max(-0.6, Math.min(0.6, velocityRef.current.y));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full cursor-grab active:cursor-grabbing"
      style={{
        perspective: isMobile ? "600px" : "1200px",
        transformStyle: "preserve-3d",
        touchAction: "none",
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* グロー背景 */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: isMobile ? 320 : 850,
          height: isMobile ? 550 : 700,
          background:
            "radial-gradient(circle, rgba(6,182,212,0.03) 0%, rgba(139,92,246,0.02) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ワードクラウド */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* eslint-disable-next-line react-hooks/refs */}
        {words.map((word, i) => (
          <Word3D
            key={word.text}
            word={word}
            position={positions[i] || { x: 0, y: 0, z: 0 }}
            rotation={rotationRef.current}
            isMobile={isMobile}
          />
        ))}
      </div>

      {/* 軌道リング（PCのみ） */}
      {!isMobile && (
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: 700,
            height: 700,
            border: "1px solid rgba(255,255,255,0.02)",
            borderRadius: "50%",
            // eslint-disable-next-line react-hooks/refs
            transform: `rotateX(${rotationRef.current.x}rad) rotateY(${rotationRef.current.y}rad) rotateX(70deg)`,
          }}
        />
      )}
    </div>
  );
}

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
    // クライアントサイドでのみ実行されることを検知
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

        {/* 3D ワードクラウド */}
        <div className="absolute inset-0 w-full h-full">
          {mounted && <WordCloud3D />}
        </div>

        {/* 中央テキスト */}
        <div className="relative z-30 text-center px-4 pointer-events-none">
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
            className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-medium h-[1.5em] md:h-[1.8em]"
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
