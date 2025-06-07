import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { Avatar } from './Avatar';
import { OrbitControls } from '@react-three/drei';

export default function AvatarCanvas() {
  return (
    <div className="relative w-full h-full">
      
      {/* 🔵 Blob Background Behind Avatar */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-[400px] h-[400px] bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-700 
                        rounded-full blur-3xl opacity-30 animate-pulse" />
      </div>

      {/* 🧑 Avatar in 3D Canvas */}
      <Canvas
        className="relative z-10"
        camera={{ position: [0, 1.5, 3], fov: 30 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 5]} intensity={1.2} />
        <Suspense fallback={null}>
          <Avatar scale={2.5} position={[0, -2.8, 0]} rotation={[0.2, 0, 0]} />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 8}
          maxAzimuthAngle={Math.PI / 8}
        />
      </Canvas>
    </div>
  );
}
