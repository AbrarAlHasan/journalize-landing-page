import type { ReactNode } from "react";
import type { DemoScreen } from "../../data/demo";
import type { AnalyticsPhase, CalendarPhase, JournalPhase } from "../../data/demo-steps";
import { PhoneChrome } from "./PhoneChrome";
import { AnalyticsScreen } from "./screens/AnalyticsScreen";
import { CalendarScreen } from "./screens/CalendarScreen";
import { JournalScreen } from "./screens/JournalScreen";

function ScreenLayer({
  active,
  direction,
  children,
}: {
  active: boolean;
  direction: 1 | -1;
  children: ReactNode;
}) {
  return (
    <div
      className="absolute inset-0 overflow-hidden transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        opacity: active ? 1 : 0,
        transform: `translateY(${active ? 0 : direction > 0 ? 28 : -28}px)`,
        pointerEvents: active ? "auto" : "none",
      }}
    >
      {children}
    </div>
  );
}

export function AppDemo({
  screen,
  journalPhase,
  calendarPhase,
  analyticsPhase,
  direction,
}: {
  screen: DemoScreen;
  journalPhase: JournalPhase;
  calendarPhase: CalendarPhase;
  analyticsPhase: AnalyticsPhase;
  direction: 1 | -1;
}) {
  return (
    <PhoneChrome active={screen}>
      <ScreenLayer active={screen === "journal"} direction={direction}>
        <JournalScreen phase={journalPhase} />
      </ScreenLayer>
      <ScreenLayer active={screen === "calendar"} direction={direction}>
        <CalendarScreen revealPnl={calendarPhase === "pnl"} />
      </ScreenLayer>
      <ScreenLayer active={screen === "analytics"} direction={direction}>
        <AnalyticsScreen phase={analyticsPhase} />
      </ScreenLayer>
    </PhoneChrome>
  );
}
