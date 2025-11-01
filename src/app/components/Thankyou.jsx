"use client";

import React from "react";

export default function Thankyou() {
  const year = new Date().getFullYear();

  function scrollToTop(e) {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <footer aria-label="Site footer" className="w-full font-regular">
      {/* Hairline */}
      <div className="h-px w-full bg-neutral-200" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-10 font-regular">
        {/* Signature / closing note */}
        <p className="font-regular leading-relaxed text-neutral-800">
          Thanks for reading — see you around. <br className="hidden sm:block" />
          This space is where I collect my work, ideas, and a bit of myself. <br className="hidden sm:block" />
          Always in progress, always becoming.
        </p>

        {/* Meta bar */}
        <div className="mt-8 grid grid-cols-1 gap-3 text-neutral-600 sm:grid-cols-3 sm:items-center font-regular">
          <div className="order-2 sm:order-1">
            <p className="font-regular">
              © {year} <span className="font-regular font-medium">www.vrana.website</span>
            </p>
          </div>

          <div className="order-1 sm:order-2 text-neutral-500 sm:text-center">
            <p className="uppercase font-regular tracking-[0.14em]">
              V RANA PERSONAL PORTFOLIO
            </p>
          </div>

          <div className="order-3 flex items-center justify-start gap-4 sm:justify-end">
            <a
              href="#top"
              onClick={scrollToTop}
              className="font-regular underline underline-offset-4 hover:text-neutral-900"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
