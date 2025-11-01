"use client";

import React from "react";

export default function Thankyou() {
  const year = new Date().getFullYear();

  function scrollToTop(e) {
    e.preventDefault();
    if (typeof window === "undefined") return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  }

  function handleEmailError(e) {
    e.preventDefault();
    alert("Sorry, email temporarily unavailable 😅");
  }

  return (
    <footer
      aria-label="Site footer"
      className="w-full font-regular text-black border-t border-neutral-200"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-10">
        {/* Closing note */}
        <p className="leading-relaxed">
          Thanks for reading — see you around.{" "}
          <br className="hidden sm:block" />
          This space is where I collect my work, ideas, and a bit of myself.{" "}
          <br className="hidden sm:block" />
          Always in progress, always becoming.
        </p>

        {/* Meta + actions */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} <span className="font-medium">www.vrana.website</span>
          </p>

          {/* Footer navigation */}
          <nav aria-label="Footer navigation" className="flex gap-4">
            <a
              href="#"
              onClick={handleEmailError}
              className="underline underline-offset-4"
            >
              Email
            </a>
            <a
              href="https://github.com/1580-RanaV"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/byvrana/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Instagram
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              X
            </a>
          </nav>

        </div>
      </div>
    </footer>
  );
}
