import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export const Gallery = () => {
  const gltf = useLoader(GLTFLoader, '/models/galeria/scene.gltf')
  return (
  <primitive object={gltf.scene}  scale={0.8} castShadow receiveShadow/>
  )
};