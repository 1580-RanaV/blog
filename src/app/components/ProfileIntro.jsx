"use client";

import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function ProfileIntro() {
  return (
    <section className="w-full font-regular text-neutral-100">
      <div className="mx-auto max-w-4xl">
        {/* --- Header Row --- */}
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* --- Text Block --- */}
          <div className="text-left text-neutral-100">
            <h1 className="leading-tight text-neutral-50 font-semibold">V Ranadheer</h1>

            <p className="mt-2 text-neutral-300">
              <span>Creative Developer</span>
              <span className="mx-2">·</span>
              <span>Product Designer</span>
            </p>

            <p className="mt-1 text-neutral-400">Andhra Pradesh, India</p>
          </div>

          {/* --- Photo --- */}
          <div className="shrink-0">
            <div className="overflow-hidden rounded-full ring-1 ring-neutral-800 bg-neutral-900">
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
        <div className="mt-6 h-px w-16 bg-neutral-800" />

        {/* --- Intro Paragraphs --- */}
        <div className="mt-6 space-y-5 text-neutral-200">
          <p className="leading-relaxed">
            Hey, I’m V Ranadheer. I build products, interfaces, and systems that sit
            somewhere between <span className="font-regular">design</span> and{" "}
            <span className="font-regular">engineering</span>. I like things
            that are minimal, intentional, and fast; whether it’s a frontend
            flow or a visual identity.
          </p>
          <p className="leading-relaxed">
            I treat code like a design tool; something that shapes experience,
            not just function. Most of what I work on lives at the intersection
            of clarity, structure, and a great attention to detail.
          </p>
        </div>

        {/* --- Social Icons --- */}
        <div className="mt-8 flex items-center gap-3">
          <SocialIcon
            href="https://github.com/1580-RanaV"
            label="GitHub"
            icon={FaGithub}
          />
          <SocialIcon
            href="https://www.linkedin.com/in/vrana11/"
            label="LinkedIn"
            icon={FaLinkedinIn}
          />
          <SocialIcon
            href="https://www.instagram.com/byvrana/"
            label="Instagram"
            icon={FaInstagram}
          />
        </div>
      </div>
    </section>
  );
}

/* --- Reusable Social Icon --- */
function SocialIcon({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="group inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 ring-1 ring-inset ring-neutral-600 transition-all hover:-translate-y-[1px] hover:bg-neutral-700 hover:ring-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
    >
      <span className="sr-only">{label}</span>
      <Icon className="h-4 w-4 text-white transition-opacity group-hover:opacity-100" aria-hidden="true" />
    </a>
  );
}
