import styles from './ActorInfo.module.scss';

function ActorInfo({ actor }) {
  const {
    posterUrl,
    nameRu,
    nameEn,
    age,
    sex,
    growth,
    birthday,
    birthplace,
    death,
    profession,
  } = actor;

  return (
    <div className={styles.wrapperInfo}>
      <div className={styles.wrapperInfo__poster}>
        <img src={posterUrl} alt='' />
      </div>
      <div className={styles.wrapperInfo__textInfo}>
        <h1 className={styles.wrapperInfo__nameMovie}>
          {nameRu ? nameRu : nameEn}
        </h1>
        {nameEn && (
          <h2 className={styles.wrapperInfo__nameMovieOriginal}>{nameEn}</h2>
        )}
        <div className={styles.aboutMovie}>
          <ul className={styles.aboutMovie__listWrapper}>
            <li className={styles.aboutMovie__list}>
              <span className={styles.aboutMovie__key}>Пол</span>
              <span className={styles.aboutMovie__value}>
                {sex ? (sex === 'FEMALE' ? 'женский' : 'мужской') : '-'}
              </span>
            </li>
            <li className={styles.aboutMovie__list}>
              <span className={styles.aboutMovie__key}>Рост</span>
              <span className={styles.aboutMovie__value}>
                {growth ? `${growth} см` : '-'}
              </span>
            </li>{' '}
            <li className={styles.aboutMovie__list}>
              <span className={styles.aboutMovie__key}>День рождение</span>
              <span className={styles.aboutMovie__value}>
                {birthday ? birthday : '-'}
              </span>
            </li>
            <li className={styles.aboutMovie__list}>
              <span className={styles.aboutMovie__key}>Возраст</span>
              <span className={styles.aboutMovie__value}>
                {age ? age : '-'}
              </span>
            </li>
            <li className={styles.aboutMovie__list}>
              <span className={styles.aboutMovie__key}> Дата смерти</span>
              <span className={styles.aboutMovie__value}>
                {death ? death : '-'}
              </span>
            </li>
            <li className={styles.aboutMovie__list}>
              <span className={styles.aboutMovie__key}>Специальность</span>
              {profession ? profession : '-'}
            </li>
            <li className={styles.aboutMovie__list}>
              <span className={styles.aboutMovie__key}>Место проживание</span>
              <span className={styles.aboutMovie__value}>
                {birthplace ? birthplace : '-'}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ActorInfo;
