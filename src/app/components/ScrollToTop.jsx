"use client";

import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const nextVisible = window.scrollY > 160;
        setVisible((prev) => (prev === nextVisible ? prev : nextVisible));
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function scrollToTop() {
    if (typeof window === "undefined") return;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 border-2 border-neutral-300 bg-white/90 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900 shadow-lg shadow-black/5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/70 ${
        visible
          ? "pointer-events-auto opacity-100 translate-y-0"
          : "pointer-events-none opacity-0 translate-y-2"
      }`}
    >
      <span className="text-xs tracking-tight text-neutral-900 font-medium">scroll to top</span>
      <ArrowIcon />
    </button>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 text-neutral-900"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 19V5" />
      <path d="M6 11l6-6 6 6" />
    </svg>
  );
}
