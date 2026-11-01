import { useEffect } from "react";
import Lenis from "lenis";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { ScrollProgress } from "../components/ScrollProgress";
import { SceneCanvas } from "../components/scene/SceneCanvas";
import { CTA } from "../components/sections/CTA";
import { Demo } from "../components/sections/Demo";
import { Features } from "../components/sections/Features";
import { Hero } from "../components/sections/Hero";
import { HowItWorks } from "../components/sections/HowItWorks";
import { TechStack } from "../components/sections/TechStack";
import { scrollState } from "../lib/scroll";

export function HomePage() {
  useEffect(() => {
    document.title = "Journalize — Private Offline Trading Journal";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = new Lenis({
      lerp: reduce ? 1 : 0.075,
      smoothWheel: !reduce,
      anchors: true,
    });

    const onScroll = ({
      scroll,
      limit,
      velocity,
    }: {
      scroll: number;
      limit: number;
      velocity: number;
    }) => {
      scrollState.progress = limit > 0 ? scroll / limit : 0;
      scrollState.velocity = velocity;
    };

    lenis.on("scroll", onScroll);

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.off("scroll", onScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <SceneCanvas />
      <div className="scene-veil" />
      <div className="grain" />
      <ScrollProgress />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Features />
        <Demo />
        <HowItWorks />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
