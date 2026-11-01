import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Logo } from "./Logo";

export function Nav() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setSolid(value > 24);
  });

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-30 transition-colors ${
        solid
          ? "bg-[#050508]/70 backdrop-blur-xl"
          : "bg-[#050508]/25 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          <a href="#features" className="transition-colors hover:text-white">
            Features
          </a>
          <a href="#demo" className="transition-colors hover:text-white">
            Preview
          </a>
          <a href="#method" className="transition-colors hover:text-white">
            How it works
          </a>
          <a href="#stack" className="transition-colors hover:text-white">
            Tech
          </a>
        </nav>
        <a
          href="#download"
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-primary hover:text-white"
        >
          Get the app
        </a>
      </div>
    </motion.header>
  );
}
