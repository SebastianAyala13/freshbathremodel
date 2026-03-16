"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { isValidZipCode } from "@/lib/authorizedZipCodes";
import { getFreshBathRemodelEndpoint } from "@/lib/formConfig";

type FormState = {
  repair_or_replace: string;
  zip_code: string;
  state: string;
  address: string;
  first_name: string;
  last_name: string;
  email_address: string;
  phone_home: string;
  xxTrustedFormCertUrl: string;
  universal_leadid: string;
  leadid_token: string;
  landing_page: string;
  tcpaText: string;
  bathroomStyle: string;
  urgency: string;
  ownership: string;
  "consent-language": boolean;
};

const steps: Array<keyof FormState> = [
  "repair_or_replace",
  "zip_code",
  "state",
  "address",
  "first_name",
  "last_name",
  "email_address",
  "phone_home"
];

const tcpaText =
  "By clicking Submit, you agree to give express consent to receive marketing communications regarding home improvement and bathroom renovation services via telephone, mobile device (including SMS and MMS), and email, including the use of an automatic telephone dialing system, artificial or prerecorded voice, and other technology, from Fresh Bath Renovations and its home services partners at the phone number and email address you provide. You understand that consent is not a condition of purchase and that you can opt out at any time. Message and data rates may apply. For more details, please review our Partners, Privacy Policy, and Terms & Conditions on this site.";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    TrustedForm?: {
      getCertUrl?: () => string;
    };
  }
}

function waitForLeadId(maxMs = 2500, interval = 150): Promise<string> {
  return new Promise((resolve) => {
    const started = Date.now();
    const timer = window.setInterval(() => {
      const hidden = document.getElementById("leadid_token") as HTMLInputElement | null;
      const value = hidden?.value?.trim() ?? "";
      if (value) {
        window.clearInterval(timer);
        resolve(value);
        return;
      }
      if (Date.now() - started >= maxMs) {
        window.clearInterval(timer);
        resolve("");
      }
    }, interval);
  });
}

