import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../Ui/Title/Title';

function ActorMovies({ moviesList }) {
  return (
    <>
      <Title text={'Актёр фильмов'} />
      <li>
        {moviesList
          .filter(movie => movie.professionKey === 'ACTOR')
          .map(movie => (
            <ul>
              <Link to={`/film/${movie.filmId}`}>
                {movie.nameRu}</Link>
            </ul>
          ))}
      </li>
    </>
  );
}

export default ActorMovies;
