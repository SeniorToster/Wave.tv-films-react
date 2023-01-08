import { LinearProgress } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { getMovie } from '../../../api';
import { MoviesContext } from '../../../Context';
import styles from './MainPoster.module.scss';

function MainPoster() {
  const [loading, setLoading] = useState(true);
  const { moviePosterMain } = useContext(MoviesContext);
  const [movie, setMovie] = useState(true);
  const { kinopoiskId, description, nameRu, posterUrl } = movie;

  useEffect(() => {
    getMovie(moviePosterMain)
      .then(json => {
        setMovie(json);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.wrapper__poster}>
            <img src={posterUrl} alt='' />
          </div>
          <div className={styles.wrapper__info}>
            <h1>{nameRu} </h1>
            <p>{description.slice(0, 165)} . . .</p>
            <Link
              className={styles.wrapper__button}
              to={`/film/${kinopoiskId}`}
            >
              <p>Подробнее</p>
              <BiRightArrowAlt />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default MainPoster;
