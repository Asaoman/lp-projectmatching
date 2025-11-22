import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import MagneticButton from './MagneticButton';
import { FaArrowRight } from 'react-icons/fa';

const Hero = ({ onOpenEntry }) => {
    const textRef = useRef(null);

    useEffect(() => {
        // Fluid text shader effect simulation using background-clip
        const tl = gsap.timeline({ repeat: -1, yoyo: true });
        tl.to(textRef.current, {
            backgroundPosition: "200% center",
            duration: 5,
            ease: "linear",
        });
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="mb-12"
                >
                    <h1
                        ref={textRef}
                        className="text-6xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white bg-[length:200%_auto] pb-4"
                        style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                        就活を、<br className="md:hidden" />ハックせよ。
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                    <MagneticButton onClick={onOpenEntry} variant="primary">
                        ENTER SYSTEM <FaArrowRight />
                    </MagneticButton>

                    <MagneticButton variant="secondary">
                        VIEW MANIFESTO
                    </MagneticButton>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
