"use client";

import React from "react";

export default function Certifications() {
  return (
    <section className="space-y-6 font-regular text-black">
      {/* Certification Card */}
      <div className="text-black">
        <h3 className="mb-1 font-semibold text-black">
          Oracle Cloud Infrastructure (OCI)
        </h3>

        <p className="mb-2 font-medium text-black">
          AI Foundations Associate — 2025
        </p>

        <p className="leading-relaxed mb-4 font-regular text-black">
          I earned the Oracle Cloud Infrastructure (OCI) AI Foundations
          certification to strengthen my understanding of artificial
          intelligence and machine learning fundamentals within cloud systems.
          The course introduced me to OCI’s AI services — from Generative AI and
          Oracle 23ai Vector Databases to tools for Vision, Speech, and Natural
          Language. It gave me hands-on exposure to how AI models integrate with
          real-world infrastructure, and how these capabilities can be applied
          to solve practical business problems using Oracle’s ecosystem.
        </p>

        <a
          href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=DAF34BC44A7A3DC84A8F107B518A0C2558515ACEF827D948059534C4CEF373D2"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-regular text-black underline underline-offset-4 hover:text-black"
        >
          [Issued September 2025] View Certificate ↗
        </a>
      </div>
    </section>
  );
}
