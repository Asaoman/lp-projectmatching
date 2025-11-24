/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'void-black': '#0A0A0A', // Slightly softer black
                'platinum': '#E0E0E0',
                'signal-amber': '#D4AF37', // Metallic Gold instead of Amber
                'deep-navy': '#050A14',
                'silver': '#C0C0C0',
                'bg-depth': '#020408',
                'bg-surface': '#0B101A',
                'text-primary': '#F0F2F5',
                'text-muted': '#8892B0',
            },
            fontFamily: {
                mono: ['JetBrains Mono', 'monospace'], // Data
            },
        },
    },
    plugins: [],
}
