"use client";

export default function Certifications() {
  return (
    <section className="space-y-4">
      <article className="space-y-3">
        <div className="space-y-1">
          <p className="text-xs font-medium text-black/40 uppercase tracking-wide">
            2025
          </p>
          <h3 className="text-[0.9375rem] font-medium text-black">
            Oracle Cloud Infrastructure (OCI) — AI Foundations Associate
          </h3>
        </div>

        <p className="text-[0.875rem] leading-relaxed text-black/70">
          Earned the OCI AI Foundations certification to strengthen AI and ML fundamentals in cloud systems.
          Covered Generative AI, Oracle 23ai Vector Databases, and services for Vision, Speech, and Natural
          Language—plus how to apply them to real products inside Oracle&apos;s stack.
        </p>

        <a
          href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=DAF34BC44A7A3DC84A8F107B518A0C2558515ACEF827D948059534C4CEF373D2"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-[0.875rem] font-medium text-black underline underline-offset-4 decoration-black/30 hover:decoration-black transition-colors"
        >
          View certificate ↗
        </a>
      </article>
    </section>
  );
}
