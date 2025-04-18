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

  const orangeParticleOptions = {
    fullScreen: { enable: false },
    background: {
      color: { value: 'transparent' },
    },
    particles: {
      color: { value: '#f97316' },
      move: {
        enable: true,
        speed: isMobile ? 0.6 : 1.2,
        outModes: { default: 'bounce' as const }

      },
      number: {
        value: isMobile ? 25 : 60,
        density: { enable: true, area: 800 },
      },
      opacity: { value: 0.7 },
      size: { value: isMobile ? 2 : 3, random: true },
      shape: { type: 'circle' },
      collisions: { enable: false },
      links: { enable: false },
    },
    detectRetina: true,
  };

  const whiteParticleOptions = {
    fullScreen: { enable: false },
    background: {
      color: { value: 'transparent' },
    },
    particles: {
      color: { value: '#ffffff' },
      move: {
        enable: true,
        speed: isMobile ? 0.3 : 0.6,
        outModes: { default: 'bounce' as const },
        random: true,
      },

      number: {
        value: isMobile ? 15 : 40,
        density: { enable: true, area: 1000 },
      },
      opacity: { value: 0.5 },
      size: { value: isMobile ? 1.5 : 2, random: true },
      shape: { type: 'circle' },
      collisions: { enable: false },
      links: { enable: true, distance: isMobile ? 80 : 120 },
    },
    detectRetina: true,
  };

  return (
    <>
      <Particles id="orangeParticles" init={particlesInit} className="absolute inset-0 z-0" options={orangeParticleOptions} />
      {isDarkMode && (
        <Particles id="whiteParticles" init={particlesInit} className="absolute inset-0 z-0" options={whiteParticleOptions} />
      )}
    </>
  );
};

export default ParticleBackground;
