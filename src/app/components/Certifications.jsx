"use client";

import React from "react";

export default function Certifications() {
  return (
    <section className="space-y-6 font-regular">
      {/* Certification Card */}
      <div>
        <h3 className="font-regular text-neutral-900 mb-1">
          Oracle Cloud Infrastructure (OCI)
        </h3>

        <p className="text-neutral-700 mb-2 font-regular">
          <strong>AI Foundations Associate (2025)</strong>
        </p>

        <p className="text-neutral-900 leading-relaxed mb-4 font-regular">
          The <strong>Oracle Cloud Infrastructure (OCI) AI Foundations</strong> course introduces beginners
          to Artificial Intelligence (AI) and Machine Learning (ML) — with a focus on practical applications
          inside Oracle Cloud Infrastructure. You’ll gain a broad understanding of deep learning,
          generative AI, and large language models (LLMs) in modern computing.
        </p>

        <p className="text-neutral-900 leading-relaxed mb-4 font-regular">
          Topics include OCI Generative AI Services, the Oracle 23ai Vector Database, and other OCI AI
          Services such as Vision, Speech, Language, and Document Understanding — all delivered through a
          structured and hands-on learning approach.
        </p>

        <a
          href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=DAF34BC44A7A3DC84A8F107B518A0C2558515ACEF827D948059534C4CEF373D2"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[13px] font-regular text-blue-600 hover:text-blue-800 underline"
        >
          View Certificate ↗
        </a>
      </div>
    </section>
  );
}
