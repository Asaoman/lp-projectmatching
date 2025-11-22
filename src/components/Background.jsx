import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const Shards = () => {
    const count = 150;
    const mesh = useRef();

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state) => {
        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
            t = particle.t += speed / 2;
            const a = Math.cos(t) + Math.sin(t * 1) / 10;
            const b = Math.sin(t) + Math.cos(t * 2) / 10;
            const s = Math.cos(t);

            // Antigravity movement based on mouse
            const mouseX = (state.mouse.x * window.innerWidth) / 50;
            const mouseY = (state.mouse.y * window.innerHeight) / 50;

            dummy.position.set(
                (particle.mx + (mouseX - particle.mx) * 0.02) + xFactor + Math.cos(t / 10) * factor + (Math.sin(t * 1) * factor) / 10,
                (particle.my + (mouseY - particle.my) * 0.02) + yFactor + Math.sin(t / 10) * factor + (Math.cos(t * 2) * factor) / 10,
                zFactor + Math.cos(t / 10) * factor + (Math.sin(t * 3) * factor) / 10
            );
            dummy.scale.set(s, s, s);
            dummy.rotation.set(s * 5, s * 5, s * 5);
            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <octahedronGeometry args={[0.5, 0]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.5} metalness={0.8} />
        </instancedMesh>
    );
};

const Background = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[var(--color-canvas)]">
            <Canvas camera={{ position: [0, 0, 30], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#3B82F6" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#8B5CF6" />
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <Shards />
                </Float>
            </Canvas>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-[var(--color-canvas)] pointer-events-none" />
        </div>
    );
};

export default Background;
