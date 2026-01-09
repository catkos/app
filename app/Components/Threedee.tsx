"use client";

import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default function Threedee() {
  const gltf = useLoader(GLTFLoader, "/laptop-ver2.glb");
  return (
    <div id="canvas-container" className="w-full h-full">
      <Canvas>
        <primitive object={gltf.scene} scale={5} />
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
      </Canvas>
    </div>
  );
}
