"use client";

import Image from "next/image";

export default function Education() {
  return (
    <section className="w-full font-regular text-white [data-theme='light']:text-black space-y-8 transition-colors duration-300">
      <div className="space-y-6">
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

      <div className="border-t border-white/10 [data-theme='light']:border-black/10 pt-6 transition-colors duration-300" />

      <div className="space-y-6">
        <h3 className="text-[0.875rem] font-medium text-white [data-theme='light']:text-black transition-colors duration-300">
          Participations & Achievements
        </h3>
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

      <div className="border-t border-white/10 [data-theme='light']:border-black/10 pt-6 transition-colors duration-300" />

      <div className="space-y-6">
        <h3 className="text-[0.875rem] font-medium text-white [data-theme='light']:text-black transition-colors duration-300">
          University Club Activities
        </h3>
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
    <article className="space-y-3 border-b border-white/10 [data-theme='light']:border-black/10 pb-6 last:border-0 last:pb-0 transition-colors duration-300">
      <h4 className="text-[0.875rem] font-medium leading-[1.5] text-white [data-theme='light']:text-black transition-colors duration-300">
        {title}
      </h4>
      {line1 && (
        <p className="text-[0.875rem] font-normal text-white/90 [data-theme='light']:text-black/90 transition-colors duration-300">
          {line1}
        </p>
      )}
      {line2 && (
        <p className="text-[0.875rem] font-normal leading-[1.6] text-white/80 [data-theme='light']:text-black/80 transition-colors duration-300">
          {line2}
        </p>
      )}

      {badges.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {badges.map((b, i) => (
            <li key={i}>
              <span className="text-[0.75rem] font-normal text-white/50 [data-theme='light']:text-black/50 transition-colors duration-300">
                {b.label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

function ParticipationItem({ title, description }) {
  return (
    <article className="space-y-3 border-b border-white/10 [data-theme='light']:border-black/10 pb-6 last:border-0 last:pb-0 transition-colors duration-300">
      <h4 className="text-[0.875rem] font-medium leading-[1.5] text-white [data-theme='light']:text-black transition-colors duration-300">
        {title}
      </h4>
      {description && (
        <p className="text-[0.875rem] font-normal leading-[1.6] text-white/90 [data-theme='light']:text-black/90 transition-colors duration-300">
          {description}
        </p>
      )}
    </article>
  );
}

function ClubItem({ icon, title, org, description, link }) {
  return (
    <article className="space-y-4 border-b border-white/10 [data-theme='light']:border-black/10 pb-6 last:border-0 last:pb-0 transition-colors duration-300">
      <div className="flex gap-4">
        <LogoBox {...icon} />
        <div className="space-y-1 min-w-0 flex-1">
          <h4 className="text-[0.875rem] font-medium leading-[1.5] text-white [data-theme='light']:text-black transition-colors duration-300">
            {title}
          </h4>
          {org && (
            <p className="text-[0.75rem] font-normal text-white/60 [data-theme='light']:text-black/60 transition-colors duration-300">
              {org}
            </p>
          )}
        </div>
      </div>

      {description && (
        <p className="text-[0.875rem] font-normal leading-[1.6] text-white/90 [data-theme='light']:text-black/90 transition-colors duration-300">
          {description}
        </p>
      )}

      {link?.href && (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[0.875rem] font-normal text-white [data-theme='light']:text-black underline underline-offset-4 hover:text-white/80 [data-theme='light']:hover:text-black/80 transition-colors duration-300"
        >
          {link.label ?? "View"}
          <ArrowUpRightIcon className="h-3 w-3" />
        </a>
      )}
    </article>
  );
}

function LogoBox({ src, alt, rounded = "md" }) {
  const radiusClass = rounded === "full" ? "rounded-full" : "rounded-md";
  return (
    <div
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center ${radiusClass} overflow-hidden bg-white/5 [data-theme='light']:bg-black/5 transition-colors duration-300`}
      aria-hidden
    >
      <Image src={src} alt={alt} width={24} height={24} className="object-contain" loading="lazy" />
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
