import React from "react";
import project1 from "../assets/project1.jpg";
import "../styles/Portfolio.css";

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h5>Conheça</h5>
      <h2>Meu Portfolio</h2>

      <div className='portfolio-container'>
        <article className='portfolio-item'>
          <div className='portfolio-item-img'>
            <img src={project1} alt='project 1' />
            <h5>APP de Portfólio de Trabalho</h5>
          </div>
          <div className='project-info'>
            <p>
              <br />
              Descrição: Desenvolvimento desse próprio app do meu portfólio de
              trabalho.
            </p>
            <p>
              Tecnologias utilizadas: HTML, CSS, Javascript, React, Bootstrap e
              bibliotecas do React, como: react-icons e react-ts-particles,
              react-typed, react - vertical - timeline - component e emailjs.
            </p>
          </div>
          <div className='portfolio-links'>
            <a
              href='https://github.com/lsegouras'
              className='portfolio-link'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            <a
              href='http://drible.com/Aliens_pixels'
              className='portfolio-link'
              target='_blank'
              rel='noreferrer'
            >
              Demo
            </a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className='portfolio-item-img-c'>
            <img src={project1} alt='project 1' />
            <h5>APP de Registro de Usuários com API de Usuários</h5>
          </div>
          <div className='project-info-c'>
            <p>
              Descrição: desenvolvimento de um app de registro de usuários
              (login), com interface para preenchimento de formulário pelo
              usuário e botão para deletar o usuário, com deploy no Netlify.
              Desenvolvimento de API simples de registro de usuários.
            </p>
            <p>
              Tecnologias utilizadas: front-end – HTML, CSS, Javascript e React
              / back-end: Node.js e Express.
            </p>
          </div>
          <div className='portfolio-links-c'>
            <a
              href='https://github.com/lsegouras'
              className='portfolio-link'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            <a
              href='http://drible.com/Aliens_pixels'
              className='portfolio-link'
              target='_blank'
              rel='noreferrer'
            >
              Demo
            </a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className='portfolio-item-img'>
            <img src={project1} alt='project 1' />
            <h5>Site Institucional</h5>
          </div>
          <div className='project-info'>
            <p>
            <br />
              Descrição: Desenvolvimento de site institucional responsivo de
              acordo com especificações de layout e cores solicitados pelo
              cliente.
            </p>
            <p>Tecnologias utilizadas: HTML, CSS e Javascript.</p>
          </div>
          <div className='portfolio-links'>
            <a
              href='https://github.com/lsegouras'
              className='portfolio-link'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            <a
              href='http://drible.com/Aliens_pixels'
              className='portfolio-link'
              target='_blank'
              rel='noreferrer'
            >
              Demo
            </a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className='portfolio-item-img'>
            <img src={project1} alt='project 1' />
            <h5>APP de Conselhos</h5>
          </div>
          <div className='project-info'>
            <p>
            <br />
              Descrição: desenvolvimento de app de conselhos aleatórios
              consumindo API externa (https://api.adviceslip.com/advice)
            </p>
            <p>Tecnologias Utilizadas: HTML, CSS e Javascript.</p>
          </div>
          <div className='portfolio-links'>
            <a
              href='https://github.com/lsegouras'
              className='portfolio-link'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            <a
              href='http://drible.com/Aliens_pixels'
              className='portfolio-link'
              target='_blank'
              rel='noreferrer'
            >
              Demo
            </a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className='portfolio-item-img'>
            <img src={project1} alt='project 1' />
            <h5>APP de validação de formulário</h5>
          </div>
          <div className='project-info'>
          <br />
            <p>
              Descrição: desenvolvimento de um app de validação de formulário.
            </p>
            <p>Tecnologias Utilizadas: HTML, CSS e Javascript.</p>
          </div>
          <div className='portfolio-links'>
            <a
              href='https://github.com/lsegouras'
              className='portfolio-link'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            <a
              href='http://drible.com/Aliens_pixels'
              className='portfolio-link'
              target='_blank'
              rel='noreferrer'
            >
              Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
