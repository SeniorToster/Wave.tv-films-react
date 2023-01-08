import styles from './ActorItem.module.scss';

function ActorItem({ actorItem }) {
  const { posterUrl, nameRu, nameEn, description } = actorItem;

  return (
    <div className={styles.wrapper}>
      <img className={styles.wrapper__img} src={posterUrl} alt='' />
      <p className={styles.wrapper__name}>{nameRu ? nameRu : nameEn}</p>
      {description && <p className={styles.wrapper__desc}>{description}</p>}
    </div>
  );
}

export default ActorItem;
