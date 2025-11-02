"use client";

import React from "react";
import Image from "next/image";

export default function Education() {
  return (
    <div className="w-full font-regular text-black">
      <p className="mt-2 font-regular font-semibold leading-tight text-black">
        Education
      </p>

      {/* EDUCATION */}
      <div className="mt-8 space-y-12 sm:space-y-14 font-regular text-black">
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
      <div className="mt-12 font-regular text-black">
        <h3 className="font-regular font-semibold text-black">
          Participations & Achievements
        </h3>

        <div className="mt-6 space-y-10 sm:space-y-12 font-regular text-black">
          <ParticipationItem
            icon={{ src: "/providence.svg", alt: "Providence" }}
            title="Providence Ideathon 2024"
            description="Took on a health-focused problem statement at Unstop and advanced to the second round — one step away from the finals."
            link={{ href: "", label: "" }}
          />

          <ParticipationItem
            icon={{ src: "/catalog.jpg", alt: "Catalog" }}
            title="Catalog Hackathon"
            description="Reached the final round; hiring-style challenge across prompt engineering & problem solving. Statement based on an MIT cryptography paper."
            link={{ href: "", label: "" }}
          />

          <ParticipationItem
            icon={{ src: "/iim.jpeg", alt: "IIM Rohtak" }}
            title="IIM Rohtak Logo Competition"
            description="Consolation in IIM Rohtak logo design competition at Unstop."
            link={{ href: "", label: "" }}
          />
        </div>
      </div>

      {/* Thin divider */}
      <div className="mt-12 h-px w-20 bg-neutral-200" />

      {/* CLUBS */}
      <div className="mt-12 font-regular text-black">
        <h3 className="font-regular font-semibold text-black">
          University Club Activities
        </h3>

        <div className="mt-6 space-y-10 sm:space-y-12 font-regular text-black">
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
    <article className="group border-l border-neutral-200 pl-6 transition-colors hover:border-black font-regular text-black">
      <header className="flex items-start gap-4 font-regular text-black">
        <LogoBox {...logo} />
        <h4 className="font-regular font-semibold leading-snug text-black">
          {title}
        </h4>
      </header>

      {line1 && <p className="mt-2 font-regular text-black">{line1}</p>}

      {badges.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2 font-regular text-black">
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
    <article className="group border-l border-neutral-200 pl-6 transition-colors hover:border-black font-regular text-black">
      <header className="flex items-start gap-4 font-regular text-black">
        <LogoBox {...icon} />
        <h4 className="font-regular font-semibold leading-snug text-black">
          {title}
        </h4>
      </header>

      {description && (
        <p className="mt-3 leading-relaxed font-regular text-black">
          {description}
        </p>
      )}

      {link?.href && (
        <div className="mt-4">
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-regular font-medium text-black underline-offset-4 hover:underline"
          >
            {link.label ?? "View"}
            <ArrowUpRightIcon className="h-4 w-4 text-black" />
          </a>
        </div>
      )}
    </article>
  );
}

function ClubItem({ icon, title, org, description, link }) {
  return (
    <article className="font-regular text-black">
      <header className="flex items-start gap-4 font-regular text-black">
        <LogoBox {...icon} />
        <div className="min-w-0">
          <h4 className="font-regular font-semibold leading-snug text-black">
            {title}
          </h4>
          {org && <p className="mt-1 font-regular text-black">{org}</p>}
        </div>
      </header>

      {description && (
        <p className="mt-3 leading-relaxed font-regular text-black">
          {description}
        </p>
      )}

      {link?.href && (
        <div className="mt-4">
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-regular font-medium text-black underline-offset-4 hover:underline"
          >
            {link.label ?? "View"}
            <ArrowUpRightIcon className="h-4 w-4 text-black" />
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
    <span className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 font-regular font-medium lowercase text-black">
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
