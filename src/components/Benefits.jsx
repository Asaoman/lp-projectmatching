import React from 'react';
import { motion } from 'framer-motion';

const Benefits = () => {
  const domains = [
    {
      title: "戦略",
      desc: "経営戦略、M&A、PMI",
      examples: [
        "M&A後の組織統合（PMI）",
        "事業再生・ターンアラウンド",
        "新規事業戦略立案",
        "中期経営計画策定"
      ]
    },
    {
      title: "プロダクト",
      desc: "プロダクトマネジメント、UX戦略",
      examples: [
        "0→1 新規サービス立ち上げ",
        "既存サービスのグロース戦略",
        "UX/UI 刷新プロジェクト",
        "プロダクト組織の立ち上げ"
      ]
    },
    {
      title: "グロース",
      desc: "マーケティング、PLG、セールス",
      examples: [
        "マーケティング戦略立案",
        "セールス組織の構築",
        "グロースハック施策",
        "海外市場進出戦略"
      ]
    },
    {
      title: "組織",
      desc: "人事戦略、カルチャーデザイン",
      examples: [
        "CHRO 代行・人事戦略",
        "採用ブランディング",
        "評価制度・報酬設計",
        "組織文化の変革"
      ]
    },
  ];

  return (
    <section className="py-32 bg-void text-platinum">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-serif-display mb-6">対応可能な領域</h2>
          <p className="text-lg text-zinc-400 max-w-3xl">
            ビジネスの4つの主要領域において、実績ある専門家が課題解決をサポートします。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-void p-12 md:p-16 hover:bg-zinc-900/50 transition-colors duration-500 group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="text-xs font-mono-data text-zinc-600 mb-8 group-hover:text-signal-amber transition-colors">
                  0{index + 1}
                </div>
                <h3 className="text-3xl font-serif-display mb-2">{domain.title}</h3>
                <p className="text-zinc-500 font-serif-body italic mb-8">{domain.desc}</p>

                {/* 具体例リスト */}
                <div className="space-y-3">
                  <div className="text-xs font-mono-data text-zinc-600 mb-3">対応可能な課題例:</div>
                  {domain.examples.map((example, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="text-signal-amber mt-1">•</span>
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ rotate: 45 }}
              >
                <span className="text-2xl text-signal-amber">↗</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
