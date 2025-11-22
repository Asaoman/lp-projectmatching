/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // V3.0 Palette: Cosmic Void
                'bg-depth': '#0A0A0A', // Main Background (OLED optimized)
                'bg-surface': '#121212', // Cards/Panels
                'border-subtle': 'rgba(255, 255, 255, 0.08)',
                'text-primary': '#EDEDED', // Off-white
                'text-muted': '#888888',
                'accent-glow': '#3B82F6', // Fallback for gradients

                // Legacy support (mapping to new palette where possible)
                canvas: '#0A0A0A',
                surface: '#121212',
                'accent-core': '#3B82F6',
                'accent-core-end': '#8B5CF6',
                'accent-alert': '#F43F5E',
            },
            fontFamily: {
                sans: ['Inter Tight', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}
