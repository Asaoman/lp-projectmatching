import React from 'react';

const Contract = () => {
    return (
        <section id="contract" className="min-h-screen w-full bg-void-black py-24 px-4 md:px-12 flex items-center justify-center">
            <div className="max-w-6xl w-full">
                <div className="mb-20 text-center">
                    <h2 className="text-sm font-mono text-signal-amber tracking-widest uppercase mb-4">
            // The Contract
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
                        ENGAGEMENT MODEL
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Old Model */}
                    <div className="opacity-50 grayscale hover:opacity-70 transition-opacity duration-500">
                        <div className="text-center mb-8">
                            <h4 className="text-xl font-mono text-text-muted line-through decoration-red-500">TRADITIONAL HIRING</h4>
                        </div>
                        <div className="border border-white/10 p-8 rounded-lg relative">
                            <div className="flex flex-col items-center gap-8">
                                <div className="w-32 h-32 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center text-text-muted">
                                    EMPLOYER
                                </div>
                                <div className="h-16 w-[1px] bg-white/20 relative">
                                    <span className="absolute top-1/2 left-4 -translate-y-1/2 text-xs font-mono text-text-muted whitespace-nowrap">
                                        COMMAND & CONTROL
                                    </span>
                                </div>
                                <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center text-text-muted text-sm">
                                    EMPLOYEE
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* New Model */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-signal-amber/5 blur-xl rounded-full"></div>
                        <div className="text-center mb-8 relative z-10">
                            <h4 className="text-xl font-mono text-signal-amber">THE AXIS ALLIANCE</h4>
                        </div>
                        <div className="border border-signal-amber/30 bg-white/5 p-8 rounded-lg relative z-10">
                            <div className="flex flex-row items-center justify-center gap-8">
                                <div className="w-32 h-32 rounded-none border-2 border-white flex items-center justify-center text-white font-bold">
                                    CAPITAL
                                </div>
                                <div className="h-[1px] w-24 bg-signal-amber relative">
                                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-mono text-signal-amber whitespace-nowrap">
                                        RESOURCE
                                    </span>
                                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono text-signal-amber whitespace-nowrap">
                                        STRATEGY
                                    </span>
                                </div>
                                <div className="w-32 h-32 rounded-none border-2 border-signal-amber flex items-center justify-center text-signal-amber font-bold">
                                    COMMANDER
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 border border-white/5 hover:border-white/20 transition-colors">
                        <div className="text-signal-amber font-mono text-lg mb-2">PROJECT BASED</div>
                        <p className="text-sm text-text-muted">Defined scope and timeline. No indefinite employment. Pure impact.</p>
                    </div>
                    <div className="p-6 border border-white/5 hover:border-white/20 transition-colors">
                        <div className="text-signal-amber font-mono text-lg mb-2">HIGH AUTONOMY</div>
                        <p className="text-sm text-text-muted">Full budget authority delegated within the scope. You are the General.</p>
                    </div>
                    <div className="p-6 border border-white/5 hover:border-white/20 transition-colors">
                        <div className="text-signal-amber font-mono text-lg mb-2">SQUAD READY</div>
                        <p className="text-sm text-text-muted">Bring your own trusted lieutenants. Deploy as a fully functional unit.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contract;
