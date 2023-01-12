import { useEffect } from 'react';
import MainPoster from './MainPoster/MainPoster';
import NewFilms from './NewFilms/NewFilms';
import NewSeries from './NewSeries/NewSeries';

function Home() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <MainPoster />
      <NewFilms />
      <NewSeries />
    </>
  );
}

export default Home;
