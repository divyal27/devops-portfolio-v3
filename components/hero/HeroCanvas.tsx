'use client';

import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function InfinityLoop() {
  const groupRef = useRef<THREE.Group>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.001;
      groupRef.current.rotation.y += 0.003;
      groupRef.current.position.x = mouseRef.current.x * 0.5;
      groupRef.current.position.y = mouseRef.current.y * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Torus */}
      <mesh ref={torusRef} position={[0, 0, 0]}>
        <torusGeometry args={[2, 0.6, 64, 100]} />
        <meshPhongMaterial
          color="#06B6D4"
          emissive="#06B6D4"
          emissiveIntensity={0.5}
          wireframe={false}
          shininess={100}
        />
      </mesh>

      {/* Second rotating Torus */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2, 0.5, 64, 100]} />
        <meshPhongMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={0.3}
          wireframe={false}
          transparent
          opacity={0.8}
          shininess={80}
        />
      </mesh>

      {/* Lime accent ring */}
      <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 4, Math.PI / 3]}>
        <torusGeometry args={[2.5, 0.3, 64, 100]} />
        <meshPhongMaterial
          color="#22C55E"
          emissive="#22C55E"
          emissiveIntensity={0.4}
          wireframe={false}
          transparent
          opacity={0.6}
          shininess={60}
        />
      </mesh>

      {/* Points along the loop */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x = Math.cos(angle) * 2;
        const y = Math.sin(angle) * 2;
        return (
          <mesh key={i} position={[x, y, 0]}>
            <sphereGeometry args={[0.2, 32, 32]} />
            <meshPhongMaterial
              color={['#06B6D4', '#8B5CF6', '#22C55E'][i % 3]}
              emissive={['#06B6D4', '#8B5CF6', '#22C55E'][i % 3]}
              emissiveIntensity={0.8}
              shininess={120}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#06B6D4" />
      <pointLight position={[-5, -5, 5]} intensity={0.6} color="#8B5CF6" />
      <pointLight position={[0, 0, 10]} intensity={0.4} color="#22C55E" />
    </>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas className="w-full h-full" dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <Lights />
        <InfinityLoop />
        <color attach="background" args={['#f0f9ff']} />
      </Suspense>
    </Canvas>
  );
}
