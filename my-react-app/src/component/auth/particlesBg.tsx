import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBg() {
  const options = useMemo(
    () => ({
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
        },
        modes: { repulse: { distance: 100 } },
      },
      particles: {
        color: { value: "#4C7CF0" },
        links: {
          color: "#4C7CF0",
          distance: 150,
          enable: true,
        },
        move: { enable: true, speed: 1 },
        number: { value: 50 },
        opacity: { value: 0.5 },
        size: { value: { min: 1, max: 5 } },
      },
      background: {
        color: "transparent",
      },
    }),
    []
  );

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // 轻量版即可
    });
  }, []);

  return (
    <div className="absolute inset-0 z-20">
      <Particles id="tsparticles" options={options} />
    </div>
  );
}
