import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbutton(props) {
  const url = props.sites.url;
  const site = props.sites.site;

  return (
    <NavLink
      to={url}
      className={({ isActive }) => (isActive ? "active" : "inactive")}
    >
      <button className="navbutton">{site}</button>
    </NavLink>
  );
}
