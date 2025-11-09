"use client";

import React, { useEffect, useMemo, useState } from "react";

const USERNAME = "1580-RanaV";
const API_URL = `https://github-contributions-api.jogruber.de/v4/${USERNAME}`;
const PROFILE_URL = `https://github.com/${USERNAME}`;
const CONTRIBUTIONS_PAGE = `https://github.com/users/${USERNAME}/contributions`;

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

const COLOR_EMPTY = "#d4d4d8";
const COLOR_ACTIVE_BASE = "rgba(15, 15, 15, VAR_ALPHA)";

const FALLBACK_WEEKS = Array.from({ length: 16 }, (_, weekIdx) => ({
  key: `placeholder-week-${weekIdx}`,
  days: Array.from({ length: 7 }, (_, dayIdx) => ({
    id: `placeholder-${weekIdx}-${dayIdx}`,
    date: null,
    count: 0,
    level: 0,
    color: COLOR_EMPTY,
    placeholder: true,
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
  const alpha = 0.45 + normalized * 0.12;
  return COLOR_ACTIVE_BASE.replace("VAR_ALPHA", alpha.toFixed(2));
}

function createPlaceholderCell(id) {
  return {
    id,
    date: null,
    count: 0,
    level: 0,
    placeholder: true,
    color: COLOR_EMPTY,
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
    cells.push({
      id: day?.date ?? `missing-${idx}`,
      date: day?.date ?? null,
      count: Math.max(0, day?.count ?? 0),
      level: Math.max(0, day?.level ?? 0),
      placeholder: !day?.date,
      color: getCellColor(day?.level ?? 0, day?.count ?? 0),
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

function LoadingSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <div className="h-8 w-48 animate-pulse rounded-lg bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%]" style={{ animation: 'shimmer 2s infinite' }} />
          <div className="h-4 w-32 animate-pulse rounded bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%]" style={{ animation: 'shimmer 2s infinite', animationDelay: '0.2s' }} />
        </div>
        <div className="h-9 w-28 animate-pulse rounded-full bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%]" style={{ animation: 'shimmer 2s infinite', animationDelay: '0.4s' }} />
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[640px]">
          <div className="flex gap-[3px]">
            {Array.from({ length: 53 }, (_, weekIdx) => (
              <div key={weekIdx} className="flex flex-col gap-[3px]">
                {Array.from({ length: 7 }, (_, dayIdx) => (
                  <span
                    key={dayIdx}
                    className="h-4 w-4 animate-pulse rounded-sm bg-gradient-to-br from-neutral-200 via-neutral-150 to-neutral-200"
                    style={{
                      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                      animationDelay: `${(weekIdx * 7 + dayIdx) * 10}ms`
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-3 w-8 animate-pulse rounded bg-neutral-200" />
        <div className="flex items-center gap-[3px]">
          {Array.from({ length: 2 }, (_, idx) => (
            <span
              key={idx}
              className="h-3 w-3 animate-pulse rounded-sm bg-neutral-200"
              style={{ animationDelay: `${idx * 100}ms` }}
            />
          ))}
        </div>
        <div className="h-3 w-8 animate-pulse rounded bg-neutral-200" style={{ animationDelay: '200ms' }} />
      </div>

      <div className="h-3 w-64 animate-pulse rounded bg-neutral-200" style={{ animationDelay: '300ms' }} />

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}

export default function Git() {
  const [total, setTotal] = useState(null);
  const [weeks, setWeeks] = useState(FALLBACK_WEEKS);
  const [range, setRange] = useState({ start: null, end: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError("");

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
      } catch (err) {
        if (!cancelled) {
          console.warn("GitHub contributions fetch failed:", err);
          setError(
            "Could not load the latest contribution data. Please try again later."
          );
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
      return `${start} - ${end}`;
    } catch {
      return "Last 12 months";
    }
  }, [range]);

  const formattedTotal =
    typeof total === "number" ? total.toLocaleString("en-US") : "--";

  return (
    <section
      aria-labelledby="github-activity-heading"
      className="w-full font-regular text-neutral-900"
    >
      <div className="rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <>
            <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2
                  id="github-activity-heading"
                  className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900"
                >
                  {`${formattedTotal} contributions`}
                </h2>
                <p className="text-sm text-neutral-900">{rangeLabel}</p>
              </div>

              <a
                href={PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-900"
              >
                View profile
              </a>
            </header>

            <div className="mt-6">
              {error && (
                <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                  {error}{" "}
                  <a
                    href={CONTRIBUTIONS_PAGE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    Open on GitHub
                  </a>
                </div>
              )}

              <div className="overflow-x-auto">
                <div className="min-w-[640px]">
                  <div
                    className="flex gap-[3px]"
                    aria-label="Contribution heatmap"
                  >
                    {weeks.map((week) => (
                      <div
                        key={week.key}
                        className="flex flex-col gap-[3px]"
                        aria-hidden="true"
                      >
                        {week.days.map((day, idx) => {
                          const count = Math.max(0, day?.count ?? 0);
                          const background = day?.color ?? COLOR_EMPTY;
                          const label = day?.date
                            ? `${count} contribution${
                                count === 1 ? "" : "s"
                              } on ${formatFullDate(day.date)}`
                            : "No data";

                          return (
                            <span
                              key={day?.id ?? `${week.key}-${idx}`}
                              className="h-4 w-4"
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

              {/* <div className="mt-4 flex items-center gap-3 text-xs text-neutral-900">
                <span>Less</span>
                <div className="flex items-center gap-[3px]">
                  {[COLOR_EMPTY, getCellColor(4, 1)].map((color, idx) => (
                    <span
                      key={`${color}-${idx}`}
                      className="h-3 w-3"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span>More</span>
              </div> */}
            </div>

            <p className="mt-6 text-xs text-neutral-900">
              Updated from GitHub — current through today.
            </p>
          </>
        )}
      </div>
    </section>
  );
}