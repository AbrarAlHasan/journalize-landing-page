import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import type { AnalyticsPhase } from "../../../data/demo-steps";
import { ANALYTICS } from "../../../data/demo";

const EASE = "520ms cubic-bezier(0.16, 1, 0.3, 1)";

function revealStyle(show: boolean, delay: number, maxHeight = 220): CSSProperties {
  return {
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : "translateY(16px)",
    maxHeight: show ? maxHeight : 0,
    marginTop: show ? undefined : 0,
    marginBottom: show ? undefined : 0,
    overflow: "hidden",
    transition: `opacity 420ms ease, transform ${EASE}, max-height ${EASE}, margin 480ms ease`,
    transitionDelay: `${delay}ms`,
  };
}

function Reveal({
  show,
  delay = 0,
  maxHeight,
  className,
  children,
}: {
  show: boolean;
  delay?: number;
  maxHeight?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`shrink-0 ${className ?? ""}`} style={revealStyle(show, delay, maxHeight)}>
      {children}
    </div>
  );
}

function EquityChart() {
  const w = 250;
  const h = 88;
  const values = ANALYTICS.equity;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = Math.max(max - min, 1);
  const points = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * w;
      const y = h - ((v - min) / span) * (h - 8) - 4;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-[88px] w-full">
      <polyline
        points={points}
        fill="none"
        stroke="#4ade80"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Donut() {
  const total = ANALYTICS.wins + ANALYTICS.losses + ANALYTICS.be;
  const win = (ANALYTICS.wins / total) * 100;
  const loss = (ANALYTICS.losses / total) * 100;

  return (
    <div className="relative mx-auto h-28 w-28">
      <svg viewBox="0 0 36 36" className="-rotate-90">
        <circle cx="18" cy="18" r="14" fill="none" stroke="#262626" strokeWidth="5" />
        <circle
          cx="18"
          cy="18"
          r="14"
          fill="none"
          stroke="#16a34a"
          strokeWidth="5"
          strokeDasharray={`${win} ${100 - win}`}
        />
        <circle
          cx="18"
          cy="18"
          r="14"
          fill="none"
          stroke="#dc2626"
          strokeWidth="5"
          strokeDasharray={`${loss} ${100 - loss}`}
          strokeDashoffset={-win}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">
        {ANALYTICS.winRate.toFixed(0)}%
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  show,
  delay,
}: {
  label: string;
  value: string;
  show: boolean;
  delay: number;
}) {
  return (
    <div
      className="app-surface flex-1 rounded-2xl p-2.5"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0) scale(1)" : "translateY(12px) scale(0.96)",
        transition: `opacity 420ms ease, transform ${EASE}`,
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="text-[10px] text-[#9ca3af]">{label}</div>
      <div className="mt-1 text-sm font-bold">{value}</div>
    </div>
  );
}

const PHASE_RANK: Record<AnalyticsPhase, number> = {
  metrics: 0,
  equity: 1,
  distribution: 2,
  pairs: 3,
};

export function AnalyticsScreen({ phase }: { phase: AnalyticsPhase }) {
  const rank = PHASE_RANK[phase];
  const showMetrics = rank >= 0;
  const showEquity = rank >= 1;
  const showDistribution = rank >= 2;
  const showPairs = rank >= 3;
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const top = rank >= 3 ? el.scrollHeight : rank >= 2 ? 72 : 0;
    el.scrollTo({ top, behavior: "smooth" });
  }, [rank]);

  return (
    <div
      ref={scrollerRef}
      className="flex h-full flex-col overflow-y-auto px-4 pt-4 [scrollbar-width:none]"
      data-phase={phase}
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-bold">Analytics</h3>
        <span className="rounded-lg border border-[#262626] bg-[#171717] px-2.5 py-1.5 text-[11px] font-medium text-[#a3a3a3]">
          Filter
        </span>
      </div>
      <div className="mb-3 flex shrink-0 gap-2">
        <Metric
          label="Net P&L"
          value={`+${ANALYTICS.netPnl.toFixed(2)}`}
          show={showMetrics}
          delay={40}
        />
        <Metric
          label="Win Rate"
          value={`${ANALYTICS.winRate.toFixed(1)}%`}
          show={showMetrics}
          delay={140}
        />
        <Metric
          label="Trades"
          value={`${ANALYTICS.trades}`}
          show={showMetrics}
          delay={240}
        />
      </div>
      <Reveal show={showEquity} delay={60} maxHeight={180}>
        <div className="mb-1 text-[12px] font-semibold">Overall Profit</div>
        <div className="app-surface mb-3 rounded-2xl p-2">
          <EquityChart />
        </div>
      </Reveal>
      <Reveal show={showDistribution} delay={80} maxHeight={220}>
        <div className="mb-1 text-[12px] font-semibold">Win / Loss Distribution</div>
        <div className="app-surface mb-3 rounded-2xl p-2">
          <Donut />
        </div>
      </Reveal>
      <Reveal show={showPairs} delay={40} maxHeight={360}>
        <div className="mb-3 text-[12px] font-semibold">Per Pair</div>
        <div className="space-y-2 pb-4">
          {ANALYTICS.pairs.map((pm, index) => (
            <div
              key={pm.pair}
              className="app-surface rounded-2xl px-3 py-2.5"
              style={{
                opacity: showPairs ? 1 : 0,
                transform: showPairs ? "translateY(0)" : "translateY(10px)",
                transition: `opacity 420ms ease, transform ${EASE}`,
                transitionDelay: `${80 + index * 90}ms`,
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[12px] font-semibold">{pm.pair}</div>
                  <div className="text-[10px] text-[#9ca3af]">
                    {pm.trades} trades • {pm.winRate}% win
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[12px] font-bold app-profit">
                    +{pm.pnl.toFixed(2)}
                  </div>
                  <div className="text-[10px] text-[#9ca3af]">avg +{pm.avg.toFixed(2)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
