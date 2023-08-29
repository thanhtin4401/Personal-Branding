import React, { useRef } from "react";
import BackgroundCircle from "./BackgroundCircle/BackgroundCircle";
import "./Header.scss";
import "animate.css";
import { motion, useScroll, useTransform } from "framer-motion";
const Header = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    <div
      ref={ref}
      className="w-screen overflow-hidden bg-[#212121] overflow-hidden relative pt-24"
    >
      <div className="overlay__tranform"></div>
      <BackgroundCircle />
      <motion.img
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}
        style={{
          y: textY,
        }}
        src="https://res.cloudinary.com/dvzingci9/image/upload/v1693048037/Figma_Logo_wib2na.png"
        className="animate__fadeInUp layput_figma absolute z-30 -bottom-[9rem] -left-[4rem] mb:hidden sm:hidden xl:block"
        alt=""
      />
      <motion.img
        animate={{ x: -100 }}
        transition={{ ease: "easeOut", duration: 2 }}
        style={{
          y: textY,
        }}
        src="https://res.cloudinary.com/dvzingci9/image/upload/v1693048022/takeaway-cup-dynamic-color_p1258h.png"
        className="animate__fadeInUp layput_figma absolute z-30 -bottom-[9rem] right-[5rem] mb:hidden sm:hidden md:block"
        alt=""
      />
      <div className="w-full  container relative z-20 flex bottom-0 flex-col items-center justify-center ">
        <motion.div
          style={{
            y: textY,
          }}
          className="animate__zoomInDown mb:w-full sm:w-full xl:w-2/4 
          flex
          md:justify-center
          md:items-center
          sm:justify-start
          sm:items-start
          mb:justify-start
          mb:items-start
          flex-col
        "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1 className="text-[2.5rem] font-bold text_name">THANH TIN</h1>
          <h1 className="text-[2.5rem] font-bold text_title">DEVELOP</h1>
          <p className="text-white  mb:test-right xl:text-center font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum non
            quidem sint reiciendis numquam repellendus, aliquid nostrum nam est
            tempore!
          </p>
          <div className="flex my-4">
            <div className="contact_link h-8 w-8 rounded-full bg-gray-600">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1692465378/Personal_Branding/Header/LinkedIn_wpm1mv.png"
                className="object-contain"
                alt=""
              />
            </div>
            <div className="contact_link h-8 w-8 rounded-full mx-3 bg-gray-600">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1692465378/Personal_Branding/Header/Github_iyvt36.png"
                className="object-contain"
                alt=""
              />
            </div>
            <div className="contact_link h-8 w-8 rounded-full bg-gray-600">
              <img
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1692465378/Personal_Branding/Header/Facebook_i4i3qd.png"
                className="object-contain"
                alt=""
              />
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            whileTap={{ scale: 0.9 }}
            className="explore cursor-pointer rounded-full py-2 px-4 inline"
          >
            <h1 className="text-white">explore</h1>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="animate__bounceInUp w-full flex justify-center mt-8"
        >
          <img
            src="https://res.cloudinary.com/dvzingci9/image/upload/v1693017208/Header_right2_fbj7ki.png"
            alt=""
          />
        </motion.div>
      </div>
      );
    </div>
  );
};

export default Header;
