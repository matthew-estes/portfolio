import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json({ error: "Please complete all fields" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "me-dev.io <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `${name} sent you a message`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
                line-height: 1.5;
                color: #1d1d1f;
                background: #fff;
              }
              .container {
                max-width: 600px;
                margin: 40px auto;
                background: #fff;
              }
              .message-box {
                padding: 40px;
                background: #fbfbfd;
                border-radius: 12px;
                margin: 20px;
              }
              .from {
                font-size: 24px;
                font-weight: 500;
                margin-bottom: 8px;
                color: #1d1d1f;
              }
              .email {
                font-size: 16px;
                color: #86868b;
                margin-bottom: 24px;
              }
              .email a {
                color: #06c;
                text-decoration: none;
              }
              .divider {
                height: 1px;
                background: #d2d2d7;
                margin: 24px 0;
              }
              .message {
                font-size: 18px;
                line-height: 1.6;
                color: #1d1d1f;
                white-space: pre-wrap;
              }
              .footer {
                text-align: center;
                padding: 20px;
                font-size: 13px;
                color: #86868b;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="message-box">
                <div class="from">${name}</div>
                <div class="email">
                  <a href="mailto:${email}">${email}</a>
                </div>
                <div class="divider"></div>
                <div class="message">${message}</div>
              </div>
              <div class="footer">
                Sent from me-dev.io
              </div>
            </div>
          </body>
        </html>
      `,
      text: `${name} (${email}) sent you a message:\n\n${message}\n\n—\nSent from me-dev.io`,
    });

    if (error) {
      console.error("Email delivery failed:", error);
      return Response.json({ error: "Message could not be delivered" }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("System error:", error);
    return Response.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}
