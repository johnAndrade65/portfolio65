import React from 'react';
import profileImage from '../images/profile.png';
import { Container } from 'react-bootstrap';

const Resume = () => {

    return (
        <Container className='Resume container-fluid col-12 centered' id='resume'>
            <div className='profile-image'>
                <img className='img-fluid' src={profileImage} alt="" />
            </div>
            <div className='resume-text'>
                <h2 className='text-center mt-1' >Vinicius Andrade</h2>
                <p className='text-center' >Vinicius Andrade é um desenvolvedor Full Stack Jr com domínio em React JS e .NET6, 
                como linguagens de programação ele ama trabalhar com Javascript e C#. Além de suas habilidades técnicas, ele é conhecido 
                por suas soft skills, que incluem agilidade, comunicação, resolução de problemas e flexibilidade. Vinicius é um 
                profissional qualificado, capaz de trabalhar bem em equipe e resolver desafios complexos de forma eficiente,
                 o que o torna uma valiosa adição a qualquer projeto de desenvolvimento de software.
                </p>
            </div>
        </Container>
    )
}

export default Resume;