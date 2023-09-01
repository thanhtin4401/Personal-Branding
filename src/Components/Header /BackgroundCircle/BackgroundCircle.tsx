import React from "react";
import "./BackgroundCircle.scss";
const BackgroundCircle = () => {
  return (
    <div className="absolute h-full w-full z-10">
      <div className="background_container h-full w-full">
        {/* <div className="sun"></div> */}

        <div className="circle">
          <div className="venus"></div>
        </div>
        <div className="circle1">
          <div className="venus1"></div>
        </div>
        <div className="circle2">
          <div className="venus2"></div>
        </div>
        <div className="circle3">
          <div className="venus3"></div>
        </div>
        <div className="circle4">
          <div className="venus4"></div>
        </div>
        <div className="circle5">
          <div className="venus5"></div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundCircle;
