import React from 'react';
import { Container } from 'react-bootstrap';
import CarouselSkills from '../CarouselSkills';

const Skills = () => {
  return (
    <Container className='skills-component mt-2' id='skills' data-aos='fade-up'>
      <h3 className='text-center'>Habilidades</h3>
      <CarouselSkills/>
    </Container>
  )
}
export default Skills