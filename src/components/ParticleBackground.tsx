import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const ParticleBackground: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const optimizedOrangeParticles = {
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    particles: {
      color: { value: "#f97316" },
      move: {
        enable: true,
        speed: 1.0,
        angle: { value: 120, offset: 0 },
        direction: "none" as const,
        outModes: { default: "bounce" as const },
      },
      number: {
        value: 50,
        density: { enable: true, area: 800 },
      },
      opacity: { value: 0.7 },
      size: { value: 2.5, random: true },
      shape: { type: "circle" },
      collisions: { enable: false },
      links: { enable: true },
    },
    detectRetina: true,
  };

  return !isMobile ? (
    <Particles
      id="orangeParticles"
      init={particlesInit}
      className="absolute inset-0 z-0"
      options={optimizedOrangeParticles}
    />
  ) : null;
};

export default ParticleBackground;
