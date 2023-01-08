import { useEffect, useContext } from 'react';
import { LinearProgress } from '@mui/material';
import { getPremieres, getResultsSearch } from '../../api';
import { MoviesContext } from '../../Context/Context';
import Movies from '../MoviesList/MoviesList';
import SearchMain from './SearchMain/SearchMain';
import Back from '../Ui/Back/Back';

function Search() {
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

    getResultsSearch(parens)
      .then(json => {
        updateMoviesList(json.items);
        changeLoading(false);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <SearchMain handleSearch={handleSearch} />
      <Back />
      {loading ? (
        <LinearProgress />
      ) : (
        <Movies title={'Результат'} movies={moviesList} />
      )}
    </>
  );
}

export default Search;
