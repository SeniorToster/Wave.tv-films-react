import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import { getMovie, getMovieBoxOffice } from '../../api';
import Back from '../Ui/Back/Back';
import TabsContent from './TabsContent/TabsContent';
import MovieInfo from './MovieInfo/MovieInfo';
import NoContent from '../Ui/NoContent/NoContent';

function Movie() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [office, setOffice] = useState({});
  const { idMovieParams } = useParams();

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

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : movie.kinopoiskId ? (
        <>
          <Back />
          <MovieInfo movie={movie} office={office} />
          <TabsContent
            description={movie.description}
            kinopoiskId={movie.kinopoiskId}
          />
        </>
      ) : (
        <NoContent />
      )}
    </>
  );
}

export default Movie;
