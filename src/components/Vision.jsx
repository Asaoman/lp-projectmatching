import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Card3D = ({ children, className }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative ${className}`}
        >
            <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}>
                {children}
            </div>
        </motion.div>
    );
};

const Vision = () => {
    const leaders = [
        {
            title: "FOUNDER_01",
            role: "Growth & Capital",
            detail: "元ユニコーン創業者 / IVS LaunchPad Judge"
        },
        {
            title: "EXECUTIVE_01",
            role: "Strategy & M&A",
            detail: "Fortune 100 CSO / グローバル戦略リード"
        },
        {
            title: "VANGUARD_01",
            role: "Product & Tech",
            detail: "Google I/O Speaker / Ex-GAFAM Tech Lead"
        },
        {
            title: "FINANCE_01",
            role: "CFO & IPO",
            detail: "NASDAQ上場CFO / CFA Charterholder"
        },
        {
            title: "CREATIVE_01",
            role: "Brand & Design",
            detail: "Cannes Lions 審査員 / 世界的クリエイティブディレクター"
        },
        {
            title: "RESEARCH_01",
            role: "AI & Research",
            detail: "NeurIPS Best Paper / Ex-Google Brain"
        },
        {
            title: "FOUNDER_02",
            role: "Serial Entrepreneur",
            detail: "3社Exit経験 / Forbes 30 Under 30"
        },
        {
            title: "MARKETING_01",
            role: "Growth & Branding",
            detail: "グローバルブランドCMO / TEDx Speaker"
        },
        {
            title: "LEGAL_01",
            role: "Corporate Law",
            detail: "元Big4パートナー / 大型M&A 100件以上"
        }
    ];

    return (
        <section className="py-32 bg-void text-platinum relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-platinum/10 rounded-full mb-8"
                    >
                        <span className="w-1 h-1 bg-signal-amber rounded-full"></span>
                        <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase">Industry Authority Network</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display text-platinum mb-8 leading-tight"
                    >
                        各業界の<span className="text-zinc-600">オーソリティ</span>を<br />
                        プロジェクトにアサイン
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-lg font-light text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
                    >
                        業界を定義し、標準を作った張本人たち。<br />
                        彼らは通常、特定企業への正社員就職を選ばない。<br />
                        しかし、難易度と影響力の高いプロジェクトであれば、彼らを動かすことができる。
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-platinum text-sm tracking-widest uppercase border border-zinc-700 transition-all duration-300"
                    >
                        Check Authority Availability
                    </motion.button>
                </div>
                {/* Simplified Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {leaders.map((leader, index) => (
                        <div key={index} className="p-6 border border-zinc-700 rounded-lg hover:border-signal-amber transition-colors duration-300">
                            <div className="text-xs font-mono text-zinc-500 mb-2">{leader.title}</div>
                            <div className="text-lg font-medium text-platinum">{leader.role}</div>
                            <div className="mt-2 text-sm text-zinc-400">{leader.detail}</div>
                        </div>
                    ))}
                </div>



            </div>
        </section>
    );
};

export default Vision;
