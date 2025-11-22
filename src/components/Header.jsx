import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ onOpenEntry }) => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-md border-b border-[rgba(0,255,249,0.1)]">
            <div className="container flex justify-between items-center h-16">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 border border-[var(--color-neon-cyan)] flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute w-full h-[1px] bg-[var(--color-neon-cyan)] top-1/2 left-0 animate-pulse" />
                        <div className="absolute h-full w-[1px] bg-[var(--color-neon-cyan)] top-0 left-1/2 animate-pulse" />
                    </div>
                    <h1 className="text-xl font-bold tracking-tighter font-mono glitch-text" data-text="TOP GUN CAREER">
                        TOP GUN CAREER
                    </h1>
                </div>

                <nav className="hidden md:flex gap-8 text-sm font-mono text-gray-400">
                    <a href="#concept" className="hover:text-[var(--color-neon-cyan)] transition-colors">CONCEPT</a>
                    <a href="#system" className="hover:text-[var(--color-neon-cyan)] transition-colors">SYSTEM</a>
                    <a href="#missions" className="hover:text-[var(--color-neon-cyan)] transition-colors">MISSIONS</a>
                </nav>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onOpenEntry}
                    className="px-6 py-2 border border-[var(--color-neon-cyan)] text-[var(--color-neon-cyan)] font-mono text-sm hover:bg-[var(--color-neon-cyan)] hover:text-[var(--color-obsidian)] transition-all duration-300 shadow-[0_0_10px_rgba(0,255,249,0.3)]"
                >
                    GATE OPEN [審査開始]
                </motion.button>
            </div>
        </header>
    );
};

export default Header;
