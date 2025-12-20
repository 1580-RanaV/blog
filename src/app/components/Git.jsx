"use client";

import React, { useEffect, useMemo, useState, useRef } from "react";

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

const COLOR_EMPTY = "#0d0d0d";
const COLOR_ACTIVE_BASE = "rgba(255, 255, 255, VAR_ALPHA)";
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
  const alpha = 0.45 + normalized * 0.12;
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
    // 6 hours cache
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

function LoadingSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <div className="h-8 w-48 animate-pulse rounded-lg bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 bg-[length:200%_100%]" style={{ animation: 'shimmer 2s infinite' }} />
          <div className="h-4 w-32 animate-pulse rounded bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 bg-[length:200%_100%]" style={{ animation: 'shimmer 2s infinite', animationDelay: '0.2s' }} />
        </div>
        <div className="h-9 w-28 animate-pulse rounded-full bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 bg-[length:200%_100%]" style={{ animation: 'shimmer 2s infinite', animationDelay: '0.4s' }} />
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[640px]">
          <div className="flex gap-[3px]">
            {Array.from({ length: 53 }, (_, weekIdx) => (
              <div key={weekIdx} className="flex flex-col gap-[3px]">
                {Array.from({ length: 7 }, (_, dayIdx) => (
                  <span
                    key={dayIdx}
                    className="h-4 w-4 animate-pulse rounded-sm bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-800"
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
        <div className="h-3 w-8 animate-pulse rounded bg-neutral-800" />
        <div className="flex items-center gap-[3px]">
          {Array.from({ length: 2 }, (_, idx) => (
            <span
              key={idx}
              className="h-3 w-3 animate-pulse rounded-sm bg-neutral-800"
              style={{ animationDelay: `${idx * 100}ms` }}
            />
          ))}
        </div>
        <div className="h-3 w-8 animate-pulse rounded bg-neutral-800" style={{ animationDelay: '200ms' }} />
      </div>

      <div className="h-3 w-64 animate-pulse rounded bg-neutral-800" style={{ animationDelay: '300ms' }} />

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
  const [showScrollHint, setShowScrollHint] = useState(true);
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

  // Smooth scroll animation on mount
  useEffect(() => {
    if (!loading && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollDistance = 200; // pixels to scroll
      const duration = 1500; // milliseconds
      const startTime = Date.now();

      const animateScroll = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease-in-out function
        const easeInOut = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        container.scrollLeft = scrollDistance * easeInOut;

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          // After animation, scroll back to start smoothly
          setTimeout(() => {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          }, 500);
        }
      };

      // Start animation after a brief delay
      const timeoutId = setTimeout(() => {
        animateScroll();
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, [loading]);

  // Hide scroll hint after user scrolls
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setShowScrollHint(false);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
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
      className="w-full font-regular text-white"
    >
      <div className="p-0 space-y-4">
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <>
            <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2
                  id="github-activity-heading"
                  className="leading-tight text-white font-semibold"
                >
                  {`${formattedTotal} contributions`}
                </h2>
                <p className="text-white/60">{rangeLabel}</p>
              </div>

              <a
                href={PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full items-center justify-center px-4 py-2 text-white transition-colors bg-transparent underline underline-offset-4"
              >
                View profile
              </a>
            </header>

            <div className="mt-6">
              {error && (
                <div className="mb-4 rounded-lg px-3 py-2 text-white/80">
                  {error}{" "}
                  <a
                    href={CONTRIBUTIONS_PAGE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 text-white"
                  >
                    Open on GitHub
                  </a>
                </div>
              )}

              <div className="relative">
                {/* Scroll hint */}
                {showScrollHint && (
                  <div className="absolute -top-5 right-0 flex items-center gap-2 text-xs text-white/50 animate-pulse">
                    <span></span>
                  </div>
                )}

                {/* Scrollable container with visible scrollbar */}
                <div 
                  ref={scrollContainerRef}
                  className="overflow-x-auto scrollbar-visible"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#1f1f24 #0b0b0f'
                  }}
                >
                  <div className="min-w-[640px] pb-2">
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
                                className="relative block h-4 w-4 rounded-[3px]"
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
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        .scrollbar-visible::-webkit-scrollbar {
          height: 8px;
        }
        
        .scrollbar-visible::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.04);
          border-radius: 4px;
        }
        
        .scrollbar-visible::-webkit-scrollbar-thumb {
          background: #52555f;
          border-radius: 4px;
          transition: background 0.2s;
        }
        
        .scrollbar-visible::-webkit-scrollbar-thumb:hover {
          background: #7a7d87;
        }
      `}</style>
    </section>
  );
}
