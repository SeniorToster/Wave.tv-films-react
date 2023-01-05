import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import { getMovie, getMovieBoxOffice } from '../api';
import { BsFillCaretRightFill } from 'react-icons/bs';
import styles from './Movie.module.scss';
import FavoriteIcon from '../components/FavoriteIcon/FavoriteIcon';
import Back from '../components/Back/Back';
import TabsContent from '../components/TabsContent/TabsContent';

function Movie() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [{ budget, world }, setOffice] = useState({});
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
    kinopoiskId,
    description,
  } = movie;

  useEffect(() => {
    async function name() {
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
    }
    name();
  }, [idMovieParams]);

  console.log(movie);

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : kinopoiskId ? (
        <>
          <Back />
          <div className={styles.wrapperInfo}>
            <img
              src={posterUrlPreview}
              className={styles.wrapperInfo__poster}
              alt=''
            />
            <div className={styles.wrapperInfo__textInfo}>
              <h1 className={styles.wrapperInfo__nameMovie}>
                {nameRu ? nameRu : nameOriginal} {year && `(${year})`}
              </h1>
              {nameOriginal && (
                <h2 className={styles.wrapperInfo__nameMovieOriginal}>
                  {nameOriginal}
                </h2>
              )}
              <div className={styles.wrapperInfo__buttons}>
                <Link
                  className={styles.wrapperInfo__watchButton}
                  to={`/watch/${idMovieParams}`}
                >
                  <BsFillCaretRightFill />
                  Смотреть
                </Link>
                <div title='Буду смотреть' className={styles.wrapperInfo__icon}>
                  <FavoriteIcon movie={movie} />
                </div>
              </div>
              <div className={styles.aboutMovie}>
                <h3 className={styles.aboutMovie__title}>
                  О {type === 'FILM' ? 'фильме' : 'сериале'}
                </h3>
                <ul className={styles.aboutMovie__listWrapper}>
                  <li className={styles.aboutMovie__list}>
                    <span className={styles.aboutMovie__key}>
                      Год производства
                    </span>
                    <span className={styles.aboutMovie__value}>
                      {year ? year : '-'}
                    </span>
                  </li>
                  <li className={styles.aboutMovie__list}>
                    <span className={styles.aboutMovie__key}>Страна</span>
                    <span className={styles.aboutMovie__value}>
                      {countries.length
                        ? countries.map(country => country.country).join(', ')
                        : '-'}
                    </span>
                  </li>
                  <li className={styles.aboutMovie__list}>
                    <span className={styles.aboutMovie__key}>Жанр</span>
                    <span className={styles.aboutMovie__value}>
                      {genres.length
                        ? genres.map(genre => genre.genre).join(', ')
                        : '-'}
                    </span>
                  </li>
                  <li className={styles.aboutMovie__list}>
                    <span className={styles.aboutMovie__key}>Слоган</span>
                    <span className={styles.aboutMovie__value}>
                      {slogan ? `« ${slogan} »` : '-'}
                    </span>
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
                    {ratingAgeLimits ? (
                      <span
                        className={
                          (styles.aboutMovie__value,
                          styles.aboutMovie__value_age)
                        }
                      >
                        {ratingAgeLimits.replace('age', '')}+
                      </span>
                    ) : (
                      '-'
                    )}
                  </li>
                  <li className={styles.aboutMovie__list}>
                    <span className={styles.aboutMovie__key}>Время</span>
                    <span className={styles.aboutMovie__value}>
                      {filmLength ? `${filmLength} мин` : '-'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.wrapper__describedMovie}>
            <TabsContent description={description} kinopoiskId={kinopoiskId} />
          </div>
        </>
      ) : (
        <h1 className={styles.notMovie}>Такого фильма не существует</h1>
      )}
    </>
  );
}

export default Movie;
