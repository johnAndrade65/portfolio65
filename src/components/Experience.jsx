import React from 'react'
import { Container } from 'react-bootstrap';
import wallpaper from '../images/programação-wallpaper.jpg';

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
                    <p className='text-center' >Vinicius Andrade começou na área da programação em 2020 como Game Dev com Unity 5 e C#, 
                    mas em 2021 ele migrou para o desenvolvimento Web, onde iniciou seus estudos como 
                    Front-end, dominando o HTML5, CSS3, Javascript, Bootstrap e a biblioteca ReactJS, onde estudou por mais de 
                    um ano de forma dedicada. <br/> Em 2022, ele percebeu que poderia usar sua experiência em C# para o Back-end e, 
                    por isso, estudou .NET 6 e MySQL de forma disciplinada para finalmente ser tornar um profissional FullStack.<br/>
                    Atualmente, ele busca por uma oportunidade para atuar como CLT ou PJ!.
                    </p>
                </div>
            </Container>
        </>
    )
}

export default Experience;