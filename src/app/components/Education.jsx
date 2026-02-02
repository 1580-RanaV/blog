"use client";

export default function Education() {
  const education = [
    {
      institution: "GITAM University",
      degree: "B.Tech, Computer Science & Engineering",
      year: "2025",
      details: "Web apps, SQL/NoSQL, software methodologies, agile/scrum, OS, DBMS, OOP.",
      score: "CGPA: 8.61",
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "MPC (Math, Physics, Chemistry)",
      year: "2021",
      score: "92.7%",
    },
    {
      institution: "Delhi Public School",
      degree: "Secondary Education",
      year: "2019",
      score: "86.66%",
    },
  ];

  const participations = [
    {
      title: "Providence Ideathon 2024",
      description: "Health-focused problem statement on Unstop; advanced to second round.",
    },
    {
      title: "Catalog Hackathon",
      description: "Reached final round; hiring-style challenge across prompt engineering and problem solving.",
    },
    {
      title: "IIM Rohtak Logo Competition",
      description: "Consolation in the logo design competition on Unstop.",
    },
  ];

  const clubs = [
    {
      role: "Lead Graphic Designer",
      org: "Google Developer Student Clubs",
      description: "Led design across university events with 1,000+ participants. Created visual systems using Figma and Photoshop.",
      link: { href: "https://drive.google.com/file/d/1OXx-0RkdmgxBVE_1o3NNhmpA595O1DaF/view?usp=sharing", label: "Certificate" },
    },
  ];

  return (
    <div className="space-y-8">
      {/* Education */}
      <div className="space-y-5">
        {education.map((edu, idx) => (
          <div key={idx} className="group">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-[0.9375rem] font-medium text-black">
                {edu.institution}
              </h3>
              <span className="text-xs text-black/35 flex-shrink-0">
                {edu.score}
              </span>
            </div>
            <p className="mt-0.5 text-[0.875rem] text-black/50">
              {edu.degree}, {edu.year}
            </p>
            {edu.details && (
              <p className="mt-1.5 text-[0.875rem] leading-relaxed text-black/40">
                {edu.details}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Participations */}
      <div className="pt-2">
        <h4 className="text-xs font-medium text-black/40 uppercase tracking-wide mb-4">
          Participations
        </h4>
        <div className="space-y-5">
          {participations.map((item, idx) => (
            <div key={idx}>
              <h3 className="text-[0.9375rem] font-medium text-black">
                {item.title}
              </h3>
              <p className="mt-1.5 text-[0.875rem] leading-relaxed text-black/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Club Activities */}
      <div className="pt-2">
        <h4 className="text-xs font-medium text-black/40 uppercase tracking-wide mb-4">
          Club Activities
        </h4>
        <div className="space-y-5">
          {clubs.map((club, idx) => (
            <div key={idx}>
              <h3 className="text-[0.9375rem] font-medium text-black">
                {club.role}
              </h3>
              <p className="mt-0.5 text-xs text-black/40">
                {club.org}
              </p>
              <p className="mt-1.5 text-[0.875rem] leading-relaxed text-black/60">
                {club.description}
              </p>
              {club.link && (
                <a
                  href={club.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-xs text-black/40 hover:text-black transition-colors"
                >
                  {club.link.label} ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
