import React, { useState, useEffect } from 'react';
import { getPeliculas } from '../api/peliculasApi';
import TarjetaPelicula from '../components/TarjetaPelicula';

const Home = ({ resultadosBusqueda }) => {
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchPeliculas = () => {
    getPeliculas(page)
      .then((data) => {
        setPeliculas((prevPeliculas) => [...prevPeliculas, ...data.results]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar las películas:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (resultadosBusqueda.length > 0) {
      setPeliculas(resultadosBusqueda);
      setLoading(false);
    } else {
      fetchPeliculas();
    }
  }, [resultadosBusqueda, page]);

  const handleScroll = () => {
    const isAtBottom = window.innerHeight + window.scrollY === document.body.scrollHeight;

    if (isAtBottom && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="container">
      <div className="row">
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className="col-md-3 mb-4">
            <TarjetaPelicula pelicula={pelicula} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
