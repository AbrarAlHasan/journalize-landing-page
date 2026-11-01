import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8 bg-[#050508]/35 px-5 py-10 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Logo />
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <Link to="/privacy" className="transition-colors hover:text-white">
            Privacy Policy
          </Link>
          <Link to="/terms" className="transition-colors hover:text-white">
            Terms of Service
          </Link>
        </div>
        <p className="font-mono text-[11px] text-faint">
          Private, offline-first trading journal. © 2026 Journalize
        </p>
      </div>
    </footer>
  );
}
