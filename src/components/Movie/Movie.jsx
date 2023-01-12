import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import { getMovie, getMovieBoxOffice } from '../../api';
import Back from '../Ui/Back/Back';
import MovieInfo from './MovieInfo/MovieInfo';
import NoContent from '../Ui/NoContent/NoContent';
import Description from './Description/Description';
import Actors from './Actors/Actors';
import Facts from './Facts/Facts';
import TabsContent from '../Ui/TabsContent/TabsContent';

function Movie() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [office, setOffice] = useState({});
  const { idMovieParams } = useParams();
  const componentTabs = [
    { name: 'Описание', component: <Description text={movie.description} /> },
    { name: 'Актёры', component: <Actors kinopoiskId={movie.kinopoiskId} /> },
    { name: 'Факты', component: <Facts kinopoiskId={movie.kinopoiskId} /> },
  ];

  useEffect(() => {
    (async () => {
      await getMovie(idMovieParams)
        .then(json => {
          if (json.kinopoiskId) setMovie(json);
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
        });

      await getMovieBoxOffice(idMovieParams).then(json => {
        if (json.items) {
          let office = {};
          json.items.forEach(item => {
            office = { ...office, [item.type.toLowerCase()]: { ...item } };
          });

          setOffice({ ...office });
        }
        setLoading(false);
      });
    })();
  }, [idMovieParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : movie.kinopoiskId ? (
        <>
          <Back />
          <MovieInfo movie={movie} office={office} />
          <TabsContent components={componentTabs} />
        </>
      ) : (
        <NoContent />
      )}
    </>
  );
}

export default Movie;
