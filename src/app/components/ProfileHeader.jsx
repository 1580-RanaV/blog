"use client";

import React from "react";
import Image from "next/image";

const ProfileHeader = () => {
  return (
    <section className="w-full py-10 sm:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-950">
          {/* top accent (subtle, Google-ish) */}
          {/* <div className="h-1 w-full bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900" /> */}

          <div className="flex flex-col items-center text-center px-6 pb-8 pt-10 sm:pt-12">
            {/* AVATAR */}
            <div className="relative">
              <div className="rounded-full p-[3px] bg-white shadow-sm ring-1 ring-neutral-200 dark:bg-neutral-950 dark:ring-neutral-800">
                {/* 50% larger than original 128px -> 192px */}
                <div className="rounded-full overflow-hidden w-48 h-48 sm:w-56 sm:h-56">
                  <Image
                    src="/for-site-compressed.png"
                    alt="V Ranadheer"
                    width={448}
                    height={448}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* NAME */}
            <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
              V Ranadheer
            </h1>

            {/* DESIGNATION + ADDRESS */}
            <div className="mt-3 space-y-1">
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
                <span className="font-mono">Graduate</span>
                <span className="mx-2">•</span>
                <span className="font-mono">Creative Developer</span>
              </p>
              <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400">
                <span className="font-mono">Andhra Pradesh, India</span>
              </p>
            </div>

            {/* SOCIALS */}
            <div className="mt-6 flex items-center gap-4">
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
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, label, imgSrc }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    title={label}
    className="group inline-flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100 ring-1 ring-inset ring-neutral-200 transition-all hover:translate-y-[-1px] hover:bg-neutral-50 hover:ring-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-neutral-900 dark:ring-neutral-800 dark:hover:bg-neutral-800"
  >
    <span className="sr-only">{label}</span>
    <Image
      src={imgSrc}
      alt={label}
      width={22}
      height={22}
      className="opacity-90 transition-opacity group-hover:opacity-100"
    />
  </a>
);

export default ProfileHeader;