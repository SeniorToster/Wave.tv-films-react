import styles from './Title.module.scss';

function Title({ text, numbers }) {
  return (
    <div className={styles.wrapperTitle}>
      <h2 className={styles.wrapperTitle__title}>{text}</h2>
      {numbers && <p className={styles.wrapperTitle__numActors}>({numbers})</p>}
    </div>
  );
}

export default Title;
