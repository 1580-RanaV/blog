"use client";

import React from "react";

export default function Unfinished() {
  // Dummy data (you can add more items later)
  const projects = [
    {
      title: "Zing: 10-Minute Food Delivery",
      tech: "Next.js, Tailwind CSS",
      description:
        "Redesigned a Shark Tank–backed startup’s website. The original site was pretty rough — I made it fully responsive and added consistent styling throughout to give it a cleaner, more polished look.",
    },

    {
      title: "CreditLedger",
      tech: "Web3, Next.js, Tailwind CSS",
      description:
        "Built an app where users could lend their extra money as low-interest loans. Think of it like a student with some spare cash deciding to lend it out for small returns. Had to stop working on it because it started getting too complex to handle properly.",
    },

    {
      title: "Timetabler",
      tech: "Next.js, Tailwind CSS, Supabase",
      description:
        "A web app for schools where admins can log in, enter teacher details, class info, and set various constraints to automatically generate a full school timetable. It could even export PNGs for each teacher’s timetable. Had to pause development since the PDF generation part became tricky.",
    },

    {
      title: "Poor Man’s Spotify",
      tech: "Next.js, Tailwind CSS, YouTube API, Spotify API",
      description:
        "Since Spotify without premium is pretty limited, I tried building a workaround — the app fetched liked/saved songs from Spotify’s API, searched them on YouTube, and created a YouTube playlist automatically. Eventually dropped it because handling API rate limits got painful.",
    },

    {
      title: "Capsules",
      tech: "Next.js, Tailwind CSS, Supabase",
      description:
        "Basically untraceable online chat rooms. Users could log in, either create a capsule or join one. When creating, they’d get an ID and password to share with others to join and chat. Added features like a clean UI and file sharing up to 100MB. Everything ran in memory — no data stored on the server. Capsules self-destructed after 30 minutes.",
    },

    {
      title: "YT Payola",
      tech: "Next.js, Tailwind CSS, YouTube API",
      description:
        "Users could input a YouTube video URL and check hidden stats like view count graphs and engagement data. The idea was to spot if a creator had botted their views or engagement.",
    },
  ];

  return (
    <section className="space-y-8 font-regular text-black">
      {projects.map((project, index) => (
        <div key={index}>
          <h3 className="text-lg font-semibold text-neutral-900 mb-1">
            {project.title}
          </h3>

          <p className="text-sm text-neutral-600 mb-2">{project.tech}</p>

          <p className="text-neutral-800 leading-relaxed mb-2">
            {project.description}
          </p>
        </div>
      ))}
    </section>
  );
}
