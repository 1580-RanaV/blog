"use client";

export default function Certifications() {
  const certifications = [
    {
      year: "2025",
      title: "Oracle Cloud Infrastructure - AI Foundations Associate",
      description: "Strengthened AI and ML fundamentals in cloud systems. Covered Generative AI, Oracle 23ai Vector Databases, Vision, Speech, and NLP services.",
      link: { href: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=DAF34BC44A7A3DC84A8F107B518A0C2558515ACEF827D948059534C4CEF373D2", label: "View certificate" },
    },
  ];

  return (
    <div className="space-y-5">
      {certifications.map((cert, idx) => (
        <div key={idx} className="group">
          <span className="text-xs text-black/30 font-medium">
            {cert.year}
          </span>
          <h3 className="mt-1 text-[0.9375rem] font-medium text-black">
            {cert.title}
          </h3>
          <p className="mt-2 text-[0.875rem] leading-relaxed text-black/60">
            {cert.description}
          </p>
          {cert.link && (
            <a
              href={cert.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-xs text-black/40 hover:text-black transition-colors"
            >
              {cert.link.label} ↗
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
