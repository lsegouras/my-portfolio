import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "../styles/Footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className='footer-links'>
        <li>
          <Link to='https://my-portfolio-lsegouras.vercel.app/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>Sobre Mim</Link>
        </li>
        <li>
          <Link to='/goals'>Meus Objetivos</Link>
        </li>
        <li>
          <Link to='/why'>Por Que Me Contratar</Link>
        </li>
        <li>
          <Link to='/skills'>Minhas Habilidades</Link>
        </li>
        <li>
          <Link to='/experience'>Minha Experiência</Link>
        </li>
        <li>
          <Link to='/contact'>Entre em Contato</Link>
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
          href='https://www.instagram.com/lausegouras'
          target='_blank'
          rel='noreferrer'
        >
          <FaInstagram className="socials-icon"/>
        </a>
        <a
          href='https://www.linkedin.com/in/laurasegouras'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedinIn className="socials-icon"/>
        </a>
      </div>
      <div className='copyright'>
        <small>{'\u00A9'} Laura Segouras. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;
