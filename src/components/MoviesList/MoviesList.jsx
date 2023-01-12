import NoContent from '../Ui/NoContent/NoContent';
import Movie from './MovieCard/MovieCard';
import styles from './MoviesList.module.scss';

function MoviesList({ movies = {} }) {
  return (
    <div>
      {movies.length ? (
        <>
          <div className={styles.wrapper}>
            {movies.map((movie, index) => (
              <Movie key={index} {...movie} />
            ))}
          </div>
        </>
      ) : (
        <NoContent />
      )}
    </div>
  );
}

export default MoviesList;
