import React from "react";
import "../styles/SkillsBar.css"

const SkillsBarBack = () => {
  return (
    <div className='skillbar-container'>
        <div className='skillbar-box-back'>
          <span className='skillbar-title'>Node.js **</span>
          <div className='skillbar'>
            <span className='skillbar-perc nodejs'>
              <span className='perc-tip'>30%</span>
            </span>
          </div>
        </div>
        <div className='skillbar-box-back'>
          <span className='skillbar-title'>Python **</span>
          <div className='skillbar'>
            <span className='skillbar-perc python'>
              <span className='perc-tip'>30%</span>
            </span>
          </div>
        </div>
        <div className='skillbar-box-back'>
          <span className='skillbar-title'>MongoDB **</span>
          <div className='skillbar'>
            <span className='skillbar-perc mongodb'>
              <span className='perc-tip'>40%</span>
            </span>
          </div>
        </div>
        <div className='skillbar-box-back'>
          <span className='skillbar-title'>PostgreSQL **</span>
          <div className='skillbar'>
            <span className='skillbar-perc postgresql'>
              <span className='perc-tip'>35%</span>
            </span>
          </div>
        </div>
    </div>
  );
};

export default SkillsBarBack;