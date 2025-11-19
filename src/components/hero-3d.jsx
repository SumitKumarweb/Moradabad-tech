import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei"

export function Hero3D() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 2, 1]} intensity={0.8} />
        <pointLight position={[-3, -2, -1]} intensity={0.4} color="#06b6d4" />
        <Float speed={3} rotationIntensity={0.8} floatIntensity={1.5}>
          <Sphere args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial
              color="#3b82f6"
              attach="material"
              distort={0.4}
              speed={1.5}
              roughness={0.1}
              metalness={0.8}
            />
          </Sphere>
        </Float>
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  )
}

