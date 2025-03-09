import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// Komponen Model
function Model({ url, rotation }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} rotation={rotation} />;
}

// Komponen ModelViewer
const ModelViewer = () => {
  // const [rotation, setRotation] = useState([0, 0, 0]);

  // Fungsi untuk memutar objek pada sumbu Y
  // const rotateY = (angle) => {
  //   const newRotation = [...rotation];
  //   newRotation[1] += angle; // Hanya update rotasi pada sumbu Y
  //   setRotation(newRotation);
  // };

  return (
    <div className="flex flex-col items-center pb-5">
      <Canvas style={{ height: "400px", width: "500px" }} camera={{ position: [5, 0.5, 10], fov: 20 }}>
        <ambientLight intensity={0.5} />

        {/* DirectionalLight untuk cahaya utama */}
        <directionalLight
          position={[5, 5, 5]} // Posisi cahaya
          intensity={1} // Intensitas cahaya
          castShadow // Aktifkan bayangan (opsional)
        />

        {/* PointLight untuk cahaya tambahan */}
        <pointLight position={[10, 5, -5]} intensity={1} />

        {/* HemisphereLight untuk efek natural */}
        <hemisphereLight
          skyColor="#ffffff" // Warna langit
          groundColor="#cccccc" // Warna tanah
          intensity={0.5} // Intensitas cahaya
        />
        <Model url="/models/mebel.glb" />
        <OrbitControls target={[1, 1, 0]} />
      </Canvas>

      <div className="flex flex-col items-center bg-blue ">
        <img src="/image/rotate.png" className="w-10 h-10" alt="" />
        <h4>Rotate That Object</h4>
        {/* <button className="py-2 px-4 font-semibold bg-white border border-2 border-gray-500 rounded-xl text-gray-500" onClick={() => rotateY(-Math.PI / 8)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>

        <button className="py-2 px-4 font-semibold bg-white border border-2 border-gray-500 rounded-xl text-gray-500" onClick={() => rotateY(Math.PI / 8)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button> */}
      </div>
    </div>
  );
};

export default ModelViewer;
