import { useRef } from 'react';
import useNetworkAnimation from '../hooks/useNetworkAnimation';

const NetworkBackground = () => {
  const canvasRef = useRef(null);

  useNetworkAnimation(canvasRef);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

export default NetworkBackground;