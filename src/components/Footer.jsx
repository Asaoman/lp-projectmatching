import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Footer = ({ onOpenEntry }) => {
    const [isPressing, setIsPressing] = useState(false);
    const [progress, setProgress] = useState(0);
    const controls = useAnimation();
    const intervalRef = useRef(null);

    const handleMouseDown = () => {
        setIsPressing(true);
        controls.start({ scale: 0.9 });

        let p = 0;
        intervalRef.current = setInterval(() => {
            p += 2;
            setProgress(p);
            if (p >= 100) {
                clearInterval(intervalRef.current);
                onOpenEntry();
                setProgress(0);
                setIsPressing(false);
            }
        }, 20);
    };

    const handleMouseUp = () => {
        setIsPressing(false);
        controls.start({ scale: 1 });
        clearInterval(intervalRef.current);
        setProgress(0);
    };

    return (
        <footer className="py-32 relative overflow-hidden bg-black flex flex-col items-center justify-center min-h-screen">
            {/* Black Hole Effect (Enhanced) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(0,0,0,1)_0%,rgba(59,130,246,0.05)_40%,transparent_70%)] z-0" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite] opacity-20" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-30" />

            {/* Particle Suction Simulation (CSS) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-[spin_60s_linear_infinite]" />
            </div>

            <div className="relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter">
                    Ready to deploy?
                </h2>

                <div className="relative inline-block">
                    {/* Progress Ring */}
                    <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 -rotate-90 pointer-events-none">
                        <circle
                            cx="96"
                            cy="96"
                            r="46"
                            stroke="var(--color-accent-core)"
                            strokeWidth="2"
                            fill="transparent"
                            strokeDasharray="289"
                            strokeDashoffset={289 - (289 * progress) / 100}
                            className="transition-all duration-100 ease-linear"
                        />
                    </svg>

                    <motion.button
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onTouchStart={handleMouseDown}
                        onTouchEnd={handleMouseUp}
                        animate={controls}
                        className="w-24 h-24 rounded-full bg-white text-black font-bold text-xs tracking-widest flex items-center justify-center relative z-10 hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-shadow duration-300"
                    >
                        HOLD
                    </motion.button>
                </div>

                <p className="mt-8 text-gray-500 text-xs font-mono">LONG PRESS TO INITIALIZE</p>
            </div>

            <div className="absolute bottom-8 text-center w-full">
                <p className="text-gray-700 text-[10px] font-mono">© 2025 TOP GUN CAREER. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
};

export default Footer;
