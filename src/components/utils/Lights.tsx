// Packages
import { FC } from 'react';

// Types
import type LightsType from '../../types/props/utils/lights';

const Lights: FC<LightsType> = (props: LightsType) => {
  // Props
  const {} = props;

  return (
    <>
      <ambientLight
        intensity={0.5}
      />
      <pointLight
        position={[10, 20, 10]}
        intensity={0.5}
      />
    </>
  );
};

export default Lights;
