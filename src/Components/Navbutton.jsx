import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbutton(props) {
  const url = props.sites.url;
  const site = props.sites.site;

  let [click, setClick] = useState(0);

  const isActive = () => {
    setClick(1);

    console.log(click);
  };

  return (
    <div className="btn-group">
      <NavLink to={url}>
        <button
          className="navbar-btn btn-primary navbutton"
          onClick={isActive}
          click={click}
        >
          {site}
        </button>
      </NavLink>
    </div>
  );
}
