import NoContent from '../../Ui/NoContent/NoContent';
import Title from '../../Ui/Title/Title';
import styles from './ActorFacts.module.scss';

function ActorFacts({ factsList }) {
  return (
    <>
      <Title text={'Знаете ли вы, что…'} />
      {factsList.length ? (
        <ul className={styles.list}>
          {factsList.map((fact, index) => (
            <li key={index} className={styles.item}>
              {fact}
            </li>
          ))}
        </ul>
      ) : (
        <NoContent />
      )}
    </>
  );
}

export default ActorFacts;
