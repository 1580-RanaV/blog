"use client";

export default function WorkExp() {
  return (
    <section className="w-full space-y-6">
      <div className="space-y-6">
        <WorkItem
          company="Fluentgrid Limited"
          role="Full-Stack Intern"
          description="Brushed up SQL and Python, touched Java. Built a full-stack banking demo with CRUD, MySQL, and Postman tests. Learned delivery hygiene beyond code."
          tags={["SQL", "Python", "Java", "Spring Boot", "MySQL", "Postman"]}
        />

        <WorkItem
          company="Thrusoft Solutions"
          duration="Remote"
          role="Machine Learning Intern"
          description="Implemented ANPR pipeline with Python and OpenCV after covering ML basics. Reached ~80-85% plate recognition and proposed storage-aware logging."
          tags={["Python", "OpenCV", "Machine Learning", "ANPR"]}
        />
      </div>
    </section>
  );
}

function WorkItem({ company, duration, role, description, tags = [] }) {
  return (
    <article className="space-y-3 border-b border-black/10 pb-6 last:border-0 last:pb-0">
      <div className="space-y-1">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <h3 className="text-[0.9375rem] font-medium text-black">
            {company}
          </h3>
          {duration && (
            <span className="text-xs text-black/40">
              {duration}
            </span>
          )}
        </div>
        <p className="text-xs font-medium text-black/50 uppercase tracking-wide">
          {role}
        </p>
      </div>

      <p className="text-[0.875rem] leading-relaxed text-black/70">
        {description}
      </p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          {tags.map((t, i) => (
            <span key={i} className="text-xs text-black/40">
              {t}{i < tags.length - 1 ? " ·" : ""}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
