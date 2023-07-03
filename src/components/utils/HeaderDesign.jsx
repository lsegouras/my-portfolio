import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "../styles/HeaderDesign.css"

const HeaderDesign = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
      <Particles
        id='tsparticles' className="particles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 80,
          fullScreen: {
            enable: false,
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.8,
              },
            },
          },
          particles: {
            color: {
              value: "#F2C6A0",
            },
            links: {
              color: "#F2C6A0",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 2,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: { min: 1, max: 4 },
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1200,
              },
              value: 120,
            },
            opacity: {
              value: { min: 0.3, max: 0.7 },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
  );
};

export default HeaderDesign;
