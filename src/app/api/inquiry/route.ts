import { NextResponse } from "next/server";
import { sendEmail, fieldRow, emailTemplate } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, productName } = body;

    if (!name || !email || !phone || !productName) {
      return NextResponse.json(
        { error: "Name, email, phone, and product are required." },
        { status: 400 }
      );
    }

    const rows = [
      fieldRow("Product", productName),
      fieldRow("Name", name),
      fieldRow("Email", email),
      fieldRow("Phone", phone),
      message ? fieldRow("Message", message) : "",
    ].join("");

    await sendEmail({
      subject: `Product Inquiry: ${productName} — ${name}`,
      html: emailTemplate("New Product Inquiry", rows),
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[inquiry]", error);
    return NextResponse.json(
      { error: "Failed to send inquiry. Please try WhatsApp or call us." },
      { status: 500 }
    );
  }
}
