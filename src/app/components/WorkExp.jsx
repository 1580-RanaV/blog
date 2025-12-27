"use client";

export default function WorkExp() {
  return (
    <section className="w-full font-regular text-white [data-theme='light']:text-black space-y-8 transition-colors duration-300">
      <div className="space-y-8">
        <WorkItem
          company="Fluentgrid Limited"
          role="Full-Stack Intern"
          description="Brushed up SQL and Python, touched Java. Built a full-stack banking demo with CRUD, MySQL, and Postman tests. Learned delivery hygiene beyond code."
          tags={[
            "SQL",
            "Python",
            "Java",
            "Spring Boot",
            "MySQL",
            "Postman",
            "Full-Stack",
          ]}
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
    <article className="space-y-4 border-b border-white/10 [data-theme='light']:border-black/10 pb-6 last:border-0 last:pb-0 transition-colors duration-300">
      <div className="space-y-2">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-[0.875rem] font-medium leading-[1.5] text-white [data-theme='light']:text-black transition-colors duration-300">
            {company}
          </h3>
          {duration && (
            <span className="text-[0.75rem] font-normal text-white/50 [data-theme='light']:text-black/50 transition-colors duration-300">
              {duration}
            </span>
          )}
        </div>
        <p className="text-[0.75rem] font-medium text-white/60 [data-theme='light']:text-black/60 transition-colors duration-300 uppercase tracking-wide">
          {role}
        </p>
      </div>

      <p className="text-[0.875rem] font-normal leading-[1.6] text-white/90 [data-theme='light']:text-black/90 transition-colors duration-300">
        {description}
      </p>

      {tags.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <li key={i}>
              <span className="text-[0.75rem] font-normal text-white/50 [data-theme='light']:text-black/50 transition-colors duration-300">
                {t}
              </span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
