"use client";

export default function Certifications() {
  return (
    <section className="space-y-6 font-regular text-white [data-theme='light']:text-black transition-colors duration-300">
      <article className="space-y-4">
        <div className="space-y-2">
          <p className="text-[0.75rem] font-medium text-white/40 [data-theme='light']:text-black/40 tracking-wide uppercase">
            2025
          </p>
          <h3 className="text-[0.875rem] font-medium leading-[1.5] text-white [data-theme='light']:text-black transition-colors duration-300">
            Oracle Cloud Infrastructure (OCI) — AI Foundations Associate
          </h3>
        </div>

        <p className="text-[0.875rem] font-normal leading-[1.6] text-white/90 [data-theme='light']:text-black/90 transition-colors duration-300">
          Earned the OCI AI Foundations certification to strengthen AI and ML fundamentals in cloud systems.
          Covered Generative AI, Oracle 23ai Vector Databases, and services for Vision, Speech, and Natural
          Language—plus how to apply them to real products inside Oracle&apos;s stack.
        </p>

        <a
          href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=DAF34BC44A7A3DC84A8F107B518A0C2558515ACEF827D948059534C4CEF373D2"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[0.875rem] font-normal text-white [data-theme='light']:text-black underline underline-offset-4 hover:text-white/80 [data-theme='light']:hover:text-black/80 transition-colors duration-300"
        >
          View certificate
          <ArrowUpRightIcon className="h-3 w-3" />
        </a>
      </article>
    </section>
  );
}

function ArrowUpRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
