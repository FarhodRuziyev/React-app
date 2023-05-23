import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import aboutscss from "./about.module.scss";

export default function About() {
  const nav = useNavigate();
  const loc = useLocation();

  console.log(loc);

  useEffect(() => {
    if (loc?.pathname == "/about") {
      nav("/");
    }
  }, [loc.pathname]);

  return (
    <div className={aboutscss.abot}>
      <Link to={"/"}>home</Link>
      <button onClick={() => nav("/users")}>home</button>
      <h1>Hello About pages</h1>
    </div>
  );
}
