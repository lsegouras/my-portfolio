import React from "react";
import SkillsBarFront from "../utils/SkillsBarFront";
import SkillsBarBack from "../utils/SkillsBarBack";
import "../styles/Skills.css";
import { BsCodeSquare } from "react-icons/bs";
import { AiOutlineCloudServer } from "react-icons/ai";
import { BiWinkSmile } from "react-icons/bi";

const Skills = () => {
  return (
    <section id='skills'>
      <h5>Conheça</h5>
      <h2>Minhas Habilidades</h2>

      <div className='container skills-container'>
        <div className='skill-card frontend'>
          <BsCodeSquare className='skills-icon' />
          <h3>Frontend Development</h3>
          <SkillsBarFront />
          <div className='obs'>
            <p className='obs'>* Ainda estudando</p>
            <p>** Estudando com maior foco e empenho</p>
          </div>
        </div>
        <div className='skill-card backend'>
          <AiOutlineCloudServer className='skills-icon' />
          <h3>Backend Development</h3>
          <SkillsBarBack />
          <div className='obs'>
            <p className='obs'>* Ainda estudando</p>
            <p>** Estudando com maior foco e empenho</p>
          </div>
        </div>
        <div className='skill-card soft-skills'>
          <BiWinkSmile className='skills-icon' />
          <h3>Soft Skills</h3>
          <ul>
            <li>Curiosidade e capacidade para Autoaprendizado;</li>
            <li>
              Versatilidade, concentração e determinação para completar tarefas complexas;
            </li>
            <li>Habilidade para agir sob pressão e resolver problemas;</li>
            <li>Alta capacidade de comunicação e colaboração em equipe;</li>
            <li>Constante aprendizado das tecnologias mais atuais.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
