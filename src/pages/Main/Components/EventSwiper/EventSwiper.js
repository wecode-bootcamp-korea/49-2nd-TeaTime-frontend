import React from 'react';
import { EVENT_SWIPER_DATA } from '../../../../data/eventSwiperData';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './EventSwiper.scss';

const EventSwiper = () => {
  return (
    <div className="eventSwiperWrap">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          prevEl: '.swiperPrevBtn',
          nextEl: '.swiperNextBtn',
        }}
        pagination={{
          el: '.eventSwiperPagination',
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            return `<span>${current}</span> / ${total}`;
          },
        }}
      >
        {EVENT_SWIPER_DATA?.map(item => {
          return (
            <SwiperSlide key={item.id}>
              <Link to={item.path}>
                <img src={item.imageSrc} alt={item.alt} />
              </Link>
            </SwiperSlide>
          );
        })}

        <div className="controller">
          <button type="button" className="swiperPrevBtn">
            Prev
          </button>
          <span className="eventSwiperPagination" />
          <button type="button" className="swiperNextBtn">
            Next
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default EventSwiper;
