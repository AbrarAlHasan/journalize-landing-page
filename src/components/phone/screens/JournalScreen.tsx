import type { JournalPhase } from "../../../data/demo-steps";
import { DEMO_TRADES } from "../../../data/demo";

function TradeCard({
  trade,
  phase,
  index,
}: {
  trade: (typeof DEMO_TRADES)[number];
  phase: JournalPhase;
  index: number;
}) {
  const isProfit = trade.pnl > 0;
  const pct = Math.round((trade.rulesPassed / trade.rulesTotal) * 100);
  const ruleColor =
    pct > 90 ? "text-[#4ade80]" : pct >= 50 ? "text-orange-400" : "text-[#f87171]";
  const showPnl = phase !== "list";
  const showAccounts = phase === "accounts" || phase === "rules";
  const showRules = phase === "rules";
  const delay = `${80 + index * 70}ms`;

  return (
    <article
      className="app-surface mb-2.5 rounded-2xl p-3"
      style={{
        borderLeftWidth: 4,
        borderLeftColor: showPnl ? (isProfit ? "#22c55e" : "#ef4444") : "transparent",
        transition: "border-color 520ms cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: delay,
      }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[13px] font-semibold">{trade.pair}</span>
            <span
              className={`rounded-full px-1.5 py-0.5 text-[10px] font-medium capitalize ${
                trade.direction === "long"
                  ? "app-profit-bg app-profit"
                  : "app-loss-bg app-loss"
              }`}
            >
              {trade.direction}
            </span>
            <span
              data-reveal="account"
              className="overflow-hidden rounded-full border border-[#262626] px-1.5 py-0.5 text-[10px] text-[#9ca3af]"
              style={{
                maxWidth: showAccounts ? 72 : 0,
                opacity: showAccounts ? 1 : 0,
                paddingLeft: showAccounts ? 6 : 0,
                paddingRight: showAccounts ? 6 : 0,
                borderWidth: showAccounts ? 1 : 0,
                transform: showAccounts ? "translateY(0)" : "translateY(6px)",
                transition:
                  "max-width 480ms cubic-bezier(0.16, 1, 0.3, 1), opacity 420ms ease, transform 480ms cubic-bezier(0.16, 1, 0.3, 1), padding 480ms ease, border-width 480ms ease",
                transitionDelay: delay,
              }}
            >
              {trade.account}
            </span>
          </div>
          <div className="mt-1 flex gap-2.5 text-[10px] text-[#9ca3af]">
            <span>{trade.date}</span>
            <span>{trade.lotSize} lot</span>
          </div>
          <div
            data-reveal="rules"
            className="flex items-center gap-1.5"
            style={{
              maxHeight: showRules ? 22 : 0,
              marginTop: showRules ? 6 : 0,
              opacity: showRules ? 1 : 0,
              transform: showRules ? "translateY(0)" : "translateY(8px)",
              overflow: "hidden",
              transition:
                "max-height 480ms cubic-bezier(0.16, 1, 0.3, 1), opacity 420ms ease, transform 480ms cubic-bezier(0.16, 1, 0.3, 1), margin-top 480ms ease",
              transitionDelay: delay,
            }}
          >
            <span className="text-[10px] font-medium text-[#60a5fa]">
              {trade.strategy}
            </span>
            <span className={`text-[10px] font-medium ${ruleColor}`}>
              {trade.rulesPassed}/{trade.rulesTotal} rules ({pct}%)
            </span>
          </div>
        </div>
        <div
          data-reveal="pnl"
          className="text-right"
          style={{
            opacity: showPnl ? 1 : 0,
            transform: showPnl ? "translateX(0)" : "translateX(14px)",
            maxWidth: showPnl ? 88 : 0,
            overflow: "hidden",
            transition:
              "opacity 480ms ease, transform 520ms cubic-bezier(0.16, 1, 0.3, 1), max-width 520ms cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: delay,
          }}
        >
          <div className={`text-[13px] font-bold ${isProfit ? "app-profit" : "app-loss"}`}>
            {isProfit ? "+" : ""}
            {trade.pnl.toFixed(2)}
          </div>
          <div className="mt-0.5 whitespace-nowrap text-[10px] text-[#9ca3af]">
            {trade.entry} → {trade.exit}
          </div>
        </div>
      </div>
    </article>
  );
}

export function JournalScreen({ phase }: { phase: JournalPhase }) {
  return (
    <div className="flex h-full flex-col px-4 pt-4" data-phase={phase}>
      <div className="mb-3 flex items-center justify-between gap-2">
        <h3 className="text-lg font-bold">Journal</h3>
        <div className="flex shrink-0 gap-1">
          <span className="rounded-lg border border-[#262626] bg-[#171717] px-1.5 py-1 text-[9px] font-medium text-[#a3a3a3]">
            Import
          </span>
          <span className="rounded-lg bg-[#2563eb] px-1.5 py-1 text-[9px] font-medium text-white">
            + Trade
          </span>
        </div>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto pr-0.5 [scrollbar-width:none]">
        {DEMO_TRADES.map((trade, index) => (
          <TradeCard key={trade.id} trade={trade} phase={phase} index={index} />
        ))}
      </div>
    </div>
  );
}
