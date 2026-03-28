import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

export async function POST(req: Request) {
  if (!resend || !RESEND_API_KEY) {
    return Response.json(
      {
        ok: false,
        error:
          "Email service is not configured. Add RESEND_API_KEY to .env.local",
      },
      { status: 500 },
    );
  }

  const formData = await req.formData();
  const names = formData.get("names");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const location = formData.get("location");
  const weddingDate = formData.get("weddingDate");
  const weddingVenue = formData.get("weddingVenue");
  const photographer = formData.get("photographer");
  const message = formData.get("message");
  const howFound = formData.get("howFound");
  const agreeToPrivacy = formData.get("agreeToPrivacy");

  const html = `
    <div style="font-family: sans-serif; max-width: 560px; line-height: 1.6;">
      <h2 style="color: #1E1E1E;">Hello Nikolay,</h2>
      <p style="font-size: 16px; color: #333;">
        <strong>${names}</strong> would like to connect with you about their wedding.
      </p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
      <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p style="margin: 8px 0;"><strong>Phone:</strong> ${phone}</p>
      ${location ? `<p style="margin: 8px 0;"><strong>Location:</strong> ${location}</p>` : ""}
      <p style="margin: 8px 0;"><strong>Wedding Date:</strong> ${weddingDate}</p>
      <p style="margin: 8px 0;"><strong>Venue:</strong> ${weddingVenue}</p>
      ${photographer ? `<p style="margin: 8px 0;"><strong>Photographer:</strong> ${photographer}</p>` : ""}
      ${howFound ? `<p style="margin: 8px 0;"><strong>How they found you:</strong> ${howFound}</p>` : ""}
      <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
      <p style="margin: 8px 0;"><strong>Message:</strong></p>
      <p style="margin: 8px 0; padding: 12px; background: #f5f5f5; border-radius: 8px;">${message}</p>
      <p style="margin: 8px 0;"><strong>Agree to Privacy:</strong> ${agreeToPrivacy}</p>
    </div>
  `;

  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "nicklazarev19@gmail.com",
      subject: `New inquiry from ${names}`,
      html: html,
    });
    if (response.error) {
      const err = response.error as { message?: string };
      throw new Error(err?.message ?? "Failed to send email");
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error(error);
    return Response.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
