import { useGLTF, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import img from '../../assets/SpeechImg.png';

export default function LaptopScene() {
  const { nodes } = useGLTF('/laptop.glb'); // Your 3D model file
  
  return (
    <Canvas camera={{ position: [0, 0, 2.5] }}>
      <ambientLight intensity={0.5} />
      <mesh geometry={nodes.Screen.geometry}>
        <meshStandardMaterial color="#ffffff" />
        {/* Your image on screen */}
        <meshStandardMaterial map={new THREE.TextureLoader().load(img)} />
      </mesh>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}