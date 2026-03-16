import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type LeadRecord = Record<string, unknown>;

const FALLBACK_ZAPIER_URL =
  "https://hooks.zapier.com/hooks/catch/22208931/ux9b4x3/";

async function toRecord(req: NextRequest): Promise<LeadRecord | null> {
  const clone = req.clone();

  try {
    const json = (await clone.json()) as LeadRecord;
    if (json && typeof json === "object") return json;
  } catch {
    // ignore and try formData
  }

  try {
    const formData = await clone.formData();
    const obj: LeadRecord = {};
    formData.forEach((value, key) => {
      obj[key] = typeof value === "string" ? value : value.name;
    });
    return obj;
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await toRecord(req);
    if (!body) {
      return NextResponse.json({ error: "Invalid body" }, { status: 400 });
    }

    const get = (key: string): string | undefined => {
      const v = body[key];
      return typeof v === "string" ? v : undefined;
    };

    const fwd = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    const ip =
      fwd?.split(",")[0]?.trim() ||
      (realIp ?? "") ||
      "unknown";

    const payload = {
      lp_campaign_id: get("lp_campaign_id") ?? "Provided",
      lp_campaign_key: get("lp_campaign_key") ?? "Provided",
      lp_s1: get("lp_s1") ?? "Provided",
      lp_s2: get("lp_s2") ?? "freshbathrenovations",
      lp_response: "JSON",
      first_name: get("first_name") ?? "",
      last_name: get("last_name") ?? "",
      email_address: get("email_address") ?? "",
      phone_home: get("phone_home") ?? "",
      address: get("address") ?? "",
      city: get("city") ?? "",
      state: get("state") ?? "",
      zip_code: get("zip_code") ?? "",
      repair_or_replace: get("repair_or_replace") ?? "",
      ip_address: ip,
      trusted_form_cert_id:
        get("trusted_form_cert_id") ??
        get("xxTrustedFormCertUrl") ??
        "NOT_PROVIDED",
      landing_page: get("landing_page") ?? "",
      jornaya_lead_id:
        get("jornaya_lead_id") ??
        get("leadid_token") ??
        get("universal_leadid") ??
        "",
      tcpaText: get("tcpaText") ?? "",
      "consent-language": body["consent-language"] ?? true,
      bathroomStyle: get("bathroomStyle") ?? "Modern",
      urgency: get("urgency") ?? "Within 3 months",
      ownership: get("ownership") ?? "Owner",
      timestamp: get("timestamp") ?? new Date().toISOString(),
      source: get("source") ?? "Fresh Bath Renovations",
      form_type: get("form_type") ?? "fresh_bath_remodel",
      language: get("language") ?? "en",
      website: get("website") ?? "https://freshbathrenovations.com"
    };

    const ZAPIER_URL =
      process.env.ZAPIER_FRESH_BATH_HOOK_URL || FALLBACK_ZAPIER_URL;

    const r = await fetch(ZAPIER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      next: { revalidate: 0 }
    });

    const text = await r.text();

    if (!r.ok) {
      console.error("Zapier error", r.status, text);
      return NextResponse.json(
        { error: "Zapier error", detail: text },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, status: r.status });
  } catch (error) {
    console.error("Fresh Bath Zapier route error", error);
    return NextResponse.json(
      { error: "Server error", detail: "Unexpected error sending lead" },
      { status: 500 }
    );
  }
}
