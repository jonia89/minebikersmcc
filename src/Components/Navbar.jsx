import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Frontpage";
import Intro from "../Pages/Intropage";
import History from "../Pages/Historypage";
import Words from "../Pages/Wordpage";
import Gallery from "../Pages/Gallerypage";
import Members from "../Pages/Memberspage";
import text from "../minebikerstext.png";
import mcc from "../mcc.jpg";
import Navbutton from "./Navbutton";
import "./Navbar.css";

export default function Navbar() {
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
            <Navbutton key={site.site} sites={site} />
          ))}
          <img src={mcc} alt="mcc" />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/esittely" element={<Intro />} />
          <Route exact path="/historia" element={<History />} />
          <Route exact path="/galleria" element={<Gallery />} />
          <Route exact path="/jäsenet" element={<Members />} />
          <Route exact path="/sanastoa" element={<Words />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
