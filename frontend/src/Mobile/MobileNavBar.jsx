import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileNavButton from "./MobileNavButton";
import text from "../minebikerstext.png";
import mcc from "../mcctext.jpg";
import "./MobileNavBar.css";

import MobileHome from "./MobilePages/MobileFrontpage";
import MobileIntro from "./MobilePages/MobileIntropage";
import MobileHistory from "./MobilePages/MobileHistorypage";
import MobileWords from "./MobilePages/MobileWordpage";
import MobileGallery from "./MobilePages/MobileGallerypage";
import MobileMembers from "./MobilePages/MobileMemberspage"
import MobileGuestbook from "./MobilePages/MobileGuestbookpage";

export default function MobileNavBar(props) {


  return (
    <div>
      <BrowserRouter>
        <div className="mobile-navbar">
          <div>
            <img src={text} alt="Minebikers" />
          </div>
          <div>
            <MobileNavButton sites={props.sites} key={props.sites.id} />
          </div>
          <div>
            <img src={mcc} alt="mcc" />
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<MobileHome />} />
          <Route exact path="/esittely" element={<MobileIntro />} />
          <Route exact path="/historia" element={<MobileHistory />} />
          <Route exact path="/jäsenet" element={<MobileMembers members={props.members} />} />
          <Route exact path="/galleria" element={<MobileGallery />} />
          <Route exact path="/sanastoa" element={<MobileWords />} />
          <Route exact path="/vieraskirja" element={<MobileGuestbook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
