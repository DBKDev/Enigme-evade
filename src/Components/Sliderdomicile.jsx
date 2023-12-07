import React from 'react';
import "../Styles/Slider.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Sliderdomicile = () => {
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
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/Images/SliderDom-01.png"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/Images/SliderDom-02.png"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/Images/SliderDom-03.png"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/Images/SliderDom-04.png"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/Images/SliderDom-05.png"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/Images/SliderDom-06.png"} alt="" /></SwiperSlide>
      </Swiper>
    </>;
}

export default Sliderdomicile;
