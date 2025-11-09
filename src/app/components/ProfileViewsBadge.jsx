"use client";

import React, { useEffect, useState } from "react";

const COUNT_NAMESPACE = "vrana_portfolio";
const COUNT_KEY = "profile_views";
const BASE_URL = `https://api.countapi.xyz`;

async function fetchCount(hit = false) {
  const path = hit ? "hit" : "get";
  const url = `${BASE_URL}/${path}/${COUNT_NAMESPACE}/${COUNT_KEY}`;

  const response = await fetch(url, {
    headers: { Accept: "application/json" },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Count API request failed (${response.status})`);
  }

  return response.json();
}

export default function ProfileViewsBadge() {
  const [count, setCount] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setError("");
        const data = await fetchCount(true);

        if (cancelled) return;

        setCount(typeof data?.value === "number" ? data.value : null);
      } catch (err) {
        if (!cancelled) {
          console.warn("Profile view counter failed:", err);
          setError("—");
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  const displayValue =
    error || count === null ? error || "…" : count.toLocaleString("en-US");

  return (
    <div className="pointer-events-none fixed left-4 top-4 z-50">
      <div className="flex border border-neutral-300 bg-white text-neutral-900 shadow-sm">
        <span className="bg-neutral-900 px-2 py-0.5 text-white">
          profile views
        </span>
        <span className="bg-blue-600 px-2.5 py-0.5 text-xs font-semibold text-white">
          {displayValue}
        </span>
      </div>
    </div>
  );
}
