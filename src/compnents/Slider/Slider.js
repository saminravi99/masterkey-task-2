import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../img/slider1.jpg";
import slider2 from "../../img/slider2.jpg";
import slider3 from "../../img/slider3.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function Slider() {
    AOS.init();
    AOS.refresh();
 

  return (
    <div className="mt-5">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-div">
            <img className="slider-img" src={slider1} alt="" />
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
              className="slider-text"
            >
              <h1>&apos;মুজিববর্ষের অঙ্গিকার</h1>
              <h1>উন্নয়ন-অর্থায়নের উৎস হবে পূজিবাজার&apos;</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-div">
            <img className="slider-img" src={slider2} alt="" />
            <div
              data-aos="slide-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
              className="slider-text"
            >
              <h1>&apos;মুজিববর্ষের অঙ্গিকার</h1>
              <h1>উন্নয়ন-অর্থায়নের উৎস হবে পূজিবাজার&apos;</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-div">
            <img className="slider-img" src={slider3} alt="" />
            <div
              data-aos="slide-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
              className="slider-text"
            >
              <h1>&apos;মুজিববর্ষের অঙ্গিকার</h1>
              <h1>উন্নয়ন-অর্থায়নের উৎস হবে পূজিবাজার&apos;</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
