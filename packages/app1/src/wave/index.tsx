import React, { useEffect, useRef, useState } from 'react';
import { WaveGroup } from './waveGroup';

const Wave: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [waveGroup, setWaveGroup] = useState<WaveGroup | null>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    setWaveGroup(new WaveGroup());
  }, []);

  useEffect(() => {
    if (!waveGroup) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const stageWidth = window.innerWidth;
      const stageHeight = window.innerHeight;

      canvas.width = stageWidth * 2;
      canvas.height = stageHeight * 2;
      ctx.scale(2, 2);

      waveGroup.resize(stageWidth, stageHeight);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      waveGroup.draw(ctx);
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [waveGroup]);

  return <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh', display: 'block' }} />;
};

export default Wave;