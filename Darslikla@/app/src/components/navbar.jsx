import { Link } from "react-router-dom";
import { useContext } from "react";
import { ModeContext } from "../state";
export default function Navbar() {
  const { mode, setMode } = useContext(ModeContext);
  console.log(mode);
  return (
    <>
      <ul>
        <li>
          <Link to={"/about"}>about</Link>
        </li>
        <li>
          <Link to={"/users"}>users</Link>
        </li>
        <li>
          <Link to={"/contact"}>contact</Link>
        </li>
      </ul>
      <button onClick={() => setMode(mode == "dark" ? "light" : "dark")}>
        {mode}
      </button>
    </>
  );
}
