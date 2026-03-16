import FreshBathWizardForm from "./FreshBathWizardForm";
import ImageWithFallback from "./components/ImageWithFallback";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import Script from "next/script";

const services = [
  "Full bathroom remodels",
  "Tub-to-shower conversions",
  "Vanity & sink upgrades",
  "Tile replacement",
  "Fixtures & lighting"
];

const processSteps = [
  { icon: "1", title: "Consultation" },
  { icon: "2", title: "Materials & Permits" },
  { icon: "3", title: "Installation" },
  { icon: "4", title: "Walkthrough" }
];

const testimonials = [
  {
    name: "Carlos M.",
    text: "Amazing craftsmanship and clear communication. The project finished on time and looked even better than expected."
  },
  {
    name: "Lindsey W.",
    text: "From quote to final walkthrough, Fresh Bath was organized and professional. We love our new shower."
  },
  {
    name: "Laura P.",
    text: "Great team and quality materials. They handled permits and made the whole remodel stress-free."
  },
  {
    name: "Brian S.",
    text: "They turned our dated guest bath into a bright modern space. The crew was respectful and kept everything clean."
  },
  {
    name: "Jenna R.",
    text: "Transparent pricing, clear schedule, and the tub-to-shower conversion looks incredible. Highly recommend."
  },
  {
    name: "Michael D.",
    text: "Inspection passed on the first try and the finishes are showroom quality. Communication was excellent."
  },
  {
    name: "Emily K.",
    text: "We had a tight deadline before guests arrived and Fresh Bath delivered on time with zero shortcuts."
  },
  {
    name: "Thomas L.",
    text: "The designer helped us choose materials that fit our budget but still look custom. Fantastic experience overall."
  }
];

const galleryShots = [
  {
    src: "/freshbath/gallery-01.jpg",
    title: "Tub-to-Shower Upgrade",
    note: "Use: gallery-01.jpg"
  },
  {
    src: "/freshbath/gallery-02.jpg",
    title: "Double Vanity Remodel",
    note: "Use: gallery-02.jpg"
  },
  {
    src: "/freshbath/gallery-03.jpg",
    title: "Tile & Niche Detailing",
    note: "Use: gallery-03.jpg"
  },
  {
    src: "/freshbath/gallery-04.jpg",
    title: "Modern Lighting Design",
    note: "Use: gallery-04.jpg"
  },
  {
    src: "/freshbath/gallery-05.jpg",
    title: "Walk-In Shower Build",
    note: "Use: gallery-05.jpg"
  },
  {
    src: "/freshbath/gallery-06.jpg",
    title: "Premium Fixtures Finish",
    note: "Use: gallery-06.jpg"
  }
];

