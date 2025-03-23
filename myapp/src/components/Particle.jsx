import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Slim version for better performance
import { useSelector } from "react-redux";

const Particle = ({ children }) => {
  const [init, setInit] = useState(false);
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particleColor = "#6B7280"; // Gray-500
  const linkColor = "#6B7280"; // Gray-500

  const options = useMemo(
    () => ({
      background: {
        color: "transparent",
      },
      fullScreen: {
        enable: false,
      },
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: particleColor,
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5,
          random: true,
        },
        size: {
          value: { min: 1, max: 5 },
        },
        links: {
          enable: true,
          distance: 150,
          color: linkColor,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          outModes: {
            default: "out",
          },
        },
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <div className="relative">
      <Particles
        id="tsparticles"
        options={options}
        className="absolute inset-0 z-0"
      />
      {children}
    </div>
  );
};

export default Particle;
