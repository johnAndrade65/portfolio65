import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

import BannerFrontEnd from '../images/banner-front-end.png';
import BannerBackEnd from '../images/banner-back-end.png';


const CarouselSkills = () => {
    return (
        <Container>
            <Carousel fade>
                <Carousel.Item className='carosel-item'>
                    <img
                        className="d-block w-100"
                        style={{borderRadius: '15px'}}
                        src={BannerFrontEnd}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-100"
                        style={{borderRadius: '15px'}}
                        src={BannerBackEnd}
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default CarouselSkills;