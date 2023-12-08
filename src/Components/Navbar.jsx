import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Frontpage";
import Intro from "../Pages/Intropage";
import History from "../Pages/Historypage";
import Words from "../Pages/Wordpage";
import Gallery from "../Pages/Gallerypage";
import Members from "../Pages/Memberspage";
import text from "../minebikerstext.png";
import mcc from "../mcctext.jpg";
import Navbutton from "./Navbutton";
import "./Navbar.css";


export default function Navbar(props) {

  return (
    <div>
      <BrowserRouter>
        <div className="navbar">
          <div>
            <img src={text} alt="Minebikers" />
          </div>
          <div>
            {props.sites.map((site) => (
              <Navbutton key={site.title} sites={site} />
            ))}
          </div>
          <div>
            <img src={mcc} alt="mcc" />
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/esittely" element={<Intro />} />
          <Route exact path="/historia" element={<History />} />
          <Route exact path="/galleria" element={<Gallery />} />
          <Route exact path="/jäsenet" element={<Members members={props.members} />} />
          <Route exact path="/sanastoa" element={<Words />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
