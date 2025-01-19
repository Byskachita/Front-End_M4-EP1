// src/components/Header.js
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Hospital Central</h1>
      <nav>
        <a href="/">Inicio</a>
        <a href="/pacientes">Pacientes</a>
        <a href="/contacto">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
