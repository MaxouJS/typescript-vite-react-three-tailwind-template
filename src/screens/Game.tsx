// Packages
import { FC } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Html } from '@react-three/drei';

// Components
// utils
import Animation from '../components/utils/Animation';
import Cameras from '../components/utils/Cameras';
import Lights from '../components/utils/Lights';
import Environment from '../components/utils/Environment';

const Game: FC = () => {
  return (
    <div className='absolute h-full w-full bg-black'>
      <Canvas>
        {/* Initializes UI */}
        <Html fullscreen>
          <p className='text-white'>Sample text</p>
        </Html>
        {/* Initializes cameras */}
        <Cameras
          position={[0, -0.5, 0]}
          rotation={[0, 0, 0]}
          enableRotate={true}
          minimumDistance={10}
          maximumDistance={10}
          maximumPolarAngle={Math.PI * 0.5}
        >
          {/* Initializes scene 3D elements */}
          <Lights />
          {/* Places manually some 3d animated elements */}
          <Animation
            title='Rectangle'
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={[1, 1, 1]}
          />
          <Environment
            title='Floor'
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={[1, 1, 1]}
          />
        </Cameras>
      </Canvas>
    </div>
  );
};

export default Game;
