import { useEffect, useContext, useState } from 'react';
import { LinearProgress } from '@mui/material';
import { getResultsSearch } from '../../api';
import { MoviesContext } from '../../Context/Context';
import { useInView } from 'react-intersection-observer';
import queryString from 'query-string';
import Movies from '../MoviesList/MoviesList';
import SearchMain from './SearchMain/SearchMain';
import Back from '../Ui/Back/Back';
import Title from '../Ui/Title/Title';
import { useLocation, useNavigate } from 'react-router-dom';

function Search() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(2);
  const [totalPages, setTotalPages] = useState(0);
  const [moviesList, setMoviesList] = useState([]);
  const { ref, inView } = useInView({ rootMargin: '300px' });
  const { searchQuery, defaultSearchQuery } = useContext(MoviesContext);
  const { pathname, search } = useLocation();
  const push = useNavigate();

  const handleSearch = e => {
    e.preventDefault();
    setLoading(true);
    const parens = { ...searchQuery };

    Object.keys(parens).forEach(key => {
      if (!parens[key]) delete parens[key];
    });
    const parsed = queryString.stringify(parens);
    push({ pathname, search: parsed });

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
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    const parsed = queryString.parse(search);

    getResultsSearch(parsed)
      .then(json => {
        setMoviesList(json.items);
        setTotalPages(json.totalPages);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false);
      });
    window.scrollTo(0, 0);
    return defaultSearchQuery();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
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
