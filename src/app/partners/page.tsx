export default function PartnersPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Our Home Services Partners</h1>
      <p className="mt-3 text-sm text-slate-500">
        Fresh Bath partners with carefully selected companies across the United States to
        help deliver high-quality bathroom remodeling and related home services.
      </p>

      <section className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
        <p>
          Depending on your location and project needs, your quote request may be
          fulfilled directly by Fresh Bath or by one of our trusted home services
          partners. These partners may include bathroom remodeling specialists, general
          contractors, plumbing and electrical professionals, window and door providers,
          roofing and exterior companies, marketing and lead management vendors, and
          financing providers.
        </p>

        <p>
          Our goal is to connect you with reputable providers that can offer competitive
          solutions for your project. Partnerships exist so we can present multiple
          options and coordinate a more complete home improvement experience when needed.
        </p>

        <p>
          When you submit your information on this website, you acknowledge that your
          project details may be shared with one or more of these partners solely for the
          purpose of:
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Providing bathroom remodeling quotes and design suggestions.</li>
          <li>Scheduling consultations, measurements, and onsite visits.</li>
          <li>Coordinating installation, warranty service, and support.</li>
        </ul>

        <p>
          Partner availability and services may vary by state, county, ZIP code, and
          project type. Not all partners operate in every area, and Fresh Bath does not
          guarantee that any specific partner will be assigned to your project.
        </p>

        <p>
          For details on how your information is collected and shared in connection with
          our partners, please review our{" "}
          <a href="/privacy-policy" className="underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/terms" className="underline">
            Terms &amp; Conditions
          </a>
          .
        </p>
      </section>
    </main>
  );
}

