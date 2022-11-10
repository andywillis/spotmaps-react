import { useEffect, useRef, useState } from 'react';

import styles from './index.module.css';

/**
 * SpotmapCanvas
 *
 * @param {object} props
 * @return {object} JSX
 */
function SpotmapCanvas(props) {

  const { numberOfSpots, hexData, mainWidth } = props;

  const [ spotSize, setSpotSize ] = useState(8);

  const canvasRef = useRef(null);

  useEffect(() => {
    setSpotSize(mainWidth < 360 ? 2 : Math.floor(mainWidth / 60));
  }, [ mainWidth ]);

  useEffect(() => {

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = '#676767';
    context.canvas.width = (spotSize * 60);
    context.canvas.height = spotSize * (numberOfSpots / 60);

    let count = 0;
    let xpos = 0;
    let ypos = 0;

    for (let i = 0; i < hexData.length; i += 6) {

      const r = parseInt(hexData.slice(i, i + 2), 16);
      const g = parseInt(hexData.slice(i + 2, i + 4), 16);
      const b = parseInt(hexData.slice(i + 4, i + 6), 16);

      if (count % 60 === 0 && count !== 0) {
        ypos += spotSize;
        xpos = 0;
        count = 0;
      }

      context.beginPath();
      context.rect(xpos, ypos, spotSize, spotSize);
      context.fillStyle = `rgba(${r}, ${g}, ${b}, 255)`;
      context.fill();
      context.lineWidth = spotSize > 4 ? 0.5 : 0.2;
      context.strokeStyle = 'rgba(0, 0, 0, 255)';
      context.stroke();
      xpos += spotSize;
      count++;

    }

  }, [ numberOfSpots, hexData, spotSize ]);

  return (
    <canvas className={styles.spotmap} ref={canvasRef} />
  );
}

export default SpotmapCanvas;
