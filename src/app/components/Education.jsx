"use client";

import React from "react";
import Image from "next/image";

export default function Education() {
  return (
    <div className="w-full">
      {/* Main header */}
      <h2 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
        Education
      </h2>
      <p className="mt-2 text-[26px] sm:text-[30px] font-semibold leading-tight tracking-tight text-neutral-900">
        Academics, Participations & Clubs
      </p>

      {/* EDUCATION */}
      <div className="mt-8 space-y-12 sm:space-y-14">
        <EduItem
          logo={{ src: "/gitam.jpeg", alt: "GITAM University" }}
          title="Gandhi Institute of Technology and Management (GITAM) University"
          line1="Bachelor of Technology, Computer Science & Engineering (Class of 2025)"
          badges={[{ label: "CGPA: 8.61" }]}
        />
        <EduItem
          logo={{ src: "/sri.jpg", alt: "Sri Chaitanya Jr. College" }}
          title="Sri Chaitanya Jr. College (Intermediate)"
          line1="MPC (Math, Physics, Chemistry), 2021"
          badges={[{ label: "Percentage: 92.7%" }]}
        />
        <EduItem
          logo={{ src: "/dps.png", alt: "Delhi Public School" }}
          title="Delhi Public School (Xth)"
          line1="Secondary Education, 2019"
          badges={[{ label: "Percentage: 86.66%" }]}
        />
      </div>

      {/* Thin divider */}
      <div className="mt-12 h-px w-20 bg-neutral-200" />

      {/* PARTICIPATIONS */}
      <div className="mt-12">
        <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
          Participations & Achievements
        </h3>

        <div className="mt-6 space-y-10 sm:space-y-12">
          <ParticipationItem
            icon={{ src: "/providence.svg", alt: "Providence" }}
            title="Providence Ideathon 2024"
            description="Took on a health-focused problem statement at Unstop and advanced to the second round — one step away from the finals."
            link={{ href: "https://github.com/YourGitHubUsername", label: "Reference" }}
          />

          <ParticipationItem
            icon={{ src: "/catalog.jpg", alt: "Catalog" }}
            title="Catalog Hackathon"
            description="Reached the final round; hiring-style challenge across prompt engineering & problem solving. Statement based on an MIT cryptography paper."
            link={{ href: "https://github.com/YourGitHubUsername", label: "Reference" }}
          />

          <ParticipationItem
            icon={{ src: "/iim.jpeg", alt: "IIM Rohtak" }}
            title="IIM Rohtak Logo Competition"
            description="Consolation in IIM Rohtak logo design competition at Unstop."
            link={{ href: "https://github.com/YourGitHubUsername", label: "Reference" }}
          />
        </div>
      </div>

      {/* Thin divider */}
      <div className="mt-12 h-px w-20 bg-neutral-200" />

      {/* CLUBS */}
      <div className="mt-12">
        <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
          University Club Activities
        </h3>

        <div className="mt-6 space-y-10 sm:space-y-12">
          <ClubItem
            icon={{ src: "/google.svg", alt: "GDSC", rounded: "full" }}
            title="Lead Graphic Designer"
            org="Google Developer Student Clubs (GDSC)"
            description="Led design across university events with 1,000+ participants; created visual systems and event collateral using Figma and Adobe Photoshop."
            link={{ href: "https://github.com/YourGitHubUsername", label: "Reference" }}
          />
        </div>
      </div>
    </div>
  );
}

/* ---------- Subcomponents ---------- */

function EduItem({ logo, title, line1, badges = [] }) {
  return (
    <article className="group border-l border-neutral-200 pl-6 transition-colors hover:border-neutral-900">
      <header className="flex items-start gap-4">
        <LogoBox {...logo} />
        <h4 className="text-[20px] sm:text-[22px] font-semibold leading-snug text-neutral-900">
          {title}
        </h4>
      </header>

      {line1 && (
        <p className="mt-2 font-mono text-[15px] sm:text-[16px] text-neutral-800">
          {line1}
        </p>
      )}

      {badges.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {badges.map((b, i) => (
            <li key={i}>
              <Pill>{b.label}</Pill>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

function ParticipationItem({ icon, title, description, link }) {
  return (
    <article className="group border-l border-neutral-200 pl-6 transition-colors hover:border-neutral-900">
      <header className="flex items-start gap-4">
        <LogoBox {...icon} />
        <h4 className="text-[20px] sm:text-[22px] font-semibold leading-snug text-neutral-900">
          {title}
        </h4>
      </header>

      {description && (
        <p className="mt-3 font-mono text-[14px] leading-relaxed text-neutral-700">
          {description}
        </p>
      )}

      {link?.href && (
        <div className="mt-4">
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-neutral-900 underline-offset-4 hover:underline text-[14px]"
          >
            {link.label ?? "View"}
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>
      )}
    </article>
  );
}

function ClubItem({ icon, title, org, description, link }) {
  return (
    <article className="">
      <header className="flex items-start gap-4">
        <LogoBox {...icon} />
        <div className="min-w-0">
          <h4 className="text-[20px] sm:text-[22px] font-semibold leading-snug text-neutral-900">
            {title}
          </h4>
          {org && (
            <p className="mt-1 text-[15px] sm:text-[16px] text-neutral-800">
              {org}
            </p>
          )}
        </div>
      </header>

      {description && (
        <p className="mt-3 font-mono text-[14px] leading-relaxed text-neutral-700">
          {description}
        </p>
      )}

      {link?.href && (
        <div className="mt-4">
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-neutral-900 underline-offset-4 hover:underline text-[14px]"
          >
            {link.label ?? "View"}
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>
      )}
    </article>
  );
}

function LogoBox({ src, alt, rounded = "md" }) {
  return (
    <div
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-${rounded} bg-neutral-100 ring-1 ring-inset ring-neutral-200 overflow-hidden`}
      aria-hidden
    >
      <Image src={src} alt={alt} width={24} height={24} className="object-contain" />
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-600">
      {children}
    </span>
  );
}

function ArrowUpRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
