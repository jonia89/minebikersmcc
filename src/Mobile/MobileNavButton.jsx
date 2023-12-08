import { useState } from "react";
import "./MobileNavBar.css";
import { Link } from "react-router-dom";

export default function MobileNavButton(props) {
  const [activeMenu, setActiveMenu] = useState(false);
  let [siteView, setSiteView] = useState(props.sites[0].title);

  function openMenu(event) {
    if (activeMenu === false) {
      setActiveMenu(true);
    } else {
      setActiveMenu(false);
    }
  }
  function handleButtonClick(event) {
    setActiveMenu(false);
    setSiteView(event.target.value);
  }

  return (
    <div>
      {activeMenu === true ? (
        <div>
          {props.sites.map((currentSite) => {
            return (
              <Link to={currentSite.url} key={currentSite.title}>
                <button
                  className="mobile-navbutton"
                  type="button"
                  value={currentSite.title}
                  onClick={handleButtonClick}
                >
                  {currentSite.title}
                </button>
              </Link>
            );
          })}
        </div>
      ) : (
        <button className="mobile-navbutton" type="button" onClick={openMenu}>
          {siteView}
        </button>
      )}
    </div>
  );
}
