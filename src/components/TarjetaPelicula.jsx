import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TarjetaPelicula = ({ pelicula }) => {
  const [hovered, setHovered] = useState(false);
  const imagenUrl = `https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`;

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const cardStyle = {
    transition: 'transform 0.1s, box-shadow 0.2s',
    transform: hovered ? 'scale(1.01)' : 'scale(1)',
    boxShadow: hovered ? '0px 0px 10px rgba(0, 0, 0, 0.3)' : 'none',
  };

  return (
    <div
      className="card h-100 m-2 mt-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={cardStyle}
    >
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
