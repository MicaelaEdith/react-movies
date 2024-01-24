const API_KEY = '519b3b15d9de12fdcfd83a1f08bf2952';
const API_URL = 'https://api.themoviedb.org/3';
const IMG_PATH = 'https://image.tmdb.org/t/p/original/';

let currentPage = 1;

export function getPeliculas() {
  return fetch(`${API_URL}/discover/movie?api_key=${API_KEY}&page=${currentPage++}`)
    .then(res => {
      if (res.status >= 200 && res.status <= 299) {
        return res.json();
      } else {
        throw new Error('Error al obtener las películas en cartelera');
      }
    });
}

export function getDetallesPelicula(id) {
  return fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`)
    .then((res) => {
      if (res.status >= 200 && res.status <= 299) {
        return res.json();
      } else {
        throw new Error('Error al obtener detalles de la película');
      }
    });
}

export function getPeliculaId(id) {
  return fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`)
    .then(res => {
      if (res.status >= 200 && res.status <= 299) {
        return res.json();
      } else {
        throw new Error('Error al obtener detalle');
      }
    })
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.error('Error al obtener detalle', error);
      throw error;
    });
}

export function buscarPelicula(kw) {
  return fetch(`${API_URL}/search/movie?query=${kw}&api_key=${API_KEY}`)
    .then(res => {
      if (res.status >= 200 && res.status <= 299) {
        return res.json();
      } else {
        throw new Error('Error al realizar la búsqueda de películas');
      }
    });
}
