"use client";

export default function Unfinished() {
  const projects = [
    {
      title: "Zing: 10-Minute Food Delivery",
      description: "Redesigned a Shark Tank–backed startup's website. Made it responsive with consistent styling.",
      tech: "Next.js · Tailwind CSS",
    },
    {
      title: "CreditLedger",
      description: "App for lending extra money as low-interest loans. Paused when complexity outgrew scope.",
      tech: "Web3 · Next.js",
    },
    {
      title: "Timetabler",
      description: "Auto-generate school timetables with constraints and PNG exports. Paused on PDF generation.",
      tech: "Next.js · Supabase",
    },
    {
      title: "Poor Man's Spotify",
      description: "Fetch liked songs from Spotify, map to YouTube, build playlists. Dropped due to API rate limits.",
      tech: "YouTube API · Spotify API",
    },
    {
      title: "Capsules",
      description: "Untraceable, timed chat rooms with 100MB file sharing. Self-destruct after 30 minutes.",
      tech: "Next.js · Supabase",
    },
    {
      title: "YT Payola",
      description: "Input YouTube URL to see hidden stats and spot botted views.",
      tech: "YouTube API · Next.js",
    },
  ];

  return (
    <div className="space-y-5">
      {projects.map((project, idx) => (
        <div key={idx} className="group">
          <h3 className="text-[0.9375rem] font-medium text-black">
            {project.title}
          </h3>
          <p className="mt-1.5 text-[0.875rem] leading-relaxed text-black/60">
            {project.description}
          </p>
          <p className="mt-1.5 text-xs text-black/35">
            {project.tech}
          </p>
        </div>
      ))}
    </div>
  );
}
