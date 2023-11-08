import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export const Reception = () => {
  const gltf = useLoader(GLTFLoader, '/models/reception/scene.gltf')
  return (
  <primitive object={gltf.scene}  scale={0.001} />
  )
};