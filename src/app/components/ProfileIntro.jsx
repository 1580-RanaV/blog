"use client";

import React from "react";
import Image from "next/image";

export default function ProfileIntro() {
  return (
    <section className="w-full font-regular text-neutral-900">
      <div className="mx-auto max-w-4xl">
        {/* --- Header Row --- */}
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* --- Text Block --- */}
          <div className="text-left text-neutral-900">
            <h1 className="leading-tight text-neutral-900">V Ranadheer</h1>

            <p className="mt-2 text-neutral-900">
              <span>Creative Developer</span>
              <span className="mx-2">•</span>
              <span>Product Designer</span>
            </p>

            <p className="mt-1 text-neutral-900">Andhra Pradesh, India</p>
            {/* <p className="mt-1 text-neutral-900">Open to Work</p> */}
          </div>

          {/* --- Photo --- */}
          <div className="shrink-0">
            <div className="overflow-hidden rounded-full ring-1 ring-neutral-200">
              <Image
                src="/for-site-compressed.png"
                alt="V Ranadheer"
                width={112}
                height={112}
                priority
                className="h-28 w-28 sm:h-32 sm:w-32 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 h-px w-16 bg-neutral-200" />

        {/* --- Intro Paragraphs --- */}
        <div className="mt-6 space-y-5 text-neutral-900">
          <p className="leading-relaxed">
            Hey, I’m v ranadheer. I build products, interfaces, and systems that sit
            somewhere between <span className="font-regular">design</span> and{" "}
            <span className="font-regular">engineering</span>. I like things
            that are minimal, intentional, and fast; whether it’s a frontend
            flow or a visual identity.
          </p>
            I treat code like a design tool; something that shapes experience,
            not just function. Most of what I work on lives at the intersection
            of clarity, structure, and a great attention to detail.
        </div>

        {/* --- Social Icons --- */}
        <div className="mt-8 flex items-center gap-3">
          <SocialIcon
            href="https://github.com/1580-RanaV"
            label="GitHub"
            imgSrc="/github-logo.svg"
          />
          <SocialIcon
            href="https://www.linkedin.com/in/vrana11/"
            label="LinkedIn"
            imgSrc="/LinkedIN_black.svg"
          />
          <SocialIcon
            href="https://www.instagram.com/byvrana/"
            label="Instagram"
            imgSrc="/insta-logo.svg"
          />
        </div>
      </div>
    </section>
  );
}

/* --- Reusable Social Icon --- */
function SocialIcon({ href, label, imgSrc }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="group inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 ring-1 ring-inset ring-neutral-200 transition-all hover:-translate-y-[1px] hover:bg-white hover:ring-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
    >
      <span className="sr-only">{label}</span>
      <Image
        src={imgSrc}
        alt={label}
        width={18}
        height={18}
        className="opacity-85 transition-opacity group-hover:opacity-100"
      />
    </a>
  );
}
