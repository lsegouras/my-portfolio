import React from "react";
import Curriculo from "../assets/cv.pdf";
import "../styles/CV.css";

const CV = () => {
  return (
    <div className='cnt'>
      <a className='contact-btn' href='#Contatos'>
        Fale Comigo!
      </a>
      <a className='contact-btn' href={Curriculo} download>
        Baixar CV
      </a>
    </div>
  );
};

export default CV;
