import { useEffect, useState } from "react";

interface ContribDay {
  date: string;
  count: number;
  level: number;
}

interface ContribResponse {
  contributions: ContribDay[];
  total?: Record<string, number>;
}

const LEVEL_OPACITY = [0, 0.28, 0.5, 0.72, 1];
const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function cellStyle(level: number) {
  if (level <= 0) {
    return { backgroundColor: "hsl(var(--muted-foreground) / 0.14)" };
  }
  const opacity = LEVEL_OPACITY[Math.min(level, 4)];
  return { backgroundColor: `hsl(var(--foreground) / ${opacity})` };
}

function buildWeeks(days: ContribDay[]): (ContribDay | null)[][] {
  if (days.length === 0) return [];
  const byDate = new Map(days.map((d) => [d.date, d]));

  const first = new Date(days[0].date + "T00:00:00");
  const start = new Date(first);
  start.setDate(start.getDate() - start.getDay());

  const last = new Date(days[days.length - 1].date + "T00:00:00");

  const weeks: (ContribDay | null)[][] = [];
  const cursor = new Date(start);
  while (cursor <= last) {
    const week: (ContribDay | null)[] = [];
    for (let i = 0; i < 7; i++) {
      const iso = cursor.toISOString().slice(0, 10);
      week.push(cursor > last ? null : byDate.get(iso) ?? { date: iso, count: 0, level: 0 });
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
}

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function GithubHeatmap({ username }: { username: string }) {
  const [weeks, setWeeks] = useState<(ContribDay | null)[][] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data: ContribResponse) => {
        if (cancelled) return;
        if (!Array.isArray(data?.contributions)) throw new Error("bad payload");
        setWeeks(buildWeeks(data.contributions));
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [username]);

  if (failed) {
    return (
      <p className="text-xs text-muted-foreground">
        Couldn't load GitHub activity right now.
      </p>
    );
  }

  if (!weeks) {
    return (
      <div className="flex gap-[3px] overflow-hidden" aria-hidden>
        {Array.from({ length: 53 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-[3px]">
            {Array.from({ length: 7 }).map((__, j) => (
              <div
                key={j}
                className="h-[11px] w-[11px] rounded-[2px] bg-muted-foreground/10 animate-pulse"
              />
            ))}
          </div>
        ))}
      </div>
    );
  }

  let lastLabeledMonth = -1;

  return (
    <div>
      <div className="flex gap-[3px] overflow-x-auto pb-1">
        {weeks.map((week, wi) => {
          const firstDay = week.find((d): d is ContribDay => d !== null);
          const month = firstDay ? new Date(firstDay.date + "T00:00:00").getMonth() : -1;
          const showLabel = firstDay && month !== lastLabeledMonth && new Date(firstDay.date + "T00:00:00").getDate() <= 7;
          if (showLabel) lastLabeledMonth = month;

          return (
            <div key={wi} className="flex flex-col gap-[3px] shrink-0 relative">
              {showLabel && (
                <span className="absolute -top-[18px] left-0 text-[10px] text-muted-foreground/60 whitespace-nowrap">
                  {MONTH_LABELS[month]}
                </span>
              )}
              {week.map((day, di) =>
                day ? (
                  <div
                    key={di}
                    title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${formatDate(day.date)}`}
                    className="h-[11px] w-[11px] rounded-[2px] transition-transform duration-150 hover:scale-125"
                    style={cellStyle(day.level)}
                  />
                ) : (
                  <div key={di} className="h-[11px] w-[11px]" />
                )
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-end gap-1.5 mt-3 text-[10px] text-muted-foreground/60">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div key={level} className="h-[10px] w-[10px] rounded-[2px]" style={cellStyle(level)} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
