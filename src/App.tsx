import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Contact from "./Components/Contact/Contact";

// import SoundElement from "./Components/sound/sound-element/SoundElement";
import ServiceSesion from "./Components/ServiceSecsion/ServiceSesion";
import SkillsAndTools from "./pages/App/components/SkillsAndTools/SkillsAndTools";
import FeedBack from "./Components/FeedBack/FeedBack";
import TvSection from "./Components/TvSection/TvSection";
import Header from "./Components/Header /Header";
import { useEffect, useRef, useState } from "react";
const App = () => {
  const [activeNavigate, setactiveNavigate] = useState(false);
  const [scrollValue, setscrollValue] = useState(0);
  const typingSearchRef = useRef(null);
  const closeNav = () => {
    const values = window.scrollY;
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
    <div className="">
      <NavBar
        className="animate__fadeOutDown animate__animated"
        isActive={activeNavigate}
      />
      <Header />
      <TvSection />
      <SkillsAndTools />
      <ServiceSesion />
      <FeedBack />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
