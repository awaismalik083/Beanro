"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei";
import { Suspense, useState, useCallback } from "react";

function Model() {
  const { scene } = useGLTF("/assets/CoffeeModel.glb");
  return <primitive object={scene} scale={1.5} />;
}

export default function CoffeeModel() {
  const [canvasKey, setCanvasKey] = useState(0);

  const handleCreated = useCallback(({ gl }) => {
    const canvas = gl.domElement;
    canvas.addEventListener("webglcontextlost", (e) => {
      e.preventDefault();
      console.warn("WebGL context lost — remounting canvas");
      // force React to tear down and recreate the Canvas + context
      setCanvasKey((k) => k + 1);
    });
  }, []);

  return (
    <div className="w-[500px] h-[600px]">
      <Canvas
        key={canvasKey}
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}                 // cap pixel ratio, less GPU strain on resize
        resize={{ debounce: 200 }}     // don't thrash the resize observer
        onCreated={handleCreated}
      >
        <Suspense fallback={null}>
          <Model />
          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.5}
            scale={5}
            blur={2.5}
            far={2}
            resolution={256}
            color="#000000"
          />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}