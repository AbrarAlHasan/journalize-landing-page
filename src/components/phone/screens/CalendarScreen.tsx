import { NOVEMBER_2026 } from "../../../data/demo";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function buildNovemberCells() {
  const leading = [26, 27, 28, 29, 30, 31];
  const current = Array.from({ length: 30 }, (_, i) => i + 1);
  const trailing = [1, 2, 3, 4, 5, 6];
  return [
    ...leading.map((day) => ({ day, outside: true })),
    ...current.map((day) => ({ day, outside: false })),
    ...trailing.map((day) => ({ day, outside: true })),
  ];
}

const cells = buildNovemberCells();
const dayMap = new Map(NOVEMBER_2026.map((d) => [d.day, d]));

export function CalendarScreen({ revealPnl }: { revealPnl: boolean }) {
  return (
    <div className="flex h-full flex-col px-3 pt-4" data-phase={revealPnl ? "pnl" : "grid"}>
      <div className="mb-2 flex items-center justify-between px-1">
        <h3 className="text-lg font-bold">Calendar</h3>
        <span className="rounded-lg border border-[#262626] bg-[#171717] px-2.5 py-1.5 text-[11px] font-medium text-[#a3a3a3]">
          Filter
        </span>
      </div>
      <div className="mb-2 flex items-center justify-between px-2 py-1">
        <span className="text-lg text-[#a3a3a3]">‹</span>
        <span className="text-[13px] font-semibold">November 2026</span>
        <span className="text-lg text-[#a3a3a3]">›</span>
      </div>
      <div className="mb-1 grid grid-cols-7">
        {WEEKDAYS.map((d) => (
          <div
            key={d}
            className="py-1 text-center text-[9px] font-medium uppercase tracking-wider text-[#737373]"
          >
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {cells.map((cell, idx) => {
          const data = !cell.outside ? dayMap.get(cell.day) : undefined;
          const isToday = !cell.outside && cell.day === 1;
          const isSelected = !cell.outside && cell.day === 14;
          const isProfit = Boolean(data && data.pnl > 0);
          const isLoss = Boolean(data && data.pnl < 0);
          const delay = `${60 + (idx % 7) * 28 + Math.floor(idx / 7) * 36}ms`;
          const bg = cell.outside
            ? "transparent"
            : isSelected
              ? "rgba(96,165,250,0.10)"
              : revealPnl && isProfit
                ? "#14532d"
                : revealPnl && isLoss
                  ? "#7f1d1d"
                  : "#171717";

          return (
            <div
              key={`${cell.day}-${idx}`}
              className={`m-[2px] flex h-14 flex-col items-center justify-center rounded-2xl border border-white/5 ${
                cell.outside ? "opacity-30" : ""
              }`}
              style={{
                backgroundColor: bg,
                transition: "background-color 560ms cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: delay,
              }}
            >
              <span className="text-[10px] font-semibold">{cell.day}</span>
              {isToday && <span className="mt-0.5 h-0.5 w-3 rounded-full bg-white" />}
              <div
                data-reveal="calendar-pnl"
                className="text-center leading-none"
                style={{
                  maxHeight: revealPnl && data && !cell.outside ? 22 : 0,
                  marginTop: revealPnl && data && !cell.outside ? 2 : 0,
                  opacity: revealPnl && data && !cell.outside ? 1 : 0,
                  transform:
                    revealPnl && data && !cell.outside
                      ? "translateY(0)"
                      : "translateY(6px)",
                  overflow: "hidden",
                  transition:
                    "max-height 480ms cubic-bezier(0.16, 1, 0.3, 1), opacity 420ms ease, transform 480ms cubic-bezier(0.16, 1, 0.3, 1), margin-top 480ms ease",
                  transitionDelay: delay,
                }}
              >
                {data && (
                  <>
                    <div className="text-[8px] text-[#9ca3af]">
                      {data.trades} {data.trades === 1 ? "trade" : "trades"}
                    </div>
                    <div
                      className={`text-[9px] font-semibold ${
                        isProfit ? "app-profit" : isLoss ? "app-loss" : "text-[#a3a3a3]"
                      }`}
                    >
                      {data.pnl > 0 ? "+" : ""}
                      {data.pnl}
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
