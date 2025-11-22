import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InterfaceDemo = () => {
    const containerRef = useRef(null);
    const screenRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 1,
            }
        });

        tl.to(screenRef.current, {
            rotateX: 20,
            rotateY: -10,
            rotateZ: 5,
            scale: 1.1,
            boxShadow: "0 20px 50px rgba(59, 130, 246, 0.2)",
        });

    }, []);

    return (
        <section ref={containerRef} className="py-32 bg-black overflow-hidden perspective-1000">
            <div className="container text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">The Interface</h2>
                <p className="text-gray-500 font-mono">SEAMLESS ENTRY PROTOCOL</p>
            </div>

            <div className="flex justify-center">
                <div
                    ref={screenRef}
                    className="w-[90%] md:w-[800px] h-[500px] bg-[#080808] border border-white/10 rounded-xl overflow-hidden relative transform-style-3d"
                >
                    {/* Mock UI Header */}
                    <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                        <div className="ml-4 w-64 h-6 bg-white/5 rounded-md" />
                    </div>

                    {/* Mock UI Body */}
                    <div className="p-8 flex gap-8 h-full">
                        <div className="w-64 border-r border-white/5 pr-8 hidden md:block">
                            <div className="w-full h-8 bg-white/10 rounded mb-4" />
                            <div className="w-full h-4 bg-white/5 rounded mb-2" />
                            <div className="w-full h-4 bg-white/5 rounded mb-2" />
                            <div className="w-full h-4 bg-white/5 rounded mb-2" />
                        </div>
                        <div className="flex-1">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--color-accent-core)] to-[var(--color-accent-core-end)] mb-8 mx-auto opacity-80 blur-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                            <div className="relative z-10 text-center mt-20">
                                <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">🚀</div>
                                <h3 className="text-2xl font-bold mb-2">Ready to Launch?</h3>
                                <p className="text-gray-500 mb-8">Initiate the sequence to begin your career acceleration.</p>
                                <div className="w-48 h-10 bg-[var(--color-accent-core)] rounded mx-auto" />
                            </div>
                        </div>
                    </div>

                    {/* Ambient Glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-accent-core)]/10 to-transparent pointer-events-none" />
                </div>
            </div>
        </section>
    );
};

export default InterfaceDemo;
