import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

type SubscribeBody = {
  email?: unknown;
  firstName?: unknown;
  source?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY?.trim();
  if (!key) return null;
  return new Resend(key);
}

export async function POST(req: Request) {
  let body: SubscribeBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const emailRaw = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!emailRaw || emailRaw.length > 200 || !EMAIL_RE.test(emailRaw)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const firstName =
    typeof body.firstName === "string" && body.firstName.trim().length > 0
      ? body.firstName.trim().slice(0, 100)
      : null;

  const source =
    typeof body.source === "string" && body.source.trim().length > 0
      ? body.source.trim().slice(0, 50)
      : "unknown";

  const { error: dbError } = await supabase
    .from("subscribers")
    .upsert(
      { email: emailRaw, first_name: firstName, source },
      { onConflict: "email" },
    );

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 });
  }

  const resend = getResend();
  const audienceId = process.env.RESEND_AUDIENCE_ID?.trim();

  if (resend && audienceId) {
    await resend.contacts.create({
      email: emailRaw,
      firstName: firstName ?? undefined,
      audienceId,
    }).catch(() => {
      // Non-fatal: subscriber already in Supabase, Resend failure doesn't block response
    });

    const greeting = firstName ? `${firstName},` : "Reader,";

    await resend.emails.send({
      from: "Buford Tatum, Bureau Chief <noreply@thegreentomato.news>",
      to: emailRaw,
      subject: "You Are Now a Subscriber of The Green Tomato",
      html: `
        <div style="font-family: 'Times New Roman', Times, serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #fff; border: 2px solid #000080;">
          <div style="background: #000080; color: #FFFF00; text-align: center; padding: 12px; margin-bottom: 20px;">
            <div style="font-size: 28px; font-weight: bold; letter-spacing: 0.05em;">THE GREEN TOMATO</div>
            <div style="font-size: 11px; color: #fff; margin-top: 4px;">Calhoun County's Most Trusted News Source Since Recently</div>
          </div>
          <p style="font-size: 15px; line-height: 1.6; color: #000;">Dear ${greeting}</p>
          <p style="font-size: 15px; line-height: 1.6; color: #000;">
            You are now a subscriber of The Green Tomato. Buford Tatum, Bureau Chief, thanks you for your continued readership.
          </p>
          <p style="font-size: 15px; line-height: 1.6; color: #000;">
            You will receive updates when new stories are published. Coverage includes local government, community events, agricultural developments, and other matters of record in Calhoun County, Alabama.
          </p>
          <p style="font-size: 15px; line-height: 1.6; color: #000;">
            If you did not subscribe, please disregard this message. The Green Tomato regrets any confusion.
          </p>
          <hr style="border: none; border-top: 3px double #000080; margin: 20px 0;" />
          <p style="font-size: 12px; color: #555; text-align: center;">
            Buford Tatum, Bureau Chief<br />
            The Green Tomato<br />
            Calhoun County, Alabama<br />
            <a href="https://thegreentomato.news" style="color: #0000EE;">thegreentomato.news</a>
          </p>
        </div>
      `,
    }).catch(() => {
      // Non-fatal: confirmation email failure doesn't block subscribe response
    });
  }

  return NextResponse.json({ ok: true });
}
