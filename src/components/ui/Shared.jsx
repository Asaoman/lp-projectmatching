import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { revealText } from '../../utils/motion';

export const MagneticButton = ({ children, className = "", onClick }) => {
    const buttonRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = button.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.35);
            yTo(y * 0.35);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            button.removeEventListener("mousemove", handleMouseMove);
            button.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <button
            ref={buttonRef}
            onClick={onClick}
            className={`relative inline-flex items-center justify-center px-8 py-4 font-mono text-sm tracking-widest uppercase transition-colors duration-300 ${className}`}
        >
            {children}
        </button>
    );
};

export const RevealText = ({ children, className = "", delay = 0 }) => {
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            revealText(textRef.current, delay);
        }
    }, [delay]);

    return (
        <div className={`overflow-hidden ${className}`}>
            <div ref={textRef} className="will-change-transform">
                {children}
            </div>
        </div>
    );
};
