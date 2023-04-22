import React from 'react'
import { Container } from 'react-bootstrap';
import wallpaper from '../../assets/programação-wallpaper.png';

const Experience = () => {
    return (
        <>
            <article>
                <h3 className='text-center mt-2' id='experience' data-aos='fade-up'>Experiência</h3>
                <Container className='Resume' id='resume' data-aos='fade-up'>
                    <div className='profile-image'>
                        <img className='img-fluid' src={wallpaper} alt="" />
                    </div>
                    <div className='resume-text pt-2 pb-2'>
                        <h2 className='text-center mt-2' ><span>+2 Anos!</span></h2>
                        <p className='text-center' >
                        <strong>Vinicius Andrade</strong> é um programador apaixonado pelo desenvolvimento de software. 
                        Ele começou em 2020 como <i>Game Dev</i> em Unity 5 e C#, mas rapidamente migrou para o desenvolvimento web, 
                        estudando Front-end com HTML5, CSS3, Javascript, Bootstrap e ReactJS por mais de um ano. Em 2022, ele se 
                        dedicou ao estudo de .NET 6 e MySQL para se tornar um profissional <i>FullStack</i> completo e altamente 
                        qualificado. 
                        Atualmente, Vinicius é um <i>Freelancer</i> em busca de uma oportunidade em tempo integral. 
                        Com sua paixão e habilidades excepcionais, ele é o candidato ideal para elevar sua equipe a um 
                        novo patamar!.
                        </p>
                    </div>
                </Container >
            </article>
        </>
    )
}

export default Experience;