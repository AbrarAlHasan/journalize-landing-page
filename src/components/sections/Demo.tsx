import { useEffect, useRef, useState } from "react";
import { DEMO_STEPS } from "../../data/demo-steps";
import { clamp01 } from "../../lib/scroll";
import { AppDemo } from "../phone/AppDemo";

export function Demo() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const lastIndex = useRef(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    let frame = 0;
    const tick = () => {
      const el = trackRef.current;
      if (el) {
        const total = el.offsetHeight - window.innerHeight;
        const next = total > 0 ? clamp01(-el.getBoundingClientRect().top / total) : 0;
        const story = clamp01((next - 0.05) / 0.95);
        const nextIndex = Math.min(
          DEMO_STEPS.length - 1,
          Math.floor(story * DEMO_STEPS.length),
        );
        if (nextIndex !== lastIndex.current) {
          setDirection(nextIndex > lastIndex.current ? 1 : -1);
          lastIndex.current = nextIndex;
        }
        setProgress((prev) => (Math.abs(prev - next) > 0.002 ? next : prev));
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const enter = clamp01(progress / 0.05);
  const story = clamp01((progress - 0.05) / 0.95);
  const raw = story * DEMO_STEPS.length;
  const index = Math.min(DEMO_STEPS.length - 1, Math.floor(raw));
  const step = DEMO_STEPS[index];

  return (
    <section id="demo" className="relative z-10">
      <div
        ref={trackRef}
        className="relative"
        style={{ height: `${(DEMO_STEPS.length + 1) * 100}vh` }}
      >
        <div className="sticky top-0 flex min-h-svh items-center overflow-hidden px-5 py-8 md:py-24">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-5 md:grid-cols-[minmax(0,1fr)_auto] md:gap-12">
            <div className="relative order-2 min-h-[150px] md:order-1 md:min-h-[280px]">
              {DEMO_STEPS.map((item, i) => {
                const active = i === index && enter > 0.15;
                return (
                  <div
                    key={item.id}
                    className="absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      opacity: active ? 1 : 0,
                      transform: `translateY(${active ? 0 : i < index ? -18 : 18}px)`,
                    }}
                  >
                    <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
                      {item.kicker}
                    </p>
                    <h2 className="font-display max-w-lg text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                      {item.title}
                    </h2>
                    <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
                      {item.copy}
                    </p>
                  </div>
                );
              })}
            </div>

            <div
              className="order-1 flex justify-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:order-2"
              style={{
                opacity: 0.15 + enter * 0.85,
                transform: `translate3d(0, ${(1 - enter) * 120}px, 0) scale(${0.86 + enter * 0.14})`,
              }}
            >
              <AppDemo
                screen={step.screen}
                journalPhase={step.journalPhase}
                calendarPhase={step.calendarPhase}
                analyticsPhase={step.analyticsPhase}
                direction={direction}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
