import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  ScrollControls,
  Scroll,
  useScroll,
  Stars,
  Sparkles,
  Float,
  Torus,
  Icosahedron,
  Sphere,
  Ring,
  Line,
} from "@react-three/drei";
import { EffectComposer, Bloom, Vignette, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

const GOLD = new THREE.Color("#e7c277");
const DEEP = new THREE.Color("#0a0a14");

/* ---------- Camera rig that flies through the whole universe ---------- */
function CameraRig() {
  const scroll = useScroll();
  const { camera } = useThree();
  useFrame(() => {
    const t = scroll.offset; // 0..1 across the whole journey
    // Curated keyframes through the worlds (x, y, z)
    const path: [number, number, number][] = [
      [0, 0, 14],     // 0  approaching origin core
      [0, 0, 4],      // 1  entering portal
      [0, 0, -6],     // 2  through wormhole
      [10, 2, -18],   // 3  tech galaxy fly-by
      [-6, 4, -34],   // 4  infinite timeline
      [0, 0, -52],    // 5  innovation museum
      [4, -2, -70],   // 6  neural nexus
      [0, 0, -88],    // 7  command center
    ];
    const n = path.length - 1;
    const f = Math.min(t * n, n - 0.0001);
    const i = Math.floor(f);
    const k = f - i;
    const a = path[i];
    const b = path[i + 1];
    camera.position.set(
      THREE.MathUtils.lerp(a[0], b[0], k),
      THREE.MathUtils.lerp(a[1], b[1], k),
      THREE.MathUtils.lerp(a[2], b[2], k),
    );
    // Look slightly ahead, with subtle roll
    const look = new THREE.Vector3(
      Math.sin(t * 6) * 0.6,
      Math.cos(t * 4) * 0.4,
      camera.position.z - 6,
    );
    camera.lookAt(look);
    camera.rotation.z = Math.sin(t * 3) * 0.04;
  });
  return null;
}

/* ---------- Origin Core: the Mirastra emblem ---------- */
function OriginCore() {
  const grp = useRef<THREE.Group>(null!);
  useFrame((_, dt) => {
    if (grp.current) grp.current.rotation.y += dt * 0.15;
  });
  return (
    <group ref={grp} position={[0, 0, 0]}>
      <Float speed={1.2} floatIntensity={0.6} rotationIntensity={0.3}>
        <Icosahedron args={[1.8, 1]}>
          <meshStandardMaterial
            color={GOLD}
            emissive={GOLD}
            emissiveIntensity={1.6}
            wireframe
          />
        </Icosahedron>
        <Sphere args={[1.3, 64, 64]}>
          <meshStandardMaterial
            color={"#1a1208"}
            emissive={GOLD}
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.9}
          />
        </Sphere>
      </Float>
      {[2.6, 3.4, 4.2].map((r, i) => (
        <Ring key={i} args={[r, r + 0.02, 128]} rotation={[Math.PI / 2 + i * 0.3, i * 0.4, 0]}>
          <meshBasicMaterial color={GOLD} transparent opacity={0.35 - i * 0.08} />
        </Ring>
      ))}
      <Sparkles count={120} scale={10} size={3} speed={0.4} color={"#ffd98a"} />
    </group>
  );
}

/* ---------- Portal wormhole ---------- */
function Portal() {
  const grp = useRef<THREE.Group>(null!);
  useFrame((_, dt) => {
    if (grp.current) grp.current.rotation.z += dt * 0.6;
  });
  return (
    <group ref={grp} position={[0, 0, -2]}>
      {Array.from({ length: 14 }).map((_, i) => (
        <Torus key={i} args={[3 + i * 0.06, 0.015, 16, 200]} position={[0, 0, -i * 0.9]}>
          <meshBasicMaterial color={GOLD} transparent opacity={1 - i * 0.06} />
        </Torus>
      ))}
    </group>
  );
}

