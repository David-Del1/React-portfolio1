import React from 'react';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';
import ServicesSection from '../components/ServicesSection';

import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function About() {
  return (
    <div className="About">
      <Title title={'About Me'} span={'About Me'}/>
      <ImageSection />
      <Title title={'My Skills'} span={'My Skills'} />
      <div className="skills-container">
        <SkillsSection skill={'Javascript'} progress={'70%'} width={'70%'}/>
        <SkillsSection skill={'Javascript'} progress={'70%'} width={'70%'}/>
        <SkillsSection skill={'Javascript'} progress={'70%'} width={'70%'}/>
        <SkillsSection skill={'Javascript'} progress={'70%'} width={'70%'}/>
        <SkillsSection skill={'Javascript'} progress={'70%'} width={'70%'}/>
        
      </div>

      <Title title={'Services'} span={'Services'} />

      <div className="services-container">
        <ServicesSection image={design} title={'Web Design'} text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt iusto nobis corporis ipsum voluptas qui aperiam cum similique, officiis blanditiis ut ducimus ea mollitia. Non expedita nulla debitis adipisci veniam.'}/>
        <ServicesSection image={intelligence} title={'Intel'} text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt iusto nobis corporis ipsum voluptas qui aperiam cum similique, officiis blanditiis ut ducimus ea mollitia. Non expedita nulla debitis adipisci veniam.'}/>
        <ServicesSection image={gamedev} title={'Development'} text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt iusto nobis corporis ipsum voluptas qui aperiam cum similique, officiis blanditiis ut ducimus ea mollitia. Non expedita nulla debitis adipisci veniam.'}/>
      </div>
    </div>
  );
}

export default About;
