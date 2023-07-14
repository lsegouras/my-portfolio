import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer>
      <ul className='footer-links'>
        <li>
          <a href='../../../public/index.html'>Home</a>
        </li>
        <li>
          <a href='#About'>Sobre Mim</a>
        </li>
        <li>
          <a href='#Goals'>Meus Objetivos</a>
        </li>
        <li>
          <a href='#WhyHireMe'>Por Que Me Contratar</a>
        </li>
        <li>
          <a href='#Skills'>Minhas Habilidades</a>
        </li>
        <li>
          <a href='#Experience'>Minha Experiência</a>
        </li>
        <li>
          <a href='#Contact'>Entre em Contato</a>
        </li>
      </ul>

      <div className='footer-socials'>
        <a
          href='https://www.facebook.com/laura.segouras'
          target='_blank'
          rel='noreferrer'
        >
          <FaFacebook className="socials-icon" />
        </a>
        <a
          href='https://www.facebook.com/laura.segouras'
          target='_blank'
          rel='noreferrer'
        >
          <FaInstagram className="socials-icon"/>
        </a>
        <a
          href='https://www.facebook.com/laura.segouras'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedinIn className="socials-icon"/>
        </a>
      </div>
      <div className='copyright'>
        <small>{'\u00A9'} Laura Segouras. Todos os direitos reservados</small>
      </div>
    </footer>
  );
};

export default Footer;
