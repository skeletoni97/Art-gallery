import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export const Reception = () => {
  const gltf = useLoader(GLTFLoader, '/models/reception/scene.gltf')
  return (
  <primitive object={gltf.scene}  scale={0.001} rotation={[0, -Math.PI / 2, 0]}/>
  )
};