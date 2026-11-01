import type { DemoScreen } from "./demo";

export type JournalPhase = "list" | "pnl" | "accounts" | "rules";
export type CalendarPhase = "grid" | "pnl";
export type AnalyticsPhase = "metrics" | "equity" | "distribution" | "pairs";

export interface DemoStep {
  id: string;
  screen: DemoScreen;
  journalPhase: JournalPhase;
  calendarPhase: CalendarPhase;
  analyticsPhase: AnalyticsPhase;
  kicker: string;
  title: string;
  copy: string;
}

export const DEMO_STEPS: DemoStep[] = [
  {
    id: "journal-list",
    screen: "journal",
    journalPhase: "list",
    calendarPhase: "grid",
    analyticsPhase: "metrics",
    kicker: "01 — Journal",
    title: "The journal, built piece by piece.",
    copy: "Each card starts with the pair, direction, and size. A clean list of the trades you took — nothing else yet.",
  },
  {
    id: "journal-pnl",
    screen: "journal",
    journalPhase: "pnl",
    calendarPhase: "grid",
    analyticsPhase: "metrics",
    kicker: "01 — Journal",
    title: "Profit and loss, color-coded.",
    copy: "Green and red mark winners and losers so you can separate profitable trades from losing ones at a glance.",
  },
  {
    id: "journal-accounts",
    screen: "journal",
    journalPhase: "accounts",
    calendarPhase: "grid",
    analyticsPhase: "metrics",
    kicker: "01 — Journal",
    title: "Multiple accounts, one list.",
    copy: "Funded, live, and demo stay labeled on every card. Review each book without mixing the numbers.",
  },
  {
    id: "journal-rules",
    screen: "journal",
    journalPhase: "rules",
    calendarPhase: "grid",
    analyticsPhase: "metrics",
    kicker: "01 — Journal",
    title: "Rules you can actually prove.",
    copy: "Each trade shows the playbook rules you followed. Discipline becomes visible, not assumed.",
  },
  {
    id: "calendar-grid",
    screen: "calendar",
    journalPhase: "rules",
    calendarPhase: "grid",
    analyticsPhase: "metrics",
    kicker: "02 — Calendar",
    title: "A calendar of your sessions.",
    copy: "See the month as dates first. Every session in one grid, before any numbers appear.",
  },
  {
    id: "calendar-pnl",
    screen: "calendar",
    journalPhase: "rules",
    calendarPhase: "pnl",
    analyticsPhase: "metrics",
    kicker: "02 — Calendar",
    title: "Then the days that paid.",
    copy: "Profit and loss color the month so winning and losing days stand out immediately.",
  },
  {
    id: "analytics-metrics",
    screen: "analytics",
    journalPhase: "rules",
    calendarPhase: "pnl",
    analyticsPhase: "metrics",
    kicker: "03 — Analytics",
    title: "The numbers that matter first.",
    copy: "Net P&L, win rate, and trade count land as three tiles — the whole journal in a glance.",
  },
  {
    id: "analytics-equity",
    screen: "analytics",
    journalPhase: "rules",
    calendarPhase: "pnl",
    analyticsPhase: "equity",
    kicker: "03 — Analytics",
    title: "Then the equity curve.",
    copy: "Watch the account move trade by trade. The curve is computed on your phone, not in the cloud.",
  },
  {
    id: "analytics-distribution",
    screen: "analytics",
    journalPhase: "rules",
    calendarPhase: "pnl",
    analyticsPhase: "distribution",
    kicker: "03 — Analytics",
    title: "Winners versus losers.",
    copy: "The distribution shows how often you were right — not just how much you made.",
  },
  {
    id: "analytics-pairs",
    screen: "analytics",
    journalPhase: "rules",
    calendarPhase: "pnl",
    analyticsPhase: "pairs",
    kicker: "03 — Analytics",
    title: "Which pairs actually pay.",
    copy: "Break the journal down by instrument so you can see where the edge lives.",
  },
];
