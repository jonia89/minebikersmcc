import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Etusivu from "../Pages/Etusivu";
import Esittely from "../Pages/Esittely";
import Historia from "../Pages/Historia";
import Sanastoa from "../Pages/Sanasto";
import Galleria from "../Pages/Galleria";
import Jäsenet from "../Pages/Jäsenet";
import text from "../minebikerstext.png";
import mcc from "../mcc.jpg";
import Navbutton from "./Navbutton";
import Moottoripyörä from "../Pages/Moottoripyörä";

export default function Navigation() {
  const sites = [
    { site: "Etusivu", url: "/" },
    { site: "Esittely", url: "/esittely" },
    { site: "Historia", url: "/historia" },
    { site: "Jäsenet", url: "/jäsenet" },
    { site: "Galleria", url: "/galleria" },
    { site: "Sanastoa", url: "/sanastoa" },
    { site: "Prätkä", url: "/prätkä" },
  ];

  const style = {
    position: "fixed",
    top: "0px",
    width: "100%",
    display: "flex",
    background: "black",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <BrowserRouter>
        <div style={style}>
          <img src={text} alt="Minebikers" />
          <Navbutton sites={sites[0]} />
          <Navbutton sites={sites[1]} />
          <Navbutton sites={sites[2]} />
          <Navbutton sites={sites[3]} />
          <Navbutton sites={sites[4]} />
          <Navbutton sites={sites[5]} />
          <Navbutton sites={sites[6]} />
          <img src={mcc} alt="mcc" />
          <div></div>
        </div>
        <Routes>
          <Route exact path="/" element={<Etusivu />} />
          <Route exact path="/esittely" element={<Esittely />} />
          <Route exact path="/historia" element={<Historia />} />
          <Route exact path="/galleria" element={<Galleria />} />
          <Route exact path="/jäsenet" element={<Jäsenet />} />
          <Route exact path="/sanastoa" element={<Sanastoa />} />
          <Route exact path="/prätkä" element={<Moottoripyörä />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
