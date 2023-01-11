import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

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
