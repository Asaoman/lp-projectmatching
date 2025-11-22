import React from 'react';

const Flow = () => {
    const steps = [
        {
            phase: "PHASE 1",
            title: "INITIALIZE",
            desc: "ポートフォリオ、実績データをシステムにアップロード。AIによる即時解析開始。"
        },
        {
            phase: "PHASE 2",
            title: "HUMAN VERIFICATION",
            desc: "AIスコア上位者のみ、運営チーム（TOP GUNエージェント）との接触を許可。熱量と狂気の最終確認。"
        },
        {
            phase: "PHASE 3",
            title: "DRAFT / OFFER",
            desc: "データベース上で企業からの指名を待つか、公開ドラフトのステージに立つか。"
        },
        {
            phase: "PHASE 4",
            title: "DEPLOY",
            desc: "経営幹部候補として、ビジネスの最前線へ降下。"
        }
    ];

    return (
        <section className="py-32 relative">
            <div className="container">
                <h2 className="text-4xl font-black mb-16 text-center glitch-text" data-text="THE PROTOCOL">THE PROTOCOL</h2>

                <div className="max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="flex gap-8 mb-12 last:mb-0 relative group">
                            {index !== steps.length - 1 && (
                                <div className="absolute left-[19px] top-10 w-[2px] h-full bg-gray-800 group-hover:bg-[var(--color-neon-cyan)] transition-colors duration-500" />
                            )}

                            <div className="w-10 h-10 rounded-full border-2 border-[var(--color-neon-cyan)] flex items-center justify-center bg-[var(--color-obsidian)] z-10 shrink-0">
                                <div className="w-3 h-3 bg-[var(--color-neon-cyan)] rounded-full" />
                            </div>

                            <div className="pt-1">
                                <span className="text-[var(--color-neon-cyan)] font-mono text-sm mb-1 block">{step.phase}</span>
                                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                                <p className="text-gray-400">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Flow;
