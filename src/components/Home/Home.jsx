import { useContext } from 'react';
import { useEffect } from 'react';
import { getResultsSearch } from '../../api';
import { MoviesContext } from '../../Context';
import MainPoster from './MainPoster/MainPoster';
import NewFilms from './NewFilms/NewFilms';
import NewSeries from './NewSeries/NewSeries';

const paramsFilm = { type: 'FILM', yearFrom: 2022, yearTo: 2022 };
const paramsSerial = { ...paramsFilm, type: 'TV_SERIES' };

function Home() {
  const { moviesList, seriesList, updateMoviesList, updateSeriesList } =
    useContext(MoviesContext);
  useEffect(() => {
    getResultsSearch(paramsFilm).then(json =>
      updateMoviesList(json.items.slice(0, 10))
    );
    getResultsSearch(paramsSerial).then(json =>
      updateSeriesList(json.items.slice(0, 10))
    );
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <MainPoster movie={moviesList.kinopoiskId} />
      <NewFilms movies={moviesList} />
      <NewSeries series={seriesList} />
    </>
  );
}

export default Home;
