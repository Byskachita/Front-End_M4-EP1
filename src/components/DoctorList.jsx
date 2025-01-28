// src/components/DoctorList.jsx
import React, { useState, useEffect } from 'react';
import DoctorCard from './DoctorCard';

const DoctorList = () => {
  const [doctores, setDoctores] = useState([]);

  // useEffect para cargar los datos al montar el componente
  useEffect(() => {
    const fetchData = async () => {
        console.log('fetching data');
      const response = await fetch('/data/doctores.json');
      console.log(response);
      const data = await response.json();
      setDoctores(data);
      console.log(data);
    };
    fetchData();
  }, []); // [] asegura que este efecto solo se ejecute una vez al montar

  return (
    <section>
      <h2>Listado de Doctores</h2>
      <div className="doctor-list">
        {doctores.map((doctor) => (
          <DoctorCard
            key={doctor.nombre}
            nombre={doctor.nombre}
            especialidad={doctor.especialidad}
            experiencia={doctor.experiencia}
            habilidades={doctor.habilidades}
            imagen={doctor.imagen}
          />
        ))}
      </div>
    </section>
  );
};

export default DoctorList;
