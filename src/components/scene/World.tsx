import { Float } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { lerp, range, scrollState } from "../../lib/scroll";

function CameraRig() {
  const { camera } = useThree();
  const look = useMemo(() => new THREE.Vector3(), []);
  const targetPos = useMemo(() => new THREE.Vector3(), []);
  const targetLook = useMemo(() => new THREE.Vector3(), []);

  const positions = useMemo(
    () => [
      new THREE.Vector3(0.2, 1.05, 7.5),
      new THREE.Vector3(6.4, 2.9, 9.2),
      new THREE.Vector3(-4.6, 1.7, 6.1),
      new THREE.Vector3(2.15, 0.55, 4.5),
      new THREE.Vector3(-0.35, 7.4, 6.6),
      new THREE.Vector3(0.0, 2.35, 13.4),
    ],
    [],
  );

  const looks = useMemo(
    () => [
      new THREE.Vector3(0, 0.32, 0),
      new THREE.Vector3(0, 0.08, 0),
      new THREE.Vector3(0.55, 0.04, -0.7),
      new THREE.Vector3(0, 0.04, 0),
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0.28, 0),
    ],
    [],
  );

  useFrame((_, dt) => {
    const p = scrollState.progress;
    const eased = p * p * (3 - 2 * p);
    const segments = positions.length - 1;
    const f = eased * segments;
    const i = Math.min(segments - 1, Math.floor(f));
    const t = f - i;
    const s = t * t * (3 - 2 * t);
    targetPos.lerpVectors(positions[i], positions[i + 1], s);
    targetLook.lerpVectors(looks[i], looks[i + 1], s);
    const k = 1 - Math.exp(-3.4 * dt);
    camera.position.lerp(targetPos, k);
    look.lerp(targetLook, k);
    camera.lookAt(look);
  });

  return null;
}

function Mind() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const p = scrollState.progress;
    const mesh = ref.current;
    if (!mesh) return;
    const s = lerp(2.05, 8.2, range(p, 0.04, 0.58));
    mesh.scale.setScalar(s);
    mesh.rotation.y = state.clock.elapsedTime * 0.07 + p * 1.35;
    mesh.rotation.x = 0.28 + Math.sin(state.clock.elapsedTime * 0.22) * 0.06;
    const mat = mesh.material as THREE.MeshBasicMaterial;
    mat.opacity = lerp(0.5, 0.05, range(p, 0.18, 0.72));
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color="#60a5fa" wireframe transparent opacity={0.48} />
    </mesh>
  );
}

function Candles() {
  const count = 52;
  const bodyRef = useRef<THREE.InstancedMesh>(null);
  const wickRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const color = useMemo(() => new THREE.Color(), []);

  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        gold: Math.sin(i * 2.17) > 0,
        h: 0.28 + ((i * 17) % 13) * 0.085,
        a: (i / count) * Math.PI * 2,
        r: 2.15 + (i % 8) * 0.4,
        phase: i * 0.41,
      })),
    [],
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = scrollState.progress;
    const explode = range(p, 0.02, 0.42);
    const rise = 0.55 + range(p, 0.0, 0.22) * 0.45;
    const body = bodyRef.current;
    const wick = wickRef.current;
    if (!body || !wick) return;

    items.forEach((item, i) => {
      const radius = lerp(0.85, item.r + explode * 2.8, 0.28 + explode * 0.72);
      const spin = item.a + p * 1.4 + t * 0.035;
      dummy.position.set(
        Math.cos(spin) * radius,
        item.h * 0.5 * rise + Math.sin(t * 0.5 + item.phase) * 0.07,
        Math.sin(spin) * radius,
      );
      dummy.scale.set(1, Math.max(0.001, rise * item.h), 1);
      dummy.updateMatrix();
      body.setMatrixAt(i, dummy.matrix);
      color.set(item.gold ? "#4ade80" : "#f87171");
      body.setColorAt(i, color);

      dummy.position.y += item.h * 0.55 * rise + 0.1;
      dummy.scale.set(1, Math.max(0.001, rise * 0.28), 1);
      dummy.updateMatrix();
      wick.setMatrixAt(i, dummy.matrix);
    });

    body.instanceMatrix.needsUpdate = true;
    wick.instanceMatrix.needsUpdate = true;
    if (body.instanceColor) body.instanceColor.needsUpdate = true;
  });

  return (
    <group>
      <instancedMesh ref={bodyRef} args={[undefined, undefined, count]}>
        <boxGeometry args={[0.15, 1, 0.15]} />
        <meshStandardMaterial
          metalness={0.4}
          roughness={0.22}
          emissive="#0a0a0a"
          emissiveIntensity={0.55}
        />
      </instancedMesh>
      <instancedMesh ref={wickRef} args={[undefined, undefined, count]}>
        <boxGeometry args={[0.035, 1, 0.035]} />
        <meshStandardMaterial color="#e5e5e5" metalness={0.2} roughness={0.4} />
      </instancedMesh>
    </group>
  );
}

