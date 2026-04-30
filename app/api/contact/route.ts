import { NextResponse } from "next/server";

type ContactRequest = {
  name: string;
  email: string;
  message: string;
  contextUrl?: string;
};

type ContactResponse = { ok: true } | { ok: false; error: string };

const recentByIp = new Map<string, { ts: number; count: number }>();

function getIp(req: Request) {
  const xf = req.headers.get("x-forwarded-for");
  const ip = xf?.split(",")[0]?.trim();
  return ip || "unknown";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validate(body: ContactRequest): string | null {
  if (!body.name || body.name.trim().length < 2) return "Name is required.";
  if (!body.email || !isEmail(body.email.trim()))
    return "Valid email is required.";
  if (!body.message || body.message.trim().length < 10)
    return "Message is required.";
  return null;
}

export async function POST(req: Request) {
  let body: ContactRequest;
  try {
    body = (await req.json()) as ContactRequest;
  } catch {
    return NextResponse.json<ContactResponse>(
      { ok: false, error: "Invalid JSON." },
      { status: 400 },
    );
  }

  const err = validate(body);
  if (err)
    return NextResponse.json<ContactResponse>(
      { ok: false, error: err },
      { status: 400 },
    );

  const ip = getIp(req);
  const now = Date.now();
  const slot = recentByIp.get(ip);
  if (slot && now - slot.ts < 60_000 && slot.count >= 4) {
    return NextResponse.json<ContactResponse>(
      { ok: false, error: "Too many requests. Please try again in a minute." },
      { status: 429 },
    );
  }
  recentByIp.set(ip, {
    ts: slot?.ts && now - slot.ts < 60_000 ? slot.ts : now,
    count: (slot?.count ?? 0) + 1,
  });

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    return NextResponse.json<ContactResponse>(
      {
        ok: false,
        error:
          "Email service is not configured yet. Set RESEND_API_KEY (or update /api/contact to your provider).",
      },
      { status: 501 },
    );
  }

  return NextResponse.json<ContactResponse>({ ok: true });
}
