import React, { useCallback, useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

const ParticleBackground: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const optimizedOrangeParticles = {
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    particles: {
      color: { value: '#f97316' }, // Orange color
      move: {
        enable: true,
        speed: isMobile ? 0.4 : 1.0, // Optimized for performance
        angle: { value: 120, offset: 0 }, // Creates a swirling effect
        direction: 'none' as const,
        outModes: { default: 'bounce' as const },
      },
      number: {
        value: isMobile ? 15 : 40, // Lower particle count for mobile
        density: { enable: true, area: 800 },
      },
      opacity: { value: 0.6 },
      size: { value: isMobile ? 1.5 : 2.5, random: true },
      shape: { type: 'circle' },
      collisions: { enable: false }, // Optimized by disabling collisions
      links: { enable: false }, // No linking for better performance
    },
    detectRetina: false, // Disabled high-resolution rendering for efficiency
  };

  return (
    <Particles id="orangeParticles" init={particlesInit} className="absolute inset-0 z-0" options={optimizedOrangeParticles} />
  );
};

export default ParticleBackground;