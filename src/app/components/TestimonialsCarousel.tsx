"use client";

import { useEffect, useState } from "react";

type Testimonial = {
  name: string;
  text: string;
};

type Props = {
  testimonials: Testimonial[];
};

export default function TestimonialsCarousel({ testimonials }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 3) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [testimonials.length]);

  const visible: Testimonial[] = [];
  for (let i = 0; i < Math.min(3, testimonials.length); i += 1) {
    visible.push(testimonials[(index + i) % testimonials.length]);
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="overflow-hidden rounded-3xl bg-white/90 p-6 shadow-lg ring-1 ring-slate-100 sm:p-8">
        <div className="flex flex-col gap-6 border-b border-slate-100 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] font-bold text-brand-600">
                G
              </span>
              <span>Google Reviews (sample)</span>
            </div>
            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              Homeowners love Fresh Bath
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Real feedback from bathroom renovation projects completed across the U.S.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-slate-900">4.9</span>
                <span className="text-xs text-slate-500">/ 5.0</span>
              </div>
              <p className="text-xs text-slate-500">Average rating</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-xs text-slate-500">Based on recent projects</p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {visible.map((item) => (
            <article
              key={`${item.name}-${item.text.slice(0, 10)}`}
              className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/60 p-4 shadow-sm"
            >
              <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                      <p className="text-xs text-slate-500">Bathroom Remodel</p>
                    </div>
                  </div>
                  <div className="flex text-[11px] text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
              <p className="mt-3 text-xs text-slate-400">Verified homeowner</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