/* ---------- Tech Galaxy: planets in a curved row ---------- */
function TechGalaxy() {
  const planets = useMemo(
    () => [
      { p: [8, 1, -14], r: 1.2, c: "#e7c277", label: "Web" },
      { p: [12, -1, -18], r: 0.9, c: "#a98654", label: "Software" },
      { p: [9, 3, -22], r: 1.1, c: "#f2d28a", label: "Mobile" },
      { p: [14, 0, -26], r: 0.7, c: "#b88a3a", label: "Automation" },
      { p: [7, -2, -28], r: 1.0, c: "#ffe1a1", label: "Marketing" },
      { p: [13, 2, -30], r: 0.8, c: "#c79a5a", label: "QA" },
    ],
    [],
  );
  return (
    <group>
      {planets.map((pl, i) => (
        <Float key={i} speed={0.6 + i * 0.1} floatIntensity={0.8}>
          <mesh position={pl.p as [number, number, number]}>
            <icosahedronGeometry args={[pl.r, 2]} />
            <meshStandardMaterial
              color={pl.c}
              emissive={pl.c}
              emissiveIntensity={0.5}
              roughness={0.4}
              metalness={0.7}
              flatShading
            />
          </mesh>
          <Ring
            args={[pl.r * 1.6, pl.r * 1.62, 96]}
            position={pl.p as [number, number, number]}
            rotation={[Math.PI / 2.2, 0.4, 0]}
          >
            <meshBasicMaterial color={GOLD} transparent opacity={0.4} />
          </Ring>
        </Float>
      ))}
    </group>
  );
}

/* ---------- Infinite Timeline: long beam with milestone shards ---------- */
function InfiniteTimeline() {
  const milestones = [-30, -34, -38, -42, -46, -50];
  return (
    <group position={[-4, 3, 0]}>
      <mesh position={[0, 0, -40]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.04, 0.04, 28]} />
        <meshBasicMaterial color={GOLD} />
      </mesh>
      {milestones.map((z, i) => (
        <Float key={i} speed={0.8} floatIntensity={0.5}>
          <mesh position={[Math.sin(i) * 1.6, Math.cos(i) * 0.6, z]} rotation={[i, i * 0.5, 0]}>
            <boxGeometry args={[1.6, 0.05, 1.2]} />
            <meshStandardMaterial color={"#1b140a"} emissive={GOLD} emissiveIntensity={0.6} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

/* ---------- Innovation Museum: floating holographic exhibits ---------- */
function Museum() {
  const items = [
    [-2, 1, -52],
    [2, -1, -54],
    [0, 2, -56],
    [-3, -2, -58],
    [3, 1, -60],
  ];
  return (
    <group>
      {items.map((p, i) => (
        <Float key={i} speed={0.5 + i * 0.15} rotationIntensity={0.6} floatIntensity={0.9}>
          <mesh position={p as [number, number, number]} rotation={[i, i * 0.7, 0]}>
            <torusKnotGeometry args={[0.6, 0.18, 120, 16]} />
            <meshStandardMaterial
              color={"#0e0a05"}
              emissive={GOLD}
              emissiveIntensity={0.7}
              metalness={1}
              roughness={0.25}
              wireframe={i % 2 === 0}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

/* ---------- Neural Nexus: graph of nodes & edges ---------- */
function NeuralNexus() {
  const nodes = useMemo(() => {
    const arr: THREE.Vector3[] = [];
    for (let i = 0; i < 22; i++) {
      arr.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 8 + 4,
          (Math.random() - 0.5) * 6 - 2,
          -68 - Math.random() * 6,
        ),
      );
    }
    return arr;
  }, []);
  const edges = useMemo(() => {
    const arr: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 3) arr.push([nodes[i], nodes[j]]);
      }
    }
    return arr;
  }, [nodes]);
  return (
    <group>
      {nodes.map((n, i) => (
        <mesh key={i} position={n}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color={GOLD} />
        </mesh>
      ))}
      {edges.map(([a, b], i) => (
        <Line
          key={i}
          points={[a, b]}
          color={"#e7c277"}
          lineWidth={0.6}
          transparent
          opacity={0.25}
        />
      ))}
    </group>
  );
}

/* ---------- Command Center: wireframe globe ---------- */
function CommandCenter() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.2;
  });
  return (
    <group position={[0, 0, -90]}>
      <mesh ref={ref}>
        <sphereGeometry args={[2.4, 48, 48]} />
        <meshBasicMaterial color={GOLD} wireframe transparent opacity={0.55} />
      </mesh>
      <mesh>
        <sphereGeometry args={[2.42, 24, 24]} />
        <meshBasicMaterial color={"#0c0a06"} />
      </mesh>
      {Array.from({ length: 18 }).map((_, i) => {
        const a = (i / 18) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(a) * 4, Math.sin(a) * 0.4, -90 + Math.sin(a) * 1]}>
            <boxGeometry args={[0.04, 0.04, 0.04]} />
            <meshBasicMaterial color={GOLD} />
          </mesh>
        );
      })}
      <Sparkles count={80} scale={8} size={2} speed={0.3} color={"#ffd98a"} />
    </group>
  );
}

