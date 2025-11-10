"use client";

import React, { useEffect, useState } from "react";

const ENDPOINT = "/api/profile-views";

export default function ProfileViewsBadge() {
  const [count, setCount] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        setError("");
        const response = await fetch(ENDPOINT, { cache: "no-store" });

        if (!response.ok) {
          throw new Error(`Profile counter request failed (${response.status})`);
        }

        const payload = await response.json();
        if (!active) return;

        setCount(typeof payload?.count === "number" ? payload.count : null);
      } catch (err) {
        if (!active) return;
        console.warn("Profile views badge failed:", err);
        setError("—");
      }
    }

    load();

    return () => {
      active = false;
    };
  }, []);

  const displayValue =
    error || count === null ? error || "…" : count.toLocaleString("en-US");

  return (
    <div className="inline-flex overflow-hidden bg-neutral-900 text-white">
      <span className="bg-neutral-900 px-2 py-1">
        views
      </span>
      <span className="bg-neutral-500 px-2.5 py-1 text-white">
        {displayValue}
      </span>
    </div>
  );
}
