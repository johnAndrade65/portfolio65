import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <>
            <Navbar className='header' variant="dark" expand="lg">
                <Container className='d-flex justify-content-between'>
                    <Navbar.Brand href="#home" className='fs-2'>Portfolio65</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-left">
                            <Nav.Link href="#resume">Resumo</Nav.Link>
                            <Nav.Link href="#skills">Habilidades</Nav.Link>
                            <Nav.Link href="#projects">Projetos</Nav.Link>
                            <Nav.Link href="#experience">Experiência</Nav.Link>
                            <Nav.Link href="#link">Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
        </>
    )
}

export default Header;