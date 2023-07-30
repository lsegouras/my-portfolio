import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/Menu.css"

const Menu = () => {
  return (

<Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand className="navbar-brand" href="#home">Portfolio <br /> Laura Segouras</Navbar.Brand>
        <Navbar.Toggle className="toggle" style={{ backgroundColor: "#F2C6A0"}} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="collapse" id="basic-navbar-nav">
          <Nav className="ms-auto" id="nav">
            <Nav.Link className="nav-link" href="/about">Sobre Mim</Nav.Link>
            <Nav.Link className="nav-link" href="/goals">Objetivos</Nav.Link>
            <Nav.Link className="nav-link" href="/why">Pq me contratar</Nav.Link>
            <Nav.Link className="nav-link" href="/skills">Skills</Nav.Link>
            <Nav.Link className="nav-link" href="/experience">Experiência</Nav.Link>
            <Nav.Link className="nav-link" href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link className="nav-link" href="/contact">Contatos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
