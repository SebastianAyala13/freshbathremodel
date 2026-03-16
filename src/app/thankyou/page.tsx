export default function ThankYouPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl items-center px-4 py-20 sm:px-6">
      <div className="w-full rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">Thank You</h1>
        <p className="mt-4 text-slate-600">
          Your request has been received. A Fresh Bath Renovations specialist will
          contact you shortly.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-900"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
