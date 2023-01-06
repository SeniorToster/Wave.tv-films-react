import NoContent from '../NoContent/NoContent';
import Title from '../Title/Title';
import styles from './Description.module.scss';

function Description({ text }) {
  return (
    <>
      {text ? (
        <>
          <Title text={'Описание'} />
          <h2 className={styles.description}>{text}</h2>
        </>
      ) : (
        <NoContent />
      )}
    </>
  );
}

export default Description;
