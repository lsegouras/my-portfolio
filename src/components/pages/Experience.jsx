import React from "react";
import { ReactComponent as WorkIcon } from "../assets/work-icon.svg";
import { ReactComponent as SchoolIcon } from "../assets/school-icon.svg";
import timelineObjects from "../utils/timelineObjects";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css"

const Experience = () => {
  let workIconStyles = { background: "var(--medium-pink)"};
  let schoolIconStyles = { background: "var(--dark-pink)" };

  return (
    <section id="experience">
      <h5>Conheça</h5>
      <h2>Minha Experiência</h2>
      <div className='timeline'>
        <h1 className='title'>Linha do Tempo</h1>
        <VerticalTimeline>
          {timelineObjects.map((element) => {
            let isWorkIcon = element.icon === "work";

            return (
              <VerticalTimelineElement
                className="timelineElement"
                contentStyle={{ background: 'var(--medium-pink)', color: 'var(--medium-black)' }}
                contentArrowStyle={{ borderRight: '7px solid var(--medium-pink)' }}
                lineColor={ 'var(--medium-pink)' }
                key={element.key}
                date={element.date}
                dateClassName='date'
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
                <h3 className='vertical-timeline-element-site'>
                  {element.site}
                </h3>
                <h4 className='vertical-timeline-element-title'>
                  {element.title}
                </h4>
                <h5 className='vertical-timeline-element-subtitle'>
                  {element.location}
                </h5>
                <p id='description'>{element.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
