"use client";

import React from "react";
import Image from "next/image";

export default function Education() {
  return (
    <section className="w-full font-regular text-white space-y-8">
      <div className="space-y-4">
        <EduItem
          title="Gandhi Institute of Technology and Management (GITAM) University"
          line1="B.Tech, Computer Science & Engineering (2025)"
          line2="Relevant: web apps, SQL/NoSQL, software methodologies, agile/scrum, operating systems, DBMS, OOP."
          badges={[{ label: "CGPA: 8.61" }]}
        />
        <EduItem
          title="Sri Chaitanya Junior College"
          line1="MPC (Math, Physics, Chemistry), 2021"
          badges={[{ label: "Percentage: 92.7%" }]}
        />
        <EduItem
          title="Delhi Public School"
          line1="Secondary Education, 2019"
          badges={[{ label: "Percentage: 86.66%" }]}
        />
      </div>

      <div className="divider w-12" />

      <div className="space-y-4">
        <h3 className="text-sm font-semibold">Participations & Achievements</h3>
        <ParticipationItem
          title="Providence Ideathon 2024"
          description="Health-focused problem statement on Unstop; advanced to second round."
        />
        <ParticipationItem
          title="Catalog Hackathon"
          description="Reached final round; hiring-style challenge across prompt engineering and problem solving, based on an MIT cryptography paper."
        />
        <ParticipationItem
          title="IIM Rohtak Logo Competition"
          description="Consolation in the IIM Rohtak logo design competition on Unstop."
        />
      </div>

      <div className="divider w-12" />

      <div className="space-y-4">
        <h3 className="text-sm font-semibold">University Club Activities</h3>
        <ClubItem
          icon={{ src: "/google.svg", alt: "GDSC", rounded: "full" }}
          title="Lead Graphic Designer"
          org="Google Developer Student Clubs (GDSC)"
          description="Led design across university events with 1,000+ participants; created visual systems and event collateral using Figma and Photoshop."
          link={{ href: "https://drive.google.com/file/d/1OXx-0RkdmgxBVE_1o3NNhmpA595O1DaF/view?usp=sharing", label: "Certificate of recognition" }}
        />
      </div>
    </section>
  );
}

/* ---------- Subcomponents ---------- */

function EduItem({ title, line1, line2, badges = [] }) {
  return (
    <article className="space-y-2">
      <h4 className="text-sm font-semibold leading-snug">{title}</h4>
      {line1 && <p className="text-white/80">{line1}</p>}
      {line2 && <p className="text-white/70 leading-relaxed">{line2}</p>}

      {badges.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {badges.map((b, i) => (
            <li key={i} className="text-xs">
              <span className="tag-chip">{b.label}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

function ParticipationItem({ title, description }) {
  return (
    <article className="p-0">
      <div className="space-y-2">
        <h4 className="font-semibold leading-snug">{title}</h4>
        {description && (
          <p className="text-white/75 leading-relaxed">{description}</p>
        )}
      </div>
    </article>
  );
}

function ClubItem({ icon, title, org, description, link }) {
  return (
    <article className="space-y-3">
      <div className="flex gap-4">
        <LogoBox {...icon} />
        <div className="space-y-1 min-w-0">
          <h4 className="text-sm font-semibold leading-snug">{title}</h4>
          {org && <p className="text-white/70">{org}</p>}
        </div>
      </div>

      {description && (
        <p className="text-white/75 leading-relaxed">{description}</p>
      )}

      {link?.href && (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-white underline underline-offset-4"
        >
          {link.label ?? "View"}
          <ArrowUpRightIcon className="h-4 w-4 text-white/70" />
        </a>
      )}
    </article>
  );
}

function LogoBox({ src, alt, rounded = "md" }) {
  const radiusClass = rounded === "full" ? "rounded-full" : "rounded-md";
  return (
    <div
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center ${radiusClass} overflow-hidden`}
      aria-hidden
    >
      <Image src={src} alt={alt} width={24} height={24} className="object-contain" />
    </div>
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
