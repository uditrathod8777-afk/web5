"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";

function GeometricSculpture() {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);

  // Custom geometry - angular polyhedron-like shape
  const customGeometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.5, 0);
    // Make it slightly irregular for more organic feel
    const positions = geo.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = positions.getZ(i);
      const scale = 0.95 + Math.random() * 0.1;
      positions.setXYZ(i, x * scale, y * scale, z * scale);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = state.clock.getElapsedTime() * -0.3;
      innerRef.current.rotation.z = state.clock.getElapsedTime() * 0.2;
    }
    if (outerRef.current) {
      outerRef.current.rotation.y = state.clock.getElapsedTime() * -0.1;
    }
  });

  return (
    <Float floatIntensity={0.8} speed={1.5} rotationIntensity={0.3}>
      <group ref={groupRef}>
        {/* Main sculpture */}
        <mesh geometry={customGeometry} castShadow>
          <meshStandardMaterial
            color="#1a1008"
            metalness={0.95}
            roughness={0.15}
            envMapIntensity={2.5}
          />
        </mesh>

        {/* Bronze wireframe overlay */}
        <mesh geometry={customGeometry}>
          <meshBasicMaterial
            color="#A66C45"
            wireframe={true}
            transparent
            opacity={0.15}
          />
        </mesh>

        {/* Inner octahedron */}
        <mesh ref={innerRef}>
          <octahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial
            color="#B87952"
            metalness={0.9}
            roughness={0.2}
            envMapIntensity={3}
          />
        </mesh>

        {/* Core sphere with teal */}
        <mesh>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshStandardMaterial
            color="#0D7775"
            metalness={0.8}
            roughness={0.1}
            emissive="#0D7775"
            emissiveIntensity={0.4}
            envMapIntensity={2}
          />
        </mesh>

        {/* Orbit ring */}
        <mesh ref={outerRef} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[2.2, 0.015, 16, 100]} />
          <meshStandardMaterial
            color="#A66C45"
            metalness={1}
            roughness={0}
            emissive="#75472F"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Secondary orbit ring */}
        <mesh rotation={[-Math.PI / 6, Math.PI / 4, 0]}>
          <torusGeometry args={[2.0, 0.008, 16, 100]} />
          <meshStandardMaterial
            color="#0D7775"
            metalness={1}
            roughness={0}
            emissive="#073F40"
            emissiveIntensity={0.2}
            transparent
            opacity={0.6}
          />
        </mesh>
      </group>
    </Float>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.1} />
      {/* Bronze key light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
        color="#C58B55"
        castShadow
      />
      {/* Teal fill light */}
      <pointLight position={[-4, -2, 3]} intensity={2} color="#0D7775" />
      {/* Rim light */}
      <pointLight position={[0, -5, -5]} intensity={1.5} color="#75472F" />
      {/* Top accent */}
      <spotLight
        position={[0, 8, 0]}
        intensity={2}
        color="#D69A69"
        angle={0.4}
        penumbra={0.8}
      />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      shadows
    >
      <Lights />
      <GeometricSculpture />
      <Environment preset="studio" />
    </Canvas>
  );
}
