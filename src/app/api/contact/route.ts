import { NextResponse } from "next/server";
import { sendEmail, fieldRow, emailTemplate } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, product, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Name, email, phone, and message are required." },
        { status: 400 }
      );
    }

    const rows = [
      fieldRow("Name", name),
      fieldRow("Email", email),
      fieldRow("Phone", phone),
      company ? fieldRow("Company", company) : "",
      product ? fieldRow("Product Interest", product) : "",
      fieldRow("Message", message),
    ].join("");

    await sendEmail({
      subject: `New Contact Inquiry — ${name}`,
      html: emailTemplate("New Contact Form Submission", rows),
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
