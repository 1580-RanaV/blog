"use client";

import React from "react";

export default function Unfinished() {
  const projects = [
    {
      title: "Zing: 10-Minute Food Delivery",
      tech: "Next.js, Tailwind CSS",
      description:
        "Redesigned a Shark Tank–backed startup’s website. Made it responsive and added consistent styling for a cleaner, more polished look.",
    },

    {
      title: "CreditLedger",
      tech: "Web3, Next.js, Tailwind CSS",
      description:
        "Built an app where users could lend extra money as low-interest loans. Paused when the product complexity outgrew the initial scope.",
    },

    {
      title: "Timetabler",
      tech: "Next.js, Tailwind CSS, Supabase",
      description:
        "A web app for schools to generate timetables automatically with constraints, plus PNG exports for each teacher. Paused when PDF generation became a time sink.",
    },

    {
      title: "Poor Man’s Spotify",
      tech: "Next.js, Tailwind CSS, YouTube API, Spotify API",
      description:
        "Fetched liked songs from Spotify, mapped them to YouTube, and built playlists automatically to dodge premium limits. Dropped due to API rate-limit pain.",
    },

    {
      title: "Capsules",
      tech: "Next.js, Tailwind CSS, Supabase",
      description:
        "Untraceable, timed chat rooms with file sharing up to 100MB. All in-memory; capsules self-destructed after 30 minutes.",
    },

    {
      title: "YT Payola",
      tech: "Next.js, Tailwind CSS, YouTube API",
      description:
        "Input a YouTube URL to see hidden stats like view graphs and engagement, built to spot botted views.",
    },
  ];

  return (
    <section className="space-y-4 font-regular text-white">
      {projects.map((project, index) => (
        <article key={index} className="space-y-2">
          <h3 className="text-sm font-semibold leading-snug">
            {project.title}
          </h3>
          <p className="text-white/60 text-sm">{project.tech}</p>
          <p className="text-white/80 leading-relaxed">{project.description}</p>
        </article>
      ))}
    </section>
  );
}
