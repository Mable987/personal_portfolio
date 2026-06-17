import { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#0d1117",
        },
      },
      fpsLimit: 120,
      particles: {
        number: {
          value: 60,
        },
        color: {
          value: "#ffffff",
        },
        links: {
          enable: true,
          distance: 150,
          color: "#4fc3f7",
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.5,
        },
        opacity: {
          value: 0.4,
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return <Particles id="tsparticles" options={options} />;
}

export default ParticleBackground;