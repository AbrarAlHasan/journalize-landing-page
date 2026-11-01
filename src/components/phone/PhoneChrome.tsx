import type { ReactNode } from "react";
import type { DemoScreen } from "../../data/demo";
import { NAV_ITEMS } from "../../data/demo";

function StatusBar() {
  return (
    <div className="relative z-10 flex items-center justify-between px-6 pt-3 text-[10px] font-medium text-white/80">
      <span>9:41</span>
      <div className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
      <div className="flex items-center gap-1">
        <span className="inline-block h-1.5 w-3 rounded-sm bg-white/80" />
        <span className="inline-block h-2 w-3.5 rounded-[2px] border border-white/70">
          <span className="ml-[1px] mt-[1px] block h-1.5 w-2 rounded-[1px] bg-profit" />
        </span>
      </div>
    </div>
  );
}

function TabBar({ active }: { active: DemoScreen }) {
  return (
    <div className="border-t border-[#262626] bg-[#171717] px-1 pb-3 pt-1">
      <div className="flex">
        {NAV_ITEMS.map((item) => {
          const isActive = item.id === active;
          return (
            <div
              key={item.id}
              className="flex flex-1 flex-col items-center gap-1 py-1.5"
            >
              <span
                className={`h-1 w-4 rounded-full ${isActive ? "bg-[#60a5fa]" : "bg-transparent"}`}
              />
              <span
                className={`text-[10px] font-medium ${isActive ? "text-[#60a5fa]" : "text-[#737373]"}`}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mx-auto mt-1 h-1 w-24 rounded-full bg-white/20" />
    </div>
  );
}

export function PhoneChrome({
  active,
  children,
}: {
  active: DemoScreen;
  children: ReactNode;
}) {
  return (
    <div className="pointer-events-none relative mx-auto w-[248px] shrink-0 select-none sm:w-[280px] lg:w-[320px]">
      <div className="absolute -inset-8 rounded-[3rem] bg-primary/15 blur-3xl" />
      <div
        className="relative overflow-hidden rounded-[2.4rem] p-[10px]"
        style={{
          background:
            "linear-gradient(160deg, #3f3f46 0%, #18181b 42%, #09090b 100%)",
          boxShadow:
            "0 40px 90px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.12)",
        }}
      >
        <div className="app-screen flex h-[min(480px,calc(100svh-16rem))] flex-col overflow-hidden rounded-[1.9rem] sm:h-[min(540px,calc(100svh-12rem))] lg:h-[min(580px,calc(100svh-10rem))]">
          <StatusBar />
          <div className="relative min-h-0 flex-1 overflow-hidden">{children}</div>
          <TabBar active={active} />
        </div>
      </div>
    </div>
  );
}
