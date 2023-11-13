import { PointerLockControls, Sky } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import * as TWEEN from "@tweenjs/tween.js";
import { ArtworkSpotlight } from "./ArtworkSpotlight.jsx";
import { Gallery } from "./Gallery.jsx";
import { Ground } from "./Ground.jsx";
import { Player } from "./Player.jsx";
import { Reception } from "./reception.jsx";
export const App = () => {
  const shadowOffset = 50;
  useFrame(() => {
    TWEEN.update();
  });
  return (
    <>
      <PointerLockControls />
      <Sky sunPosition={[100, 20, 100]} />
      
      {/* <ambientLight intensity={2} /> */}

    
        
     
      <Physics gravity={[0, -20, 0]}>
        <Ground />
        <ArtworkSpotlight position={[0, 2.4, -0.3]} target={[6, 0, 0]} />
        <ArtworkSpotlight position={[-1.8, 2.4, -10.5]} target={[6, 0, -10]} />
        <ArtworkSpotlight position={[3, 2.4, -6.4]} target={[9, 0, -6.4]} />
        <ArtworkSpotlight position={[6, 2.4, -11.5]} target={[11, 0, -11.5]} />
        <ArtworkSpotlight position={[8.7, 2.4, -2.1]} target={[12, 0, -2.1]} />
        <ArtworkSpotlight position={[14, 2.4, 0.5]} target={[17, 0, 0.5]} />
        <ArtworkSpotlight position={[12, 2.4, -9.5]} target={[15, 0, -9.5]} />
        <ArtworkSpotlight position={[17, 2.4, -5.7]} target={[20, 0, -5.7]} />
        <Player castShadow receiveShadow />
        <RigidBody>
          <mesh position={[0, 3, -5]} castShadow shadows>
            <sphereGeometry args={[0.3]} />
          </mesh>
        </RigidBody>
        <RigidBody>{/* <Walls  /> */}</RigidBody>
        <RigidBody
          type="fixed"
          colliders="trimesh"
          position={[-4, 0, -7]}
          castShadow
        >
          <Reception castShadow />
        </RigidBody>
        <RigidBody
          type="fixed"
          colliders="trimesh"
          position={[-5, -0.2, 5]}
          castShadow
        >
          <Gallery castShadow />
        </RigidBody>
      </Physics>
    </>
  );
};

export default App;
