import React from 'react';
import { motion } from 'framer-motion';

const Intelligence = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-32 bg-void text-platinum relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display mb-6"
          >
            TACTICAL <span className="text-zinc-600">INTELLIGENCE</span>
          </motion.h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            ビジネスの重要局面を突破する、専門領域別インテリジェンス。
          </p>
        </div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]"
        >

          {/* Large Card: Strategy */}
          <motion.div variants={item} className="md:col-span-2 md:row-span-2 bg-zinc-900/30 border border-zinc-800 p-8 relative group overflow-hidden hover:border-signal-amber/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-signal-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-signal-amber mb-4">VECTOR_01</div>
                <h3 className="text-4xl font-display mb-4">STRATEGY</h3>
                <p className="text-zinc-400 leading-relaxed max-w-sm">
                  全社戦略の策定、M&A統合、事業再生の実行支援。<br />
                  複雑な市場環境下での意思決定を、確かな経験則でナビゲートする。
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {['M&A / PMI', 'Turnaround', 'New Market Entry', 'Corp Dev'].map((tag, i) => (
                  <div key={i} className="text-xs font-mono text-zinc-500 border border-zinc-800 px-3 py-2 rounded bg-void/50">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Medium Card: Product */}
          <motion.div variants={item} className="md:col-span-2 bg-zinc-900/30 border border-zinc-800 p-8 relative group overflow-hidden hover:border-platinum/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-platinum/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <div className="text-xs font-mono text-zinc-500 mb-4">VECTOR_02</div>
                <h3 className="text-3xl font-display mb-2">PRODUCT</h3>
                <p className="text-zinc-400 text-sm">0→1 事業開発 & UX戦略</p>
              </div>
              <div className="w-12 h-12 border border-zinc-700 rounded-full flex items-center justify-center group-hover:border-platinum transition-colors">
                <span className="text-xl">⚡︎</span>
              </div>
            </div>
          </motion.div>

          {/* Small Card: Growth */}
          <motion.div variants={item} className="bg-zinc-900/30 border border-zinc-800 p-6 relative group overflow-hidden hover:bg-zinc-800/50 transition-colors duration-500">
            <div className="text-xs font-mono text-zinc-500 mb-4">VECTOR_03</div>
            <h3 className="text-2xl font-display mb-4">GROWTH</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-signal-amber rounded-full"></span>Marketing</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-signal-amber rounded-full"></span>Sales Ops</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-signal-amber rounded-full"></span>PLG</li>
            </ul>
          </motion.div>

          {/* Small Card: Org */}
          <motion.div variants={item} className="bg-zinc-900/30 border border-zinc-800 p-6 relative group overflow-hidden hover:bg-zinc-800/50 transition-colors duration-500">
            <div className="text-xs font-mono text-zinc-500 mb-4">VECTOR_04</div>
            <h3 className="text-2xl font-display mb-4">ORG DESIGN</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-platinum rounded-full"></span>HR Strategy</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-platinum rounded-full"></span>Culture</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-platinum rounded-full"></span>Hiring</li>
            </ul>
          </motion.div>

        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-platinum text-sm tracking-widest uppercase border border-zinc-700 transition-all duration-300"
          >
            Consult on Intelligence
          </button>
        </div>

      </div>
    </section>
  );
};

export default Intelligence;
