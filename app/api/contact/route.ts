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

    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY is not configured");
      return NextResponse.json(
        { error: "Contact service is currently not configured" },
        { status: 500 }
      );
    }

    // Submit via Web3Forms with custom User-Agent to avoid Cloudflare challenge blocking serverless IPs
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0 (compatible; TejasPortfolio/1.0; +https://tejasportfolio-six.vercel.app)",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        subject: `[Portfolio Inquiry] ${subject}`,
        message,
        from_name: `${name} (via Portfolio Contact)`,
      }),
      signal: AbortSignal.timeout(9000),
    });

    const result = await response.json();

    if (response.ok && (result.success === true || result.success === "true")) {
      return NextResponse.json(
        { success: true, message: "Your message has been sent directly to Tejas's email." },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: result.message || "Failed to send message." },
        { status: response.status >= 400 ? response.status : 400 }
      );
    }
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal Server Error";
    console.error("Error sending contact email:", errorMsg);
    return NextResponse.json(
      { error: "Internal Server Error", details: errorMsg },
      { status: 500 }
    );
  }
}



