import { NextResponse } from "next/server";
import { sendEmail, fieldRow, emailTemplate } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const rows = fieldRow("Subscriber Email", email);

    await sendEmail({
      subject: `Newsletter Subscription — ${email}`,
      html: emailTemplate("New Newsletter Subscriber", rows),
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[newsletter]", error);
    return NextResponse.json(
      { error: "Subscription failed. Please try again." },
      { status: 500 }
    );
  }
}
