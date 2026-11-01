import { DEMO_ACCOUNTS } from "../../../data/demo";

export function AccountsScreen() {
  return (
    <div className="flex h-full flex-col px-4 pt-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-bold">Accounts</h3>
        <span className="rounded-lg bg-[#2563eb] px-2.5 py-1.5 text-[11px] font-medium text-white">
          + Account
        </span>
      </div>
      <div className="min-h-0 flex-1 space-y-2.5 overflow-y-auto [scrollbar-width:none]">
        {DEMO_ACCOUNTS.map((account) => {
          const isProfit = account.pnl >= 0;
          return (
            <article key={account.name} className="app-surface rounded-2xl p-3.5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-[13px] font-semibold">{account.name}</div>
                  <div className="mt-0.5 text-[12px] text-[#a3a3a3]">
                    {account.broker}
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={`text-[12px] font-semibold ${isProfit ? "app-profit" : "app-loss"}`}
                  >
                    {isProfit ? "+" : ""}
                    {account.pnl.toFixed(2)} {account.currency}
                  </div>
                  <div
                    className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${
                      isProfit ? "app-profit-bg app-profit" : "app-loss-bg app-loss"
                    }`}
                  >
                    {isProfit ? "+" : ""}
                    {account.pnlPct.toFixed(1)}%
                  </div>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2 text-[10px] text-[#9ca3af]">
                <span>
                  {account.currency} {account.startingBalance.toLocaleString()}
                </span>
                <span className="rounded-full bg-[#0a0a0a] px-2 py-0.5 capitalize">
                  {account.type}
                </span>
              </div>
              <div className="mt-3 flex justify-end gap-1.5 border-t border-[#262626] pt-2.5">
                <span className="rounded-lg border border-[#262626] bg-[#0a0a0a] px-2 py-1 text-[10px] text-[#a3a3a3]">
                  Edit
                </span>
                <span className="rounded-lg px-2 py-1 text-[10px] text-[#a3a3a3]">
                  Archive
                </span>
                <span className="rounded-lg px-2 py-1 text-[10px] text-[#f87171]">
                  Delete
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
