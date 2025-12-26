import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import contactoImg from "../assets/img/contacto/contactoImg.webp";
import contactoTitulo from "../assets/img/contacto/contactoTitulo.webp";
import iconoEmail from "../assets/img/contacto/iconoEmail.webp";
import "../css/contacto.css";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
const SITE_URL = import.meta.env.VITE_SITE_URL;
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contacto = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const phoneInput = form.phone.value.trim();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (phoneInput !== "" && !/^\d{10}$/.test(phoneInput)) {
      Swal.fire({
        icon: "warning",
        title: "Teléfono inválido",
        text: "El número debe tener exactamente 10 dígitos (ej: 1155555555).",
      });
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        Swal.fire({
          title: "Mensaje enviado",
          icon: "success",
        });
        form.reset();
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo salió mal. Inténtalo de nuevo más tarde.",
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>Contacto | Todo por Argentina</title>
        <meta
          name="description"
          content="Formulario de contacto para comunicarse con el equipo de Todo por Argentina"
        />
        <link rel="canonical" href={`${SITE_URL}/contacto`} />
      </Helmet>
      <h1 className="visually-hidden">Contacto – Todo por Argentina</h1>
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
            <Form className="col-10 offset-1" onSubmit={sendEmail}>
              <Form.Group className="mb-5" controlId="formBasicText">
                <Form.Label className="titulos-form">
                  Nombre y Apellido
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  required
                  pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,50}$"
                />
              </Form.Group>

              <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label className="titulos-form">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  required
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                />
                <p className="texto-contacto-desc text-muted">
                  No compartiremos tu email con nadie.
                </p>
              </Form.Group>

              <Form.Group className="mb-5" controlId="formBasicTelefono">
                <Form.Label className="titulos-form">Teléfono</Form.Label>
                <Form.Control
                  type="number"
                  name="phone"
                  maxLength={10}
                  pattern="^\d{10}$"
                />

                <p className="texto-contacto-desc text-muted">
                  Opcional. Ingrese un número de celular de 10 dígitos, sin 0 ni
                  15.
                </p>
              </Form.Group>

              <FloatingLabel controlId="floatingTextarea2" label="Mensaje">
                <Form.Control
                  as="textarea"
                  name="message"
                  placeholder="Escribe tu mensaje aquí"
                  style={{ height: "100px" }}
                  minLength={10}
                  maxLength={500}
                  required
                />
              </FloatingLabel>
              <Button
                variant="primary"
                type="submit"
                className="mt-4 boton-contacto"
              >
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
                  contacto@todoporargentina.com.ar
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
