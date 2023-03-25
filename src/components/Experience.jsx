import React from 'react'
import { Container } from 'react-bootstrap';
import wallpaper from '../images/programação-wallpaper.png';

const Experience = () => {
    return (
        <>
            <h3 className='text-center mt-2' id='experience'>Experiência</h3>
            <Container className='Resume container-fluid col-12 centered' id='resume'>
                <div className='profile-image'>
                    <img className='img-fluid' src={wallpaper} alt="" />
                </div>
                <div className='resume-text'>
                    <h2 className='text-center mt-2' ><span>+2 Anos!</span></h2>
                    <p className='text-center' >
                        Vinicius Andrade é um programador apaixonado pelo desenvolvimento de software. Ele começou em 2020 como
                        Game Dev em Unity 5 e C#, mas rapidamente migrou para o desenvolvimento web, estudando Front-end com
                        HTML5, CSS3, Javascript, Bootstrap e ReactJS por mais de um ano. Em 2022, ele se dedicou ao estudo de
                        .NET 6 e MySQL para se tornar um profissional FullStack completo e altamente qualificado. Atualmente,
                        Vinicius é um Freelancer em busca de uma oportunidade em tempo integral. Com sua paixão e habilidades
                        excepcionais, ele é o candidato ideal para elevar seus projetos a um novo patamar.
                    </p>
                </div>
            </Container>
        </>
    )
}

export default Experience;