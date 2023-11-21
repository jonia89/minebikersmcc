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
import "./Navbar.css";

export default function Navigation() {
  const sites = [
    { site: "Etusivu", url: "/" },
    { site: "Esittely", url: "/esittely" },
    { site: "Historia", url: "/historia" },
    { site: "Jäsenet", url: "/jäsenet" },
    { site: "Galleria", url: "/galleria" },
    { site: "Sanastoa", url: "/sanastoa" },
  ];

  return (
    <div>
      <BrowserRouter>
        <div className="navbar">
          <img src={text} alt="Minebikers" />
          {sites.map((site) => (
            <Navbutton sites={site} />
          ))}
          <img src={mcc} alt="mcc" />
        </div>
        <Routes>
          <Route exact path="/" element={<Etusivu />} />
          <Route exact path="/esittely" element={<Esittely />} />
          <Route exact path="/historia" element={<Historia />} />
          <Route exact path="/galleria" element={<Galleria />} />
          <Route exact path="/jäsenet" element={<Jäsenet />} />
          <Route exact path="/sanastoa" element={<Sanastoa />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
