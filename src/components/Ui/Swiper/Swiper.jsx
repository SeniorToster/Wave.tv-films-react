import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const breakpoints = {
  300: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 3,
    slidesPerGroup: 3,
  },
  860: {
    slidesPerView: 4,
    slidesPerGroup: 4,
  },
  1080: {
    slidesPerView: 5,
    spaceBetween: 30,
  },
};

function SwiperMain({ itemList, children }) {
  return (
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
      breakpoints={breakpoints}
      className='mySwiper'
    >
      {itemList.map((item, index) => (
        <SwiperSlide key={index}>
          {React.cloneElement(children, { actorItem: item })}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperMain;
