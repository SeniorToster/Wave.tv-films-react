import Movie from '../MovieCard/MovieCard';
import styles from './MoviesList.module.scss';

function MoviesList({ movies = {}, title }) {
  return (
    <div>
      {movies.length ? (
        <>
          <h2 className={styles.title}>{title}</h2>
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

export default MoviesList;
