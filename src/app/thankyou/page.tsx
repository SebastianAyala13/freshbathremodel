export default function ThankYouPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.28)_0,_transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.28)_0,_transparent_55%)]" />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center gap-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-4 py-1 text-xs font-medium text-sky-200 ring-1 ring-sky-500/30 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Request received · Priority review
        </div>

        <section className="w-full rounded-3xl border border-sky-500/25 bg-slate-950/80 p-8 text-center shadow-[0_24px_120px_rgba(15,23,42,0.9)] backdrop-blur-lg sm:p-10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-sky-500 to-indigo-500 shadow-[0_18px_45px_rgba(56,189,248,0.5)]">
            <span className="text-3xl text-white">✓</span>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Thank you for trusting Fresh Bath
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
            We&apos;ve received your quote request. A Fresh Bath Renovations specialist
            will review your project details and contact you shortly to confirm the best
            time for your free in-home consultation.
          </p>

          <div className="mt-8 grid gap-4 text-left text-xs text-slate-200 sm:grid-cols-3 sm:text-sm">
            <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-4">
              <p className="font-semibold text-slate-50">What happens next?</p>
              <p className="mt-2 text-slate-300">
                We&apos;ll reach out by phone or email to confirm a convenient time and
                finalize the details of your remodel.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-4">
              <p className="font-semibold text-slate-50">No‑pressure consultation</p>
              <p className="mt-2 text-slate-300">
                Our specialist will bring design options, materials and pricing—no
                obligation to proceed.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-4">
              <p className="font-semibold text-slate-50">Premium workmanship</p>
              <p className="mt-2 text-slate-300">
                Licensed, insured installers with fast timelines and a bathroom you&apos;ll
                be proud to show off.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(56,189,248,0.5)] transition hover:-translate-y-0.5 hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Back to Home
            </a>
            <p className="max-w-xs text-xs text-slate-400">
              Prefer to talk now? Call our team and mention your online quote request to
              pick up right where you left off.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-400">
            <span className="rounded-full border border-slate-700/80 px-3 py-1">
              Trusted bathroom specialists
            </span>
            <span className="rounded-full border border-slate-700/80 px-3 py-1">
              No obligation · Free estimates
            </span>
            <span className="rounded-full border border-slate-700/80 px-3 py-1">
              Fully licensed &amp; insured
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
