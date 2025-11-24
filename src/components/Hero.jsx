import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);
  const [budget, setBudget] = useState(12450000000);

  // リアルタイム予算ティッカー
  useEffect(() => {
    const interval = setInterval(() => {
      setBudget(prev => prev + Math.floor(Math.random() * 100000));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-void flex flex-col justify-center items-center py-32">
      {/* グリッド背景 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void to-void"></div>

      {/* コンテンツコンテナ */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center space-y-12 max-w-5xl px-6"
      >

        {/* ラベル */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full"
        >
          <span className="w-2 h-2 bg-signal-amber rounded-full animate-pulse"></span>
          <span className="text-sm font-mono text-zinc-400 tracking-wide">
            VIZOR Agent
          </span>
        </motion.div>

        {/* メインタイトル */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-serif text-platinum leading-tight tracking-tight"
          >
            トップエキスパートを、<br />
            プロジェクト単位で<br />
            <span className="gradient-text">アサイン</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl font-body text-zinc-400 max-w-3xl mx-auto leading-relaxed"
          >
            業界トップクラスの専門家を、<br />
            あなたのプロジェクトに。
          </motion.p>
        </div>

        {/* 統計グリッド */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
        >
          {[
            { label: "登録エキスパート", value: "500+", desc: "各分野のトップクラス" },
            { label: "プロジェクト成功率", value: "98%", desc: "高い満足度" },
            { label: "平均アサイン期間", value: "3営業日", desc: "スピーディー" }
          ].map((item, i) => (
            <motion.div key={i}
              className="glass-card p-6 rounded-lg"
              whileHover={{ scale: 1.03, rotate: 0.5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-sm font-mono text-zinc-500 mb-2">{item.label}</div>
              <div className="text-3xl font-display text-platinum mb-1">{item.value}</div>
              <div className="text-xs text-zinc-600">{item.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-center gap-6 pt-8"
        >
          <button className="group relative px-8 py-4 bg-platinum text-void-black font-semibold tracking-wide rounded-lg overflow-hidden hover:bg-signal-amber transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10">無料で相談する</span>
          </button>

          {/* ライブ予算ティッカー */}
          <div className="flex items-center gap-3 text-sm font-mono text-zinc-500">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>稼働中プロジェクト数:</span>
            <span className="text-platinum font-semibold">{Math.floor(budget / 10000000)}</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
