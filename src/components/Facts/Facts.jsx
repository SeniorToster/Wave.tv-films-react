import { useEffect, useState } from 'react';
import { LinearProgress } from '@mui/material';
import { getMovieFacts } from '../../api';
import styles from './Facts.module.scss';
import Title from '../Title/Title';
import NoContent from '../NoContent/NoContent';

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

  console.log(factsList);

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
