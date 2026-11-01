export type DemoScreen =
  | "journal"
  | "calendar"
  | "accounts"
  | "analytics"
  | "settings";

export const NAV_ITEMS: { id: DemoScreen; label: string }[] = [
  { id: "journal", label: "Journal" },
  { id: "calendar", label: "Calendar" },
  { id: "accounts", label: "Accounts" },
  { id: "analytics", label: "Analytics" },
  { id: "settings", label: "Settings" },
];

export interface DemoTrade {
  id: string;
  pair: string;
  direction: "long" | "short";
  account: string;
  date: string;
  lotSize: number;
  strategy: string;
  rulesPassed: number;
  rulesTotal: number;
  pnl: number;
  entry: string;
  exit: string;
}

export const DEMO_TRADES: DemoTrade[] = [
  {
    id: "1",
    pair: "XAUUSD",
    direction: "long",
    account: "Funded",
    date: "Oct 31",
    lotSize: 0.5,
    strategy: "London Breakout",
    rulesPassed: 4,
    rulesTotal: 4,
    pnl: 420.5,
    entry: "2654.20",
    exit: "2668.40",
  },
  {
    id: "2",
    pair: "EURUSD",
    direction: "short",
    account: "Live",
    date: "Oct 30",
    lotSize: 1.0,
    strategy: "Session Fade",
    rulesPassed: 2,
    rulesTotal: 4,
    pnl: -85.2,
    entry: "1.0862",
    exit: "1.0891",
  },
  {
    id: "3",
    pair: "GBPUSD",
    direction: "long",
    account: "Funded",
    date: "Oct 29",
    lotSize: 0.8,
    strategy: "London Breakout",
    rulesPassed: 3,
    rulesTotal: 4,
    pnl: 156.0,
    entry: "1.3012",
    exit: "1.3058",
  },
  {
    id: "4",
    pair: "USDJPY",
    direction: "short",
    account: "Live",
    date: "Oct 28",
    lotSize: 1.2,
    strategy: "Session Fade",
    rulesPassed: 4,
    rulesTotal: 4,
    pnl: 92.4,
    entry: "153.80",
    exit: "153.12",
  },
  {
    id: "5",
    pair: "NAS100",
    direction: "long",
    account: "Funded",
    date: "Oct 27",
    lotSize: 0.3,
    strategy: "London Breakout",
    rulesPassed: 1,
    rulesTotal: 4,
    pnl: -210.0,
    entry: "20440",
    exit: "20315",
  },
];

export interface DayPnl {
  day: number;
  trades: number;
  pnl: number;
}

export const NOVEMBER_2026: DayPnl[] = [
  { day: 2, trades: 2, pnl: 186 },
  { day: 3, trades: 1, pnl: -42 },
  { day: 4, trades: 3, pnl: 310 },
  { day: 6, trades: 1, pnl: 88 },
  { day: 7, trades: 2, pnl: -120 },
  { day: 10, trades: 1, pnl: 64 },
  { day: 11, trades: 2, pnl: 214 },
  { day: 13, trades: 1, pnl: -76 },
  { day: 14, trades: 3, pnl: 402 },
  { day: 17, trades: 1, pnl: 95 },
  { day: 18, trades: 2, pnl: -58 },
  { day: 20, trades: 1, pnl: 140 },
  { day: 21, trades: 2, pnl: 268 },
  { day: 24, trades: 1, pnl: -33 },
  { day: 25, trades: 2, pnl: 176 },
  { day: 27, trades: 1, pnl: 52 },
  { day: 28, trades: 2, pnl: 221 },
];

export const DEMO_ACCOUNTS = [
  {
    name: "Funded Challenge",
    broker: "FTMO",
    currency: "USD",
    startingBalance: 50000,
    type: "funded",
    pnl: 1247.8,
    pnlPct: 2.5,
  },
  {
    name: "Personal Live",
    broker: "IC Markets",
    currency: "USD",
    startingBalance: 10000,
    type: "live",
    pnl: 890.2,
    pnlPct: 8.9,
  },
  {
    name: "Demo Swing",
    broker: "Pepperstone",
    currency: "USD",
    startingBalance: 25000,
    type: "demo",
    pnl: -120.0,
    pnlPct: -0.5,
  },
];

export const ANALYTICS = {
  netPnl: 1843.7,
  winRate: 68.4,
  trades: 38,
  profitFactor: 2.14,
  avgWin: 164.2,
  avgLoss: 91.8,
  largestWin: 420.5,
  largestLoss: 210.0,
  longPnl: 1320.4,
  shortPnl: 523.3,
  longWinRate: 71,
  shortWinRate: 63,
  wins: 26,
  losses: 10,
  be: 2,
  equity: [
    0, 80, 160, 90, 210, 188, 320, 280, 430, 400, 540, 490, 640, 720, 690, 840,
    910, 1120, 1060, 1280, 1410, 1560, 1490, 1710, 1844,
  ],
  pairs: [
    { pair: "XAUUSD", trades: 12, winRate: 75, pnl: 980.4, avg: 81.7 },
    { pair: "EURUSD", trades: 9, winRate: 66, pnl: 214.1, avg: 23.8 },
    { pair: "GBPUSD", trades: 8, winRate: 62, pnl: 312.0, avg: 39.0 },
    { pair: "USDJPY", trades: 6, winRate: 83, pnl: 337.2, avg: 56.2 },
  ],
};

export const FEATURES = [
  {
    kicker: "01",
    title: "Import from MetaTrader",
    copy: "Share a ticket screenshot, upload it in Add Trade, or paste the image. Pair, direction, lots, and prices fill in on your device so you review instead of retype.",
  },
  {
    kicker: "02",
    title: "Works 100% offline",
    copy: "No account, no internet, no waiting. Your journal lives on your phone and is ready the instant you open the app.",
  },
  {
    kicker: "03",
    title: "Every account type",
    copy: "Funded, live, and demo stay on their own books. Starting balances and P&L stay honest across brokers.",
  },
  {
    kicker: "04",
    title: "Strategy rules you can prove",
    copy: "Attach a playbook and tick only the rules you followed. Discipline becomes a number, not a feeling.",
  },
  {
    kicker: "05",
    title: "Calendar of profit and loss",
    copy: "See the month as green and red days. Open a date and the trades for that session are waiting underneath.",
  },
  {
    kicker: "06",
    title: "Analytics on your device",
    copy: "Equity curve, win rate, profit factor, and per-pair breakdowns — computed on the phone, never in the cloud.",
  },
  {
    kicker: "07",
    title: "Optional cloud backup",
    copy: "Stay local-first by default, or send a hidden copy to Google Drive so you never lose a journal.",
  },
];
