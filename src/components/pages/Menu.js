import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/Menu.css"

const Menu = () => {
  return (

<Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand className="navbar-brand" href="#home">Portfolio de Laura Segouras</Navbar.Brand>
        <Navbar.Toggle style={{ backgroundColor: "#F2C6A0"}} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" id="nav">
            <Nav.Link className="nav-link" href="#Sobre Mim">Sobre Mim</Nav.Link>
            <Nav.Link className="nav-link" href="#Objetivos">Objetivos</Nav.Link>
            <Nav.Link className="nav-link" href="#Experiência">Experiência</Nav.Link>
            <Nav.Link className="nav-link" href="#Portfolio">Portfolio</Nav.Link>
            <Nav.Link className="nav-link" href="Contatos">Contatos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
