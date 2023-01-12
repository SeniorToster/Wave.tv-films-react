import { useContext, useState, useEffect } from 'react';
import { getResultsSearch } from '../../../api';
import { MoviesContext } from '../../../Context/Context';
import { LinearProgress } from '@mui/material';
import MoviesList from '../../MoviesList/MoviesList';
import Title from '../../Ui/Title/Title';
import styles from './NewFilms.module.scss';

const paramsFilm = { type: 'FILM', yearFrom: 2022, yearTo: 2022 };

function NewFilms() {
  const [loading, setLoading] = useState(true);
  const { moviesList, updateMoviesList } = useContext(MoviesContext);
  useEffect(() => {
    getResultsSearch(paramsFilm)
      .then(json => updateMoviesList(json.items))
      .finally(() => setLoading(false));
    // eslint-disable-next-line
  }, []);

  return (
    <section className={styles.wrapper}>
      <Title text={'Новые фильмы'} />
      {loading ? (
        <LinearProgress />
      ) : (
        <MoviesList movies={moviesList.slice(0, 10)} />
      )}
    </section>
  );
}

export default NewFilms;
