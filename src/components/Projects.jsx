import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

import Projeto1 from '../images/projeto-1.png';
import Projeto2 from '../images/projeto-2.png';
import Projeto3 from '../images/projeto-3.png';


const Projects = () => {
  const openPageProfileGitHub = () => {
    window.open("https://github.com/johnAndrade65", "_blank");
  }

  return (
    <>
      <h3 className='text-center mt-2 mb-2' id='projects'>Projetos</h3>
      <div className='projects-container'>
        <Container className='projects-container-center'>
          <div className='projects-img-container'>
            <Carousel fade>
              <Carousel.Item className='carousel-projects'>
                <img
                  className="d-block w-100 img-fluid rounded"
                  style={{ borderRadius: '15px' }}
                  src={Projeto1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid rounded"
                  style={{ borderRadius: '15px' }}
                  src={Projeto2}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  style={{ borderRadius: '15px' }}
                  src={Projeto3}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className='projects-text-container mt-1'>
            <h6>Conheça alguns dos meus projetos!</h6>
            <button onClick={openPageProfileGitHub}>Ver mais</button>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Projects;