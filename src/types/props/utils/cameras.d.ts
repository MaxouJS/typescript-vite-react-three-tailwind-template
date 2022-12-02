// Packages
import { ReactNode } from 'react';

interface Cameras {
  children: ReactNode;
  enableRotate: boolean;
  position: number[];
  rotation: number[];
  minimumDistance: number;
  maximumDistance: number;
  maximumPolarAngle: number;
};

export default Cameras;
