"use client";

import { useState, useCallback, useMemo } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const fieldClass =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-2 transition-colors focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const { mailtoUrl, isValid } = useMemo(() => {
    const subject = `【お問い合わせ】${formData.company ? `${formData.company} - ` : ""}${formData.name || "お客"}様より`;
    const body = `お名前: ${formData.name || "未入力"}
メールアドレス: ${formData.email || "未入力"}
電話番号: ${formData.phone || "なし"}
会社名: ${formData.company || "なし"}

【お問い合わせ内容】
${formData.message || "未入力"}`;

    return {
      mailtoUrl: `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      isValid: Boolean(formData.name && formData.email && formData.message),
    };
  }, [formData]);

  return (
    <div className="card-surface rounded-card p-6 sm:p-8">
      <form className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
            お名前 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={fieldClass}
            placeholder="山田 太郎"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            spellCheck={false}
            required
            value={formData.email}
            onChange={handleChange}
            className={fieldClass}
            placeholder="example@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
            電話番号
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className={fieldClass}
            placeholder="090-1234-5678"
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
            会社名
          </label>
          <input
            type="text"
            id="company"
            name="company"
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
            className={fieldClass}
            placeholder="株式会社○○"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
            お問い合わせ内容 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className={cn(fieldClass, "resize-none")}
            placeholder="お問い合わせ内容をご記入ください"
          />
        </div>

        {isValid ? (
          <a
            href={mailtoUrl}
            className="block w-full rounded-full bg-accent-deep py-3 text-center text-sm font-medium text-white transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            送信
          </a>
        ) : (
          <span
            className="block w-full cursor-not-allowed rounded-full bg-surface-2 py-3 text-center text-sm font-medium text-muted-2"
            aria-disabled="true"
          >
            必須項目を入力してください
          </span>
        )}
      </form>
    </div>
  );
}
