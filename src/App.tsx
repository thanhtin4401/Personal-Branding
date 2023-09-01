import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Contact from "./Components/Contact/Contact";

import ServiceSesion from "./Components/ServiceSecsion/ServiceSesion";
// import SkillsAndTools from "./pages/App/components/SkillsAndTools/SkillsAndTools";
import FeedBack from "./Components/FeedBack/FeedBack";
import TvSection from "./Components/TvSection/TvSection";
import Header from "./Components/Header /Header";
import { useEffect, useRef, useState } from "react";
import SkillAndTool from "./Components/SkillAndTool/SkillAndTool";
const App = () => {
  const [activeNavigate, setactiveNavigate] = useState(false);
  const [scrollValue, setscrollValue] = useState(0);
  const typingSearchRef = useRef(null);
  const closeNav = () => {
    const values = window.scrollY;
    console.log("values", values);

    setscrollValue(values);
    setactiveNavigate(true);
    if (typingSearchRef.current) {
      clearTimeout(typingSearchRef.current);
    }

    typingSearchRef.current = setTimeout(() => {
      setactiveNavigate(false);
    }, 3000);
  };
  window.addEventListener("scroll", closeNav);

  return (
    <div className="overflow-hidden">
      <NavBar
        className="animate__fadeOutDown animate__animated"
        isActive={activeNavigate}
      />
      <Header />
      <SkillAndTool />
      <TvSection />
      {/* <SkillsAndTools /> */}
      <ServiceSesion />
      <FeedBack />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
