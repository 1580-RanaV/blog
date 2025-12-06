"use client";

import React from "react";

export default function Certifications() {
  return (
    <section className="space-y-4 font-regular text-white">
      <div className="space-y-3">
        <p className="text-xs text-white/60">2025</p>
        <h3 className="text-sm font-semibold leading-snug">
          Oracle Cloud Infrastructure (OCI) — AI Foundations Associate
        </h3>

        <p className="text-white/80 leading-relaxed">
          Earned the OCI AI Foundations certification to strengthen AI and ML fundamentals in cloud systems.
          Covered Generative AI, Oracle 23ai Vector Databases, and services for Vision, Speech, and Natural
          Language—plus how to apply them to real products inside Oracle&apos;s stack.
        </p>

        <a
          href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=DAF34BC44A7A3DC84A8F107B518A0C2558515ACEF827D948059534C4CEF373D2"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-white underline underline-offset-4"
        >
          View certificate
          <ArrowUpRightIcon className="h-4 w-4 text-white/70" />
        </a>
      </div>
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
