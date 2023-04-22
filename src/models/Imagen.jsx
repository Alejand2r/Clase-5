import { useState } from 'react';
import { TextureLoader } from 'three';

export default function Imagen(props) {
  const [texture, setTexture] = useState(
    new TextureLoader().load('/static/mocha.jpg')
  );

  const onHandleImageClick = () => {
    const newTexture = new TextureLoader().load('/static/perromarin.jpg');
    
    setTexture(newTexture);
  };

  return (
    <group {...props}>
      <mesh>
        <planeGeometry args={[7.20, 7.20]} />
        <meshBasicMaterial map={texture} />
      </mesh>
      <mesh
        onPointerUp={onHandleImageClick}
        // ajusta la posición de la imagen para que esté en el centro del plano
        position={[0, 0, 0.0]}
      >
        <planeGeometry args={[8, 9]} />
        <meshBasicMaterial transparent opacity={0} color="white" />
      </mesh>
    </group>
  );
}