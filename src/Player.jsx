import * as RAPIER from "@dimforge/rapier3d-compat";
import { useFrame } from "@react-three/fiber";
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier";
import { useRef } from "react";
import * as THREE from "three";
import { usePersonControls } from "./hooks.js";


const MOVE_SPEED = 5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const rotation = new THREE.Vector3();

export const Player = () => {
    const playerRef = useRef();
    const { forward, backward, left, right, jump } = usePersonControls();
    const objectInHandRef = useRef();
    const swayingObjectRef = useRef();
    const rapier = useRapier();

    useFrame((state) => {
        if (!playerRef.current) return;

        // moving player
        const velocity = playerRef.current.linvel();

        frontVector.set(0, 0, backward - forward);
        sideVector.set(left - right, 0, 0);
        direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(MOVE_SPEED).applyEuler(state.camera.rotation);

        playerRef.current.wakeUp();
        playerRef.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z });

        // jumping
        const world = rapier.world;
        const ray = world.castRay(new RAPIER.Ray(playerRef.current.translation(), { x: 0, y: -1, z: 0 }));
        const grounded = ray && ray.collider && Math.abs(ray.toi) <= 4;
        if (jump && grounded) doJump();

        // moving camera
        const {x, y, z} = playerRef.current.translation();
        state.camera.position.set(x, y, z);

        // moving object in hand for the player
        objectInHandRef.current.rotation.copy(state.camera.rotation);
        objectInHandRef.current.position.copy(state.camera.position).add(state.camera.getWorldDirection(rotation));
    });

    const doJump = () => {
        playerRef.current.setLinvel({x: 0, y: 8, z: 0});
    }


    return (
        <>
            <RigidBody colliders={false} mass={1} ref={playerRef} lockRotations>
                <mesh castShadow>
                    <capsuleGeometry args={[0.5, 0.5]}/>
                    <CapsuleCollider args={[1.1, 0.5]} />
                </mesh>
            </RigidBody>
            <group ref={objectInHandRef}>
                <group ref={swayingObjectRef}>
                </group>
            </group>
        </>
    );
}