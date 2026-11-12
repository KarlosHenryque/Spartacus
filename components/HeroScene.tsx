"use client";
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Emblem() {
  const group = useRef<THREE.Group>(null!);
  const ringA = useRef<THREE.Mesh>(null!);
  const ringB = useRef<THREE.Mesh>(null!);
  const dust = useMemo(() => {
    const a = new Float32Array(900);
    for (let i = 0; i < a.length; i++) a[i] = (Math.random() - 0.5) * 14;
    return a;
  }, []);

  useFrame(({ pointer, clock }, dt) => {
    const t = clock.elapsedTime;
    const k = Math.min(1, dt * 2);
    group.current.rotation.y += (pointer.x * 0.8 - group.current.rotation.y) * k + dt * 0.15;
    group.current.rotation.x += (-pointer.y * 0.5 - group.current.rotation.x) * k;
    group.current.position.y = Math.sin(t) * 0.15;
    ringA.current.rotation.z = t * 0.4;
    ringB.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.5) * 0.4;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial color="#141414" metalness={0.9} roughness={0.25} flatShading />
      </mesh>
      <mesh scale={1.02}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial color="#d3141c" wireframe />
      </mesh>
      <mesh ref={ringA}><torusGeometry args={[2.3, 0.025, 8, 100]} /><meshBasicMaterial color="#ffffff" /></mesh>
      <mesh ref={ringB}><torusGeometry args={[2.8, 0.04, 8, 100]} /><meshBasicMaterial color="#d3141c" /></mesh>
      <points>
        <bufferGeometry><bufferAttribute attach="attributes-position" args={[dust, 3]} /></bufferGeometry>
        <pointsMaterial size={0.03} color="#ffffff" transparent opacity={0.5} />
      </points>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 1.75]} aria-hidden>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 3, 4]} intensity={60} color="#ff2a33" />
      <pointLight position={[-4, -2, 3]} intensity={25} color="#ffffff" />
      <Emblem />
    </Canvas>
  );
}
