import { useContext, useEffect, useState } from 'react';
import { getResultsSearch } from '../../../api';
import { MoviesContext } from '../../../Context/Context';
import { LinearProgress } from '@mui/material';
import MoviesList from '../../MoviesList/MoviesList';
import Title from '../../Ui/Title/Title';
import styles from './NewSeries.module.scss';

const paramsSerial = { yearFrom: 2022, yearTo: 2022, type: 'TV_SERIES' };

function NewSeries() {
  const [loading, setLoading] = useState(true);
  const { seriesList, updateSeriesList } = useContext(MoviesContext);

  useEffect(() => {
    getResultsSearch(paramsSerial)
      .then(json => updateSeriesList(json.items))
      .finally(() => setLoading(false));
    // eslint-disable-next-line
  }, []);

  return (
    <section className={styles.wrapper}>
      <Title text={'Новые сериалы'} />
      {loading ? (
        <LinearProgress />
      ) : (
        <MoviesList movies={seriesList.slice(0, 10)} />
      )}
    </section>
  );
}

export default NewSeries;
