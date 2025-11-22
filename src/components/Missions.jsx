import React from 'react';
import { motion } from 'framer-motion';

const MissionCard = ({ id, target, role, budget, objective, delay }) => (
    <motion.div
        initial={{ opacity: 0, rotateX: 90 }}
        whileInView={{ opacity: 1, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, type: "spring", bounce: 0.4 }}
        className="relative bg-[#0f0f0f] border border-gray-800 p-8 hover:border-[var(--color-alert-orange)] transition-colors group overflow-hidden"
    >
        {/* "TOP SECRET" Stamp Effect */}
        <div className="absolute -right-12 top-8 rotate-45 border-4 border-[var(--color-alert-orange)] text-[var(--color-alert-orange)] px-12 py-2 font-black text-xl opacity-20 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none">
            TOP SECRET
        </div>

        <div className="flex justify-between items-start mb-6 border-b border-gray-800 pb-4 relative z-10">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[var(--color-alert-orange)] animate-pulse" />
                <h3 className="font-mono text-white text-2xl tracking-widest">FILE_{id}</h3>
            </div>
            <span className="text-[10px] font-mono bg-gray-900 text-gray-400 px-2 py-1 border border-gray-800">CLASSIFIED</span>
        </div>

        <div className="space-y-6 font-mono text-sm relative z-10">
            <div className="group/item">
                <span className="text-gray-600 block text-[10px] mb-1 tracking-widest group-hover/item:text-[var(--color-alert-orange)] transition-colors">TARGET</span>
                <p className="font-bold text-lg text-gray-200">{target}</p>
            </div>
            <div className="group/item">
                <span className="text-gray-600 block text-[10px] mb-1 tracking-widest group-hover/item:text-[var(--color-alert-orange)] transition-colors">ROLE</span>
                <p className="font-bold text-lg text-gray-200">{role}</p>
            </div>
            <div className="group/item">
                <span className="text-gray-600 block text-[10px] mb-1 tracking-widest group-hover/item:text-[var(--color-alert-orange)] transition-colors">BUDGET / AUTHORITY</span>
                <p className="font-bold text-gray-200">{budget}</p>
            </div>
            <div className="pt-6 border-t border-gray-800 border-dashed">
                <span className="text-[var(--color-alert-orange)] block text-[10px] mb-2 tracking-widest">OBJECTIVE</span>
                <p className="font-bold leading-relaxed text-white text-base">{objective}</p>
            </div>
        </div>
    </motion.div>
);

const Missions = () => {
    return (
        <section id="missions" className="py-32 bg-[#050505] relative">
            <div className="container">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-black mb-4 glitch-text" data-text="TARGET MISSIONS">TARGET MISSIONS</h2>
                    <p className="text-gray-500 font-mono text-sm">ACCESS LEVEL: CLEARANCE GRANTED</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <MissionCard
                        id="001"
                        target="シリーズB 急成長SaaS"
                        role="社長室直下・特命新規事業責任者"
                        budget="予算1億円、チーム編成権限全委任"
                        objective="1年以内に新サービスをPMFさせ、単独黒字化せよ。"
                        delay={0}
                    />
                    <MissionCard
                        id="002"
                        target="メガベンチャー（東証プライム）"
                        role="設立予定の新子会社 CEO候補"
                        budget="資本金5000万円＋親会社リソース無制限利用"
                        objective="親会社の既存アセットを活用し、競合を破壊する非連続な成長を実現せよ。"
                        delay={0.2}
                    />
                </div>
            </div>
        </section>
    );
};

export default Missions;
