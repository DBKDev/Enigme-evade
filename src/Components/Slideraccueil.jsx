import React from 'react';
import "../Styles/Slider.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slideaccueil = () => {
    return <>
        <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/Images/Slider-01.png"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/Images/Slider-02.png"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/Images/Slider-03.png"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/Images/Slider-04.png"} alt="" /></SwiperSlide>
      </Swiper>
    </>;
}

export default Slideaccueil;
