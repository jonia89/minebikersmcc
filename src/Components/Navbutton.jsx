import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbutton(props) {
  return (
    <NavLink
      to={props.sites.url}
      className={({ isActive }) => (isActive ? "active" : "inactive")}
    >
      <button className="navbutton">{props.sites.title}</button>
    </NavLink>
  );
}
