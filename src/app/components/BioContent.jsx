"use client";

import Image from "next/image";
import { BIO, IMAGES, SOCIAL_LINKS } from "../constants";

export default function BioContent({ delayMs = 0 }) {
  return (
    <div className="fade-seq space-y-4" style={{ "--fade-delay": `${delayMs}ms` }}>
      <p className="text-[0.875rem] font-normal leading-[1.5]">
        {BIO.description}
      </p>
      <p>
        {BIO.interests}
      </p>
      <div className="mt-4">
        <Image
          src={IMAGES.profile}
          alt="Profile image"
          width={500}
          height={500}
          className="w-full h-auto"
          priority
        />
      </div>
      <nav className="flex gap-4 mt-4" aria-label="Social links">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.875rem] font-normal underline underline-offset-4"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

