import { Link, NavLink } from "react-router-dom";
import s from "./style.module.scss";



export default function Navbar() {
  return (
    <div className={s.nav}>
      <ul>
        <li>
          <NavLink to="/about">About </NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/products">PRODUCTS</NavLink>
        </li>
      </ul>
      {/* <Link to="/about">About </Link> */}

      {/* <Link to="/contacts">Contacts </Link> */}
    </div>
  );
}
