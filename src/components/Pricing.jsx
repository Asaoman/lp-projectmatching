import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
    return (
        <section className="py-32 bg-black relative z-10">
            <div className="container">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">料金プラン</h2>
                    <p className="text-gray-500 font-mono">シンプルで、フェアな価格設定</p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 justify-center max-w-4xl mx-auto">
                    {/* Student Card */}
                    <motion.div
                        className="flex-1 bg-[#050505] border border-white/10 rounded-3xl p-10 relative group"
                        whileHover={{ y: -10 }}
                    >
                        <h3 className="text-xl text-gray-400 mb-2">学生</h3>
                        <div className="text-5xl font-bold mb-8">完全無料 <span className="text-lg font-normal text-gray-500"></span></div>
                        <ul className="space-y-4 text-gray-400 mb-8">
                            <li className="flex items-center gap-2"><span className="text-white">✓</span> 登録・利用、すべて無料</li>
                            <li className="flex items-center gap-2"><span className="text-white">✓</span> 企業から直接オファー</li>
                            <li className="flex items-center gap-2"><span className="text-white">✓</span> Draft Eventへの参加</li>
                        </ul>
                        <div className="w-full py-4 rounded-xl border border-white/20 text-center text-sm font-mono group-hover:bg-white group-hover:text-black transition-colors">
                            今すぐ登録
                        </div>
                    </motion.div>

                    {/* Company Card */}
                    <motion.div
                        className="flex-1 bg-gradient-to-b from-[#1a1a1a] to-black border border-white/20 rounded-3xl p-10 relative overflow-hidden"
                        whileHover={{ y: -10 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                        <h3 className="text-xl text-white mb-2">企業</h3>
                        <div className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">成果報酬型</div>
                        <ul className="space-y-4 text-gray-400 mb-8">
                            <li className="flex items-center gap-2"><span className="text-[var(--color-accent-core)]">✓</span> 採用が決まった時だけ課金</li>
                            <li className="flex items-center gap-2"><span className="text-[var(--color-accent-core)]">✓</span> Top 1%の学生にアクセス</li>
                            <li className="flex items-center gap-2"><span className="text-[var(--color-accent-core)]">✓</span> 採用ブランディング支援</li>
                        </ul>
                        <div className="w-full py-4 rounded-xl bg-white text-black text-center text-sm font-mono hover:bg-gray-200 transition-colors">
                            お問い合わせ
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
