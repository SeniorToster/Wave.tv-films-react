import { Link } from 'react-router-dom';
import { BsFillCaretRightFill } from 'react-icons/bs';
import FavoriteIcon from '../../Ui/FavoriteIcon/FavoriteIcon';
import styles from './MovieInfo.module.scss';

function MovieInfo({ movie, office }) {
  const { budget, world } = office;
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
    ratingKinopoisk,
    kinopoiskId,
  } = movie;

  return (
    <div className={styles.wrapperInfo}>
      <div className={styles.wrapperInfo__poster}>
        {ratingKinopoisk && <div>{ratingKinopoisk.toFixed(1)}</div>}
        <img src={posterUrlPreview} alt='' />
      </div>
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
            to={`/watch/${kinopoiskId}`}
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
              <span className={styles.aboutMovie__key}>Год производства</span>
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
                    (styles.aboutMovie__value, styles.aboutMovie__value_age)
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
  );
}

export default MovieInfo;
