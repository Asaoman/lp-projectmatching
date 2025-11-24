import React from 'react';
import { motion } from 'framer-motion';

const Trust = () => {
    const leaders = [
        {
            title: "スタートアップ創業者",
            role: "グロース・資金調達",
            登壇: "150回",
            detail: "累計調達額200億円、Exit経験2回、Forbes 30 Under 30選出"
        },
        {
            name: "トップ経営者",
            role: "戦略・M&A",
            登壇: "120回",
            detail: "Fortune 100企業のCEO経験、TEDxスピーカー、書籍2冊出版"
        },
        {
            name: "業界リーダー",
            role: "プロダクト・UX",
            登壇: "95回",
            detail: "MAU 1億超サービスの立ち上げ、Google I/O登壇経験"
        },
    ];

    return (
        <section className="py-32 bg-void text-platinum relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* ヘッダー */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8"
                    >
                        <span className="text-sm font-mono text-zinc-500">厚選されたトップエキスパート</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display text-platinum mb-6 leading-tight"
                    >
                        各分野の<br />
                        トップクラス専門家
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-lg font-body text-zinc-400 max-w-3xl"
                    >
                        THE AXIS に登録されているのは、全員が業界カンファレンスでの登壇実績50回以上の業界リーダー。
                        イベント登壇データと自動連携し、実績を客観的に証明しています。
                    </motion.p>
                </div>

                {/* 認証基準 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    {[
                        { label: "最低登壇実績", value: "50回以上", desc: "業界カンファレンスでの基調講演" },
                        { label: "平均登壇実績", value: "80回以上", desc: "登録専門家の平均値" },
                        { label: "実務経験", value: "10年以上", desc: "Fortune 500 または同等企業" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="glass-card p-8 rounded-lg hover:bg-white/5 transition-all duration-300"
                        >
                            <div className="text-sm font-mono text-zinc-500 mb-3">{item.label}</div>
                            <div className="text-5xl font-display text-signal-amber mb-3">{item.value}</div>
                            <div className="text-sm font-body text-zinc-400">{item.desc}</div>
                        </motion.div>
                    ))}
                </div>

                {/* リーダー例 */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-display text-platinum mb-8">アサイン可能なリーダー例</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {leaders.map((leader, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index }}
                                className="glass-card p-8 rounded-lg hover:bg-white/5 transition-all duration-300 group cursor-pointer"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <div className="text-xl font-display text-platinum group-hover:text-signal-amber transition-colors mb-2">
                                            {leader.title || leader.name}
                                        </div>
                                        <div className="text-sm font-mono text-zinc-500">{leader.role}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-3xl font-display text-signal-amber">{leader.登壇}</div>
                                        <div className="text-xs font-mono text-zinc-600">登壇</div>
                                    </div>
                                </div>
                                <div className="text-sm font-body text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
                                    {leader.detail}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 統計 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 glass-card p-12 rounded-lg"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div>
                            <div className="text-5xl font-display text-platinum mb-2">2,140名</div>
                            <div className="text-sm font-mono text-zinc-500">認証済みエキスパート</div>
                        </div>
                        <div>
                            <div className="text-5xl font-display text-platinum mb-2">17万回</div>
                            <div className="text-sm font-mono text-zinc-500">累計登壇実績</div>
                        </div>
                        <div>
                            <div className="text-5xl font-display text-platinum mb-2">98%</div>
                            <div className="text-sm font-mono text-zinc-500">プロジェクト成功率</div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Trust;
