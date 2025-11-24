import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-void text-platinum pt-32 pb-12 px-6 border-t border-zinc-800 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-50%] left-[-20%] w-[80vw] h-[80vw] bg-signal-amber rounded-full blur-[200px] opacity-[0.03]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Main CTA Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group cursor-pointer"
                    >
                        <h3 className="text-xs font-mono text-zinc-500 mb-4 uppercase tracking-widest">For Enterprise</h3>
                        <div className="text-5xl md:text-7xl font-display group-hover:text-signal-amber transition-colors duration-500 leading-tight">
                            DEPLOY<br />EXPERTS
                        </div>
                        <div className="mt-8 w-full h-px bg-zinc-800 group-hover:bg-signal-amber transition-colors duration-500"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group cursor-pointer"
                    >
                        <h3 className="text-xs font-mono text-zinc-500 mb-4 uppercase tracking-widest">For Experts</h3>
                        <div className="text-5xl md:text-7xl font-display group-hover:text-signal-amber transition-colors duration-500 leading-tight">
                            JOIN THE<br />NETWORK
                        </div>
                        <div className="mt-8 w-full h-px bg-zinc-800 group-hover:bg-signal-amber transition-colors duration-500"></div>
                    </motion.div>
                </div>

                {/* Footer Info */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-t border-zinc-800 pt-16">
                    <div className="md:col-span-2">
                        <h4 className="text-3xl font-display mb-4 tracking-tighter">VIZOR <span className="text-zinc-600">AGENT</span></h4>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                            重要ミッションのための、エリートエキスパート・デプロイメント。<br />
                            精密なマッチングで、仕事の未来を再定義する。
                        </p>
                    </div>

                    <div>
                        <h5 className="text-xs font-mono text-zinc-500 mb-6 uppercase tracking-widest">System</h5>
                        <ul className="space-y-3 text-sm text-zinc-400">
                            <li className="hover:text-signal-amber cursor-pointer transition-colors">Search Protocol</li>
                            <li className="hover:text-signal-amber cursor-pointer transition-colors">Mission Briefs</li>
                            <li className="hover:text-signal-amber cursor-pointer transition-colors">Legal Framework</li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-xs font-mono text-zinc-500 mb-6 uppercase tracking-widest">Corporate</h5>
                        <ul className="space-y-3 text-sm text-zinc-400">
                            <li className="hover:text-signal-amber cursor-pointer transition-colors">About VIZOR</li>
                            <li className="hover:text-signal-amber cursor-pointer transition-colors">Privacy Policy</li>
                            <li className="hover:text-signal-amber cursor-pointer transition-colors">Terms of Service</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 pt-8 border-t border-zinc-800 font-mono">
                    <div>© 2024 VIZOR CORPORATION. ALL RIGHTS RESERVED.</div>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <span>STATUS: ONLINE</span>
                        <span>V3.0.1</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
