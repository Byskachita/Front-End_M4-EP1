// src/pages/Contacto.jsx
import React from 'react';
import '../styles/Contacto.css';

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Formulario enviado:', data);
    alert('Formulario enviado correctamente');
    e.target.reset();
  };

  return (
    <main className="contacto-page">
      <h1>Contáctanos</h1>
      <div className="contacto-container">
        {/* Formulario */}
        <form className="contacto-form" onSubmit={handleSubmit}>
          <h2>Formulario de Contacto</h2>
          <label>
            Nombre:
            <input type="text" name="nombre" required />
          </label>
          <label>
            Correo Electrónico:
            <input type="email" name="email" required />
          </label>
          <label>
            Mensaje:
            <textarea name="mensaje" rows="5" required></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
        {/* Mapa */}
        <div className="mapa">
          <h2>Nuestra Ubicación</h2>
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126741.56482884765!2d-74.07026000000001!3d4.60971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99c2da983c57%3A0x123456789abcde!2sHospital%20Central!5e0!3m2!1sen!2sco!4v1617163046487!5m2!1sen!2sco"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Contacto;
