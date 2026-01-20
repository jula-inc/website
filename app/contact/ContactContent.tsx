"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("お問い合わせありがとうございます。内容を確認後、ご連絡いたします。");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-10"
        >
          お問い合わせ
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-white/10 rounded-lg p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-white mb-2">
                  お名前 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors text-sm"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-white mb-2">
                  メールアドレス <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors text-sm"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm text-white mb-2">
                  会社名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors text-sm"
                  placeholder="株式会社○○"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-white mb-2">
                  お問い合わせ内容 <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none text-sm"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors text-sm"
              >
                送信する
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="border border-white/10 rounded-lg p-6">
              <h2 className="text-lg font-medium text-white mb-4">お問い合わせ先</h2>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-white mb-1">所在地</p>
                  <p className="text-white">〒049-0101 北海道北斗市追分4-11-8</p>
                </div>
                <div>
                  <p className="text-white mb-1">電話番号</p>
                  <p className="text-white">080-9585-8493</p>
                </div>
                <div>
                  <p className="text-white mb-1">メールアドレス</p>
                  <p className="text-white">info@jula.jp</p>
                </div>
              </div>
            </div>

            <div className="border border-white/10 rounded-lg p-6">
              <h2 className="text-lg font-medium text-white mb-4">営業時間</h2>
              <p className="text-white text-sm">平日 9:00 - 18:00</p>
              <p className="text-white text-sm mt-1">土日祝日はお休みをいただいております</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
