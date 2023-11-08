import { PointerLockControls, Sky } from "@react-three/drei";
import { Ground } from "./Ground.jsx";
import { Physics, RigidBody } from "@react-three/rapier";
import { Player } from "./Player.jsx";
import { Gallery } from "./Gallery.jsx";
import { Walls } from "./Walls.jsx";
import { Reception } from "./reception.jsx";

const shadowOffset = 50;
export const App = () => {
  return (
    <>
      <PointerLockControls />
      <Sky sunPosition={[100, 20, 100]} />
      <directionalLight
        
      />
      <Reception/>
      <Physics gravity={[0, -20, 0]}>
        <Ground />
       
        {/* <Gallery /> */}
        <Player />
        <RigidBody>
          <mesh position={[0, 3, -5]}>
          <sphereGeometry args={[0.3]} />
          </mesh>
        </RigidBody>
        
        <RigidBody>
          <mesh colliders={false}  lockRotations>
          <Walls />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
};

export default App;
