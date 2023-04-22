import React from 'react';
import profileImage from '../../assets/profile.png';
import { Container } from 'react-bootstrap';

const Resume = () => {

    return (
        <Container id='resume' data-aos='fade-up'>
            <main>
                <article className='Resume'>
                    <div className='profile-image'>
                        <img className='img-fluid' src={profileImage} alt="" />
                    </div>
                    <div className='resume-text'>
                        <h2 className='text-center mt-1' >Vinicius Andrade</h2>
                        <p className='text-center' ><strong>Vinicius Andrade</strong> é um desenvolvedor <strong>Full Stack Jr</strong> com
                            domínio em <strong>React JS</strong> e <strong>.NET6</strong>, como linguagens de programação ele ama
                            trabalhar com <strong>Javascript</strong> e <strong>C#</strong>. Além de suas habilidades técnicas, ele é
                            conhecido por suas <strong>soft skills</strong>, que incluem agilidade, comunicação, resolução de problemas
                            e flexibilidade. Vinicius é um profissional qualificado, capaz de trabalhar bem em equipe e resolver desafios
                            complexos de forma eficiente, o que o torna uma valiosa adição a qualquer projeto de desenvolvimento de software.
                        </p>
                    </div>
                </article>
            </main>
        </Container>
    )
}

export default Resume;