import React from 'react';
import { motion } from 'framer-motion';

const compensationOptions = [
    {
        title: '固定給与',
        description: 'プロジェクト期間中の安定した月額報酬'
    },
    {
        title: 'ストックオプション',
        description: '成功時にエクイティを付与し、長期的なインセンティブ'
    },
    {
        title: '成果報酬',
        description: 'プロジェクト成果に応じたボーナス支払い'
    }
];

const Compensation = () => {
    return (
        <section className="py-24 bg-void text-platinum" id="compensation">
            <div className="max-w-5xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-display font-serif text-platinum mb-12 text-center"
                >
                    報酬パターン
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {compensationOptions.map((item, i) => (
                        <motion.div
                            key={i}
                            className="glass-card p-8 rounded-lg text-center"
                            whileHover={{ scale: 1.05, rotate: 0.3 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <h3 className="text-2xl font-display font-serif text-platinum mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm font-body text-zinc-400">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Compensation;
