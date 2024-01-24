import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPeliculaId } from '../api/peliculasApi';

const TarjetaDetalle = () => {
  const { id } = useParams();
  const [pelicula, setPelicula] = useState(null);

  useEffect(() => {
    const fetchPeliculaDetalle = async () => {
      try {
        console.log(id)
        const peliculaData = await getPeliculaId(id);
        setPelicula(peliculaData);
        console.log(id)

      } catch (error) {
        console.error('Error al obtener detalles de la película', error);
      }
    };

    fetchPeliculaDetalle();
  }, [id]);

  if (!pelicula) {
    return <div>Cargando...</div>;
  }

  const { title, release_date, genres, overview, poster_path } = pelicula;

  return (
    <div className="card mt-5 mx-auto" style={{ maxWidth: '950px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} className="img-fluid rounded-start" alt={title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{overview}</p>
            <p className="card-text"><small className="text-muted">Año de lanzamiento: {release_date}</small></p>
            <p className="card-text"><small className="text-muted">Géneros: {genres.map(genre => genre.name).join(', ')}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default TarjetaDetalle;

