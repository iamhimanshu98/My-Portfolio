import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

interface ParticleBackgroundProps {
  isDarkMode: boolean;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ isDarkMode }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      {/* Orange Particles - Always Visible */}
      <Particles
        id="orangeParticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: 'transparent',
            },
          },
          particles: {
            color: { value: '#f97316' },
            move: {
              enable: true,
              speed: 1,
              outMode: 'bounce',
              random: false,
              straight: false,
            },
            number: {
              value: 60,
              density: { enable: true, area: 800 },
            },
            opacity: { value: 0.7 },
            size: { value: 3, random: true },
            shape: { type: 'circle' },
            collisions: { enable: true },
            links: { enable: false },
          },
          detectRetina: true,
        }}
      />

      {/* White Particles - Only in Dark Mode */}
      {isDarkMode && (
        <Particles
          id="whiteParticles"
          init={particlesInit}
          className="absolute inset-0 z-0"
          options={{
            fullScreen: { enable: false },
            background: {
              color: { value: 'transparent' },
            },
            particles: {
              color: { value: '#ffffff' },
              move: {
                enable: true,
                speed: 0.6,
                outMode: 'bounce',
                random: true,
                straight: false,
              },
              number: {
                value: 40,
                density: { enable: true, area: 1000 },
              },
              opacity: { value: 0.6 },
              size: { value: 2, random: true },
              shape: { type: 'circle' },
              collisions: { enable: false },
              links: { enable: true },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
};

export default ParticleBackground;
