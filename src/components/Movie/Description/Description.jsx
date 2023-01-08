import NoContent from '../../Ui/NoContent/NoContent';
import Title from '../../Ui/Title/Title';
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
