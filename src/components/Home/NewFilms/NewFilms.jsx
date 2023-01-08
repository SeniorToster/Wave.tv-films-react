import { useContext } from 'react';
import { useEffect } from 'react';
import { getResultsSearch } from '../../../api';
import { MoviesContext } from '../../../Context';
import MoviesList from '../../MoviesList/MoviesList';
import Title from '../../Title/Title';
import styles from './NewFilms.module.scss';

const paramsFilm = { type: 'FILM', yearFrom: 2022, yearTo: 2022 };

function NewFilms() {
  const { moviesList, updateMoviesList } = useContext(MoviesContext);
  useEffect(() => {
    getResultsSearch(paramsFilm).then(json => updateMoviesList(json.items));
    // eslint-disable-next-line
  }, []);

  return (
    <section className={styles.wrapper}>
      <Title text={'Новые фильмы'} />
      <MoviesList movies={moviesList.slice(0, 10)} />
    </section>
  );
}

export default NewFilms;
