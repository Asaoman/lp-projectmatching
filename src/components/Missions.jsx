import React from 'react';
import { motion } from 'framer-motion';

const Missions = () => {
    const missions = [
        {
            id: "FILE_01",
            code: "NATIONAL_ARCHITECT",
            title: "国家規模インフラの再構築",
            profile: "Ex-Decacorn CTO / Global Tech Conf Keynote Speaker",
            context: "創業100年を超える巨大コングロマリットのデジタル基盤刷新。",
            detail: "50名規模のエンジニア組織を組成し、レガシーシステムからクラウドネイティブなマイクロサービスへの完全移行を指揮。99.99%の稼働率を維持しながら、組織のエンジニアリングカルチャーを根底から変革。",
            tags: ["Cloud Native Migration", "Org Engineering", "High-Scale Architecture"],
            impact: "開発速度 400% 向上 / インフラコスト 60% 削減"
        },
        {
            id: "FILE_02",
            code: "GLOBAL_BRAND_COMMANDER",
            title: "世界的ブランドのD2Cピボット",
            profile: "Ex-Global Fashion Brand CMO / Cannes Lions Judge",
            context: "伝統的リテール巨人の、デジタル主導型ビジネスモデルへの転換。",
            detail: "世界30カ国のブランドボイスを統一し、グローバルEコマースプラットフォームを新規立ち上げ。店舗体験とデジタルを融合させたOMO戦略を主導し、ブランドの若返りと収益構造の刷新を達成。",
            tags: ["Global Rebranding", "D2C Strategy", "OMO Experience"],
            impact: "EC売上高 200% YoY / 新規顧客層 30% 拡大"
        },
        {
            id: "FILE_03",
            code: "IPO_CRISIS_FIXER",
            title: "上場直前ガバナンスの緊急再建",
            profile: "Ex-NASDAQ Listed Tech CFO",
            context: "上場審査6ヶ月前に発覚した重大な監査指摘事項への対応。",
            detail: "外部監査法人とのハードな折衝と並行し、社内管理体制を緊急整備。CFOとして財務チームを再構築し、投資家向けのエクイティストーリーを再定義。市場の信頼を回復し、予定通りのIPOを実現。",
            tags: ["Crisis Management", "Audit & Compliance", "Investor Relations"],
            impact: "IPO承認 / 時価総額 1,200億円 での上場"
        }
    ];

    return (
        <section className="py-32 bg-void text-platinum relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">

                <div className="mb-24 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display mb-6"
                    >
                        CLASSIFIED <span className="text-zinc-600">ARCHIVES</span>
                    </motion.h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        これらは、実際にVIZOR AGENTが手掛けた極秘ミッションの一部。<br />
                        世界最高峰の頭脳が、企業の運命を左右する局面で何をしたか。
                    </p>
                </div>

                <div className="space-y-24">
                    {missions.map((mission, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="relative group"
                        >
                            {/* Decorative Line */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent group-hover:via-signal-amber transition-colors duration-700"></div>

                            <div className="pl-8 md:pl-12 relative">
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                                    <div className="text-xs font-mono text-signal-amber tracking-widest border border-signal-amber/30 bg-signal-amber/5 px-3 py-1 rounded w-fit">
                                        {mission.id} // {mission.code}
                                    </div>
                                    <div className="h-px flex-grow bg-zinc-800 hidden md:block"></div>
                                </div>

                                {/* Content */}
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                                    <div className="md:col-span-8">
                                        <h3 className="text-3xl md:text-4xl font-display text-platinum mb-4 leading-tight group-hover:text-white transition-colors">
                                            {mission.title}
                                        </h3>
                                        <div className="text-sm font-mono text-zinc-500 mb-6 uppercase tracking-wide">
                                            ASSIGNED AGENT: <span className="text-zinc-300">{mission.profile}</span>
                                        </div>

                                        <div className="space-y-4 text-zinc-400 leading-relaxed">
                                            <p><strong className="text-zinc-300">CONTEXT:</strong> {mission.context}</p>
                                            <p><strong className="text-zinc-300">ACTION:</strong> {mission.detail}</p>
                                        </div>

                                        <div className="mt-8 flex flex-wrap gap-2">
                                            {mission.tags.map((tag, j) => (
                                                <span key={j} className="text-[10px] font-mono text-zinc-500 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Sidebar / Impact */}
                                    <div className="md:col-span-4 flex flex-col justify-between border-l border-zinc-800/50 pl-8 md:border-l-0 md:pl-0 md:border-l border-zinc-800">
                                        <div>
                                            <div className="text-xs font-mono text-zinc-500 mb-2 uppercase">Mission Impact</div>
                                            <div className="text-xl font-display text-signal-amber leading-snug">
                                                {mission.impact}
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                            className="mt-8 md:mt-0 w-full py-4 border border-zinc-700 text-platinum hover:bg-platinum hover:text-void-black transition-all duration-300 uppercase tracking-widest text-xs font-bold group-hover:border-platinum"
                                        >
                                            Request This Caliber
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-32 text-center">
                    <p className="text-zinc-500 mb-8 font-mono text-xs">
            // ACCESS FULL ARCHIVE OF 140+ MISSIONS
                    </p>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-12 py-5 bg-signal-amber text-void-black font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(255,191,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                    >
                        Inquire About Top Talent
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Missions;
