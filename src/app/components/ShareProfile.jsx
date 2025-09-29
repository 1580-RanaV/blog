"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const DEFAULT_WEBSITE = "https://www.vrana.fun/share"; // share a page with OG tags
const DEFAULT_IMAGE = "/share-view.png"; // lives in /public

const ShareProfile = ({
  website = DEFAULT_WEBSITE,
  imageSrc = DEFAULT_IMAGE,
  imageAlt = "V Ranadheer",
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dialogRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Focus trap + ESC close
  useEffect(() => {
    const handler = (e) => {
      if (!open) return;

      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }

      if (e.key === "Tab") {
        const focusable = getFocusable(dialogRef.current);
        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          last.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const getFocusable = (root) =>
    root
      ? Array.from(
          root.querySelectorAll(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => !el.hasAttribute("disabled"))
      : [];

  const onOpen = () => {
    setOpen(true);
    // focus first control inside modal
    setTimeout(() => {
      const focusable = getFocusable(dialogRef.current);
      if (focusable.length) focusable[0].focus();
    }, 0);
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(website);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // clipboard could fail (permissions etc.) - no-op
    }
  };

  // Web Share API (uses current website prop)
  const tryNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this profile",
          text: "Check out this profile",
          url: website, // use the prop, not hardcoded
        });
      } catch {
        /* user cancelled */
      }
    } else {
      // Fallback to LinkedIn if Web Share not available
      shareLinkedIn();
    }
  };

  // Put the URL FIRST (or only the URL) so WhatsApp reliably generates a preview.
  // Prefer wa.me; api.whatsapp.com also works.
  const shareWhatsApp = () => {
    const shareUrlOnly = website; // page with OG tags
    window.open(
      `https://wa.me/?text=${encodeURIComponent(shareUrlOnly)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        website
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className={`my-6 flex items-center justify-center ${className}`}>
      {/* Trigger button */}
      <button
        onClick={onOpen}
        className="mx-auto my-6 inline-flex items-center gap-2 rounded-full bg-green-500 text-white px-7 py-4 shadow-sm hover:bg-green-600 active:translate-y-[1px] transition-all focus:outline-none"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="share-dialog"
      >
        <ShareIcon className="h-7 w-7 opacity-80" />
        <span className="font-semibold text-base sm:text-base">Share this profile</span>
      </button>

      {/* Modal */}
      {open && (
        <div
          id="share-dialog"
          className="fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="share-title"
        >
          {/* Backdrop */}
          <button
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="Close"
          />

          {/* Panel */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div
              ref={dialogRef}
              className="w-full max-w-md relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-950"
            >
              {/* Close */}
              <button
                ref={firstFocusableRef}
                onClick={() => setOpen(false)}
                aria-label="Close share dialog"
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 ring-1 ring-inset ring-neutral-200 hover:bg-neutral-50 hover:ring-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-neutral-900 dark:ring-neutral-800 dark:hover:bg-neutral-800"
              >
                <CloseIcon className="h-4 w-4" />
              </button>

              <div className="px-6 py-6 sm:px-7 sm:py-7">
                <h3
                  id="share-title"
                  className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50"
                >
                  Share this profile
                </h3>

                {/* Image preview (local UI only; sharing uses page OG tags) */}
                <div className="mt-4 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>

                {/* Link + Copy */}
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <label htmlFor="share-link" className="sr-only">
                      Profile link
                    </label>
                    <input
                      id="share-link"
                      type="text"
                      readOnly
                      value={website}
                      className="w-full font-mono rounded-xl bg-white text-neutral-900 placeholder-neutral-400 ring-1 ring-inset ring-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-950 dark:text-neutral-50 dark:placeholder-neutral-500 dark:ring-neutral-800 px-4 py-3"
                    />
                  </div>
                  <button
                    onClick={onCopy}
                    className="font-mono inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 bg-neutral-900 text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                  >
                    <CopyIcon className="h-4 w-4" />
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>

                {/* Share buttons */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={tryNativeShare}
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 ring-1 ring-inset ring-neutral-200 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:ring-neutral-800 dark:hover:bg-neutral-900"
                  >
                    <ShareIcon className="h-4 w-4" />
                    <span className="font-mono">Share</span>
                  </button>

                  <button
                    onClick={shareWhatsApp}
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 ring-1 ring-inset ring-neutral-200 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:ring-neutral-800 dark:hover:bg-neutral-900"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span className="font-mono">WhatsApp</span>
                  </button>

                  <button
                    ref={lastFocusableRef}
                    onClick={shareLinkedIn}
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 ring-1 ring-inset ring-neutral-200 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:ring-neutral-800 dark:hover:bg-neutral-900"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                    <span className="font-mono">LinkedIn</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* --- Icons (inline SVGs; swap with your icon set if you like) --- */

const ShareIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 8l-4-4-4 4M12 4v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CloseIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CopyIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <rect x="9" y="9" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="5" y="5" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M20 11.5a8.5 8.5 0 0 1-12.9 7.2L4 20l1.3-3.1A8.5 8.5 0 1 1 20 11.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M8.5 8.8c0 4 3.2 6.7 6 6.7.6 0 1.3-.1 1.8-.3-.4.7-1.1 1.4-2.3 1.4-2.5 0-6.1-3.2-6.1-7.4 0-1 .2-1.6.6-2.2Z" fill="currentColor" opacity="0.2" />
  </svg>
);

const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="8" cy="9" r="1" fill="currentColor" />
    <path d="M7 11h2v6H7zM11 11h2v1.5a2.5 2.5 0 0 1 4.5 1.5V17h-2v-3a1.5 1.5 0 0 0-3 0v3h-1.5H11v-6z" fill="currentColor" />
  </svg>
);

export default ShareProfile;
