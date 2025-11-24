import React from 'react';
import { motion } from 'framer-motion';

const Market = () => {
    const projects = [
        { type: "全社DX", budget: "¥5億", role: "CTO", period: "18ヶ月" },
        { type: "新規事業", budget: "¥1億", role: "事業責任者", period: "12ヶ月" },
        { type: "M&A統合", budget: "¥8億", role: "PMI責任者", period: "24ヶ月" },
        { type: "R&D", budget: "¥3億", role: "VPoE", period: "12ヶ月" },
        { type: "海外展開", budget: "¥10億", role: "CSO", period: "36ヶ月" },
    ];

    const caseStudies = [
        {
            industry: "製造業",
            challenge: "全社DX推進",
            budget: "¥5億円",
            period: "18ヶ月",
            expert: "元マッキンゼー パートナー",
            result: "生産性30%向上、コスト削減年間2億円"
        },
        {
            industry: "金融",
            challenge: "新規デジタルサービス立ち上げ",
            budget: "¥2億円",
            period: "12ヶ月",
            expert: "元Google VP",
            result: "ローンチ6ヶ月でMAU 10万達成"
        },
        {
            industry: "小売",
            challenge: "M&A後のシステム統合",
            budget: "¥8億円",
            period: "24ヶ月",
            expert: "元アクセンチュア MD",
            result: "予定より3ヶ月早く統合完了"
        }
    ];

    return (
        <section className="py-32 bg-void text-platinum overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* ヘッダー */}
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-serif-display mb-6"
                    >
                        プロジェクト実績
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-lg text-zinc-400 max-w-3xl"
                    >
                        守秘義務に配慮し、業界・規模感のみを公開しています。
                    </motion.p>
                </div>

                {/* 成約実績の統計 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {[
                        { label: "総取引額", value: "¥124億", desc: "2024年度実績" },
                        { label: "平均案件規模", value: "¥8,500万", desc: "中央値: ¥3億" },
                        { label: "稼働中プロジェクト", value: "142件", desc: "2025年1月時点" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            className="border-t border-zinc-800 pt-4"
                        >
                            <div className="text-xs font-mono-data text-zinc-500 mb-2">{stat.label}</div>
                            <div className="text-4xl font-serif-display text-platinum mb-2">{stat.value}</div>
                            <div className="text-sm text-zinc-400">{stat.desc}</div>
                        </motion.div>
                    ))}
                </div>

                {/* 案件事例 */}
                <div className="mb-16">
                    <h3 className="text-2xl font-serif-display mb-8">成約事例（一部）</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {caseStudies.map((cs, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="border border-zinc-800 p-6 hover:border-signal-amber/50 transition-colors group"
                            >
                                <div className="text-xs font-mono-data text-signal-amber mb-3">{cs.industry}</div>
                                <h4 className="text-lg font-serif-display mb-4 group-hover:text-signal-amber transition-colors">{cs.challenge}</h4>
                                <div className="space-y-2 text-sm text-zinc-400 mb-4">
                                    <div className="flex justify-between">
                                        <span>予算:</span>
                                        <span className="text-platinum">{cs.budget}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>期間:</span>
                                        <span className="text-platinum">{cs.period}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>専門家:</span>
                                        <span className="text-platinum text-xs">{cs.expert}</span>
                                    </div>
                                </div>
                                <div className="border-t border-zinc-800 pt-4 text-xs text-zinc-500">
                                    <span className="text-signal-amber">成果: </span>{cs.result}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ティッカー（現在稼働中の案件タイプ） */}
                <div className="relative w-full border-y border-zinc-800 bg-zinc-900/20 backdrop-blur-sm">
                    <div className="flex overflow-hidden py-8">
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                            className="flex gap-16 whitespace-nowrap px-8"
                        >
                            {[...projects, ...projects, ...projects, ...projects].map((item, index) => (
                                <div key={index} className="flex items-center gap-8 group cursor-pointer">
                                    <span className="text-3xl md:text-5xl font-serif-display text-zinc-700 group-hover:text-platinum transition-colors duration-500">
                                        {item.type}
                                    </span>
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs font-mono-data text-signal-amber">{item.budget}</span>
                                        <span className="text-xs font-mono-data text-zinc-500">{item.role} / {item.period}</span>
                                    </div>
                                    <span className="w-2 h-2 bg-zinc-800 rounded-full group-hover:bg-signal-amber transition-colors duration-500"></span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Market;
