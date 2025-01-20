// src/components/AppointmentForm.js
import React, { useState } from 'react';
import '../styles/AppointmentForm.css';

const AppointmentForm = ({ doctores, onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [doctor, setDoctor] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && doctor && fecha) {
      const appointment = {
        nombre,
        doctor,
        fecha,
      };
      onSubmit({ appointment });
      setNombre('');
      setDoctor('');
      setFecha('');
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <h2>Agendar una Cita</h2>
      {/* Nombre del Paciente */}
      <div className='form-group'>
      <label>
        Nombre del Paciente:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      </div>
      
      {/* Doctor */}
      <div className='form-group'>
      <label>
        Especialidad del Doctor:
        <select
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
         >
          <option value="">Selecciona un doctor</option>
          {doctores.map((doc, index) => (
            <option key={index} value={doc.especialidad}>
              {doc.nombre} - {doc.especialidad}
            </option>
          ))}
          </select>
      </label>
      </div>
      
      {/* Fecha */}
      <div className='form-group'>
      <label>
        Fecha de la Cita:
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </label>
      </div>
      
      <button type="submit">Agendar</button>
    </form>
  );
};

export default AppointmentForm;
