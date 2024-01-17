import React from 'react';
import { Link } from 'react-router-dom';

const TarjetaPelicula = ({ pelicula }) => {
  const imagenUrl = `https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`;

  return (
    <div className="card h-100 m-2 mt-4">
      <Link to={`/detalle/${pelicula.id}`}>
        <img src={imagenUrl} className="card-img-top" alt={pelicula.original_title} />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{pelicula.original_title}</h5>
      </div>
    </div>
  );
};

export default TarjetaPelicula;