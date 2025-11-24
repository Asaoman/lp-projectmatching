import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', content: 'VIZOR AGENT [Version 3.0.1]' },
        { type: 'system', content: '(c) 2024 VIZOR Corporation. All rights reserved.' },
        { type: 'system', content: 'Initializing secure connection...' },
        { type: 'success', content: 'Connection established.' },
        { type: 'info', content: 'お問い合わせ内容を選択してください:' },
        { type: 'info', content: '[1] プロジェクトのご相談' },
        { type: 'info', content: '[2] エキスパート登録' },
    ]);
    const [step, setStep] = useState('type'); // type, name, email, message, complete
    const [formData, setFormData] = useState({});

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim();
            const newHistory = [...history, { type: 'user', content: cmd }];

            processCommand(cmd, newHistory);
            setInput('');
        }
    };

    const processCommand = (cmd, currentHistory) => {
        let response = [];
        let nextStep = step;

        if (step === 'type') {
            if (cmd === '1' || cmd.toLowerCase().includes('project')) {
                response = [{ type: 'success', content: 'Selected: Project Consultation' }, { type: 'info', content: '貴社名を入力してください:' }];
                setFormData({ ...formData, type: 'project' });
                nextStep = 'company';
            } else if (cmd === '2' || cmd.toLowerCase().includes('expert')) {
                response = [{ type: 'success', content: 'Selected: Expert Registration' }, { type: 'info', content: '現在の所属/会社名を入力してください:' }];
                setFormData({ ...formData, type: 'expert' });
                nextStep = 'company';
            } else {
                response = [{ type: 'error', content: '無効な選択です。[1] または [2] を入力してください。' }];
            }
        } else if (step === 'company') {
            response = [{ type: 'info', content: 'お名前を入力してください:' }];
            setFormData({ ...formData, company: cmd });
            nextStep = 'name';
        } else if (step === 'name') {
            response = [{ type: 'info', content: 'メールアドレスを入力してください:' }];
            setFormData({ ...formData, name: cmd });
            nextStep = 'email';
        } else if (step === 'email') {
            if (cmd.includes('@')) {
                response = [{ type: 'info', content: 'お問い合わせ内容/概要を入力してください:' }];
                setFormData({ ...formData, email: cmd });
                nextStep = 'message';
            } else {
                response = [{ type: 'error', content: '無効なメールアドレス形式です。' }];
            }
        } else if (step === 'message') {
            response = [
                { type: 'success', content: 'Transmission Complete.' },
                { type: 'system', content: 'Ticket #8X-992 created.' },
                { type: 'system', content: '担当者より24時間以内にご連絡いたします。' },
                { type: 'system', content: 'Session terminated.' }
            ];
            setFormData({ ...formData, message: cmd });
            nextStep = 'complete';
            // Here you would typically send the data to a backend
            console.log('Form Data:', { ...formData, message: cmd });
        }

        setHistory([...currentHistory, ...response]);
        setStep(nextStep);
    };

    // Auto-scroll to bottom
    useEffect(() => {
        const terminal = document.getElementById('terminal-output');
        if (terminal) terminal.scrollTop = terminal.scrollHeight;
    }, [history]);

    return (
        <section className="py-32 bg-void text-platinum relative overflow-hidden font-mono" id="contact">
            <div className="max-w-4xl mx-auto px-6">

                <div className="mb-12 text-center">
                    <h2 className="text-4xl md:text-6xl font-display mb-4">INITIATE <span className="text-zinc-600">CONTACT</span></h2>
                    <p className="text-zinc-500">Secure Channel // Encrypted</p>
                </div>

                <div className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden shadow-2xl shadow-black/50">
                    {/* Terminal Header */}
                    <div className="bg-zinc-900 px-4 py-2 flex items-center gap-2 border-b border-zinc-800">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        <div className="ml-4 text-xs text-zinc-500">guest@vizor-agent:~</div>
                    </div>

                    {/* Terminal Body */}
                    <div id="terminal-output" className="p-6 h-[400px] overflow-y-auto scrollbar-hide space-y-2">
                        {history.map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className={`${line.type === 'user' ? 'text-platinum' :
                                    line.type === 'error' ? 'text-red-500' :
                                        line.type === 'success' ? 'text-signal-amber' :
                                            line.type === 'system' ? 'text-zinc-500' :
                                                'text-zinc-300'
                                    }`}
                            >
                                {line.type === 'user' && <span className="text-zinc-500 mr-2">$</span>}
                                {line.content}
                            </motion.div>
                        ))}

                        {step !== 'complete' && (
                            <div className="flex items-center gap-2 text-platinum mt-4">
                                <span className="text-signal-amber">$</span>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleCommand}
                                    className="bg-transparent border-none outline-none flex-1 font-mono text-platinum placeholder-zinc-700"
                                    autoFocus
                                    placeholder="Type command..."
                                />
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                    className="w-2 h-5 bg-signal-amber"
                                />
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Terminal;
