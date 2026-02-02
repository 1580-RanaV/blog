"use client";

import React, { useEffect, useMemo, useState, useRef } from "react";

const USERNAME = "1580-RanaV";
const API_URL = `https://github-contributions-api.jogruber.de/v4/${USERNAME}`;
const PROFILE_URL = `https://github.com/${USERNAME}`;

const MONTH_YEAR_FORMATTER = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

const FULL_DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
});

const COLOR_EMPTY = "#f5f5f5";
const COLOR_ACTIVE_BASE = "rgba(0, 0, 0, VAR_ALPHA)";
const TODAY_KEY = new Date().toISOString().slice(0, 10);

const FALLBACK_WEEKS = Array.from({ length: 16 }, (_, weekIdx) => ({
  key: `placeholder-week-${weekIdx}`,
  days: Array.from({ length: 7 }, (_, dayIdx) => ({
    id: `placeholder-${weekIdx}-${dayIdx}`,
    date: null,
    count: 0,
    level: 0,
    placeholder: true,
    color: COLOR_EMPTY,
    isToday: false,
  })),
}));

function formatFullDate(value) {
  if (!value) return "";
  try {
    return FULL_DATE_FORMATTER.format(new Date(value));
  } catch {
    return value;
  }
}

function getCellColor(level, count) {
  if (!count || level <= 0) return COLOR_EMPTY;
  const normalized = Math.min(Math.max(level, 1), 4);
  const alpha = 0.12 + normalized * 0.18;
  return COLOR_ACTIVE_BASE.replace("VAR_ALPHA", alpha.toFixed(2));
}

function getCached() {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem("gh-contrib-cache");
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed?.ts || !parsed?.data) return null;
    const age = Date.now() - parsed.ts;
    if (age > 6 * 60 * 60 * 1000) return null;
    return parsed.data;
  } catch {
    return null;
  }
}

function setCached(data) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(
      "gh-contrib-cache",
      JSON.stringify({ ts: Date.now(), data })
    );
  } catch {
    /* ignore */
  }
}

function createPlaceholderCell(id) {
  return {
    id,
    date: null,
    count: 0,
    level: 0,
    placeholder: true,
    color: COLOR_EMPTY,
    isToday: false,
  };
}

function buildWeeks(contributions) {
  if (!Array.isArray(contributions) || contributions.length === 0) {
    return FALLBACK_WEEKS;
  }

  const sorted = [...contributions].sort(
    (a, b) => new Date(a?.date ?? 0) - new Date(b?.date ?? 0)
  );

  const cells = [];
  const firstDate = sorted[0]?.date ? new Date(sorted[0].date) : null;
  const leading = firstDate ? firstDate.getDay() : 0;

  for (let i = 0; i < leading; i += 1) {
    cells.push(createPlaceholderCell(`leading-${i}`));
  }

  sorted.forEach((day, idx) => {
    const dateKey = day?.date ?? null;
    cells.push({
      id: dateKey ?? `missing-${idx}`,
      date: dateKey,
      count: Math.max(0, day?.count ?? 0),
      level: Math.max(0, day?.level ?? 0),
      placeholder: !day?.date,
      color: getCellColor(day?.level ?? 0, day?.count ?? 0),
      isToday: Boolean(dateKey && dateKey === TODAY_KEY),
    });
  });

  const trailing = (7 - (cells.length % 7)) % 7;
  for (let i = 0; i < trailing; i += 1) {
    cells.push(createPlaceholderCell(`trailing-${i}`));
  }

  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push({
      key: `week-${i / 7}`,
      days: cells.slice(i, i + 7),
    });
  }

  return weeks;
}

export default function Git() {
  const [total, setTotal] = useState(null);
  const [weeks, setWeeks] = useState(FALLBACK_WEEKS);
  const [range, setRange] = useState({ start: null, end: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError("");

        const cached = getCached();
        if (cached && !cancelled) {
          setTotal(cached.total ?? null);
          setWeeks(buildWeeks(cached.contributions ?? []));
          setRange({ start: cached.start ?? null, end: cached.end ?? null });
          setLoading(false);
          return;
        }

        const response = await fetch(`${API_URL}?y=last`, {
          headers: { Accept: "application/json" },
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Request failed (${response.status})`);
        }

        const payload = await response.json();
        if (cancelled) return;

        const contributions = Array.isArray(payload?.contributions)
          ? payload.contributions
          : [];

        const normalizedWeeks = buildWeeks(contributions);
        const totalCount = contributions.reduce(
          (acc, day) => acc + Math.max(0, day?.count ?? 0),
          0
        );

        const start = contributions[0]?.date ?? null;
        const end =
          contributions.length > 0
            ? contributions[contributions.length - 1]?.date ?? null
            : null;

        setTotal(totalCount);
        setWeeks(normalizedWeeks.length ? normalizedWeeks : FALLBACK_WEEKS);
        setRange({ start, end });
        setCached({ contributions, total: totalCount, start, end });
      } catch (err) {
        if (!cancelled) {
          setError("Could not load contribution data.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  const rangeLabel = useMemo(() => {
    if (!range?.start || !range?.end) return "Last 12 months";
    try {
      const start = MONTH_YEAR_FORMATTER.format(new Date(range.start));
      const end = MONTH_YEAR_FORMATTER.format(new Date(range.end));
      return `${start} – ${end}`;
    } catch {
      return "Last 12 months";
    }
  }, [range]);

  const formattedTotal =
    typeof total === "number" ? total.toLocaleString("en-US") : "—";

  if (loading) {
    return (
      <div className="space-y-3">
        <div className="h-5 w-32 bg-black/5 rounded animate-pulse" />
        <div className="h-3 w-24 bg-black/5 rounded animate-pulse" />
        <div className="h-20 bg-black/5 rounded animate-pulse mt-4" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <p className="text-[0.9375rem] font-medium text-black">
            {formattedTotal} contributions
          </p>
          <p className="text-xs text-black/40">{rangeLabel}</p>
        </div>
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-black/40 hover:text-black transition-colors"
        >
          Profile ↗
        </a>
      </div>

      {error && (
        <p className="text-xs text-black/50">{error}</p>
      )}

      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-visible -mx-1 px-1"
      >
        <div className="min-w-[580px] pb-1">
          <div className="flex gap-[2px]">
            {weeks.map((week) => (
              <div key={week.key} className="flex flex-col gap-[2px]">
                {week.days.map((day, idx) => {
                  const count = Math.max(0, day?.count ?? 0);
                  const background = day?.color ?? COLOR_EMPTY;
                  const label = day?.date
                    ? `${count} contribution${count === 1 ? "" : "s"} on ${formatFullDate(day.date)}`
                    : "No data";

                  return (
                    <span
                      key={day?.id ?? `${week.key}-${idx}`}
                      className="block h-[10px] w-[10px] rounded-[2px]"
                      style={{ backgroundColor: background }}
                      title={label}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
