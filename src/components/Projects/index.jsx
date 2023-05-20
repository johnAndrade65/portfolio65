import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

import Projeto1 from '../../assets/projeto-1.png';
import Projeto2 from '../../assets/projeto-2.png';
import Projeto3 from '../../assets/projeto-3.png';
import Projeto4 from '../../assets/projeto-4.png';


const Projects = () => {
  const openPageProfileGitHub = () => {
    window.open('https://github.com/johnAndrade65', '_blank');
  }

  return (
    <>
      <div className='projects-container d-flex flex-column align-items-center justify-content-center' data-aos="fade-up">
        <h3 className='text-center' id='projects'>Projetos</h3>
        <Container className='carousel-projects-container'>
          <Carousel fade>
            <Carousel.Item className='pb-2'>
              <img
                className='d-block w-100'
                style={{ borderRadius: '15px' }}
                src={Projeto1}
                alt='Projects'
              />
            </Carousel.Item>
            <Carousel.Item className='pb-2'>
              <img
                className='d-block w-100'
                style={{ borderRadius: '15px' }}
                src={Projeto2}
                alt='Projects'
              />
            </Carousel.Item>
            <Carousel.Item className='pb-2'>
              <img
                className='d-block w-100'
                style={{ borderRadius: '15px' }}
                src={Projeto3}
                alt='Projects'
              />
            </Carousel.Item>
            <Carousel.Item className='pb-2'>
              <img
                className='d-block w-100'
                style={{ borderRadius: '15px' }}
                src={Projeto4}
                alt='Projects'
              />
            </Carousel.Item>
          </Carousel>
          <div className='d-flex flex-column align-items-center justify-content-center'>
            <h6>Conheça alguns dos meus projetos!</h6>
            <button onClick={openPageProfileGitHub}>Ver mais</button>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Projects;