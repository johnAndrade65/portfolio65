import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

import { ReactComponent as FaCsharp } from '../images/csharp2.svg';
import { ReactComponent as FaJavascript } from '../images/javascript-logo.svg';
import { ReactComponent as FaHtml5 } from '../images/html5.svg';
import { ReactComponent as FaCss3 } from '../images/css3.svg';
import { ReactComponent as FaBootstrap } from '../images/bootstrap.svg';
import { ReactComponent as FaReactJS } from '../images/react-js.svg';
import { ReactComponent as FaFigma } from '../images/figma-svg.svg';
import { ReactComponent as DotNET } from '../images/dotnet-logo.svg';
import { ReactComponent as FaMySQL } from '../images/mysql.svg';
import { ReactComponent as FaSQLServer } from '../images/sql-server.svg';


const CarouselSkills = () => {
    return (
        <Container>
            <Carousel fade>
                <Carousel.Item className='carousel-item'>
                    <Carousel.Caption className='carousel-caption'>
                        <FaHtml5 className='skill' />
                        <FaCss3 className='skill' />
                        <FaJavascript className='skill' />
                        <FaBootstrap className='skill' />
                        <FaReactJS className='skill' />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <Carousel.Caption className='carousel-caption'>
                        <FaCsharp className='skill' />
                        <DotNET className='skill' />
                        <FaMySQL className='skill' />
                        <FaSQLServer className='skill' />
                        <FaFigma className='skill'/>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default CarouselSkills;