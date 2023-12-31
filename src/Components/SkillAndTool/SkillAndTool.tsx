import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import ParallaxText from "./ParallaxText/ParallaxText";
const SkillAndTool = () => {
  return (
    // <section>
    <div className="relative">
      <ParallaxText baseVelocity={-2}>Framer Motion</ParallaxText>
    </div>
  );
};

export default SkillAndTool;
