import React, { useEffect, useRef } from "react";
import "./ServiceSesion.scss";
import Tilt from "react-parallax-tilt";
const ServiceSesion = () => {
  return (
    <div className="w-full py-12 relative overflow-hidden service-container flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="65"
        height="65"
        viewBox="0 0 85 85"
        fill="none"
        className="absolute top-14 left-[16rem]"
      >
        <path
          d="M42.5 0L53.9789 31.0211L85 42.5L53.9789 53.9789L42.5 85L31.0211 53.9789L0 42.5L31.0211 31.0211L42.5 0Z"
          fill="#BD86FE"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 85 85"
        fill="none"
        className="absolute top-[6rem] right-[25rem]"
      >
        <path
          d="M42.5 0L53.9789 31.0211L85 42.5L53.9789 53.9789L42.5 85L31.0211 53.9789L0 42.5L31.0211 31.0211L42.5 0Z"
          fill="#BD86FE"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 85 85"
        fill="none"
        className="absolute bottom-[6rem] right-[25rem]"
      >
        <path
          d="M42.5 0L53.9789 31.0211L85 42.5L53.9789 53.9789L42.5 85L31.0211 53.9789L0 42.5L31.0211 31.0211L42.5 0Z"
          fill="#BD86FE"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 85 85"
        fill="none"
        className="absolute bottom-[rem] right-[10rem]"
      >
        <path
          d="M42.5 0L53.9789 31.0211L85 42.5L53.9789 53.9789L42.5 85L31.0211 53.9789L0 42.5L31.0211 31.0211L42.5 0Z"
          fill="#CBED46"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 85 85"
        fill="none"
        className="absolute bottom-[6rem] left-[10rem]"
      >
        <path
          d="M42.5 0L53.9789 31.0211L85 42.5L53.9789 53.9789L42.5 85L31.0211 53.9789L0 42.5L31.0211 31.0211L42.5 0Z"
          fill="#FFC224"
        />
      </svg>
      <div className="container">
        <div className="service-content flex flex-col justify-center items-center mb-16">
          <h1 className="text-white text-[1.8rem] text-first font-medium">
            What We Do Best
          </h1>
          <h1 className="text-white text-[2.4rem] text-center font-bold">
            Our Digital Services
          </h1>
        </div>
        <div className="img-service mb:block sm:block md:flex">
          <div className="mb:w-full sm:w-full xl:w-2/4 flex mb:justify-center sm:justify-center mb:mb-6 sm:mb-6 md:justify-end items-center mr-4 service-left relative">
            <Tilt
              className="tiltcard tiltcard__box1  parallax-effect-glare-scale"
              tiltMaxAngleX={40}
              tiltMaxAngleY={40}
              transitionSpeed={1000}
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              gyroscope={true}
            >
              <div className="content relative">
                <img
                  className="absolute z-10"
                  src="https://res.cloudinary.com/dvzingci9/image/upload/v1692463525/Personal_Branding/Header/figma_icon4_1_thaqpw.png"
                  alt=""
                />
                <div className="content_text mt-10">
                  <h2>01</h2>
                  <h3>Name Service</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptas incidunt inventore modi officia doloremque.
                    Repellat atque ex quod asperiores dicta!
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </Tilt>
          </div>
          <div className="mb:w-full sm:w-full xl:w-2/4 flex mb:justify-center sm:justify-center mb:mb-6 sm:mb-6 md:justify-start items-center mr-4 service-left relative">
            <Tilt
              className="tiltcard tiltcard__box2 parallax-effect-glare-scale"
              tiltMaxAngleX={40}
              tiltMaxAngleY={40}
              transitionSpeed={1000}
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              gyroscope={true}
            >
              <div className="content relative">
                <img
                  className="absolute z-10"
                  src="https://res.cloudinary.com/dvzingci9/image/upload/v1692463525/Personal_Branding/Header/figma_icon4_1_thaqpw.png"
                  alt=""
                />
                <div className="content_text mt-10">
                  <h2>01</h2>
                  <h3>Name Service</h3>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptas incidunt inventore modi officia doloremque.
                    Repellat atque ex quod asperiores dicta!
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSesion;
