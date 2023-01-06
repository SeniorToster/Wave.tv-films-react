import MoviesList from '../../MoviesList/MoviesList';
import Title from '../../Title/Title';
import styles from './NewFilms.module.scss';

function NewFilms({ movies }) {
  return (
    <>
      <Title text={'Новые фильмы'} />
      <MoviesList movies={movies} />
    </>
  );
}

export default NewFilms;
