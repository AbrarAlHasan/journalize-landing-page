import { Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { Suspense, useMemo } from "react";
import { World } from "./World";

function Effects() {
  const reduceBloom = useMemo(
    () =>
      typeof window !== "undefined" &&
      (window.innerWidth < 768 ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches),
    [],
  );

  if (reduceBloom) return null;

  return (
    <EffectComposer enableNormalPass={false}>
      <Bloom
        intensity={0.85}
        luminanceThreshold={0.18}
        luminanceSmoothing={0.4}
        mipmapBlur
      />
      <Vignette offset={0.18} darkness={0.48} />
    </EffectComposer>
  );
}

export function SceneCanvas() {
  return (
    <div className="scene-canvas pointer-events-none fixed inset-0 z-0">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0.2, 1.05, 7.5], fov: 45, near: 0.1, far: 60 }}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <World />
          <Effects />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
