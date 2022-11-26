import Movie from '../Movie/Movie';
import styles from './Movies.module.scss';

function Movies({ movies}) {
  return (
    <>
      <h2 className={styles.title}>Фильмы</h2>
      <div className={styles.wrapper}>
        {movies.map(movie => (
          <Movie key={movie.kinopoiskId} {...movie} />
        ))}
      </div>
    </>
  );
}

export default Movies;
