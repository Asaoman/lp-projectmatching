import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loading = ({ onComplete }) => {
    const [isExploding, setIsExploding] = useState(false);

    useEffect(() => {
        // Sequence:
        // 0s: Start
        // 1.5s: Flash Logo
        // 2.5s: Explosion/Fade out
        const timer = setTimeout(() => {
            setIsExploding(true);
            setTimeout(onComplete, 800); // Wait for explosion animation
        }, 2500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
            initial={{ opacity: 1 }}
            animate={isExploding ? { opacity: 0, scale: 1.5, filter: "blur(20px)" } : { opacity: 1 }}
            transition={{ duration: 0.8, ease: "circIn" }}
        >
            <div className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.1, delay: 0.5 }}
                    className="relative"
                >
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white font-mono mix-blend-difference">
                        TOP GUN CAREER
                    </h1>
                    <motion.div
                        className="absolute inset-0 bg-white"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: [0, 1, 0] }}
                        transition={{ duration: 0.4, delay: 0.5, ease: "easeInOut" }}
                        style={{ originX: 0 }}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-4 flex justify-between items-center text-[10px] font-mono text-gray-500 tracking-[0.2em]"
                >
                    <span>SYSTEM_INIT</span>
                    <span>V2.0.0</span>
                </motion.div>
            </div>

            {/* Noise Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-20 pointer-events-none" />

            {/* Flash Line */}
            <motion.div
                className="absolute top-1/2 left-0 w-full h-[1px] bg-white"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: [0, 1, 0] }}
                transition={{ duration: 0.2, delay: 0.5 }}
            />
        </motion.div>
    );
};

export default Loading;
