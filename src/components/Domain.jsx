import React from 'react';

const domains = [
    {
        id: '01',
        title: 'STRATEGY',
        subtitle: 'REFORM & RESTRUCTURE',
        tags: ['DX', 'PMI', 'C-Level Interim'],
        desc: 'Architecting the future of large-scale organizations. Dismantling legacy structures and rebuilding for the digital age.',
        icon: '♕'
    },
    {
        id: '02',
        title: 'PRODUCT',
        subtitle: 'ZERO TO ONE',
        tags: ['New Biz Dev', 'MVP', 'PMF'],
        desc: 'Forging something from nothing. Rapid prototyping, market validation, and scaling initial traction.',
        icon: '⚡'
    },
    {
        id: '03',
        title: 'GROWTH',
        subtitle: 'MARKET DOMINANCE',
        tags: ['Marketing', 'Sales Org', 'GTM'],
        desc: 'Aggressive expansion. Building the engines that drive revenue and market share acquisition.',
        icon: '📈'
    },
    {
        id: '04',
        title: 'ORGANIZATION',
        subtitle: 'HUMAN CAPITAL',
        tags: ['CHRO Interim', 'Hiring', 'Culture'],
        desc: 'Optimizing the human element. Recruitment branding, organizational design, and performance management.',
        icon: '⚔'
    }
];

const Domain = () => {
    return (
        <section id="domain" className="min-h-screen w-full bg-bg-surface py-24 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-sm font-mono text-signal-amber tracking-widest uppercase mb-4">
            // Domain Matrix
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
                        CHOOSE YOUR GENERAL
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-white/5 border border-white/5">
                    {domains.map((domain) => (
                        <div
                            key={domain.id}
                            className="group relative bg-void-black p-12 border border-white/5 hover:border-signal-amber/50 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="text-9xl font-display text-white">{domain.icon}</span>
                            </div>

                            <div className="relative z-10">
                                <div className="font-mono text-signal-amber text-xl mb-4">0{domain.id}</div>
                                <h4 className="text-3xl font-display font-bold text-white mb-2">{domain.title}</h4>
                                <div className="text-xs font-mono text-text-muted tracking-widest mb-6">{domain.subtitle}</div>

                                <p className="text-text-muted leading-relaxed mb-8 h-20">
                                    {domain.desc}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {domain.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 border border-white/10 text-xs font-mono text-platinum group-hover:border-signal-amber/30 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Hover Effect Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Domain;
