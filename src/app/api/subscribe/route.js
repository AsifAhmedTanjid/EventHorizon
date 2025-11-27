import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email } = await request.json();

    await resend.emails.send({
      from: "Event Horizon <onboarding@resend.dev>",
      to: email,
      subject: "Welcome Aboard the Event Horizon Network",
      html: `
    <div style="font-family: Arial, sans-serif; background: #0a0f1a; color: #e0e6f8; padding: 20px; border-radius: 10px;">
      <h2 style="color: #5aaaff; text-align:center; margin-bottom: 10px;">
         Transmission Received
      </h2>

      <p style="font-size: 15px; line-height: 1.6;">
        Greetings, Explorer.
      </p>

      <p style="font-size: 15px; line-height: 1.6;">
        Your signal has reached the <strong>Event Horizon Core Network</strong>.  
        Subspace channels are now synchronized.
      </p>

      <p style="font-size: 15px; line-height: 1.6; margin-top: 10px;">
        You are now subscribed to our cosmic newsletter — a curated stream of 
        upcoming events, rare sightings, and stellar happenings across spacetime.
      </p>

      <div style="border-left: 3px solid #5aaaff; padding-left: 10px; margin: 20px 0; color:#b8c7f3;">
        <em>
          “Beyond the horizon lies discovery. Stay curious.”
        </em>
      </div>

      <p style="font-size: 15px; line-height: 1.6;">
        Prepare for transmission.<br/>
         <strong>
    Event Horizon Command — 
    <span style="
        color: #00fff7; 
        text-decoration: none; 
        text-shadow: 0 0 8px #00fff7, 0 0 16px #00fff7;
      ">
      Asif Ahmed Tanjid
    </span>
  </strong>
      </p>
      

      <hr style="border: none; border-top: 1px solid #222; margin: 25px 0;" />

      <p style="font-size: 12px; color: #6b7280;">
        If this wasn't you, the anomaly will self-correct. No action needed.
      </p>
      
    </div>
  `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
