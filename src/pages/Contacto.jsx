import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import contactoImg from "../assets/img/contacto/contactoImg.jpg";
import contactoTitulo from "../assets/img/contacto/contactoTitulo.png";
import iconoEmail from "../assets/img/contacto/iconoEmail.png";
import "../css/contacto.css";
import Footer from "../components/Footer";
const Contacto = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <div className="imagen-contacto">
              <img src={contactoImg} alt="Victoria en sesion" />
            </div>
          </div>
          <div className="col mt-3">
            <div className="container-titulo">
              <img src={contactoTitulo} alt="contactanos" />
            </div>
            <Form className="col-10 offset-1">
              <Form.Group className="mb-5" controlId="formBasicText">
                <Form.Label className="titulos-form">
                  Nombre y Apellido
                </Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label className="titulos-form">Email</Form.Label>
                <Form.Control type="email" />
                <Form.Text className="text-muted titulos-form">
                  No compartiremos tu email con nadie.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-5" controlId="formBasicTelefono">
                <Form.Label className="titulos-form">Teléfono</Form.Label>
                <Form.Control type="number" />
              </Form.Group>

              <FloatingLabel controlId="floatingTextarea2" label="Mensaje">
                <Form.Control
                  as="textarea"
                  placeholder="Escribe tu mensaje aquí"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <Button variant="primary" type="submit" className="mt-4">
                Enviar
              </Button>
            </Form>
          </div>
          <div className="col container-contacto">
            <div className="col">
              <div className="iconos-contacto">
                <img src={iconoEmail} alt="" />
                <span className="titulos-contacto">Email</span>
              </div>
              <div className="info-contacto">
                <span className="contacto-datos">
                  paginavillarruel@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contacto;
