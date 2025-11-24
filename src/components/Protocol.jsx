import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Protocol = () => {
  const [activeTab, setActiveTab] = useState(0);

  const protocols = [
    {
      id: "P-01",
      title: "ADVISORY",
      subtitle: "Strategic Guidance",
      desc: "重要な意思決定のための、高度な戦略的助言。",
      features: ["週次戦略セッション", "エキスパートへの直接アクセス", "レビュー & 監査"],
      commitment: "Light (5-10h/月)"
    },
    {
      id: "P-02",
      title: "EXECUTION",
      subtitle: "Hands-on Leadership",
      desc: "プロジェクト実行とチームリードへの直接関与。",
      features: ["暫定CxOロール", "チームマネジメント", "KPIオーナーシップ"],
      commitment: "Medium (20-40h/月)"
    },
    {
      id: "P-03",
      title: "TASK FORCE",
      subtitle: "Full Squad Deployment",
      desc: "変革を加速させる、専門家チームの展開。",
      features: ["チーム単位でのアサイン", "ラピッドプロトタイピング", "エンドツーエンドの納品"],
      commitment: "Heavy (Full-time)"
    }
  ];

  return (
    <section className="py-32 bg-void text-platinum relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display mb-6"
          >
            Our Engagement Options
          </motion.h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Flexible contracts tailored to your project's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Protocol Selector */}
          <div className="lg:col-span-4 space-y-4">
            {protocols.map((protocol, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-6 border transition-all duration-300 group relative overflow-hidden ${activeTab === index
                  ? 'border-signal-amber bg-signal-amber/5'
                  : 'border-zinc-800 hover:border-zinc-600 bg-zinc-900/20'
                  }`}
              >
                <div className="relative z-10 flex justify-between items-center">
                  <div>
                    <div className={`text-xs font-mono mb-2 ${activeTab === index ? 'text-signal-amber' : 'text-zinc-500'}`}>
                      {protocol.id}
                    </div>
                    <div className={`text-xl font-display ${activeTab === index ? 'text-platinum' : 'text-zinc-400'}`}>
                      {protocol.title}
                    </div>
                  </div>
                  {activeTab === index && (
                    <motion.div layoutId="active-indicator" className="w-2 h-2 bg-signal-amber rounded-full" />
                  )}
                </div>
                {activeTab === index && (
                  <motion.div
                    layoutId="active-bg"
                    className="absolute inset-0 bg-gradient-to-r from-signal-amber/10 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Protocol Details Display */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="h-full border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm p-10 flex flex-col justify-center relative overflow-hidden"
              >
                {/* Background Tech Decoration */}
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-signal-amber animate-spin-slow" />
                    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" className="text-platinum" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="text-signal-amber font-mono text-sm mb-4 tracking-widest">
                    // {protocols[activeTab].subtitle}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-display text-platinum mb-8">
                    {protocols[activeTab].desc}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-zinc-800">
                    <div>
                      <h4 className="text-xs font-mono text-zinc-500 mb-4 uppercase">Key Features</h4>
                      <ul className="space-y-3">
                        {protocols[activeTab].features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-zinc-300">
                            <span className="w-1.5 h-1.5 bg-signal-amber rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-zinc-500 mb-4 uppercase">Commitment Level</h4>
                      <div className="text-xl text-platinum font-light">
                        {protocols[activeTab].commitment}
                      </div>

                      {/* Visual Bar */}
                      <div className="w-full h-1 bg-zinc-800 mt-4 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(activeTab + 1) * 33}%` }}
                          transition={{ duration: 0.8, ease: "circOut" }}
                          className="h-full bg-signal-amber"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-zinc-800">
                    <button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full py-4 bg-zinc-800 hover:bg-signal-amber hover:text-void-black text-platinum transition-colors duration-300 uppercase tracking-widest font-bold text-sm"
                    >
                      Select Protocol
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Protocol;
