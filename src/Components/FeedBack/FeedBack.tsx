import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./FeedBack.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import TestimonialBox from "./TestimonialBox/TestimonialBox";
const FeedBack = () => {
  return (
    <section className="testimonial container flex justify-center items-center flex-col">
      <div className="service-content flex flex-col justify-center items-center">
        <h1 className="text-white text-[2rem] text-first font-medium">
          What We Do Best
        </h1>
        <h1 className="text-white text-[3.5rem] font-bold">
          Our Digital Services
        </h1>
      </div>
      <div className="w-full justify-center items-center flex">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="feed_back">
            <TestimonialBox />
          </SwiperSlide>
          <SwiperSlide className="feed_back">
            <TestimonialBox />
          </SwiperSlide>
          <SwiperSlide className="feed_back">
            <TestimonialBox />
          </SwiperSlide>
          <SwiperSlide className="feed_back">
            <TestimonialBox />
          </SwiperSlide>
          <SwiperSlide className="feed_back">
            <TestimonialBox />
          </SwiperSlide>
          <SwiperSlide className="feed_back">
            <TestimonialBox />
          </SwiperSlide>
          <SwiperSlide className="feed_back">
            <TestimonialBox />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default FeedBack;
