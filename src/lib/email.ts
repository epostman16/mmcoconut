import { Resend } from "resend";
import { companyInfo } from "@/lib/data";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const fromEmail =
  process.env.RESEND_FROM_EMAIL || "MM Coconut <onboarding@resend.dev>";
const toEmail = process.env.CONTACT_TO_EMAIL || companyInfo.email;

export async function sendEmail({
  subject,
  html,
  replyTo,
}: {
  subject: string;
  html: string;
  replyTo?: string;
}) {
  if (!resend) {
    console.warn("[email] RESEND_API_KEY not set — logging message instead:");
    console.warn({ subject, to: toEmail, replyTo });
    return { success: true, mocked: true };
  }

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    subject,
    html,
    replyTo,
  });

  if (error) {
    throw new Error(error.message);
  }

  return { success: true, mocked: false };
}

export function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function fieldRow(label: string, value: string) {
  return `<tr><td style="padding:8px 12px;font-weight:600;color:#14532d;vertical-align:top;">${label}</td><td style="padding:8px 12px;color:#333;">${escapeHtml(value)}</td></tr>`;
}

export function emailTemplate(title: string, rows: string) {
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#15803d;color:white;padding:20px 24px;border-radius:8px 8px 0 0;">
        <h1 style="margin:0;font-size:20px;">${escapeHtml(title)}</h1>
        <p style="margin:4px 0 0;opacity:0.85;font-size:13px;">${companyInfo.name}</p>
      </div>
      <table style="width:100%;border-collapse:collapse;background:#fafaf8;border:1px solid #e5ddd3;border-top:none;border-radius:0 0 8px 8px;">
        ${rows}
      </table>
    </div>
  `;
}
