import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../css/navegador.css";
import vvIndex from "../assets/img/index/vvIndex.png";

const Navegador = () => {
  return (
    <div>
      <Navbar expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="vvIndex">
            <img src={vvIndex} alt="victoria villarruel" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" className="nav-items">
                Inicio
              </Nav.Link>
              <NavDropdown
                title="Biografía"
                id="basic-nav-dropdown"
                className="nav-items no-border-dropdown"
              >
                <NavDropdown.Item href="#action/3.1" className="nav-items-drop">
                  CELTYV
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="nav-items-drop">
                  Malvinas
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/trayectoria" className="nav-items">
                Trayectoria
              </Nav.Link>
              <Nav.Link as={NavLink} to="/noticias" className="nav-items">
                Noticias
              </Nav.Link>
              <Nav.Link as={NavLink} to="/galeria" className="nav-items">
                Galeria
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contacto"
                className="nav-items-contacto"
              >
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navegador;
