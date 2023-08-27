import { Button } from "@mui/material";
import { Space } from "antd";
import { NavWrapper } from "./style";
import "./NavBar.scss";
import "animate.css";
import { useEffect, useState } from "react";
import SoundElement from "../Sound/SoundElement/SoundElement";

const NavBar = (props) => {
  const { isActive } = props;
  useEffect(() => {
    console.log("isActive", isActive);
  }, [isActive]);
  const [isPlaySound, setisPlaySound] = useState(true);
  return (
    <>
      <div className=" nav-button animate__bounceInDown animate__faster animate__animated p-2 mb:flex sm:flex md:flex xl:hidden z-80 fixed h-12 w-12 mt-5 rounded-md flex-col justify-around">
        <div className="nav-line w-full h-[0.4rem] rounded-lg bg-black"></div>
        <div className="nav-line w-full h-[0.4rem] rounded-lg bg-black"></div>
        <div className="nav-line w-full h-[0.4rem] rounded-lg bg-black"></div>
      </div>
      <NavWrapper
        className={`${
          isActive
            ? "animate__bounceInDown animate__faster"
            : "animate__bounceOutUp"
        } animate__animated mb:hidden sm:hidden md:hidden xl:flex`}
      >
        <Space className="nav">
          <SoundElement />

          <ul>
            <li>Home</li>
            <li>Exprient</li>
            <li>Service</li>
            <li>Project</li>
          </ul>
          <Button className="contact-button" variant="contained">
            Contact me
          </Button>
        </Space>
      </NavWrapper>
    </>
  );
};

export default NavBar;
