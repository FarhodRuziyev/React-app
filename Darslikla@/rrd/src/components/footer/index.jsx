import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <h1>footer</h1>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/user"}>Users</NavLink>
        </li>
      </ul>
    </div>
  );
}
