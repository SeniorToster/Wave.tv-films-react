import { Link } from 'react-router-dom';
import styles from './ActorItem.module.scss';

function ActorItem({ actorItem }) {
  const { posterUrl, nameRu, nameEn, description, staffId } = actorItem;

  return (
    <Link to={`/name/${staffId}`}>
      <div className={styles.wrapper}>
        <img className={styles.wrapper__img} src={posterUrl} alt='' />
        <p className={styles.wrapper__name}>{nameRu ? nameRu : nameEn}</p>
        {description && <p className={styles.wrapper__desc}>{description}</p>}
      </div>
    </Link>
  );
}

export default ActorItem;
