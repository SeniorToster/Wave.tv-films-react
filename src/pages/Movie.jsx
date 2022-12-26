import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from '../api';

function Movie() {
  const [movie, setMovie] = useState({});
  const params = useParams();

  useEffect(() => {
    getMovie(params.idMovie).then(json => setMovie(json));
  }, [params]);

  console.log(movie);
  return (
    <>
      <img src={movie.posterUrlPreview} alt='' />
      <div>{movie.nameRu}</div>
      <div data-kinopoisk={movie.kinopoiskId} id='kinobd'></div>
    </>
  );
}

export default Movie;
