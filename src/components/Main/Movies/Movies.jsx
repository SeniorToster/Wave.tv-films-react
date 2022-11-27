import Movie from '../Movie/Movie';
import styles from './Movies.module.scss';

function Movies({ movies }) {
  console.log(movies);
  return (
    <div>
      {movies.length ? (
        <>
          <h2 className={styles.title}>Фильмы</h2>
          <div className={styles.wrapper}>
            {movies.map(movie => (
              <Movie key={movie.kinopoiskId} {...movie} />
            ))}
          </div>
        </>
      ) : (
        <h2 className={styles.subTitleNone}>Ничего не нашли</h2>
      )}
    </div>
  );
}

export default Movies;
