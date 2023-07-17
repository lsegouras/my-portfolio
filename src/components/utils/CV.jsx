import React from "react";
import Curriculo from "../assets/cv.pdf";
import "../styles/CV.css";
import { Link } from "react-router-dom";

const CV = () => {
  return (
    <div className='cnt'>
      <Link to="/contact" className='contact-btn'>
        Fale Comigo!
      </Link>
      <a className='contact-btn' href={Curriculo} download>
        Baixar CV
      </a>
    </div>
  );
};

export default CV;
