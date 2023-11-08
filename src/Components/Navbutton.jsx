import { NavLink } from "react-router-dom";
import "./Navbar.css"


export default function Navbutton(props) {
  const url = props.sites.url;
  const site = props.sites.site;

  return (
    <div className="btn-group">
      <NavLink to={url}>
        <button className="navbar-btn btn-primary navbutton">{site}</button>
      </NavLink>
    </div>
  );
}
