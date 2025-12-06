"use client";

import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const marqueeItems = [
  "Creative developer",
  "Product designer",
  "Interface engineer",
  "Calm, minimal builds",
  "UI/UX enthusiast",
  "Product management",
];

export default function ProfileIntro() {
  return (
    <section className="w-full font-regular text-white">
      <div className="space-y-8">
        {/* --- Header Row --- */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* --- Text Block --- */}
          <div className="space-y-3 text-left">
            <h1 className="leading-tight">V Ranadheer</h1>
            <p className="text-white/80 text-sm leading-relaxed">
              A hands-on builder who designs with restraint and ships with intention.
            </p>
            <p className="text-white/70">Andhra Pradesh, India</p>
          </div>

          {/* --- Photo --- */}
          <div className="shrink-0">
            <Image
              src="/photo.png"
              alt="V Ranadheer"
              width={132}
              height={132}
              priority
              className="h-28 w-28 sm:h-32 sm:w-32 rounded-full object-cover"
            />
          </div>
        </div>

        {/* --- Name marquee --- */}
        <div className="marquee-shell">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
              <span key={idx} className="text-sm tracking-tight text-white/80">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* --- Intro Paragraphs --- */}
        <div className="space-y-4">
          <p className="leading-relaxed">
            I build products, interfaces, and systems that sit between design and engineering.
            I like things that are minimal, intentional, and fast; whether it is a frontend flow
            or a visual identity. I treat code like a design tool; it shapes experience, not just function.
          </p>
          <p className="text-white/80 leading-relaxed text-sm">
            I love designing and building what I create.
          </p>
        </div>

        {/* --- Social Icons --- */}
        <div className="flex items-center gap-3">
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
      className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-transparent transition-all hover:-translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
    >
      <span className="sr-only">{label}</span>
      <Icon className="h-4 w-4 text-white transition-opacity group-hover:opacity-100" aria-hidden="true" />
    </a>
  );
}
