import React from "react";
import "../styles/Header.css";
import Typed from "react-typed";
import CVCtn from "../utils/CV";

const Header = () => {
  return (
    <div className='header-wraper'>
      <div className='main-info'>
        <h1>Desenvolvimento Web</h1>
        <Typed
          className='typed-text'
          strings={[
            "Web Developer",
            "Front-End Developer",
            "Fullstack Developer",
            "Back-End Developer",
          ]}
          typeSpeed={40}
          backSpeed={70}
          loop
        />
          <CVCtn />
      </div>
    </div>
  );
};

export default Header;
