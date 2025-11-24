import React from 'react';
import { motion } from 'framer-motion';

const Problem = () => {
  const contractTypes = [
    {
      type: "プロジェクトベース",
      desc: "期間とゴールを明確に定めた契約",
      examples: ["3ヶ月〜24ヶ月", "成果物ベース", "マイルストーン設定"]
    },
    {
      type: "高い自律性",
      desc: "予算執行権限の委譲と大幅な裁量",
      examples: ["予算: 月額200万円〜", "チーム編成権限", "意思決定権限"]
    },
    {
      type: "部隊即応",
      desc: "信頼するチーム（ギルド）での参画も可能",
      examples: ["専門家+実行チーム", "即戦力投入", "スケーラブル"]
    }
  ];

  return (
    <section className="py-32 bg-void text-platinum relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ヘッダー */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif-display mb-6"
          >
            契約形態
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-zinc-400 max-w-3xl"
          >
            従来の「雇用」ではなく、対等な「パートナーシップ」として、
            プロジェクトの成功に向けて協働します。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">

          {/* テキスト側 */}
          <div>
            <h3 className="text-3xl md:text-5xl font-serif-display leading-tight mb-8">
              盟約であり、<br />
              <span className="text-zinc-600">雇用ではない。</span>
            </h3>

            <div className="space-y-8">
              {contractTypes.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="border border-zinc-800 p-6 hover:border-signal-amber/50 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-px bg-signal-amber"></div>
                    <span className="font-mono-data text-lg">{item.type}</span>
                  </div>
                  <p className="text-zinc-400 mb-4">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.examples.map((ex, j) => (
                      <span key={j} className="text-xs font-mono-data text-zinc-600 bg-zinc-900 px-3 py-1 border border-zinc-800">
                        {ex}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 報酬レンジ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 border-t border-zinc-800 pt-8"
            >
              <h4 className="text-sm font-mono-data text-zinc-500 mb-4">報酬レンジの目安</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-zinc-600 mb-1">月額報酬</div>
                  <div className="text-2xl font-serif-display text-signal-amber">¥200万〜</div>
                </div>
                <div>
                  <div className="text-xs text-zinc-600 mb-1">成果報酬型</div>
                  <div className="text-2xl font-serif-display text-signal-amber">応相談</div>
                </div>
              </div>
              <p className="text-xs text-zinc-500 mt-4">
                ※ プロジェクト規模・期間・専門性により変動します
              </p>
            </motion.div>
          </div>

          {/* ビジュアル側: SVGアニメーション */}
          <div className="relative h-[600px] flex items-center justify-center">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <motion.circle
                cx="200" cy="200" r="150"
                stroke="#333" strokeWidth="1" fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.circle
                cx="200" cy="200" r="100"
                stroke="#FFBF00" strokeWidth="1" fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              />

              {/* 軌道エレメント */}
              <motion.circle
                cx="200" cy="50" r="4" fill="#E5E4E2"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{ originX: "200px", originY: "200px" }}
              />
              <motion.circle
                cx="200" cy="100" r="6" fill="#FFBF00"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ originX: "200px", originY: "200px" }}
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-serif-display mb-2">AXIS</div>
                <div className="text-xs font-mono-data text-zinc-500">プロトコル</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Problem;
