import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { LinearProgress } from '@mui/material';
import { getMovieActors } from '../../api';
import styles from './Actors.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import ActorItem from './ActorItem/ActorItem';

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

  console.log(actorsList);

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        <>
          <div className={styles.wrapperTitle}>
            <h2 className={styles.wrapperTitle__title}>Актёры</h2>
            <p className={styles.wrapperTitle__numActors}>
              ({actorsList.length})
            </p>
          </div>
          <div className={styles.list}>
            <Swiper
              style={{
                '--swiper-navigation-color': '#e63946',
                '--swiper-pagination-color': '#e63946',
              }}
              spaceBetween={30}
              slidesPerView={5}
              slidesPerGroup={5}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation]}
              className='mySwiper'
            >
              {actorsList.map(actorItem => (
                <SwiperSlide key={actorItem.staffId}>
                  <ActorItem actorItem={actorItem} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}
    </>
  );
}

export default Actors;