/* ---------- Scene container ---------- */
function Universe() {
  return (
    <>
      <color attach="background" args={["#04030a"]} />
      <fog attach="fog" args={["#04030a", 14, 70]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 4]} intensity={3} color={GOLD} />
      <pointLight position={[0, 0, -40]} intensity={3} color={"#9a6f2b"} />

      <Stars radius={120} depth={80} count={6000} factor={3} fade speed={0.6} />

      <OriginCore />
      <Portal />
      <TechGalaxy />
      <InfiniteTimeline />
      <Museum />
      <NeuralNexus />
      <CommandCenter />

      <CameraRig />
    </>
  );
}

/* ---------- HTML overlay scenes ---------- */
function Overlay() {
  return (
    <Scroll html>
      <div className="w-screen">
        {/* Scene 1: Origin */}
        <section className="h-screen w-screen flex flex-col items-center justify-center text-center px-6">
          <p className="mirastra-eyebrow mb-6 mirastra-pulse">MIRASTRA · ORIGIN CORE</p>
          <h1 className="mirastra-display text-[14vw] md:text-[9vw] font-black">
            BUILDING<br />THE&nbsp;FUTURE
          </h1>
          <p className="mt-8 max-w-xl text-sm md:text-base text-[#cfc4a8] opacity-80">
            Scroll to travel deeper into the Mirastra universe.
          </p>
          <div className="absolute bottom-10 mirastra-eyebrow opacity-70">↓ initiate journey</div>
        </section>

        {/* Scene 2: Portal */}
        <section className="h-screen w-screen flex items-center justify-center text-center px-6">
          <div>
            <p className="mirastra-eyebrow mb-4">ENTERING · PORTAL 01</p>
            <h2 className="mirastra-display text-[12vw] md:text-[7vw]">BEYOND LIMITS</h2>
            <p className="mt-6 max-w-md mx-auto text-sm text-[#cfc4a8]/70">
              Dimensional shift initiated. Travelling through the wormhole.
            </p>
          </div>
        </section>

        {/* Scene 3: Tech Galaxy */}
        <section className="h-screen w-screen flex items-center px-10 md:px-24">
          <div className="max-w-xl">
            <p className="mirastra-eyebrow mb-4">TECHNOLOGY GALAXY</p>
            <h2 className="mirastra-display text-[10vw] md:text-[5.5vw]">SIX&nbsp;PLANETS.<br />ONE&nbsp;UNIVERSE.</h2>
            <ul className="mt-10 space-y-3 text-[#e9dcb8]/80 font-light tracking-widest text-sm uppercase">
              <li>— Website Development</li>
              <li>— Software Engineering</li>
              <li>— Mobile Applications</li>
              <li>— Automation Systems</li>
              <li>— Digital Marketing</li>
              <li>— Quality Assurance</li>
            </ul>
          </div>
        </section>

        {/* Scene 4: Timeline */}
        <section className="h-screen w-screen flex items-center justify-end px-10 md:px-24 text-right">
          <div className="max-w-lg">
            <p className="mirastra-eyebrow mb-4">THE INFINITE TIMELINE</p>
            <h2 className="mirastra-display text-[10vw] md:text-[5.5vw]">A&nbsp;STUDIO<br />BORN&nbsp;FROM<br />THE&nbsp;FUTURE.</h2>
            <p className="mt-6 text-sm text-[#cfc4a8]/70">
              Vision, mission, and values forged into monuments of light — Mirastra Tech is
              engineered for what comes next.
            </p>
          </div>
        </section>

        {/* Scene 5: Museum */}
        <section className="h-screen w-screen flex items-center justify-center text-center px-6">
          <div>
            <p className="mirastra-eyebrow mb-4">INNOVATION MUSEUM</p>
            <h2 className="mirastra-display text-[12vw] md:text-[7vw]">WORK AS ART.</h2>
            <p className="mt-6 max-w-md mx-auto text-sm text-[#cfc4a8]/70">
              Every project — an exhibit. Every line of code — a brushstroke.
            </p>
          </div>
        </section>

        {/* Scene 6: Neural Nexus */}
        <section className="h-screen w-screen flex items-center px-10 md:px-24">
          <div className="max-w-xl">
            <p className="mirastra-eyebrow mb-4">THE NEURAL NEXUS</p>
            <h2 className="mirastra-display text-[10vw] md:text-[5.5vw]">EVERY&nbsp;STACK.<br />ONE&nbsp;MIND.</h2>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.3em] text-[#e9dcb8]/70">
              {["React","Next.js","Angular","Node.js","MongoDB","PostgreSQL","Firebase","Cloud"].map(t => (
                <span key={t}>· {t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Scene 7: Command Center */}
        <section className="h-screen w-screen flex flex-col items-center justify-center text-center px-6">
          <p className="mirastra-eyebrow mb-4">GLOBAL COMMAND CENTER</p>
          <h2 className="mirastra-display text-[12vw] md:text-[7vw]">INITIATE&nbsp;MISSION.</h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 w-full max-w-md flex flex-col gap-3"
          >
            <input
              placeholder="Identifier"
              className="bg-transparent border border-[#e7c277]/30 px-4 py-3 text-sm tracking-widest uppercase focus:outline-none focus:border-[#e7c277]"
            />
            <input
              placeholder="Frequency (email)"
              className="bg-transparent border border-[#e7c277]/30 px-4 py-3 text-sm tracking-widest uppercase focus:outline-none focus:border-[#e7c277]"
            />
            <textarea
              rows={3}
              placeholder="Transmission"
              className="bg-transparent border border-[#e7c277]/30 px-4 py-3 text-sm tracking-widest uppercase focus:outline-none focus:border-[#e7c277]"
            />
            <button
              type="submit"
              className="mt-2 border border-[#e7c277] text-[#e7c277] px-6 py-3 text-xs tracking-[0.4em] uppercase hover:bg-[#e7c277] hover:text-black transition"
            >
              Transmit →
            </button>
          </form>
          <p className="mt-12 mirastra-eyebrow opacity-50">© Mirastra Tech · 2035</p>
        </section>
      </div>
    </Scroll>
  );
}

function CustomCursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  if (typeof window !== "undefined") {
    window.onmousemove = (e) => {
      if (ring.current) {
        ring.current.style.left = e.clientX + "px";
        ring.current.style.top = e.clientY + "px";
      }
      if (dot.current) {
        dot.current.style.left = e.clientX + "px";
        dot.current.style.top = e.clientY + "px";
      }
    };
  }
  return (
    <>
      <div ref={ring} className="mirastra-cursor" />
      <div ref={dot} className="mirastra-cursor-dot" />
    </>
  );
}

export default function CinematicExperience() {
  return (
    <div className="fixed inset-0 mirastra-vignette">
      <CustomCursor />
      <div className="mirastra-grain" />
      <Canvas
        camera={{ position: [0, 0, 14], fov: 55 }}
        dpr={[1, 2]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <ScrollControls pages={7} damping={0.25}>
            <Universe />
            <Overlay />
          </ScrollControls>
          <EffectComposer>
            <Bloom intensity={1.1} luminanceThreshold={0.2} luminanceSmoothing={0.6} mipmapBlur />
            <ChromaticAberration
              blendFunction={BlendFunction.NORMAL}
              offset={[0.0008, 0.0012] as unknown as THREE.Vector2}
            />
            <Vignette eskil={false} offset={0.2} darkness={0.9} />
          </EffectComposer>
        </Suspense>
      </Canvas>
      {/* Top HUD */}
      <div className="pointer-events-none fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 text-[10px] tracking-[0.5em] uppercase text-[#e7c277]/80">
        <span className="mirastra-pulse">◉ MIRASTRA / SYS·ONLINE</span>
        <span>SECTOR 07 · ORIGIN→COMMAND</span>
        <span className="hidden md:inline">v.2035.1</span>
      </div>
    </div>
  );
}