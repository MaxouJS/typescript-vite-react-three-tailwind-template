// Packages
import { FC } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

// Types
import type CamerasType from '../../types/props/utils/cameras';

const Cameras: FC<CamerasType> = (props: CamerasType) => {
  // Props
  const { children, enableRotate, position, rotation, minimumDistance, maximumDistance, maximumPolarAngle } = props;
  
  return (
    <>
      {/* Creates an Orbit Controls camera that is the easiest camera to use */}
      <OrbitControls
        enablePan={false}
        enableDamping={false}
        enableRotate={enableRotate}
        minDistance={minimumDistance}
        maxDistance={maximumDistance}
        maxPolarAngle={maximumPolarAngle}
      />
      {/* Creates a perspective camera that uses passed as props parameters */}  
      {/* @ts-ignore, we use here an array of number instead of a Vector3, that is working as well */}
      <PerspectiveCamera position={position} rotation={rotation}>
        {children}
      </PerspectiveCamera>
    </>
  );
};

export default Cameras;
