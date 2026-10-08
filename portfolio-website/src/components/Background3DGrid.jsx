import { useEffect, useState } from 'react';

export default function Background3DGrid() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Dynamic Cursor Spotlight Light */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.07), transparent 80%)`,
        }}
      />

      {/* Cyberpunk Grid Background */}
      <div className="cyber-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Ambient Gradient Blobs */}
      <div className="absolute -top-40 -left-40 h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-violet-600/10 blur-[140px]" />
      <div className="absolute bottom-20 left-1/4 h-[500px] w-[500px] rounded-full bg-sky-500/08 blur-[120px]" />
    </div>
  );
}
