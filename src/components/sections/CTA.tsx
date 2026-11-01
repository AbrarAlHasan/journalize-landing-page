import { motion } from "framer-motion";
import { StoreButtons } from "../StoreButtons";

export function CTA() {
  return (
    <section id="download" className="relative z-10 px-5 py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9 }}
        className="mx-auto max-w-5xl overflow-hidden rounded-[2.4rem] border border-white/15 bg-[#070b14]/88 px-8 py-16 text-center shadow-[0_0_80px_rgba(37,99,235,0.12)] backdrop-blur-2xl sm:px-16"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
          Download
        </p>
        <h2 className="font-display mx-auto mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
          Start journaling with more discipline.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted">
          It&apos;s private, it works offline, and it&apos;s ready the second you
          open it. Download Journalize and keep a clear record of every trade.
        </p>
        <div className="mt-10">
          <StoreButtons align="center" />
        </div>
      </motion.div>
    </section>
  );
}
