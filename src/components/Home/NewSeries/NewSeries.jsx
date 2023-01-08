import { useContext, useEffect } from 'react';
import { getResultsSearch } from '../../../api';
import { MoviesContext } from '../../../Context';
import MoviesList from '../../MoviesList/MoviesList';
import Title from '../../Title/Title';
import styles from './NewSeries.module.scss';

const paramsSerial = { yearFrom: 2022, yearTo: 2022, type: 'TV_SERIES' };

function NewSeries() {
  const { seriesList, updateSeriesList } = useContext(MoviesContext);

  useEffect(() => {
    getResultsSearch(paramsSerial).then(json => updateSeriesList(json.items));
    // eslint-disable-next-line
  }, []);

  return (
    <section className={styles.wrapper}>
      <Title text={'Новые сериалы'} />
      <MoviesList movies={seriesList.slice(0, 10)} />
    </section>
  );
}

export default NewSeries;