const projectRows = [
  {
    src: "/freshbath/project-before-after-01.jpg",
    title: "Before / After: Family Bathroom",
    text: "Layout optimization, brighter finishes, and better storage.",
    note: "Use: project-before-after-01.jpg"
  },
  {
    src: "/freshbath/project-before-after-02.jpg",
    title: "Before / After: Primary Suite",
    text: "Spa-inspired upgrade with frameless shower and custom vanity.",
    note: "Use: project-before-after-02.jpg"
  },
  {
    src: "/freshbath/project-before-after-03.jpg",
    title: "Before / After: Guest Bath",
    text: "Fast refresh with new tile, lighting, and elegant fixtures.",
    note: "Use: project-before-after-03.jpg"
  }
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the bathroom renovation quote free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, every estimate is free and comes with no obligation."
      }
    },
    {
      "@type": "Question",
      name: "What bathroom renovation services do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide full remodels, tub-to-shower conversions, vanity and sink upgrades, tile replacement, and fixture installations."
      }
    },
    {
      "@type": "Question",
      name: "How long does a bathroom renovation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects run 1 to 3 weeks depending on scope, permits, and material availability."
      }
    }
  ]
};

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <div className="relative">
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <aside className="fixed right-0 top-0 hidden h-full w-96 border-l border-slate-200 bg-slate-50 p-6 lg:flex lg:flex-col">
        <div id="form-section" className="flex h-full items-center">
          <div className="max-h-full w-full overflow-y-auto py-3">
            <FreshBathWizardForm />
          </div>
        </div>
      </aside>

      <div className="lg:pr-96">
        <header className="z-20 border-b border-slate-200 bg-white/95 backdrop-blur lg:sticky lg:top-0">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-3">
              <ImageWithFallback
                src="/freshbath/logo.png"
                alt="Fresh Bath Renovations"
                containerClassName="h-10 w-28"
                imageClassName="h-full w-full object-contain"
                width={220}
                height={80}
                priority
                fallbackText="Fresh Bath Logo"
              />
            </a>
            <nav className="hidden items-center gap-5 text-sm font-medium text-slate-700 md:flex">
              <a href="#benefits" className="hover:text-brand-700">
                Why Us
              </a>
              <a href="#services" className="hover:text-brand-700">
                Services
              </a>
              <a href="#process" className="hover:text-brand-700">
                Process
              </a>
              <a href="#faq" className="hover:text-brand-700">
                FAQ
              </a>
              <a
                href="#form-section"
                className="rounded-full bg-brand-500 px-4 py-2 text-white hover:bg-brand-700"
              >
                Get Free Quote
              </a>
            </nav>
          </div>
        </header>

        <main>
          <section className="relative overflow-hidden">
            <div
              className="absolute inset-0 scale-110 bg-cover bg-center blur-md"
              style={{ backgroundImage: "url('/freshbath/bg-blur.png')" }}
            />
            <div className="absolute inset-0 bg-white/70" />
            <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
              <p className="inline-flex rounded-full border border-brand-500/20 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
                Bathroom Remodeling in the United States
              </p>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Bathroom Renovation Done Right
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-slate-700">
                Transform your bathroom with expert design, quality materials, and
                professional installation. Free estimates, no obligation.
              </p>
              <ul className="mt-6 flex flex-wrap gap-3 text-sm text-slate-700">
                <li className="rounded-full bg-white/80 px-3 py-1 ring-1 ring-slate-200">
                  Licensed & Insured
                </li>
                <li className="rounded-full bg-white/80 px-3 py-1 ring-1 ring-slate-200">
                  Fast Turnaround
                </li>
                <li className="rounded-full bg-white/80 px-3 py-1 ring-1 ring-slate-200">
                  High-End Materials
                </li>
              </ul>
              <a
                href="#form-section"
                className="mt-8 inline-flex rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-900"
              >
                Get Free Estimate →
              </a>
            </div>
          </section>

          <section id="form-section" className="bg-slate-50 px-4 py-8 lg:hidden sm:px-6">
            <div className="mx-auto max-w-md">
              <FreshBathWizardForm />
            </div>
          </section>

          <section id="benefits" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900">Why Homeowners Choose Us</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-semibold text-slate-900">Licensed & Insured</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Certified professionals and fully insured crews for peace of mind.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-semibold text-slate-900">Fast Turnaround</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Streamlined planning and scheduling to finish your project efficiently.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-semibold text-slate-900">Quality Warranty</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Workmanship and material quality backed with a dependable warranty.
                </p>
              </article>
            </div>
          </section>

          <section id="services" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900">Services</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <li
                  key={service}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700"
                >
                  {service}
                </li>
              ))}
            </ul>
          </section>

          <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Project Gallery</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Send your real photos and we will replace these placeholders one by one.
                </p>
              </div>
              <a
                href="#form-section"
                className="hidden items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 hover:shadow-md sm:inline-flex"
              >
                <span>Request your free quote</span>
                <span className="text-base">→</span>
              </a>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryShots.map((shot) => (
                <article
                  key={shot.src}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <ImageWithFallback
                    src={shot.src}
                    alt={shot.title}
                    containerClassName="h-52 w-full"
                    imageClassName="h-full w-full object-cover"
                    width={900}
                    height={620}
                    fallbackText={shot.note}
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-900">{shot.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="process" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900">Our Process</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {processSteps.map((step) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 font-semibold text-brand-700">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900">{step.title}</h3>
                  <a
                    href="#form-section"
                    className="mt-4 inline-flex items-center justify-center rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 hover:shadow-md"
                  >
                    <span>Get your free quote</span>
                    <span className="ml-1 text-base">→</span>
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900">Before & After Highlights</h2>
            <div className="mt-6 space-y-4">
              {projectRows.map((project) => (
                <article
                  key={project.src}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:grid md:grid-cols-2"
                >
                  <ImageWithFallback
                    src={project.src}
                    alt={project.title}
                    containerClassName="h-64 w-full md:h-full"
                    imageClassName="h-full w-full object-cover"
                    width={1200}
                    height={800}
                    fallbackText={project.note}
                  />
                  <div className="flex flex-col justify-center p-6">
                    <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.text}</p>
                    <a
                      href="#form-section"
                      className="mt-5 inline-flex w-fit items-center justify-center rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-900 hover:shadow-md"
                    >
                      <span>Start your remodel</span>
                      <span className="ml-1 text-base">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <TestimonialsCarousel testimonials={testimonials} />

          <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900">Fresh Bath Signature Bathrooms</h2>
            <p className="mt-2 text-sm text-slate-600">
              Place your final files in <code>public/freshbath/</code> as{" "}
              <code>style-bright.png</code> and <code>style-dark.png</code>. Placeholders are
              shown automatically if files are missing.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <ImageWithFallback
                  src="/freshbath/style-bright.png"
                  alt="Bright Spa style"
                  containerClassName="h-56 w-full"
                  imageClassName="h-full w-full object-cover"
                  width={1200}
                  height={800}
                  fallbackText="style-bright.png missing"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900">Bright Spa</h3>
                  <p className="text-sm text-slate-600">
                    Freestanding tub, natural light & warm wood vanity
                  </p>
                </div>
              </article>
              <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <ImageWithFallback
                  src="/freshbath/style-dark.png"
                  alt="Moody Luxury style"
                  containerClassName="h-56 w-full"
                  imageClassName="h-full w-full object-cover"
                  width={1200}
                  height={800}
                  fallbackText="style-dark.png missing"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900">Moody Luxury</h3>
                  <p className="text-sm text-slate-600">
                    Stone finishes, double vanity & soaking tub
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section id="faq" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
            <div className="mt-6 space-y-3">
              <details className="rounded-xl border border-slate-200 bg-white p-4">
                <summary className="cursor-pointer font-semibold text-slate-900">
                  Is the bathroom renovation quote free?
                </summary>
                <p className="mt-2 text-sm text-slate-600">
                  Yes, every estimate is free and comes with no obligation.
                </p>
              </details>
              <details className="rounded-xl border border-slate-200 bg-white p-4">
                <summary className="cursor-pointer font-semibold text-slate-900">
                  What bathroom renovation services do you offer?
                </summary>
                <p className="mt-2 text-sm text-slate-600">
                  We provide full remodels, conversions, tile, vanities, sinks, and fixtures.
                </p>
              </details>
              <details className="rounded-xl border border-slate-200 bg-white p-4">
                <summary className="cursor-pointer font-semibold text-slate-900">
                  How long does a bathroom renovation take?
                </summary>
                <p className="mt-2 text-sm text-slate-600">
                  Most projects run 1-3 weeks depending on scope, permits, and materials.
                </p>
              </details>
              <details className="rounded-xl border border-slate-200 bg-white p-4">
                <summary className="cursor-pointer font-semibold text-slate-900">
                  Do you handle permits and inspections?
                </summary>
                <p className="mt-2 text-sm text-slate-600">
                  Yes, our team can manage permits and coordinate required inspections.
                </p>
              </details>
              <details className="rounded-xl border border-slate-200 bg-white p-4">
                <summary className="cursor-pointer font-semibold text-slate-900">
                  Am I obligated if I submit this form?
                </summary>
                <p className="mt-2 text-sm text-slate-600">
                  No. Submitting the form only requests a free estimate.
                </p>
              </details>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-10 sm:px-6">
            <div className="flex items-center gap-4">
              <ImageWithFallback
                src="/freshbath/logo.png"
                alt="Fresh Bath Renovations"
                containerClassName="h-10 w-28"
                imageClassName="h-full w-full object-contain"
                width={220}
                height={80}
                fallbackText="Fresh Bath Logo"
              />
              <p className="text-sm text-slate-600">
                Professional bathroom renovation & remodeling. Free estimates.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <a href="/privacy-policy" className="underline">
                Privacy
              </a>
              <a href="/terms" className="underline">
                Terms
              </a>
              <a href="#" className="underline">
                Partners
              </a>
            </div>
            <p className="text-xs text-slate-500">
              © {year} Fresh Bath Renovations. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
