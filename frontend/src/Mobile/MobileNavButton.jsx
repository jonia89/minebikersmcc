import { useEffect, useState } from "react";
import "./MobileNavBar.css";
import dropdownIcon from "./dropdownicon.jpeg";
import { Link } from "react-router-dom";

export default function MobileNavButton(props) {
  const [activeMenu, setActiveMenu] = useState(
    JSON.parse(localStorage.getItem("activeMenu")) || false
  );
  useEffect(() => {
    localStorage.setItem("activeMenu", JSON.stringify(activeMenu));
  });

  const [siteView, setSiteView] = useState(
    JSON.parse(localStorage.getItem("siteView")) || props.sites[0].title
  );
  useEffect(() => {
    localStorage.setItem("siteView", JSON.stringify(siteView));
  }, [siteView]);

  function openMenu() {
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
          <div style={{ display: "flex" }}>
            {siteView}
            <img
              src={dropdownIcon}
              alt="dropdown icon"
              style={{ marginLeft: "8px" }}
            />
          </div>
        </button>
      )}
    </div>
  );
}
