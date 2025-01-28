// src/pages/Home.jsx
import React from 'react';
import '../styles/Home.css';
import DoctorList from '../components/DoctorList';


const Home = () => {
  const servicios = [
    {
      nombre: 'Consulta General',
      icono: '🩺',
      descripcion: 'Atención médica general',
      imagen: '../../public/assets/img/doctor-putting-glove-prevent-coronavirus-contamination.jpg',
    },
    {
      nombre: 'Pediatría',
      icono: '👶',
      descripcion: 'Cuidado para niños y adolescentes',
      imagen: '../../public/assets/img/doctor-with-many-kind-medical-equipment-manage-start-operation-operating-room.jpg',
    },
    {
      nombre: 'Cardiología',
      icono: '❤️',
      descripcion: 'Especialistas en corazón',
      imagen: '../../public/assets/img/doctora.png',
    },
    {
      nombre: 'Neurología',
      icono: '🧠',
      descripcion: 'Tratamiento del sistema nervioso',
      imagen: '../../public/assets/img/Doctora1.jpg',
    },
    {
      nombre: 'Urgencias',
      icono: '🚨',
      descripcion: 'Atención médica inmediata',
      imagen: '../../public/assets/img/pexels-cedric-fauntleroy-4270088.jpg',
    },
    {
      nombre: 'Vacunación',
      icono: '💉',
      descripcion: 'Vacunas para todas las edades',
      imagen: '../../public/assets/img/smoth-mision.png',
    },
  ];

  return (
    <main className="home-page">
      <h1>Bienvenido al Hospital Central</h1>

      <DoctorList />

      {/* Cards de Servicios */}
      <section className="cards-container">
        {servicios.map((servicio, index) => (
          <div className="card" key={index}>
            <img
              src={servicio.imagen}
              alt={servicio.nombre}
              className="card-image"
            />
            <h3>{servicio.nombre}</h3>
            <p>{servicio.descripcion}</p>
          </div>
        ))}
      </section>
      {/* Servicios con Iconos */}
      <section className="iconos-container">
        <h2>Servicios con Iconos</h2>
        <div className="iconos-grid">
          {servicios.map((servicio, index) => (
            <div className="icon-card" key={index}>
              <span className="icon">{servicio.icono}</span>
              <h3>{servicio.nombre}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;

