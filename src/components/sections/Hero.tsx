import { motion } from "framer-motion";
import { StoreButtons } from "../StoreButtons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 flex min-h-[100svh] items-center px-5 pt-24 pb-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70"
        >
          Live on Google Play · App Store coming soon
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-display max-w-4xl text-5xl leading-[1.08] font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Take control of your trading journal.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
        >
          Journalize is the private, offline-first journal for traders. Import a
          MetaTrader screenshot, keep every account in one place, and review
          profit and loss on your device — not in a spreadsheet.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10"
        >
          <StoreButtons />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-16 text-[11px] font-medium tracking-[0.2em] text-faint uppercase"
        >
          Scroll to preview the app
        </motion.div>
      </div>
    </section>
  );
}
