import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ success: false, error: "Email is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Event Horizon" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Welcome Aboard the Event Horizon Network",
      html: `
        <div style="font-family: Arial, sans-serif; background: #0a0f1a; color: #e0e6f8; padding: 20px; border-radius: 10px;">
          <h2 style="color: #5aaaff; text-align:center;">Transmission Received</h2>
          <p>Greetings, Explorer!</p>
          <p>Your signal has reached the <strong>Event Horizon Core Network</strong>. You are now subscribed to our cosmic newsletter.</p>
          <p style="font-size: 15px; line-height: 1.6;">
            Prepare for transmission.<br/>
            <strong style="color:#00fff7; text-shadow:0 0 8px #00fff7;">Event Horizon Command — Asif Ahmed Tanjid</strong>
          </p>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
