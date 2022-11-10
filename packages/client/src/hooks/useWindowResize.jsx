import { useState, useEffect } from 'react';

function useHasWindowResized() {

  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [ windowSize, setWindowSize ] = useState({
    width: undefined,
    previousWidth: undefined,
    height: undefined,
    previousHeight: undefined
  });

  useEffect(() => {

    // Handler to call on window resize
    function handleResize() {

      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        previousWidth: windowSize.width,
        height: window.innerHeight,
        previousHeight: windowSize.height
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [ windowSize.width, windowSize.height ]);

  return windowSize;
}

export default useHasWindowResized;
