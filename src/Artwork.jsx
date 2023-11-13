import { Text } from '@react-three/drei';
import { useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { TextureLoader } from "three";

export const Artwork = ({ position, texturePath, info  }) => {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, texturePath); // Загрузим текстуру изображения
  
  const [showInfo, setShowInfo] = useState(false);
 
  const handleMouseOver = () => {
    setShowInfo(true);
    console.log(info)
  };

  const handleMouseOut = () => {
    setShowInfo(false);
  };
  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={[0, Math.PI / 2, 0]}
      onClick={handleMouseOver}
      onPointerOut={handleMouseOut}
    >
      <boxGeometry args={[1.1, 1.5, 0.01]} />
      <meshBasicMaterial map={texture} />
      {showInfo && (
        <Text
        color="white"
        fontSize={0.2}
        maxWidth={2}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        position={[0, -0.5, -1]}
        
      >
        {info}
      </Text>
      )}
    </mesh>
  );
};
