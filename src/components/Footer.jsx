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
                        <h3 className="text-sm font-mono-data text-zinc-400 mb-4">エキスパートの方へ</h3>
                        <div className="text-5xl md:text-7xl font-serif-display group-hover:text-signal-amber transition-colors duration-500">
                            登録を<br />申し込む
                        </div>
                        <div className="mt-8 w-full h-px bg-zinc-700 group-hover:bg-signal-amber transition-colors duration-500"></div>
                    </motion.div>
                </div>

                {/* フッター情報 */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <h4 className="text-3xl font-serif-display mb-4">VIZOR Agent</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            トップエキスパートを、<br />
                            プロジェクト単位でアサイン
                        </p>
                    </div>

                    <div>
                        <h5 className="text-sm font-mono-data text-zinc-400 mb-4">サービス</h5>
                        <ul className="space-y-2 text-sm text-zinc-500">
                            <li>エキスパート検索</li>
                            <li>プロジェクト相談</li>
                            <li>契約サポート</li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-sm font-mono-data text-zinc-400 mb-4">会社情報</h5>
                        <ul className="space-y-2 text-sm text-zinc-500">
                            <li>運営会社</li>
                            <li>プライバシーポリシー</li>
                            <li>利用規約</li>
                        </ul>
                    </div>
                </div>

                {/* コピーライト */}
                <div className="text-center text-xs text-zinc-600 pt-8 border-t border-zinc-800">
                    © 2024 VIZOR Agent. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
