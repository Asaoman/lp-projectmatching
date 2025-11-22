import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaChessKing, FaBroadcastTower } from 'react-icons/fa';

const features = [
    {
        icon: <FaBrain className="text-5xl mb-6 text-[var(--color-neon-cyan)] drop-shadow-[0_0_10px_rgba(0,255,249,0.8)]" />,
        title: "AI-Driven Screening",
        subtitle: "冷徹なAI審査",
        desc: "ES（エントリーシート）は廃止。君が提出するのは「GitHubリポジトリ」「PLデータ」「プロダクトURL」。独自のAIアルゴリズムが君の実装力とビジネスインパクトを冷徹にスコアリングする。口だけの熱意は通用しない。"
    },
    {
        icon: <FaChessKing className="text-5xl mb-6 text-[var(--color-voltage-purple)] drop-shadow-[0_0_10px_rgba(157,0,255,0.8)]" />,
        title: "Executive Direct Line",
        subtitle: "経営中枢への直通線",
        desc: "トップガンキャリアに、決裁権のない人間は存在しない。オファーは全て、企業のトップ、または事業責任者から直接届く。「子会社社長候補」「特命担当」…用意される椅子は、幹部席のみ。"
    },
    {
        icon: <FaBroadcastTower className="text-5xl mb-6 text-[var(--color-alert-orange)] drop-shadow-[0_0_10px_rgba(255,72,0,0.8)]" />,
        title: "Media Integration Draft",
        subtitle: "公開ドラフト会議",
        desc: "AI審査を突破した上位ランカーは、リアルイベント＆YouTube番組連動の「公開ドラフト」へ招待。投資家・経営者の前で己をプレゼンし、その場で入札（オファー）を勝ち取れ。"
    }
];

const SystemFeatures = () => {
    return (
        <section id="system" className="py-32 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,249,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,249,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] -z-10" />

            <div className="container">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-black mb-4 glitch-text tracking-tighter" data-text="THE SYSTEM">THE SYSTEM</h2>
                    <p className="text-[var(--color-neon-cyan)] font-mono tracking-widest text-sm">ADVANCED CAREER ACCELERATION PROTOCOLS</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative bg-[rgba(10,10,10,0.6)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)] p-10 hover:border-[var(--color-neon-cyan)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,249,0.1)]"
                        >
                            {/* Holographic Corner Effects */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[var(--color-neon-cyan)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[var(--color-neon-cyan)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[var(--color-neon-cyan)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[var(--color-neon-cyan)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Scanline Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,255,249,0.05)] to-transparent opacity-0 group-hover:opacity-100 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 pointer-events-none" />

                            <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-300">
                                {feature.icon}
                                <h3 className="text-2xl font-bold font-mono mb-2 text-white group-hover:text-[var(--color-neon-cyan)] transition-colors">{feature.title}</h3>
                                <p className="text-sm text-gray-400 mb-6 font-mono border-b border-gray-800 pb-4 inline-block">{feature.subtitle}</p>
                                <p className="text-gray-300 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SystemFeatures;
