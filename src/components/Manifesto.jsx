import React from 'react';
import { motion } from 'framer-motion';

const Manifesto = () => {
    return (
        <section id="concept" className="py-32 relative border-t border-[rgba(255,255,255,0.05)]">
            <div className="container">
                <div className="mb-12 font-mono text-[var(--color-alert-orange)] text-sm tracking-widest">
                    SYSTEM ERROR: CONVENTIONAL CAREER PATH NOT FOUND.
                </div>

                <div className="max-w-4xl">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl md:text-4xl font-bold leading-relaxed mb-8"
                    >
                        「ポテンシャル」という名の茶番。<br />
                        横並びのスタートライン。<br />
                        量産される没個性な兵隊たち。
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8"
                    >
                        君は、そのぬるま湯に浸かるために、事業を立ち上げ、泥水をすすり、夜を徹してコードを書いたのか？
                        違うはずだ。
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="pl-6 border-l-4 border-[var(--color-voltage-purple)]"
                    >
                        <p className="text-xl md:text-3xl font-bold">
                            ここは、飼い慣らされた羊たちのための牧場ではない。<br />
                            <span className="text-[var(--color-voltage-purple)]">牙を研いだ狼たちが集う、地下のドラフト会議だ。</span>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Manifesto;
