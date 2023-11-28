import React from "react";
import Navbar from "./Components/Navbar";
import { useState, useEffect } from "react";

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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

currentWidth < 840 ? console.log("mobiiliruutu") : console.log("isoruutu")

  return (
    <div>
      <Navbar />
    </div>
  );
}
