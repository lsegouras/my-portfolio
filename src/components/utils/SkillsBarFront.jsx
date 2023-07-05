import React from "react";
import "../styles/SkillsBar.css"

const SkillsBarFront = () => {
  return (
    <div className='skillbar-container'>
        <div className='skillbar-box-front'>
          <span className='skillbar-title'>HTML*</span>
          <div className='skillbar'>
            <span className='skillbar-perc html'>
              <span className='perc-tip'>80%</span>
            </span>
          </div>
        </div>
        <div className='skillbar-box-front'>
          <span className='skillbar-title'>CSS *</span>
          <div className='skillbar'>
            <span className='skillbar-perc css'>
              <span className='perc-tip'>75% </span>
            </span>
          </div>
        </div>
        <div className='skillbar-box-front'>
          <span className='skillbar-title'>JavaScript **</span>
          <div className='skillbar'>
            <span className='skillbar-perc javascript'>
              <span className='perc-tip'>50% </span>
            </span>
          </div>
        </div>
        <div className='skillbar-box-front'>
          <span className='skillbar-title'>Bootstrap *</span>
          <div className='skillbar'>
            <span className='skillbar-perc bootstrap'>
              <span className='perc-tip'>65% </span>
            </span>
          </div>
        </div>
        <div className='skillbar-box-front'>
          <span className='skillbar-title'>React **</span>
          <div className='skillbar'>
            <span className='skillbar-perc react'>
              <span className='perc-tip'>65% </span>
            </span>
          </div>
        </div>
    </div>
      
  );
};

export default SkillsBarFront;
