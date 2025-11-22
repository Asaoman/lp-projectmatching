import React from 'react';

const TargetProfile = () => {
    return (
        <section className="flex flex-col md:flex-row min-h-[600px]">
            {/* UNWANTED */}
            <div className="flex-1 bg-[#1a1a1a] p-12 md:p-24 flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-20" />
                <div className="relative z-10">
                    <h3 className="text-3xl font-black mb-8 text-gray-500 font-mono">UNWANTED [REJECT]</h3>
                    <ul className="space-y-4 text-gray-400 font-bold text-lg">
                        <li className="line-through decoration-red-500 decoration-2">安定志向 / 大手病</li>
                        <li className="line-through decoration-red-500 decoration-2">マニュアル人間 / 指示待ち</li>
                        <li className="line-through decoration-red-500 decoration-2">「成長させてほしい」</li>
                        <li className="line-through decoration-red-500 decoration-2">ガクチカ：サークルの副代表</li>
                    </ul>
                </div>
            </div>

            {/* WANTED */}
            <div className="flex-1 bg-[var(--color-obsidian)] p-12 md:p-24 flex flex-col justify-center relative border-l border-[var(--color-neon-cyan)]">
                <div className="absolute inset-0 bg-[rgba(0,255,249,0.05)]" />
                <div className="relative z-10">
                    <h3 className="text-3xl font-black mb-8 text-[var(--color-neon-cyan)] font-mono">WANTED [ACCESS GRANTED]</h3>
                    <ul className="space-y-4 text-white font-bold text-lg">
                        <li className="flex items-center gap-3">
                            <span className="text-[var(--color-neon-cyan)]">▶</span> 野心家 / 起業（失敗）経験者
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-[var(--color-neon-cyan)]">▶</span> ハッカー / 独学の怪物
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-[var(--color-neon-cyan)]">▶</span> 「会社を使って勝手に成長する」
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-[var(--color-neon-cyan)]">▶</span> ガクチカ：ARR 1000万達成
                        </li>
                    </ul>

                    <div className="mt-12 p-6 border border-[var(--color-voltage-purple)] bg-[rgba(157,0,255,0.1)]">
                        <p className="font-bold text-center">
                            「我々が求めているのは、優等生ではない。<br />
                            制御不能なエネルギーを持った『異端児（マーベリック）』だ。」
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TargetProfile;
