import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { buscarPelicula } from '../api/peliculasApi';

const Buscador = ({ onBuscar }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const resultados = await buscarPelicula(busqueda);
      onBuscar(resultados.results);
    } catch (error) {
      console.error('Error al buscar películas:', error);
    }
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = '#000';
    e.target.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = '#fff';
    e.target.style.transform = 'scale(1)';
  };

  return (
    <nav className="navbar navbar-dark bg-secondary">
      <div className="container-fluid">
        <a
          href="/"
          className="navbar-brand"
          style={{ color: '#fff', textDecoration: 'dark', fontSize: '1.5rem' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Home
        </a>
        <div className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Géneros / Películas"
            aria-label="Buscar"
            value={busqueda}
            onChange={handleInputChange}
          />
          <button className="btn btn-light" onClick={handleSearch}>
            Buscar
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Buscador;
