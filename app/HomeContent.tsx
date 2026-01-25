"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

// ニューラルネットワークノード
interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
}

// ニューラルネットワーク背景
function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // ノード初期化
    const nodeCount = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 15000));
    nodesRef.current = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    let time = 0;
    const animate = () => {
      time += 0.016;
      ctx.fillStyle = "rgba(10, 10, 10, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      // ノード更新
      nodes.forEach((node) => {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200 && dist > 0) {
          const force = (200 - dist) / 200 * 0.02;
          node.vx += (dx / dist) * force;
          node.vy += (dy / dist) * force;
        }

        node.x += node.vx;
        node.y += node.vy;
        node.vx *= 0.99;
        node.vy *= 0.99;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      });

      // 接続線を描画
      const connectionDistance = 150;
      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach((other) => {
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.3;
            const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.5 + 0.5;
            
            const gradient = ctx.createLinearGradient(node.x, node.y, other.x, other.y);
            gradient.addColorStop(0, `rgba(6, 182, 212, ${alpha * pulse})`);
            gradient.addColorStop(0.5, `rgba(139, 92, 246, ${alpha})`);
            gradient.addColorStop(1, `rgba(244, 63, 94, ${alpha * pulse})`);

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // ノードを描画
      nodes.forEach((node) => {
        const pulse = Math.sin(time * 3 + node.pulsePhase) * 0.5 + 0.5;
        const glowRadius = node.radius * (2 + pulse);

        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowRadius * 3
        );
        gradient.addColorStop(0, `rgba(6, 182, 212, ${0.8 * pulse})`);
        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${0.3 * pulse})`);
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.8 + pulse * 0.2})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
}

// タイピングアニメーション
function TypingText({
  text,
  className,
  speed = 100,
  delay = 0,
  onComplete,
}: {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const onCompleteRef = useRef(onComplete);
  
  onCompleteRef.current = onComplete;

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;
    let isCancelled = false;

    const type = () => {
      if (isCancelled) return;
      
      if (currentIndex < text.length) {
        currentIndex++;
        setDisplayText(text.slice(0, currentIndex));
        timeout = setTimeout(type, speed);
      } else {
        setIsComplete(true);
        onCompleteRef.current?.();
      }
    };

    timeout = setTimeout(type, delay);
    
    return () => {
      isCancelled = true;
      clearTimeout(timeout);
    };
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayText}
      {!isComplete && displayText.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.4, repeat: Infinity }}
          className="inline-block w-[3px] h-[1em] bg-current ml-1 align-middle"
        />
      )}
    </span>
  );
}

// コードストリームエフェクト（AI・エンジニアリング用語）
function CodeStream() {
  const [streams, setStreams] = useState<Array<{
    id: number;
    left: string;
    delay: number;
    duration: number;
    items: Array<{ text: string; color: string }>;
  }>>([]);

  useEffect(() => {
    // AI関連用語
    const aiTerms = [
      "GPT-4", "Claude", "Gemini", "LLaMA", "Midjourney",
      "ChatGPT", "Copilot", "Stable Diffusion", "DALL-E",
      "LLM", "RAG", "Fine-tuning", "Prompt", "Embedding",
      "Transformer", "Attention", "Token", "Vector",
      "Neural Network", "Deep Learning", "Machine Learning",
      "AGI", "GenAI", "Multimodal", "Foundation Model",
    ];

    // エンジニアリング用語
    const engTerms = [
      "React", "Next.js", "TypeScript", "Node.js", "Python",
      "Docker", "Kubernetes", "AWS", "GCP", "Azure",
      "GraphQL", "REST API", "WebSocket", "gRPC",
      "CI/CD", "DevOps", "GitOps", "IaC", "Terraform",
      "Microservices", "Serverless", "Edge Computing",
    ];

    // 最新技術用語
    const techTerms = [
      "Web3", "Blockchain", "NFT", "DeFi", "DAO",
      "AR/VR", "Metaverse", "Digital Twin", "IoT",
      "5G", "Edge AI", "Quantum", "Zero Trust",
      "Low-Code", "No-Code", "Headless CMS", "JAMstack",
      "SaaS", "PaaS", "BaaS", "MLOps", "DataOps",
    ];

    // DX関連用語
    const dxTerms = [
      "DX", "Digital Transformation", "Automation",
      "RPA", "Workflow", "Analytics", "BI", "Dashboard",
      "API Economy", "Platform", "Ecosystem", "Agile",
      "Scrum", "Kanban", "OKR", "KPI", "ROI",
    ];

    const allTerms = [
      ...aiTerms.map(t => ({ text: t, color: "#06b6d4" })),      // シアン
      ...engTerms.map(t => ({ text: t, color: "#8b5cf6" })),     // パープル
      ...techTerms.map(t => ({ text: t, color: "#22d3ee" })),    // ライトシアン
      ...dxTerms.map(t => ({ text: t, color: "#f43f5e" })),      // ピンク
    ];

    const shuffleArray = <T,>(array: T[]): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStreams(
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        left: `${5 + i * 10}%`,
        delay: Math.random() * 6,
        duration: 12 + Math.random() * 8,
        items: shuffleArray(allTerms).slice(0, 12),
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute top-0 font-mono text-[10px] md:text-xs whitespace-nowrap"
          style={{ left: stream.left }}
          initial={{ y: "-100%" }}
          animate={{ y: "100vh" }}
          transition={{
            duration: stream.duration,
            repeat: Infinity,
            delay: stream.delay,
            ease: "linear",
          }}
        >
          {stream.items.map((item, i) => (
            <div
              key={i}
              className="py-2"
              style={{
                opacity: Math.max(0.15, 0.7 - i * 0.05),
                color: item.color,
                textShadow: i < 2 ? `0 0 12px ${item.color}` : "none",
                filter: i > 8 ? "blur(1px)" : "none",
              }}
            >
              {item.text}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

// ホログラフィックリング
function HolographicRings() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{
            width: 300 + i * 150,
            height: 300 + i * 150,
            borderColor: `rgba(6, 182, 212, ${0.12 - i * 0.03})`,
          }}
          animate={{
            rotate: i % 2 === 0 ? 360 : -360,
            scale: [1, 1.02, 1],
          }}
          transition={{
            rotate: { duration: 20 + i * 10, repeat: Infinity, ease: "linear" },
            scale: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}
    </div>
  );
}

// スキャンラインエフェクト
function Scanlines() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.02]"
      style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
      }}
    />
  );
}

// メインコンポーネント
export default function HomeContent() {
  const [mounted, setMounted] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const [mainComplete, setMainComplete] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    setShowMain(true);
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-16 flex flex-col overflow-hidden relative">
      {/* ニューラルネットワーク背景 */}
      {mounted && <NeuralNetwork />}

      {/* コードストリーム */}
      {mounted && <CodeStream />}

      {/* スキャンライン */}
      <Scanlines />

      {/* ホログラフィックリング */}
      {mounted && <HolographicRings />}

      {/* メインセクション */}
      <section className="flex-1 flex items-center justify-center relative h-[calc(100vh-64px)] max-h-[calc(100vh-64px)]">
        {/* 中央グロー */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(6,182,212,0.05) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* メインコンテンツ - 絶対位置で中央固定 */}
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <div className="text-center px-4">
            {/* メインテキスト - 固定位置 */}
            {showMain && (
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
                <span
                  className="block bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
                  style={{ textShadow: "0 0 60px rgba(6,182,212,0.3)" }}
                >
                  <TypingText
                    text="考えるな、動け。"
                    speed={100}
                    delay={0}
                    onComplete={() => {
                      setMainComplete(true);
                      setTimeout(() => setShowSub(true), 200);
                    }}
                  />
                </span>
              </h1>
            )}

            {/* サブテキスト - メインの下に固定 */}
            <div className="h-32 mt-6">
              <AnimatePresence>
                {showSub && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center gap-6"
                  >
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-wide">
                  <TypingText
                    text="思考はAI。"
                    className="text-cyan-400"
                    speed={80}
                    delay={0}
                  />
                  <TypingText
                    text="行動はお前。"
                    className="text-pink-400 ml-1"
                    speed={80}
                    delay={600}
                  />
                </p>

                {/* ステータスバー */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 2 }}
                  className="w-64 md:w-96 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent origin-center"
                />

                {/* タグライン */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="text-[10px] md:text-xs text-white/30 tracking-[0.4em] uppercase font-light"
                >
                  AI × DX × Web Development
                </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* グリッチエフェクト（メイン完了後） */}
        {mainComplete && (
          <div className="absolute inset-0 pointer-events-none z-20">
            <motion.div
              className="absolute inset-0"
              animate={{
                opacity: [0, 0.1, 0],
                x: [0, -2, 2, 0],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 4,
              }}
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.1) 50%, transparent 100%)",
              }}
            />
          </div>
        )}

        {/* コーナーデコレーション */}
        <div className="absolute top-24 left-6 w-16 h-16 border-l border-t border-cyan-500/20" />
        <div className="absolute top-24 right-6 w-16 h-16 border-r border-t border-cyan-500/20" />
        <div className="absolute bottom-6 left-6 w-16 h-16 border-l border-b border-pink-500/20" />
        <div className="absolute bottom-6 right-6 w-16 h-16 border-r border-b border-pink-500/20" />

        {/* フローティングパーティクル */}
        {mounted && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  left: `${10 + (i * 12)}%`,
                  top: `${20 + (i * 8) % 60}%`,
                  background: i % 2 === 0 ? "#06b6d4" : "#8b5cf6",
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}
      </section>

      {/* グラデーションアニメーション用スタイル */}
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </div>
  );
}
