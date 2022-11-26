import styles from './Movie.module.scss';

function Movie({
  nameRu,
  countries,
  genres,
  ratingKinopoisk,
  year,
  posterUrlPreview,
  type,
}) {
  return (
    <div className={styles.wrapper}>
      <img src={posterUrlPreview} alt='' />
      <p>{nameRu}</p>
      <small>{year}</small>
    </div>
  );
}

export default Movie;
