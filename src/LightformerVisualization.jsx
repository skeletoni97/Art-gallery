import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

export const LightformerVisualization = ({ position, scale }) => {
  const sphereRef = useRef();

  // Обновление позиции и масштаба сферы в зависимости от свойств
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.position.set(position[0], position[1], position[2]);
      if (scale) {
        sphereRef.current.scale.set(scale, scale, scale);
      }
    }
  });
  console.log(position)
  return (
    <mesh ref={sphereRef} position={position}>
      <sphereGeometry args={[0.2, 16, 16]} />
    </mesh>
  );
};

