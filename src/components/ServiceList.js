// src/components/ServiceList.js
import React from 'react';
import '../styles/ServiceList.css';

const ServiceList = ({ servicios }) => {
  return (
    <div className="service-list">
      <h2>Servicios Médicos</h2>
      <ul>
        {servicios.map((servicio) => (
          <li key={servicio}>{servicio}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
