import React from "react";
import { GiConfirmed } from "react-icons/gi";
import "../styles/WhyHireMe.css";

const WhyHireMe = () => {
  return (
    <section>
      <h5>Saiba</h5>
      <h2>Por que me contratar?</h2>
      <div className='why-container'>
        <ul className='why-list'>
          <div className='list-item'>
            <GiConfirmed className='why-icon' />
            <li className='why-item'>
              <span>Porque</span> sou uma pessoa muito bem resolvida
              existencialmente
            </li>
          </div>
          <div className='list-item'>
            <GiConfirmed className='why-icon' />
            <li className='why-item'>
              <span>Porque</span> sou ávida pela aquisição e aplicação de novos
              conhecimentos
            </li>
          </div>
          <div className='list-item'>
            <GiConfirmed className='why-icon-1' />
            <li className='why-item'>
              <span>Porque</span> tenho uma visão espiritualizada da vida,
              facilidade em lidar com conflitos e me relaciono com as pessoas de
              forma construtiva, bem-humorada e harmônica
            </li>
          </div>
          <div className='list-item'>
            <GiConfirmed className='why-icon' />
            <li className='why-item'>
              <span>Porque</span> sou altamente comprometida e focada em
              resultados e, em tudo que me proponho a fazer, busco dar mais que
              meu melhor
            </li>
          </div>
          <div className='list-item'>
            <GiConfirmed className='why-icon' />
            <li className='why-item'>
              <span>Porque</span> não sou de mimimi e não sofro de sensibilidade
              exagerada em situações de pressão
            </li>
          </div>
          <div className='list-item'>
            <GiConfirmed className='why-icon-2' />
            <li className='why-item'>
              <span>Porque</span> sou muito criativa, o que me permite observar
              cada desafio sem condicionamentos e livre para buscar soluções
              menos convencionais
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default WhyHireMe;
