import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-void text-platinum pt-32 pb-12 px-6 border-t border-zinc-700">
            <div className="max-w-7xl mx-auto">

                {/* メインCTAエリア */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group cursor-pointer"
                    >
                        <h3 className="text-sm font-mono-data text-zinc-400 mb-4">企業の方へ</h3>
                        <div className="text-5xl md:text-7xl font-serif-display group-hover:text-signal-amber transition-colors duration-500">
                            プロジェクトを<br />相談する
                        </div>
                        <div className="mt-8 w-full h-px bg-zinc-700 group-hover:bg-signal-amber transition-colors duration-500"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group cursor-pointer"
                    >
                        <h3 className="text-sm font-mono-data text-zinc-400 mb-4">専門家の方へ</h3>
                        <div className="text-5xl md:text-7xl font-serif-display group-hover:text-signal-amber transition-colors duration-500">
                            登録を<br />申し込む
                        </div>
                        <div className="mt-8 w-full h-px bg-zinc-700 group-hover:bg-signal-amber transition-colors duration-500"></div>
                    </motion.div>
                </div>

                {/* ボトムバー */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <div>
                        <div className="text-2xl font-serif-display mb-2">THE AXIS</div>
                        <div className="text-xs font-mono-data text-zinc-500">
                            © 2025 THE AXIS. ALL RIGHTS RESERVED.<br />
                            東京 / シンガポール / ニューヨーク
                        </div>
                    </div>

                    <div className="flex gap-8">
                        {["LINKEDIN", "TWITTER", "お問い合わせ"].map((link, i) => (
                            <a key={i} href="#" className="text-xs font-mono-data text-zinc-400 hover:text-platinum transition-colors">
                                {link}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
