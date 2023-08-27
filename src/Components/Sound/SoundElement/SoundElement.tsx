import React, { useState } from "react";
import "./SoundElement.scss";

const SoundElement = () => {
  const [isSoundOn, setIsSoundOn] = useState(true);
  const handleOnSound = () => {
    setIsSoundOn(!isSoundOn);
  };

  return (
    <div
      className={`${
        isSoundOn ? "w-24" : "w-[2.4rem]"
      } ease-in-out transition-all sound-container`}
      onClick={() => {
        handleOnSound();
      }}
    >
      <div
        className={`${
          isSoundOn ? "hidden" : "flex"
        } justify-center items-center w-full h-full`}
      >
        <div className="triangle-right"></div>
      </div>
      <div className={`${isSoundOn ? "loader" : "hidden"}`}>
        <span className="stroke"></span>
        <span className="stroke"></span>
        <span className="stroke"></span>
        <span className="stroke"></span>
        <span className="stroke"></span>
        <span className="stroke"></span>
      </div>
    </div>
  );
};

export default SoundElement;
