import { Link } from 'react-router-dom';
import FavoriteIcon from '../../Ui/FavoriteIcon/FavoriteIcon';
import styles from './MovieCard.module.scss';

let country = 'неизвестно';
let genre = 'неизвестно';
const types = [
  { typeUS: 'FILM', typeRU: 'Фильм' },
  { typeUS: 'TV_SERIES', typeRU: 'Сериал' },
  { typeUS: 'TV_SHOW', typeRU: 'Ток-шоу' },
  { typeUS: 'MINI_SERIES', typeRU: 'Мини-сериал' },
  { typeUS: 'NONE', typeRU: '' },
];

function MovieCard(props) {
  const {
    nameRu,
    nameOriginal,
    countries,
    genres,
    ratingKinopoisk,
    year,
    posterUrlPreview,
    type = 'NONE',
    duration,
    premiereRu,
    kinopoiskId,
  } = props;
  const typeArrRU = types.filter(typeFilm => typeFilm.typeUS === type);
  const { typeRU } = typeArrRU[0];

  if (countries.length) ({ country } = countries[0]);

  if (genres.length) ({ genre } = genres[0]);

  return (
    <div className={styles.wrapper}>
      <Link to={`/film/${kinopoiskId}`}>
        <div className={styles.wrapper__poster}>
          <img src={posterUrlPreview} alt='' />
          <div className={styles.wrapper__icons}>
            <FavoriteIcon movie={props} />
          </div>
          <div className={styles.wrapper__hoverInfo}>
            {!!premiereRu ? (
              <h3>
                Премьера:{' '}
                <span>{premiereRu.split('-').reverse().join('.')}</span>
              </h3>
            ) : (
              <h3>
                Рейтинг:{' '}
                {ratingKinopoisk ? (
                  <span>{ratingKinopoisk.toFixed(1)}</span>
                ) : (
                  '–'
                )}
              </h3>
            )}
            {typeRU && <p>{typeRU}</p>}
            <p>
              Страна: <span>{country}</span>
            </p>
            <p>
              Жанр: <span>{genre}</span>
            </p>
            {duration && (
              <p>
                Время: <span>{duration} минут</span>
              </p>
            )}
          </div>
        </div>
      </Link>
      <p>{nameRu || nameOriginal}</p>
      <small>{year}</small>
    </div>
  );
}

export default MovieCard;
