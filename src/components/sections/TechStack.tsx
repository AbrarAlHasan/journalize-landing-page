import { motion } from "framer-motion";

const STACK = [
  { name: "Expo", role: "Framework", slug: "expo", color: "FFFFFF" },
  { name: "React Native", role: "iOS & Android", slug: "react", color: "61DAFB" },
  { name: "TypeScript", role: "Language", slug: "typescript", color: "3178C6" },
  { name: "SQLite", role: "Local database", slug: "sqlite", color: "54A4DE" },
  { name: "Tailwind", role: "UI", slug: "tailwindcss", color: "06B6D4" },
  { name: "Zustand", role: "State", slug: null, color: "8B5CF6" },
  { name: "Google Drive", role: "Backup", slug: "googledrive", color: "4285F4" },
] as const;

function Logo({
  slug,
  color,
  name,
}: {
  slug: string | null;
  color: string;
  name: string;
}) {
  if (!slug) {
    return (
      <div
        className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold"
        style={{ backgroundColor: `#${color}22`, color: `#${color}` }}
      >
        {name.slice(0, 1)}
      </div>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/${color}`}
      alt=""
      width={40}
      height={40}
      className="h-10 w-10 object-contain"
    />
  );
}

export function TechStack() {
  return (
    <section id="stack" className="relative z-10 px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-3 text-[11px] font-medium tracking-[0.28em] text-primary uppercase">
            Tech stack
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Built on a local-first stack.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Expo and React Native on the device. SQLite for the journal. No
            server in the middle.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
          {STACK.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-[#07080c]/62 px-4 py-5 text-center backdrop-blur-xl"
            >
              <Logo slug={item.slug} color={item.color} name={item.name} />
              <div>
                <div className="text-sm font-semibold text-white">{item.name}</div>
                <div className="mt-0.5 text-[11px] text-muted">{item.role}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
