"use client";

import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useRef, useState } from "react";

type ModelType = {
  url: string;
};

function Model({ url }: { url: string }) {
  const gltf = useLoader(GLTFLoader, url) as any;
  const ref = useRef<any>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (hovered && ref.current) {
      ref.current.rotation.y += delta * 1;
    }
  });

  return (
    <group
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <primitive
        ref={ref}
        object={gltf.scene}
        position={[0, 0, 0]}
        scale={2.5}
      />
    </group>
  );
}

export default function Models() {
  return (
    <div id="canvas-container" className="w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col w-full bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur-sm rounded-lg min-h-[500px]">
          <Canvas>
            <ambientLight intensity={0.15} />
            <directionalLight position={[0, 0, 5]} />
            <Model url="/bunbread.glb" />
          </Canvas>
        </div>

        <div className="flex flex-col w-full bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur-sm rounded-lg min-h-[500px]">
          <Canvas>
            <ambientLight intensity={0.15} />
            <directionalLight position={[0, 0, 5]} />
            <Model url="/hamster.glb" />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
