import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
    { id: 'name', text: 'まず、君のコードネーム（氏名）を教えろ。' },
    { id: 'university', text: '所属機関（大学名）は？' },
    { id: 'achievement', text: '君がこれまでに成し遂げた、最大の『数字』での成果を報告せよ。（例: 売上、ユーザー数）' },
    { id: 'failure', text: '最大の『失敗』と、そこから何を学んでどうピボットしたか、簡潔に述べよ。' },
    { id: 'proof', text: '実績を証明するデータ（URL, GitHub, SlideShareなど）へのリンクを貼れ。' }
];

const EntryForm = ({ onClose }) => {
    const [history, setHistory] = useState([
        { type: 'system', text: '接続を確認。これより適性審査を開始する。' }
    ]);
    const [currentStep, setCurrentStep] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (currentStep < questions.length) {
            setIsTyping(true);
            setTimeout(() => {
                setHistory(prev => [...prev, { type: 'system', text: questions[currentStep].text }]);
                setIsTyping(false);
            }, 1000);
        } else {
            setIsTyping(true);
            setTimeout(() => {
                setHistory(prev => [...prev, { type: 'system', text: 'データ受領。解析を開始する... 結果は追って通知する。通信終了。' }]);
                setIsTyping(false);
            }, 1000);
        }
    }, [currentStep]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history, isTyping]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        setHistory(prev => [...prev, { type: 'user', text: inputValue }]);
        setInputValue('');
        setCurrentStep(prev => prev + 1);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black font-mono p-4 md:p-10 flex flex-col"
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-white border border-gray-800 hover:border-white px-4 py-2 transition-colors"
            >
                ABORT
            </button>

            <div className="flex-1 max-w-3xl mx-auto w-full overflow-y-auto custom-scrollbar" ref={scrollRef}>
                <div className="space-y-4 pb-20">
                    {history.map((msg, index) => (
                        <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] p-4 ${msg.type === 'user'
                                ? 'bg-[var(--color-neon-cyan)] text-black'
                                : 'border border-gray-800 text-[var(--color-neon-cyan)]'
                                }`}>
                                <span className="text-xs opacity-50 block mb-1">
                                    {msg.type === 'user' ? '> CANDIDATE' : '> SYSTEM'}
                                </span>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="border border-gray-800 text-[var(--color-neon-cyan)] p-4">
                                <span className="animate-pulse">_</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {currentStep < questions.length && (
                <form onSubmit={handleSubmit} className="max-w-3xl mx-auto w-full mt-4">
                    <div className="flex gap-2">
                        <span className="text-[var(--color-accent-core)] py-3">&gt;</span>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="flex-1 bg-transparent border-b border-gray-800 text-white py-3 px-2 focus:outline-none focus:border-[var(--color-neon-cyan)] font-mono"
                            placeholder="Type your answer..."
                            autoFocus
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-gray-900 text-[var(--color-neon-cyan)] hover:bg-[var(--color-neon-cyan)] hover:text-black transition-colors"
                        >
                            ENTER
                        </button>
                    </div>
                </form>
            )}
        </motion.div>
    );
};

export default EntryForm;
