import { useEffect, useState } from 'react';
import { LinearProgress } from '@mui/material';
import { getMovieFacts } from '../../../api';
import NoContent from '../../Ui/NoContent/NoContent';
import Title from '../../Ui/Title/Title';
import styles from './Facts.module.scss';

function Facts({ kinopoiskId }) {
  const [loading, setLoading] = useState(true);
  const [factsList, setFactsList] = useState([]);

  useEffect(() => {
    getMovieFacts(kinopoiskId).then(json => {
      setFactsList(json.items);
      setLoading(false);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : factsList.length ? (
          <>
          <Title text={'Знаете ли вы, что…'} />
          <ul className={styles.list}>
            {factsList.map(fact => (
              <li
                className={styles.item}
                dangerouslySetInnerHTML={{ __html: fact.text }}
              ></li>
            ))}
          </ul>
        </>
      ) : (
        <NoContent />
      )}
    </>
  );
}

export default Facts;
