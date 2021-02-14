import { useEffect, useRef } from 'react';

export default function SpotmapCanvas({ data }) {

  const { numberOfSpots } = data;
  console.log(numberOfSpots, data);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = '#676767';
    context.canvas.width = 8 * 60;
    context.canvas.height = 8 * (numberOfSpots / 60);
    console.log(context.canvas.width, context.canvas.height)
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, [numberOfSpots]);

  return <canvas ref={canvasRef} />;

}
