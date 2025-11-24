import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);
  const [budget, setBudget] = useState(12450000000);

  // リアルタイム予算ティッカー (HUD Style)
  useEffect(() => {
    const interval = setInterval(() => {
      setBudget(prev => prev + Math.floor(Math.random() * 500000));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Staggered Text Animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
    show: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center py-32">

      {/* Cinematic Background Layer */}
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/80 to-void z-10"></div>
        {/* Placeholder for abstract video or heavy gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-void to-void opacity-50"></div>
      </motion.div>

      {/* Content Container */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center space-y-16 max-w-6xl px-6"
        variants={container}
        initial="hidden"
        animate="show"
      >

        {/* HUD Label */}
        <motion.div variants={item} className="inline-flex items-center gap-3 px-4 py-2 border border-platinum/10 bg-platinum/5 backdrop-blur-md rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-amber opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-amber"></span>
          </span>
          <span className="text-xs font-mono text-platinum/70 tracking-[0.2em] uppercase">
            Project-Based Access Only
          </span>
        </motion.div>

        {/* Main Title with Split Text */}
        <div className="space-y-4">
          <motion.h1 variants={item} className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-platinum leading-[0.9] tracking-tighter mix-blend-difference">
            VIZOR <span className="text-zinc-600">AGENT</span>
          </motion.h1>
          <motion.p variants={item} className="text-xl md:text-2xl font-light text-zinc-400 tracking-wide max-w-3xl mx-auto leading-relaxed">
            正社員では採用不可能なトップ層を、<br />
            <span className="text-platinum font-normal">「プロジェクト単位」</span>でアサインする。
          </motion.p>
        </div>

        {/* HUD Stats Grid */}
        <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-12 border-t border-platinum/10 max-w-4xl mx-auto">
          {[
            { label: "TARGET", value: "IMPOSSIBLE", sub: "採用困難なトップ人材" },
            { label: "METHOD", value: "PROJECT", sub: "期限付きミッション" },
            { label: "IMPACT", value: "MAXIMUM", sub: "事業変革・V字回復" },
            { label: "ACCESS", value: "EXCLUSIVE", sub: "完全審査制" }
          ].map((stat, i) => (
            <div key={i} className="text-left space-y-1 group cursor-default">
              <div className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase group-hover:text-signal-amber transition-colors duration-300">{stat.label}</div>
              <div className="text-2xl md:text-3xl font-display text-platinum group-hover:scale-105 origin-left transition-transform duration-300">{stat.value}</div>
              <div className="text-[10px] text-zinc-500">{stat.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Magnetic CTA */}
        <motion.div variants={item} className="pt-12">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-5 bg-platinum text-void-black font-bold tracking-widest uppercase rounded-none overflow-hidden hover:bg-signal-amber transition-colors duration-500 clip-path-slant"
          >
            お問い合わせ
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <div className="absolute inset-0 bg-signal-amber transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
          </button>

          {/* Live Ticker Footer */}
          <div className="mt-8 flex justify-center items-center gap-4 text-[10px] font-mono text-zinc-600">
            <span>ACTIVE MISSIONS:</span>
            <span className="text-platinum">142</span>
            <span className="text-signal-amber">DEPLOYING...</span>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Hero;
