import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        company: '',
        name: '',
        email: '',
        type: 'project',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: フォーム送信処理を実装
        console.log('Form submitted:', formData);
        alert('お問い合わせありがとうございます。担当者より3営業日以内にご連絡いたします。');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="py-32 bg-void text-platinum relative overflow-hidden border-t border-zinc-700">
            <div className="max-w-4xl mx-auto px-6">

                {/* ヘッダー */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-serif-display mb-6">お問い合わせ</h2>
                    <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                        プロジェクトのご相談、専門家登録に関するお問い合わせは、
                        以下のフォームよりお気軽にご連絡ください。
                    </p>
                </motion.div>

                {/* フォーム */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                >
                    {/* お問い合わせ種別 */}
                    <div>
                        <label className="block text-sm font-mono-data text-zinc-400 mb-3">
                            お問い合わせ種別 <span className="text-signal-amber">*</span>
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <label className={`border ${formData.type === 'project' ? 'border-signal-amber bg-zinc-800/50' : 'border-zinc-700'} p-4 cursor-pointer hover:border-signal-amber/50 transition-colors bg-zinc-900/30`}>
                                <input
                                    type="radio"
                                    name="type"
                                    value="project"
                                    checked={formData.type === 'project'}
                                    onChange={handleChange}
                                    className="sr-only"
                                />
                                <div className="text-center">
                                    <div className="font-serif-display text-lg mb-1">プロジェクト相談</div>
                                    <div className="text-xs text-zinc-400">専門家をお探しの方</div>
                                </div>
                            </label>
                            <label className={`border ${formData.type === 'expert' ? 'border-signal-amber bg-zinc-800/50' : 'border-zinc-700'} p-4 cursor-pointer hover:border-signal-amber/50 transition-colors bg-zinc-900/30`}>
                                <input
                                    type="radio"
                                    name="type"
                                    value="expert"
                                    checked={formData.type === 'expert'}
                                    onChange={handleChange}
                                    className="sr-only"
                                />
                                <div className="text-center">
                                    <div className="font-serif-display text-lg mb-1">専門家登録</div>
                                    <div className="text-xs text-zinc-400">プロジェクトに参画したい方</div>
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* 会社名 */}
                    <div>
                        <label htmlFor="company" className="block text-sm font-mono-data text-zinc-400 mb-3">
                            会社名 <span className="text-signal-amber">*</span>
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full bg-zinc-900/50 border border-zinc-700 px-4 py-3 text-platinum focus:border-signal-amber focus:outline-none transition-colors font-serif-body"
                            placeholder="株式会社〇〇"
                        />
                    </div>

                    {/* お名前 */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-mono-data text-zinc-400 mb-3">
                            お名前 <span className="text-signal-amber">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-zinc-900/50 border border-zinc-700 px-4 py-3 text-platinum focus:border-signal-amber focus:outline-none transition-colors font-serif-body"
                            placeholder="山田 太郎"
                        />
                    </div>

                    {/* メールアドレス */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-mono-data text-zinc-400 mb-3">
                            メールアドレス <span className="text-signal-amber">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-zinc-900/50 border border-zinc-700 px-4 py-3 text-platinum focus:border-signal-amber focus:outline-none transition-colors font-serif-body"
                            placeholder="example@company.com"
                        />
                    </div>

                    {/* メッセージ */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-mono-data text-zinc-400 mb-3">
                            お問い合わせ内容 <span className="text-signal-amber">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            rows="6"
                            className="w-full bg-zinc-900/50 border border-zinc-700 px-4 py-3 text-platinum focus:border-signal-amber focus:outline-none transition-colors font-serif-body resize-none"
                            placeholder="プロジェクトの概要、予算規模、期間などをご記入ください。"
                        />
                    </div>

                    {/* 送信ボタン */}
                    <div className="text-center pt-8">
                        <button
                            type="submit"
                            className="px-12 py-4 bg-platinum text-void-black font-bold tracking-widest uppercase hover:bg-signal-amber transition-colors duration-300"
                        >
                            送信する
                        </button>
                        <p className="text-xs text-zinc-400 mt-4">
                            3営業日以内に担当者よりご連絡いたします
                        </p>
                    </div>
                </motion.form>

            </div>
        </section>
    );
};

export default Contact;
