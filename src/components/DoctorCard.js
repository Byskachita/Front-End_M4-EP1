// src/components/DoctorCard.js
import React from 'react';
import '../styles/DoctorCards.css';

const DoctorCard = ({ nombre, especialidad, experiencia, habilidades }) => {
  return (
    <div className="doctor-card">
      <h2>{nombre}</h2>
      <p><strong>Especialidad:</strong> {especialidad}</p>
      <p><strong>Años de experiencia:</strong> {experiencia}</p>
      <ul>
        <strong>habilidades:</strong>
        {habilidades.map((habilidad, index) => (
          <li key={index}>{habilidad}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorCard;
