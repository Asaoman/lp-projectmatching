import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MagneticButton } from './Shared';

const StickyCTA = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const showAnim = gsap.from(containerRef.current, {
            yPercent: 100,
            paused: true,
            duration: 0.5,
            ease: "power3.out"
        }).progress(1);

        const handleScroll = () => {
            if (window.scrollY > 500) {
                showAnim.reverse(); // Show (slide up to 0)
            } else {
                showAnim.play(); // Hide (slide down to 100)
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-2 mix-blend-difference"
        >
            <MagneticButton className="bg-signal-amber text-black px-8 py-4 font-bold text-sm tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                PROJECT INQUIRY
            </MagneticButton>
        </div>
    );
};

export default StickyCTA;
