import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@jula.jp",
      to: "info@jula.jp",
      replyTo: email,
      subject: `【お問い合わせ】${company ? `${company} - ` : ""}${name}様より`,
      text: `
お名前: ${name}
メールアドレス: ${email}
会社名: ${company || "なし"}

【お問い合わせ内容】
${message}
      `.trim(),
      html: `
<h2>お問い合わせがありました</h2>
<p><strong>お名前:</strong> ${name}</p>
<p><strong>メールアドレス:</strong> ${email}</p>
<p><strong>会社名:</strong> ${company || "なし"}</p>
<h3>お問い合わせ内容</h3>
<p>${message.replace(/\n/g, "<br>")}</p>
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("メール送信エラー:", error);
    return NextResponse.json(
      { error: "メールの送信に失敗しました" },
      { status: 500 }
    );
  }
}
