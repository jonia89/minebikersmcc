import { NavLink } from "react-router-dom";

export default function Navbutton(props) {
  const url = props.sites.url;
  const site = props.sites.site;

  return (
    <div style={{ margin: "1%" }}>
      <NavLink to={url}>
        <button className="navbutton">{site}</button>
      </NavLink>
    </div>
  );
}
