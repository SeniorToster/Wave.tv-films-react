import { useEffect, useState } from 'react';
import { LinearProgress } from '@mui/material';
import { getMovieActors } from '../../../api';
import ActorItem from './ActorItem/ActorItem';
import Title from '../../Ui/Title/Title';
import NoContent from '../../Ui/NoContent/NoContent';
import styles from './Actors.module.scss';
import SwiperMain from '../../Ui/Swiper/Swiper';

function Actors({ kinopoiskId }) {
  const [loading, setLoading] = useState(true);
  const [actorsList, setActorsList] = useState([]);

  useEffect(() => {
    getMovieActors(kinopoiskId).then(json => {
      let actors = [
        ...json.filter(actorItem => actorItem.professionKey === 'ACTOR'),
      ];
      setActorsList(actors);
      setLoading(false);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        <>
          {actorsList.length ? (
            <>
              <Title text={'Актёры'} numbers={actorsList.length} />
              <div className={styles.list}>
                <SwiperMain itemList={actorsList}>
                  <ActorItem />
                </SwiperMain>
              </div>
            </>
          ) : (
            <NoContent />
          )}
        </>
      )}
    </>
  );
}

export default Actors;
