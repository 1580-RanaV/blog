"use client";

import Image from "next/image";

export default function Education() {
  return (
    <section className="w-full space-y-6">
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
          badges={[{ label: "92.7%" }]}
        />
        <EduItem
          title="Delhi Public School"
          line1="Secondary Education, 2019"
          badges={[{ label: "86.66%" }]}
        />
      </div>

      <div className="border-t border-black/10 pt-6" />

      <div className="space-y-4">
        <h3 className="text-[0.875rem] font-medium text-black">
          Participations & Achievements
        </h3>
        <div className="space-y-4">
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
      </div>

      <div className="border-t border-black/10 pt-6" />

      <div className="space-y-4">
        <h3 className="text-[0.875rem] font-medium text-black">
          University Club Activities
        </h3>
        <ClubItem
          icon={{ src: "/google.svg", alt: "GDSC" }}
          title="Lead Graphic Designer"
          org="Google Developer Student Clubs (GDSC)"
          description="Led design across university events with 1,000+ participants; created visual systems and event collateral using Figma and Photoshop."
          link={{ href: "https://drive.google.com/file/d/1OXx-0RkdmgxBVE_1o3NNhmpA595O1DaF/view?usp=sharing", label: "Certificate" }}
        />
      </div>
    </section>
  );
}

function EduItem({ title, line1, line2, badges = [] }) {
  return (
    <article className="space-y-2 border-b border-black/10 pb-6 last:border-0 last:pb-0">
      <h4 className="text-[0.9375rem] font-medium text-black">
        {title}
      </h4>
      {line1 && (
        <p className="text-[0.875rem] text-black/70">
          {line1}
        </p>
      )}
      {line2 && (
        <p className="text-[0.875rem] leading-relaxed text-black/60">
          {line2}
        </p>
      )}

      {badges.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {badges.map((b, i) => (
            <span key={i} className="text-xs font-medium text-black/50">
              {b.label}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

function ParticipationItem({ title, description }) {
  return (
    <article className="space-y-1">
      <h4 className="text-[0.875rem] font-medium text-black">
        {title}
      </h4>
      {description && (
        <p className="text-[0.875rem] leading-relaxed text-black/60">
          {description}
        </p>
      )}
    </article>
  );
}

function ClubItem({ icon, title, org, description, link }) {
  return (
    <article className="space-y-3">
      <div className="flex gap-3 items-start">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-black/5 flex items-center justify-center flex-shrink-0">
          <Image src={icon.src} alt={icon.alt} width={20} height={20} className="object-contain" loading="lazy" />
        </div>
        <div className="space-y-0.5 min-w-0 flex-1">
          <h4 className="text-[0.875rem] font-medium text-black">
            {title}
          </h4>
          {org && (
            <p className="text-xs text-black/50">
              {org}
            </p>
          )}
        </div>
      </div>

      {description && (
        <p className="text-[0.875rem] leading-relaxed text-black/60">
          {description}
        </p>
      )}

      {link?.href && (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.875rem] font-medium text-black underline underline-offset-4 decoration-black/30 hover:decoration-black transition-colors"
        >
          {link.label ?? "View"} ↗
        </a>
      )}
    </article>
  );
}
