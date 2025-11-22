import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCommentDots, FaPlay } from 'react-icons/fa';
import SpotlightCard from './SpotlightCard';

const BentoGrid = () => {
    return (
        <section className="py-32 bg-black relative z-10">
            <div className="container">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">あなたを、見つける仕組み</h2>
                    <p className="text-gray-500 font-mono">実績を可視化し、企業から直接オファーが届く</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 h-auto md:h-[600px]">
                    {/* Card A: AI Analysis */}
                    <SpotlightCard className="md:col-span-2 p-8 group">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="h-full flex flex-col justify-between relative z-10"
                        >
                            <div className="absolute top-0 right-0 text-2xl text-white/20 group-hover:text-white transition-colors">
                                <FaGithub />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">あなたの実績を、可視化する</h3>
                                <p className="text-gray-400 text-sm">プロジェクト、インターン、課外活動。すべてが評価される。</p>
                            </div>

                            {/* Fake 3D Graph Visualization */}
                            <div className="w-full h-48 flex items-end gap-1 mt-8">
                                {Array.from({ length: 40 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex-1 bg-green-500/20 rounded-t-sm"
                                        initial={{ height: "10%" }}
                                        whileInView={{ height: `${Math.random() * 80 + 10}%` }}
                                        transition={{ duration: 1, delay: i * 0.02 }}
                                    >
                                        <div className="w-full h-full bg-green-500 opacity-50 blur-[1px]" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </SpotlightCard>

                    {/* Card B: Direct Offer */}
                    <SpotlightCard className="p-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="h-full flex flex-col justify-between relative z-10"
                        >
                            <div className="absolute top-0 right-0 text-2xl text-white/20">
                                <FaCommentDots />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">企業から、直接オファーが届く</h3>
                                <p className="text-gray-400 text-sm">人事ではなく、経営者から。</p>
                            </div>

                            <div className="mt-8 space-y-4">
                                <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5">
                                    <p className="text-xs text-gray-400 mb-1">CEO</p>
                                    <p className="text-sm">あなたのプロフィール見ました。来週、話しませんか？</p>
                                </div>
                                <div className="bg-[var(--color-accent-core)]/20 p-4 rounded-2xl rounded-tr-none border border-[var(--color-accent-core)]/20 ml-auto w-fit">
                                    <p className="text-sm text-[var(--color-accent-core)]">興味あります。</p>
                                </div>
                            </div>
                        </motion.div>
                    </SpotlightCard>

                    {/* Card C: Draft TV */}
                    <SpotlightCard className="md:col-span-3 p-8 group">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 h-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent-core)]/10 to-[var(--color-accent-core-end)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="flex-1 relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                        <FaPlay className="ml-1" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">Draft Event</h3>
                                        <p className="text-gray-400 text-sm">経営者の前で、自分をプレゼンする</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 max-w-md">
                                    投資家・起業家が審査員。
                                    その場でオファーを勝ち取る、新しい就活。
                                </p>
                            </div>

                            {/* Video Placeholder */}
                            <div className="flex-1 w-full h-48 md:h-full bg-black/50 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden relative z-10">
                                <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZ5Z2Z5Z2Z5Z2Z5Z2Z5Z2Z5Z2Z5Z2Z5Z2Z5Z2Z5Z2Z5Z2Z5Z2Z5/xT9IgzoKnwFNmISR8I/giphy.gif')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <span className="relative z-10 font-mono text-xs tracking-widest bg-black/80 px-4 py-2 rounded-full border border-white/20">LIVE ON AIR</span>
                            </div>
                        </motion.div>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
