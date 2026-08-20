import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Send directly to Tejas's email via FormSubmit (No API Key Required!)
    const response = await fetch("https://formsubmit.co/ajax/kumartejas063@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject: `[Portfolio Inquiry] ${subject}`,
        message,
        _subject: `New Portfolio Message from ${name}: ${subject}`,
        _replyto: email,
        _template: "table",
      }),
    });

    const result = await response.json();

    if (response.ok || result.success === "true" || result.message?.includes("success")) {
      return NextResponse.json(
        { success: true, message: "Your message has been sent directly to Tejas's email." },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: result.message || "Failed to send message." },
        { status: 400 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}


