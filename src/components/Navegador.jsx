import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../css/navegador.css";
import vvIndex from "../assets/img/index/vvIndex.png";

const Navegador = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };
  return (
    <div>
      <Navbar expand="lg" sticky="top" expanded={expanded}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="vvIndex">
            <img src={vvIndex} alt="victoria villarruel" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : true)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" onSelect={handleNavClick}>
              <Nav.Link
                as={NavLink}
                to="/"
                className="nav-items"
                onClick={handleNavClick}
              >
                Inicio
              </Nav.Link>
              <NavDropdown
                title="Biografia"
                id="basic-nav-dropdown"
                className="nav-items no-border-dropdown"
                onClick={handleNavClick}
              >
                <NavDropdown.Item href="#action/3.1" className="nav-items-drop">
                  <Nav.Link
                    as={NavLink}
                    to="/biografia"
                    className="nav-items"
                    onClick={handleNavClick}
                  >
                    Victoria
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="nav-items-drop">
                  <Nav.Link
                    as={NavLink}
                    to="/celtyv"
                    className="nav-items"
                    onClick={handleNavClick}
                  >
                    Celtyv
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="nav-items-drop">
                  <Nav.Link
                    as={NavLink}
                    to="/malvinas"
                    className="nav-items"
                    onClick={handleNavClick}
                  >
                    Malvinas
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={NavLink}
                to="/trayectoria"
                className="nav-items"
                onClick={handleNavClick}
              >
                Trayectoria
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/noticias"
                className="nav-items"
                onClick={handleNavClick}
              >
                Noticias
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/galeria"
                className="nav-items"
                onClick={handleNavClick}
              >
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
