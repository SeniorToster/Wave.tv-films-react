import { BsBookmark } from 'react-icons/bs';
import styles from './Movie.module.scss';

function Movie({
  nameRu,
  countries,
  genres,
  ratingKinopoisk,
  year,
  posterUrlPreview,
  type,
  duration,
}) {
  let country = 'неизвестно';
  let genre = 'неизвестно';

  if (countries.length) ({ country } = countries[0]);

  if (genres.length) ({ genre } = genres[0]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__poster}>
        <img src={posterUrlPreview} alt='' />
        <div className={styles.wrapper__icons}>
          <BsBookmark />
        </div>
        <div className={styles.wrapper__hoverInfo}>
          <h3>
            Рейтинг: <span>{ratingKinopoisk}</span>
          </h3>
          <p>
            Страна: <span>{country}</span>
          </p>
          <p>
            Жанр: <span>{genre}</span>
          </p>
          {/*  <p>
            Время: <span>{duration} минут</span>
          </p> */}
        </div>
      </div>
      <p>{nameRu}</p>
      <small>{year}</small>
    </div>
  );
}

export default Movie;
