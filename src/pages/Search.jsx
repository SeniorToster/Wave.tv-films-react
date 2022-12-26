import { useEffect, useContext } from 'react';
import { LinearProgress } from '@mui/material';
import { getPremieres, getResultsSearch } from '../api';
import { MoviesContext } from '../Context';
import Movies from '../components/MoviesList/MoviesList';
import SearchMain from '../components/SearchMain/SearchMain';

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
    console.log(e);
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
      {loading ? (
        <LinearProgress />
      ) : (
        <Movies title={'Результат'} movies={moviesList} />
      )}
    </>
  );
}

export default Search;