import React, { useEffect, useRef, useState } from 'react';

const FireWork = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
		if (!canvas) return;

        const context = canvas.getContext('2d');
	
		const fireWork = () => {
			
		}
	  
    },[canvasRef])

    return <canvas ref={canvasRef} />;
};

export default FireWork;