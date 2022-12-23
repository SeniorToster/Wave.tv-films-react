import { useEffect, useContext } from 'react';
import { LinearProgress } from '@mui/material';
import { getPremieres, getResultsSearch } from '../../api';
import { MoviesContext } from '../../Context';
import Movies from './Movies/Movies';
import SearchMain from './SearchMain/SearchMain';
import styles from './Main.module.scss';

function Main() {
  const { searchQuery, moviesList, loading, changeLoading, updateMoviesList } =
    useContext(MoviesContext);

  useEffect(() => {
    getPremieres()
      .then(json => {
        updateMoviesList(json.items);
        changeLoading(false);
      })
      .catch(err => {
        console.log(err);
        changeLoading(false);
      });
    // eslint-disable-next-line
  }, []);

  const handleSearch = e => {
    e.preventDefault();

    const parens = { ...searchQuery };

    Object.keys(parens).forEach(key => {
      if (!parens[key]) delete parens[key];
    });

    changeLoading(true);

    getResultsSearch(searchQuery)
      .then(json => {
        updateMoviesList(json.items);
        changeLoading(false);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className={styles.wrapper}>
      <SearchMain handleSearch={handleSearch} />
      {loading ? <LinearProgress /> : <Movies movies={moviesList} />}
    </div>
  );
}

export default Main;
