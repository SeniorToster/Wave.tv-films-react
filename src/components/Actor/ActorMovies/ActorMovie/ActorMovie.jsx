import { Link } from 'react-router-dom';
import styles from './ActorMovie.module.scss';
import Button from '../../../Ui/Button/Button';

function ActorMovie({ movie }) {
  const { nameRu, filmId, nameEn, description } = movie;
  return (
    <div className={styles.wrapper}>
      <Link
        title='Перейти к фильму'
        className={styles.wrapper__infoWrapper}
        to={`/film/${filmId}`}
      >
        <p className={styles.wrapper__nameMovie}>{nameRu ? nameRu : nameEn}</p>
        {nameEn && (
          <p className={styles.wrapper__nameMovieOriginal}>{nameEn}</p>
        )}
        {description && (
          <p className={styles.wrapper__description}>{description}</p>
        )}
      </Link>
      <Button type={'WATCH'} filmId={filmId} />
    </div>
  );
}

export default ActorMovie;
