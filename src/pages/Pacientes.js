// src/pages/Pacientes.js
import React from 'react';
import DoctorCard from '../components/DoctorCard';
import ServiceList from '../components/ServiceList';
import AppointmentForm from '../components/AppointmentForm';
import doctores from '../data/doctores.json';

const Pacientes = () => {
  const servicios = ['Consulta General', 'Urgencias', 'Pediatría', 'Neurología'];

  const handleAppointmentSubmit = (appointment) => {
    console.log('Cita agendada:', appointment);
  };
  
  return (
    <main>
      <h1>Gestión de Pacientes</h1>
      {doctores.map((doctor) => (
      <DoctorCard
      key={doctor.nombre}
      nombre={doctor.nombre}
      especialidad={doctor.especialidad}
      experiencia={doctor.experiencia}
      habilidades={doctor.habilidades}
      />
      ))}
      <ServiceList servicios={servicios} />
      <AppointmentForm doctores={doctores} onSubmit={handleAppointmentSubmit} />
      </main>
  );
};

export default Pacientes;
