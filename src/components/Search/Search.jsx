import { useEffect, useContext, useState } from 'react';
import { LinearProgress } from '@mui/material';
import { getResultsSearch } from '../../api';
import { MoviesContext } from '../../Context/Context';
import { useInView } from 'react-intersection-observer';
import Movies from '../MoviesList/MoviesList';
import SearchMain from './SearchMain/SearchMain';
import Back from '../Ui/Back/Back';
import Title from '../Ui/Title/Title';

function Search() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(2);
  const [totalPages, setTotalPages] = useState(0);
  const [moviesList, setMoviesList] = useState([]);
  const { ref, inView } = useInView({ rootMargin: '300px' });
  const { searchQuery, defaultSearchQuery } = useContext(MoviesContext);

  const handleSearch = e => {
    e.preventDefault();
    setLoading(true);
    const parens = { ...searchQuery, page: 1 };

    Object.keys(parens).forEach(key => {
      if (!parens[key]) delete parens[key];
    });

    getResultsSearch(parens)
      .then(json => {
        setMoviesList(json.items);
        setTotalPages(json.totalPages);
        setCurrentPage(2);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLazyPage = () => {
    const parens = { ...searchQuery, page: currentPage };

    getResultsSearch(parens)
      .then(json => {
        setMoviesList([...moviesList, ...json.items]);
        setCurrentPage(prevState => prevState + 1);
        console.log(moviesList);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getResultsSearch()
      .then(json => {
        setMoviesList(json.items);
        setTotalPages(json.totalPages);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false);
      });

    return defaultSearchQuery();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(currentPage);
    console.log(totalPages);

    if (inView && currentPage <= totalPages) {
      handleLazyPage();
    }
    // eslint-disable-next-line
  }, [inView]);

  return (
    <>
      <SearchMain handleSearch={handleSearch} />
      <Back />
      {loading ? (
        <LinearProgress />
      ) : (
        <>
          <Title text={'Результат'} />
          <Movies movies={moviesList} />
          <div ref={ref}></div>
        </>
      )}
    </>
  );
}

export default Search;
