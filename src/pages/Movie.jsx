import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import { getMovie, getMovieBoxOffice } from '../api';
import { FaChevronLeft } from 'react-icons/fa';
import styles from './Movie.module.scss';

function Movie() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [{ budget, world }, setOffice] = useState({});
  const navigate = useNavigate();
  const { idMovieParams } = useParams();
  const {
    posterUrlPreview,
    nameRu,
    nameOriginal,
    year,
    type,
    countries,
    genres,
    slogan,
    filmLength,
    ratingAgeLimits,
  } = movie;

  useEffect(() => {
    async function name() {
      await getMovie(idMovieParams).then(json => {
        setMovie(json);
      });
      await getMovieBoxOffice(idMovieParams).then(json => {
        if (json.items) {
          let office = {};
          json.items.forEach(item => {
            office = { ...office, [item.type.toLowerCase()]: { ...item } };
          });

          setOffice({ ...office });
        }
      });
      setLoading(false);

      const script = document.createElement('script');
      script.src = '/player_.js';
      document.body.appendChild(script);

      return () => {
        script.remove();
      };
    }
    name();
  }, [idMovieParams]);
  console.log(movie);
  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        <>
          <div onClick={() => navigate(-1)} className={styles.return}>
            <FaChevronLeft />
            <p>Назад</p>
          </div>
          <div className={styles.wrapperInfo}>
            <img
              src={posterUrlPreview}
              className={styles.wrapperInfo__poster}
              alt=''
            />
            <div className={styles.wrapperInfo__textInfo}>
              <h1 className={styles.wrapperInfo__nameMovie}>
                {nameRu ? nameRu : nameOriginal} ({year ? year : '-'})
              </h1>
              <h2 className={styles.wrapperInfo__nameMovieOriginal}>
                {nameRu && nameOriginal}
              </h2>
              <div className={styles.aboutMovie}>
                <h3 className={styles.aboutMovie__title}>
                  О {type === 'FILM' ? 'фильме' : 'сериале'}
                </h3>
                <ul className={styles.aboutMovie__list}>
                  <li className={styles.aboutMovie__list}>
                    <span className={styles.aboutMovie__key}>
                      Год производства
                    </span>
                    <span className={styles.aboutMovie__value}>{year}</span>
                  </li>
                  <li className={styles.aboutMovie__list}>
                    <span className={styles.aboutMovie__key}>Страна</span>
                    <span className={styles.aboutMovie__value}>
                      {countries.map(country => country.country).join(', ')}
                    </span>
                  </li>
                  <li className={styles.aboutMovie__list}>
                    <span className={styles.aboutMovie__key}>Жанр</span>
                    <span className={styles.aboutMovie__value}>
                      {genres.map(genre => genre.genre).join(', ')}
                    </span>
                  </li>
                  <li className={styles.aboutMovie__list}>
                    <span className={styles.aboutMovie__key}>Слоган</span>
                    <span className={styles.aboutMovie__value}>{slogan}</span>
                  </li>
                  <li className={styles.aboutMovie__list}>
                    <span className={styles.aboutMovie__key}>Бюджет</span>
                    <span className={styles.aboutMovie__value}>
                      {budget
                        ? `${budget.symbol} ${budget.amount.toLocaleString()}`
                        : '-'}
                    </span>
                  </li>
                  <li className={styles.aboutMovie__list}>
                    <span className={styles.aboutMovie__key}>Сборы в мире</span>
                    <span className={styles.aboutMovie__value}>
                      {world
                        ? `${world.symbol} ${world.amount.toLocaleString()}`
                        : '-'}
                    </span>
                  </li>
                  <li className={styles.aboutMovie__list}>
                    <span className={styles.aboutMovie__key}>Возраст</span>
                    <span
                      className={
                        (styles.aboutMovie__value, styles.aboutMovie__value_age)
                      }
                    >
                      {ratingAgeLimits
                        ? `${ratingAgeLimits.replace('age', '')}+`
                        : '-'}
                    </span>
                  </li>
                  <li className={styles.aboutMovie__list}>
                    <span className={styles.aboutMovie__key}>Время</span>
                    <span className={styles.aboutMovie__value}>
                      {filmLength} мин
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div data-kinopoisk={idMovieParams} id='kinobd'></div>
        </>
      )}
    </>
  );
}

export default Movie;
