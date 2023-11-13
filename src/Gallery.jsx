import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { Artwork } from "./Artwork";
export const Gallery = () => {
  const gltf = useLoader(GLTFLoader, '/models/galeria/scene.gltf')

  // gltf.scene.traverse((child) => {
  //   if (child.isMesh) {
  //     // child.castShadow = true;
  //     console.log('castShadow')
  //   }
  // });
  return (
    <>
  <primitive object={gltf.scene}  scale={1.4}  receiveShadow/>
  <Artwork castShadow={false} position={[6, 1.75, -5.25]} texturePath="../public/artworks/0.jpg" info="123123" />
  <Artwork castShadow={false} position={[4.54, 1.75, -15.45]} texturePath="../public/artworks/1.jpg" />
  <Artwork castShadow={false} position={[8.77, 1.75, -11.42]} texturePath="../public/artworks/2.jpg" />
  <Artwork castShadow={false} position={[14.3, 1.75, -7.09]} texturePath="../public/artworks/3.jpg" />
  <Artwork castShadow={false} position={[12.54, 1.75, -16.52]} texturePath="../public/artworks/4.jpg" />
  <Artwork castShadow={false} position={[20.2, 1.75, -4.52]} texturePath="../public/artworks/5.jpg" />
  <Artwork castShadow={false} position={[18, 1.75, -14.52]} texturePath="../public/artworks/6.jpg" />
  <Artwork castShadow={false} position={[23.75, 1.75, -10.7]} texturePath="../public/artworks/7.jpg" />
  </>
  )
};

