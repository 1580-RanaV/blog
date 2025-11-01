"use client";

import React from "react";

export default function Certifications() {
  return (
    <section className="space-y-6 font-regular text-black">
      {/* Certification Card */}
      <div className="text-black">
        <h3 className="mb-1 font-regular text-black">
          Oracle Cloud Infrastructure (OCI)
        </h3>

        <p className="mb-2 font-regular text-black">
          AI Foundations Associate (2025)
        </p>

        <p className="leading-relaxed mb-4 font-regular text-black">
      I completed the <strong>Oracle Cloud Infrastructure (OCI) AI Foundations</strong> course, 
      where I learned the core concepts of cloud computing and artificial intelligence. 
      It gave me hands-on exposure to OCI services like Generative AI, the 23ai Vector Database, 
      and tools for Vision, Speech, and Language. Through it, I built a solid understanding of 
      how AI and ML work within real cloud environments and how to apply them in practical scenarios.
        </p>


        <a
          href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=DAF34BC44A7A3DC84A8F107B518A0C2558515ACEF827D948059534C4CEF373D2"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-regular text-black underline hover:text-black"
        >
          View Certificate ↗
        </a>
      </div>
    </section>
  );
}
