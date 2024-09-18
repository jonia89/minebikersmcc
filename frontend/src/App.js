import Navbar from "./Components/Navbar";
import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import MobileNavBar from "./Mobile/MobileNavBar";
import { membersList } from "./membersList";
import { siteList } from "./siteList";

const getWindowWidth = () => {
  const { innerWidth: width } = window;
  return width;
};

export default function App() {
  const [currentWidth, setCurrentWidth] = useState();

  

  

  useEffect(() => {
    function handleResize() {
      setCurrentWidth(getWindowWidth());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>{isMobile || currentWidth < 800 ? <MobileNavBar members={membersList} sites={siteList}/>  : <Navbar members={membersList} sites={siteList} />}</div>
  );
}