function Dust() {
  const count = 1600;
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 3.5 + Math.random() * 16;
      const angle = Math.random() * Math.PI * 2;
      arr[i * 3] = Math.cos(angle) * radius;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 11;
      arr[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y =
      state.clock.elapsedTime * 0.014 + scrollState.progress * 0.7;
    ref.current.rotation.x = scrollState.progress * 0.18;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.032}
        color="#93c5fd"
        transparent
        opacity={0.58}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function JournalBook() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    const p = scrollState.progress;
    const vis = range(p, 0.12, 0.28) * (1 - range(p, 0.48, 0.66));
    if (!group.current) return;
    group.current.visible = vis > 0.02;
    group.current.position.y = lerp(-0.15, 0.35, vis);
    group.current.rotation.y = -0.35 + p * 1.1 + Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
    group.current.scale.setScalar(lerp(0.7, 1.05, vis));
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.25}>
        <mesh position={[-0.42, 0, 0]} rotation={[0, 0.55, 0]}>
          <boxGeometry args={[0.95, 1.28, 0.045]} />
          <meshStandardMaterial
            color="#171717"
            metalness={0.55}
            roughness={0.28}
            emissive="#1d4ed8"
            emissiveIntensity={0.18}
          />
        </mesh>
        <mesh position={[0.42, 0, 0]} rotation={[0, -0.55, 0]}>
          <boxGeometry args={[0.95, 1.28, 0.045]} />
          <meshStandardMaterial
            color="#262626"
            metalness={0.5}
            roughness={0.3}
            emissive="#14532d"
            emissiveIntensity={0.16}
          />
        </mesh>
        <mesh>
          <boxGeometry args={[0.12, 1.3, 0.16]} />
          <meshStandardMaterial color="#60a5fa" metalness={0.7} roughness={0.2} />
        </mesh>
      </Float>
    </group>
  );
}

function HaloRings() {
  const outer = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const p = scrollState.progress;
    const t = state.clock.elapsedTime;
    if (outer.current) {
      outer.current.rotation.x = Math.PI / 2.4 + p * 0.4;
      outer.current.rotation.z = t * 0.08;
      outer.current.scale.setScalar(lerp(1.15, 2.4, range(p, 0, 0.85)));
    }
    if (inner.current) {
      inner.current.rotation.x = Math.PI / 2.1;
      inner.current.rotation.z = -t * 0.12;
      inner.current.scale.setScalar(lerp(0.7, 1.6, range(p, 0.1, 0.9)));
    }
  });

  return (
    <>
      <mesh ref={outer}>
        <torusGeometry args={[3.1, 0.012, 12, 120]} />
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.45} />
      </mesh>
      <mesh ref={inner}>
        <torusGeometry args={[2.1, 0.008, 12, 80]} />
        <meshBasicMaterial color="#4ade80" transparent opacity={0.28} />
      </mesh>
    </>
  );
}

function OrbitLights() {
  const a = useRef<THREE.PointLight>(null);
  const b = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = scrollState.progress;
    if (a.current) {
      a.current.position.set(Math.cos(t * 0.35) * 6, 2 + Math.sin(t * 0.4) * 1.5, Math.sin(t * 0.35) * 6);
      a.current.intensity = lerp(18, 42, range(p, 0.7, 1));
    }
    if (b.current) {
      b.current.position.set(Math.cos(t * 0.28 + 2) * 5, 1.2, Math.sin(t * 0.28 + 2) * 5);
    }
  });

  return (
    <>
      <pointLight ref={a} color="#60a5fa" distance={22} intensity={22} />
      <pointLight ref={b} color="#4ade80" distance={16} intensity={14} />
      <pointLight position={[3, -1.5, 5]} color="#f87171" distance={14} intensity={10} />
    </>
  );
}

export function World() {
  return (
    <>
      <color attach="background" args={["#050508"]} />
      <fog attach="fog" args={["#050508", 7, 26]} />
      <ambientLight intensity={0.22} />
      <directionalLight position={[3, 8, 5]} intensity={0.75} color="#dbeafe" />
      <OrbitLights />
      <CameraRig />
      <Mind />
      <Candles />
      <Dust />
      <JournalBook />
      <HaloRings />
      <gridHelper
        args={[48, 48, "#12203a", "#0b1220"]}
        position={[0, -2.35, 0]}
      />
    </>
  );
}
