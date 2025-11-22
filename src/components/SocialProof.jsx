import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    "IVS", "Y Combinator", "Incubate Fund", "CyberAgent", "Mercari", "SoftBank",
    "IVS", "Y Combinator", "Incubate Fund", "CyberAgent", "Mercari", "SoftBank"
];

const SocialProof = () => {
    return (
        <section className="py-12 border-y border-white/5 bg-black overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

            <div className="flex items-center gap-4 mb-4 justify-center">
                <span className="text-[10px] font-mono text-gray-600 tracking-widest uppercase">Powered by</span>
            </div>

            <div className="flex overflow-hidden">
                <motion.div
                    className="flex gap-16 items-center whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <span
                            key={index}
                            className="text-xl md:text-2xl font-bold text-gray-800 font-mono uppercase tracking-tighter"
                        >
                            {logo}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SocialProof;
