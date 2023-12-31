import React, { useEffect, useRef } from 'react';

const Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
	const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext('2d');
	if (!context) {
      return;
    }
	
    const draw = () => {
      	context.clearRect(0, 0, canvas.width, canvas.height);

      	requestAnimationFrame(draw);
    };

    draw();

    }, []);

  return <canvas ref={canvasRef} width={400} height={400} />;
};

export default Canvas;