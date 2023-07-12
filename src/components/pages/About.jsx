import React from "react";
import "../styles/About.css";
import { BsBagHeart } from "react-icons/bs";
import { BiSolidBookOpen } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import myPicture from "../assets/my-picture2.jpg"

const About = () => {
  return (
    <section id='about'>
      <h5>Conheça</h5>
      <h2>Sobre Mim</h2>

      <div className='container about-container'>
        <div className='about-me'>
          <div className='about-me-img'>
            <img src={myPicture} alt='minha foto' />
          </div>
        </div>

        <div className='about-content'>
          <div className='about-cards'>
            <article className='about-card'>
              <BsBagHeart className='about-icon' />
              <h5>Experiência</h5>
              <small>1+ ano realizando projetos</small>
            </article>
            <article className='about-card'>
              <BiSolidBookOpen className='about-icon' />
              <h5>Estudos</h5>
              <small>2500+ horas de estudo</small>
            </article>
            <article className='about-card'>
              <FaLaptopCode className='about-icon' />
              <h5>Tecnologias</h5>
              <small>8+ tecnologias aprendidas</small>
            </article>
          </div>
          <p>
            Sou uma profissional experiente e comprometida, com sólida vivência como Tech Recruiter. Apaixonada por desenvolvimento web, estou atualmente bastante empenhada em minha transição de carreira para Desenvolvedora Front-End ou Full Stack. Durante minha jornada de
            aprendizado, me concentrei em me familiarizar com as tecnologias HTML, CSS e JavaScript, também aprendi a trabalhar com frameworks como o React, algumas bibliotecas como JQuery e Bootstrap e consumo de APIs. Nesse sentido, venho realizando diversos projetos pessoais dentro dessas tecnologias e conclui um trabalho como freelancer, no
            qual desenvolvi um site para uma consultoria de gestão ambiental.Recentemente tenho investido em ampliar meus conhecimentos em Back-end, estudando com maior ênfase Node.js, TypeScript, Python, PHP e bancos de dados relacionais e não relacionais. Tenho fluência no idioma inglês, com formação em Administração de Empresas e Psicologia, além
            de estar a poucos passos de concluir a graduação em Análise e Desenvolvimento de Sistemas. Meu perfil resiliente, experiência e habilidade em me relacionar com pessoas em diferentes contextos me proporcionam sólida capacitação em comunicação e colaboração em equipe. Versatilidade e determinação para superar desafios e cumprir metas.
          </p>
          <a className="fale-btn" href="#Contatos">Fale Comigo!</a>
        </div>
      </div>
    </section>
  );
};

export default About;
