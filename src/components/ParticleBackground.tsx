import React, { useCallback, useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

interface ParticleBackgroundProps {
  isDarkMode: boolean;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ isDarkMode }) => {
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

  const optimizedParticleOptions = {
    fullScreen: { enable: false },
    background: {
      color: { value: 'transparent' },
    },
    particles: {
      color: { value: '#f97316' },
      move: {
        enable: true,
        speed: isMobile ? 0.3 : 0.8, // Slower movement for better performance
        path: { enable: true, type: 'circle' }, // Swirling motion
        direction: 'clockwise',
        outModes: { default: 'bounce' as const },
      },
      number: {
        value: isMobile ? 15 : 40, // Fewer particles on mobile
        density: { enable: true, area: 800 },
      },
      opacity: { value: 0.6 },
      size: { value: isMobile ? 1.5 : 2.5, random: true },
      shape: { type: 'circle' },
      collisions: { enable: false }, // Disabling unnecessary effects
      links: { enable: false }, // No links to reduce strain
    },
    detectRetina: true,
  };

  return (
    <>
      <Particles id="optimizedParticles" init={particlesInit} className="absolute inset-0 z-0" options={optimizedParticleOptions} />
    </>
  );
};

export default ParticleBackground;