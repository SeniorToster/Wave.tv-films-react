import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { LinearProgress } from '@mui/material';
import { getMovieActors } from '../../../api';
import ActorItem from './ActorItem/ActorItem';
import Title from '../../Ui/Title/Title';
import NoContent from '../../Ui/NoContent/NoContent';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Actors.module.scss';

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
              {' '}
              <Title text={'Актёры'} numbers={actorsList.length} />
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
          ) : (
            <NoContent />
          )}
        </>
      )}
    </>
  );
}

export default Actors;
