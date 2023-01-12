import React from 'react';
import Title from '../../Ui/Title/Title';
import ActorMovie from './ActorMovie/ActorMovie';
import styles from './ActorMovies.module.scss';

function ActorMovies({ moviesList }) {
  return (
    <>
      <Title text={'Актёр фильмов'} />
      <li className={styles.wrapper}>
        {moviesList
          .filter(movie => movie.professionKey === 'ACTOR')
          .map((movie, index) => (
            <ul key={index} className={styles.wrapper__item}>
              <ActorMovie movie={movie} />
            </ul>
          ))}
      </li>
    </>
  );
}

export default ActorMovies;