export default function FreshBathWizardForm() {
  const router = useRouter();
  const tfRef = useRef<HTMLInputElement | null>(null);
  const hasSubmitted = useRef(false);
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<FormState>({
    repair_or_replace: "",
    zip_code: "",
    state: "",
    address: "",
    first_name: "",
    last_name: "",
    email_address: "",
    phone_home: "",
    xxTrustedFormCertUrl: "",
    universal_leadid: "",
    leadid_token: "",
    landing_page: "",
    tcpaText,
    bathroomStyle: "Modern",
    urgency: "Within 3 months",
    ownership: "Owner",
    "consent-language": true
  });

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      landing_page: window.location.href
    }));

    const timer = window.setInterval(() => {
      const certUrl = window.TrustedForm?.getCertUrl?.() ?? "";
      if (certUrl) {
        if (tfRef.current) {
          tfRef.current.value = certUrl;
        }
        setForm((prev) => ({
          ...prev,
          xxTrustedFormCertUrl: certUrl
        }));
      }
    }, 400);

    return () => window.clearInterval(timer);
  }, []);

  const activeField = steps[step];
  const progress = useMemo(
    () => Math.round(((step + 1) / steps.length) * 100),
    [step]
  );

  const zipIsValid = form.zip_code.length === 5 && isValidZipCode(form.zip_code);
  const zipTouched = form.zip_code.trim().length > 0;

  const canContinue = (() => {
    const value = form[activeField]?.toString().trim();
    if (!value) {
      return false;
    }
    if (activeField === "zip_code") {
      return zipIsValid;
    }
    if (activeField === "email_address") {
      return /^\S+@\S+\.\S+$/.test(value);
    }
    return true;
  })();

  function updateField(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (error) setError("");
  }

  function nextStep() {
    if (!canContinue) return;
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  }

  function backStep() {
    setStep((prev) => Math.max(prev - 1, 0));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting || hasSubmitted.current) return;

    if (!zipIsValid) {
      setError("Out of coverage area");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const leadIdFromInput = await waitForLeadId();
      const trustedCertFromWindow = window.TrustedForm?.getCertUrl?.() ?? "";
      const trustedFromInput = tfRef.current?.value?.trim() ?? "";

      const payload = {
        ...form,
        repair_or_replace: form.repair_or_replace,
        zip_code: form.zip_code,
        state: form.state,
        address: form.address,
        first_name: form.first_name,
        last_name: form.last_name,
        email_address: form.email_address,
        phone_home: form.phone_home,
        trusted_form_cert_id:
          trustedCertFromWindow || trustedFromInput || form.xxTrustedFormCertUrl,
        jornaya_lead_id: leadIdFromInput || form.universal_leadid || form.leadid_token,
        landing_page: window.location.href,
        lp_campaign_id: "Provided",
        lp_campaign_key: "Provided",
        lp_s1: "Provided",
        lp_s2: "freshbathrenovations",
        tcpaText,
        "consent-language": true,
        bathroomStyle: form.bathroomStyle,
        urgency: form.urgency,
        ownership: form.ownership,
        timestamp: new Date().toISOString(),
        source: "Fresh Bath Renovations",
        language: "en",
        website: "https://freshbathrenovations.com"
      };

      const res = await fetch(getFreshBathRemodelEndpoint(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        if (window.dataLayer) {
          window.dataLayer.push({
            event: "lead_submit",
            form_id: "fresh_bath_remodel",
            lead_data: {
              first_name: form.first_name,
              last_name: form.last_name,
              email: form.email_address,
              phone: form.phone_home,
              service: form.repair_or_replace,
              zip_code: form.zip_code
            }
          });
        }
        hasSubmitted.current = true;
        router.push("/thankyou");
        return;
      }

      throw new Error(`Zapier endpoint failed with status ${res.status}`);
    } catch (submitError) {
      console.error("Fresh Bath lead submit failed", submitError);
      router.push("/thankyou");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="mb-5">
        <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
          <span>Quick Quote Form</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-brand-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        {activeField === "repair_or_replace" && (
          <>
            <h3 className="text-lg font-semibold text-slate-900">
              Are you repairing or replacing?
            </h3>
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-3">
              <input
                type="radio"
                name="repair_or_replace"
                value="Repair existing bathroom"
                checked={form.repair_or_replace === "Repair existing bathroom"}
                onChange={(e) => updateField("repair_or_replace", e.target.value)}
              />
              <span>Repair existing bathroom</span>
            </label>
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-3">
              <input
                type="radio"
                name="repair_or_replace"
                value="Replace / Full remodel"
                checked={form.repair_or_replace === "Replace / Full remodel"}
                onChange={(e) => updateField("repair_or_replace", e.target.value)}
              />
              <span>Replace / Full remodel</span>
            </label>
          </>
        )}

        {activeField !== "repair_or_replace" && (
          <>
            <label className="block text-sm font-semibold text-slate-800">
              {activeField === "zip_code" && "ZIP Code"}
              {activeField === "state" && "State"}
              {activeField === "address" && "Street Address"}
              {activeField === "first_name" && "First Name"}
              {activeField === "last_name" && "Last Name"}
              {activeField === "email_address" && "Email Address"}
              {activeField === "phone_home" && "Phone Number"}
            </label>

            <input
              value={form[activeField] as string}
              onChange={(e) => updateField(activeField, e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-brand-500 focus:ring-2"
              placeholder={
                activeField === "zip_code"
                  ? "33101"
                  : activeField === "email_address"
                    ? "you@email.com"
                    : activeField === "phone_home"
                      ? "(555) 555-5555"
                      : ""
              }
              maxLength={activeField === "zip_code" ? 5 : undefined}
              inputMode={
                activeField === "zip_code" || activeField === "phone_home"
                  ? "numeric"
                  : activeField === "email_address"
                    ? "email"
                    : "text"
              }
              type={activeField === "email_address" ? "email" : "text"}
            />

            {activeField === "zip_code" && zipTouched && !zipIsValid && (
              <p className="text-sm text-red-600">Out of coverage area</p>
            )}
          </>
        )}
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <div className="mt-6 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={backStep}
          disabled={step === 0 || isSubmitting}
          className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 disabled:opacity-50"
        >
          Back
        </button>

        {step < steps.length - 1 ? (
          <button
            type="button"
            onClick={nextStep}
            disabled={!canContinue || isSubmitting}
            className="rounded-xl bg-brand-500 px-5 py-2 text-sm font-semibold text-white disabled:opacity-50"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            disabled={!canContinue || isSubmitting}
            className="rounded-xl bg-brand-700 px-5 py-2 text-sm font-semibold text-white disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        )}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        By clicking Submit, you agree to give express consent to receive marketing
        communications regarding home improvement and bathroom renovation services via
        telephone, mobile device (including SMS and MMS), and email, including the use of
        an automatic telephone dialing system, artificial or prerecorded voice, and other
        technology, from Fresh Bath Renovations and its{" "}
        <a href="/partners" className="underline">
          Home Services Partners
        </a>{" "}
        at the phone number and email address you provide. You understand that consent is
        not a condition of purchase and that you can opt out at any time. Message and
        data rates may apply. You agree to the{" "}
        <a href="/privacy-policy" className="underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="/terms" className="underline">
          Terms &amp; Conditions
        </a>
        .
      </p>

      <input
        ref={tfRef}
        id="xxTrustedFormCertUrl"
        type="hidden"
        name="xxTrustedFormCertUrl"
        defaultValue=""
      />
      <input
        id="leadid_token"
        type="hidden"
        name="universal_leadid"
        defaultValue=""
      />
      <input type="hidden" name="landing_page" value={form.landing_page} readOnly />
      <input type="hidden" name="tcpaText" value={form.tcpaText} readOnly />
      <input type="hidden" name="bathroomStyle" value={form.bathroomStyle} readOnly />
      <input type="hidden" name="urgency" value={form.urgency} readOnly />
      <input type="hidden" name="ownership" value={form.ownership} readOnly />
      <input
        type="hidden"
        name="consent-language"
        value={form["consent-language"] ? "true" : "false"}
        readOnly
      />
    </form>
  );
}
