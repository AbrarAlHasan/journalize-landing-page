import { motion } from "framer-motion";

const steps = [
  {
    title: "Import or log a trade",
    copy: "Share a MetaTrader screenshot, upload it, or enter the ticket by hand. Adding a trade takes seconds, not a chore.",
  },
  {
    title: "Mark the rules you followed",
    copy: "Attach a strategy and tick only what you actually did. Honesty is built into every card.",
  },
  {
    title: "Review the month",
    copy: "The calendar colors the days. Analytics draws the curve. You see the record, not the memory.",
  },
];

export function HowItWorks() {
  return (
    <section id="method" className="relative z-10 px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-16"
        >
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
            How it works
          </p>
          <h2 className="font-display max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
            Three steps to a clearer journal.
          </h2>
        </motion.div>
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.7 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#07080c]/62 p-6 backdrop-blur-xl"
            >
              <div className="font-display text-5xl font-extrabold text-white/10">
                {index + 1}
              </div>
              <h3 className="mt-6 font-display text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
