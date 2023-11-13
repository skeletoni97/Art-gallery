import { useTexture } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import floorTexture from "./assets/pngwing.com.png";

export const Ground = () => {
    const texture = useTexture(floorTexture);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    return (
        <RigidBody type="fixed" colliders={false}>
            <mesh receiveShadow position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
                <planeGeometry args={[500, 500]} />
                <meshStandardMaterial color="gray" map={texture} map-repeat={[100, 100]} />
            </mesh>
            <CuboidCollider args={[40, 2, 40]} position={[0, -2, 0]}/>
        </RigidBody>
    );
}