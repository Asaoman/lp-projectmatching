import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, className = "", onClick, variant = "primary" }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x: x * 0.3, y: y * 0.3 }); // Magnetic strength
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const baseStyles = "relative px-8 py-3 rounded-full font-mono text-xs tracking-[0.2em] transition-colors duration-300 overflow-hidden group";
    const variants = {
        primary: "bg-white text-black hover:bg-gray-200",
        secondary: "bg-white/5 text-white border border-white/10 hover:bg-white/10",
        ghost: "text-gray-400 hover:text-white"
    };

    return (
        <motion.button
            ref={ref}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            animate={{ x: position.x, y: position.y }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
            {/* Inner Glow for Secondary */}
            {variant === 'secondary' && (
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            )}
        </motion.button>
    );
};

export default MagneticButton;
