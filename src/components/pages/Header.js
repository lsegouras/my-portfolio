import React from "react";
import "../styles/Header.css";
import Typed from "react-typed";
import Nav from 'react-bootstrap/Nav';

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
        <Nav.Link className="header-contact-btn" href="#Contato">Fale comigo!!!</Nav.Link>
      </div>
    </div>
  );
};

export default Header;
