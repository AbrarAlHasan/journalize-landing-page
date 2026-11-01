import { motion } from "framer-motion";
import { FEATURES } from "../../data/demo";

export function Features() {
  return (
    <section id="features" className="relative z-10 px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
            Features
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
            Powerful features, zero clutter.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Designed for traders who want a clear record of their work without
            spreadsheets, logins, or handing their data to anyone.
          </p>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-2">
          {FEATURES.map((feature, index) => (
            <motion.article
              key={feature.kicker}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.06 }}
              className="group rounded-3xl border border-white/10 bg-[#07080c]/62 p-7 backdrop-blur-xl transition hover:border-primary/40 hover:bg-[#07080c]/78"
            >
              <div className="mb-6 font-mono text-xs text-primary">{feature.kicker}</div>
              <h3 className="font-display text-2xl font-bold tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                {feature.copy}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
