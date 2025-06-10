// components/ThreeBackground.tsx
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Sphere,
  MeshDistortMaterial,
} from "@react-three/drei";

export default function ThreeBackground() {
  return (
    <Canvas
      className="absolute inset-0 z-0"
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} intensity={1} />
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 64, 64]} scale={2.5}>
          <MeshDistortMaterial
            color="#ffff"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.3}
          />
        </Sphere>
      </Float>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
