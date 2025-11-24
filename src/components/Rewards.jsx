import React from 'react';
import { motion } from 'framer-motion';

const Rewards = () => {
    const rewards = [
        {
            title: 'RETAINER',
            subtitle: 'Monthly Base',
            desc: '継続的なアドバイザリーと戦略的監視に対する安定した月額報酬。',
            value: '¥2M - ¥5M / mo'
        },
        {
            title: 'EQUITY',
            subtitle: 'Long-term Incentive',
            desc: 'エンゲージメント期間に応じたストックオプションまたは株式付与。',
            value: '0.5% - 2.0%'
        },
        {
            title: 'SUCCESS',
            subtitle: 'Performance Bonus',
            desc: '特定の重要マイルストーン（M&A成立、IPO等）達成時の成功報酬。',
            value: '¥10M - ¥50M+'
        }
    ];

    return (
        <section className="py-32 bg-void text-platinum relative overflow-hidden" id="rewards">
            <div className="max-w-6xl mx-auto px-6">

                <div className="mb-24 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display mb-6"
                    >
                        VALUE <span className="text-zinc-600">EXCHANGE</span>
                    </motion.h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        インパクトに連動した、透明性の高い高付加価値な報酬モデル。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {rewards.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="relative group h-[400px] perspective-1000"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/50 to-zinc-900/50 backdrop-blur-md border border-zinc-700/50 rounded-xl transform transition-transform duration-500 group-hover:scale-105 group-hover:border-signal-amber/50 flex flex-col justify-between p-8 overflow-hidden">

                                {/* Holographic Sheen */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                                <div>
                                    <div className="text-xs font-mono text-zinc-500 mb-2 uppercase tracking-widest">{item.subtitle}</div>
                                    <h3 className="text-3xl font-display text-platinum mb-6 group-hover:text-signal-amber transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="pt-8 border-t border-zinc-700/50">
                                    <div className="text-xs font-mono text-zinc-500 mb-2">ESTIMATED RANGE</div>
                                    <div className="text-2xl font-display text-platinum group-hover:text-signal-amber transition-colors duration-300">
                                        {item.value}
                                    </div>
                                </div>

                                {/* Corner Accents */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Rewards;
