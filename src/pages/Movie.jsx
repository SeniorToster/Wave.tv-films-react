import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from '../api';

function Movie() {
  const [movie, setMovie] = useState({});
  const params = useParams();

  useEffect(() => {
    getMovie(params.idMovie).then(json => setMovie(json));

    const script = document.createElement('script');
    script.src = '/player_.js';
    document.body.appendChild(script);
  }, [params]);

  console.log(movie);
  return (
    <>
      <img src={movie.posterUrlPreview} alt='' />
      <div>{movie.nameRu}</div>
      <div data-kinopoisk={params.idMovie} id='kinobd'></div>
    </>
  );
}

export default Movie;
