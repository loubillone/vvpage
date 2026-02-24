import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../css/navegador.css";
import vvIndex from "../assets/img/index/vvIndex.webp";
import logoVVblanco from "../assets/img/index/logoVVblanco.webp";

const Navegador = () => {
  const location = useLocation();
  const isGalleryPage =
    location.pathname === "/galeria" ||
    location.pathname.startsWith("/galeria/");
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };
  return (
    <div>
      <Navbar
        expand="lg"
        sticky="sticky"
        expanded={expanded}
        className={
          isGalleryPage ? "navbar-transparent navbar-gallery" : "navbar-normal"
        }
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="vvIndex">
            {isGalleryPage ? (
              <img src={logoVVblanco} alt="victoria villarruel" />
            ) : (
              <img src={vvIndex} alt="victoria villarruel" />
            )}
          </Navbar.Brand>
          <Navbar.Toggle
            className="navbar-toggle"
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
                className="nav-items no-border-dropdown nav-dropdown"
              >
                <NavDropdown.Item
                  as={NavLink}
                  to="/biografia"
                  className="nav-items-drop"
                  onClick={handleNavClick}
                >
                  Victoria
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={NavLink}
                  to="/celtyv"
                  className="nav-items-drop"
                  onClick={handleNavClick}
                >
                  Celtyv
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Senado"
                id="basic-nav-dropdown"
                className="nav-items no-border-dropdown nav-dropdown"
              >
                <NavDropdown.Item
                  as={NavLink}
                  to="/senado/malvinas"
                  className="nav-items-drop"
                  onClick={handleNavClick}
                >
                  Malvinas
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={NavLink}
                  to="/senado/victimasDelTerrorismo"
                  className="nav-items-drop"
                  onClick={handleNavClick}
                >
                  Víctimas del Terrorismo
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
                to="/discursos"
                className="nav-items"
                onClick={handleNavClick}
              >
                Discursos
              </Nav.Link>
              {/* <Nav.Link
                as={NavLink}
                to="/noticias"
                className="nav-items"
                onClick={handleNavClick}
              >
                Noticias
              </Nav.Link> */}
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
