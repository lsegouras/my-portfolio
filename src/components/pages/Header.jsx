import React from "react";
import "../styles/Header.css";
import { useTypewriter } from 'react-simple-typewriter'
import CVCtn from "../utils/CV";
import Particles from "../utils/HeaderDesign";

const Header = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "Desenvolvedora Web Jr.",
      "Desenvolvedora Frontend Jr.",
      "Desenvolvedora Fullstack Jr.",
      "Desenvolvedora Backend Jr.",
    ],
    loop: {},
    typeSpeed: 40,
    deleteSpeed: 70
  })
  return (
    <div className='header-wraper'>
      <div className='particles-container'>
        <Particles />
      </div>
      <div className='main-info'>
        <h1>Desenvolvimento Web</h1>
        <span className="typed-text">{typeEffect}</span>
        <CVCtn />
      </div>
    </div>
  );
};

export default Header;
