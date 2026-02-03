"use client";

export default function WorkExp() {
  const experiences = [
    {
      company: "Freelance",
      role: "Full-Stack",
      description: "Built apps and websites for few clients, paid and un-paid; for a short duration.",
      tech: "Next.js · TailwindCSS · Supabase · Python Scripts · API · CI/CD · Client Facing ",
    },
    {
      company: "Fluentgrid Limited",
      role: "Full-Stack Intern",
      description: "Brushed up SQL and Python, touched Java. Built a full-stack banking demo with CRUD, MySQL, and Postman tests. Learned delivery hygiene beyond code.",
      tech: "SQL · Python · Java · Spring Boot · MySQL",
    },
    {
      company: "Thrusoft Solutions",
      role: "Machine Learning Intern",
      location: "Remote",
      description: "Implemented ANPR pipeline with Python and OpenCV after covering ML basics. Reached ~80-85% plate recognition and proposed storage-aware logging.",
      tech: "Python · OpenCV · Machine Learning",
    },
  ];

  return (
    <div className="space-y-6">
      {experiences.map((exp, idx) => (
        <div key={idx} className="group">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-[0.9375rem] font-medium text-black">
              {exp.company}
            </h3>
            {exp.location && (
              <span className="text-xs text-black/35 flex-shrink-0">
                {exp.location}
              </span>
            )}
          </div>
          <p className="mt-0.5 text-xs font-medium text-black/45 uppercase tracking-wide">
            {exp.role}
          </p>
          <p className="mt-2 text-[0.875rem] leading-relaxed text-black/60">
            {exp.description}
          </p>
          <p className="mt-2 text-xs text-black/35">
            {exp.tech}
          </p>
        </div>
      ))}
    </div>
  );
}
