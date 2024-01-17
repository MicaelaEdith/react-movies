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

  return (
    <nav className="navbar navbar-dark bg-secondary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Películas</Link>
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
