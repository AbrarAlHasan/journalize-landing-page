import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Logo } from "./Logo";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-svh bg-ink text-text">
      <header className="sticky top-0 z-30 border-b border-white/8 bg-[#050508]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <Logo />
          <Link
            to="/"
            className="text-sm font-medium text-muted transition-colors hover:text-white"
          >
            Back to home
          </Link>
        </div>
      </header>
      <main className="relative z-10 mx-auto max-w-3xl px-5 py-16">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
          Journalize
        </p>
        <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-faint">Last updated {updated}</p>
        <div className="legal-body mt-10">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
