import { useFrame, useThree } from '@react-three/fiber';
import React from 'react';
import { SpotLight } from 'three';

export const ArtworkSpotlight = ({ position, target }) => {
  const { scene } = useThree();
  
  // Создаем прожектор
  const spotlight = new SpotLight(0xffffff, 2, 10, Math.PI / 4);
  spotlight.position.set(position[0], position[1], position[2]);
  spotlight.target.position.set(target[0], target[1], target[2]);
  
  // Добавляем прожектор к сцене
  scene.add(spotlight);
  scene.add(spotlight.target);

  // Обновляем прожектор в каждом кадре
  useFrame(() => {
    spotlight.target.updateMatrixWorld();
  });

  return (
    <>
      {/* Можете добавить SpotLightHelper для визуализации направления света */}
      {/* <spotLightHelper args={[spotlight]} /> */}
    </>
  );
};
