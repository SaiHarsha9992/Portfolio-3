import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

function ContextLostHandler() {
  const { gl } = useThree();

  useEffect(() => {
    const onContextLost = (event) => {
      event.preventDefault();
      console.warn('WebGL context lost');
      alert('WebGL context lost. Please reload the page.');
    };

    const onContextRestored = () => {
      console.log('WebGL context restored');
      // Reinitialize anything if needed
    };

    gl.domElement.addEventListener('webglcontextlost', onContextLost);
    gl.domElement.addEventListener('webglcontextrestored', onContextRestored);

    return () => {
      gl.domElement.removeEventListener('webglcontextlost', onContextLost);
      gl.domElement.removeEventListener('webglcontextrestored', onContextRestored);
    };
  }, [gl]);

  return null;
}

export default ContextLostHandler;